import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faEdit, 
  faTrash, 
  faStar,
  faEye,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import RichTextEditor from './RichTextEditor';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`;

const ModalContainer = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 2px solid var(--corBordaPrimaria);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--corFundoTerciaria);
`;

const ModalTitle = styled.h2`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corTextoPrimaria);
  margin: 0;
`;

const ModalActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const ModalButton = styled.button`
  background: ${props => props.variant === 'danger' ? 'var(--corErro)' : 
                       props.variant === 'secondary' ? 'var(--corFundoTerciaria)' : 
                       'var(--corPrimaria)'};
  color: ${props => props.variant === 'secondary' ? 'var(--corTextoPrimaria)' : 'white'};
  border: 2px solid ${props => props.variant === 'secondary' ? 'var(--corBordaPrimaria)' : 'transparent'};
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: ${props => props.variant === 'danger' ? 'var(--corErroHover)' : 
                       props.variant === 'secondary' ? 'var(--corFundoSecundaria)' : 
                       'var(--corSecundaria)'};
    transform: translateY(-1px);
  }
`;

const ModalContent = styled.div`
  padding: var(--espacamentoGrande);
  flex: 1;
  overflow-y: auto;
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--espacamentoPequeno);
  font-weight: 600;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
  
  &:disabled {
    background: var(--corFundoTerciaria);
    color: var(--corTextoSecundaria);
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
  
  &:disabled {
    background: var(--corFundoTerciaria);
    color: var(--corTextoSecundaria);
    cursor: not-allowed;
  }
`;

const FavoriteButton = styled.button`
  background: ${props => props.favorito ? 
    'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)' : 
    'linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoSecundaria)'};
  border: 1px solid ${props => props.favorito ? '#ff6b6b' : 'var(--corBordaPrimaria)'};
  border-radius: var(--bordaRaioMedia);
  padding: 8px 12px;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  
  &:hover {
    background: ${props => props.favorito ? 
      'linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%)' : 
      'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)'};
    color: white;
    border-color: ${props => props.favorito ? '#ee5a52' : 'var(--corPrimaria)'};
    transform: translateY(-1px);
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MetaLabel = styled.span`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  font-weight: 500;
`;

const MetaValue = styled.span`
  font-size: var(--tamanhoFonteMedia);
  color: var(--corTextoPrimaria);
  font-weight: 600;
`;

const ModalVisualizar = ({ 
  visivel, 
  item, 
  tipo, 
  onFechar, 
  onEditar, 
  onExcluir,
  onCopiar,
  categorias = [],
  onToggleFavorite
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    conteudo: '',
    topico: '',
    favorito: false
  });

  useEffect(() => {
    if (item) {
      setFormData({
        titulo: item.titulo || '',
        conteudo: item.conteudo || '',
        topico: item.topico || '',
        favorito: item.favorito || false
      });
    }
  }, [item]);

  const handleCopiar = async () => {
    if (!item) return;
    
    const textoParaCopiar = `${item.titulo}\n\n${item.conteudo.replace(/<[^>]*>/g, '')}`;
    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      if (onCopiar) {
        onCopiar('Conteúdo copiado para a área de transferência!');
      }
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(item.id);
    }
  };

  if (!visivel || !item) return null;

  return (
    <ModalOverlay onClick={onFechar}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Visualizar Nota</ModalTitle>
          <ModalActions>
            <ModalButton onClick={handleCopiar}>
              <FontAwesomeIcon icon={faCopy} />
              Copiar
            </ModalButton>
            <ModalButton onClick={onEditar}>
              <FontAwesomeIcon icon={faEdit} />
              Editar
            </ModalButton>
            <ModalButton variant="danger" onClick={onExcluir}>
              <FontAwesomeIcon icon={faTrash} />
              Excluir
            </ModalButton>
            <ModalButton variant="secondary" onClick={onFechar}>
              <FontAwesomeIcon icon={faTimes} />
            </ModalButton>
          </ModalActions>
        </ModalHeader>
        
        <ModalContent>
          <MetaInfo>
            <MetaItem>
              <MetaLabel>Favorito</MetaLabel>
              <FavoriteButton
                favorito={formData.favorito}
                onClick={handleToggleFavorite}
              >
                <FontAwesomeIcon icon={faStar} />
                {formData.favorito ? 'Favorito' : 'Favoritar'}
              </FavoriteButton>
            </MetaItem>
            
            <MetaItem>
              <MetaLabel>Data de Criação</MetaLabel>
              <MetaValue>
                {item.dataCriacao ? new Date(item.dataCriacao).toLocaleDateString('pt-BR') : 'N/A'}
              </MetaValue>
            </MetaItem>
            
            <MetaItem>
              <MetaLabel>Última Modificação</MetaLabel>
              <MetaValue>
                {item.dataModificacao ? new Date(item.dataModificacao).toLocaleDateString('pt-BR') : 'N/A'}
              </MetaValue>
            </MetaItem>
          </MetaInfo>

          <FormGroup>
            <Label>Título</Label>
            <Input
              type="text"
              value={formData.titulo}
              disabled
              placeholder="Título da nota"
            />
          </FormGroup>

          <FormGroup>
            <Label>Tópico</Label>
            <Select
              value={formData.topico}
              disabled
            >
              <option value="">Selecione um tópico</option>
              {categorias.map(categoria => (
                <option key={categoria.id} value={categoria.nome}>
                  {categoria.nome}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Conteúdo</Label>
            <div style={{ 
              border: '2px solid var(--corBordaPrimaria)', 
              borderRadius: 'var(--bordaRaioMedia)',
              padding: 'var(--espacamentoMedio)',
              background: 'var(--corFundoPrimaria)',
              minHeight: '300px',
              color: 'var(--corTextoPrimaria)',
              lineHeight: '1.6'
            }}>
              <div dangerouslySetInnerHTML={{ __html: formData.conteudo }} />
            </div>
          </FormGroup>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalVisualizar; 