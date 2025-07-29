import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSave, 
  faTrash, 
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

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
  max-width: 600px;
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
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: inherit;
  resize: vertical;
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
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
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ModalLink = ({ 
  isVisible, 
  link, 
  modo = 'editar',
  categorias = [], 
  onSave, 
  onDelete, 
  onClose,
  carregando = false 
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    url: '',
    imagemUrl: ''
  });

  useEffect(() => {
    if (link) {
      setFormData({
        nome: link.nome || '',
        url: link.url || '',
        imagemUrl: link.imagemUrl || ''
      });
    } else {
      setFormData({
        nome: '',
        url: '',
        imagemUrl: ''
      });
    }
  }, [link]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Validar campos obrigatórios
    if (!formData.nome || !formData.url) {
      alert('Nome e URL são obrigatórios');
      return;
    }

    // Validar formato da URL
    try {
      new URL(formData.url);
    } catch {
      alert('URL inválida. Digite uma URL válida (ex: https://exemplo.com)');
      return;
    }

    // Validar formato da imagemUrl se fornecida
    if (formData.imagemUrl) {
      try {
        new URL(formData.imagemUrl);
      } catch {
        alert('URL da imagem inválida. Digite uma URL válida ou deixe em branco.');
        return;
      }
    }

    onSave(formData);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este link?')) {
      onDelete(link?.id);
    }
  };

  const handleOpenLink = () => {
    if (formData.url) {
      window.open(formData.url, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {link ? (modo === 'visualizar' ? 'Visualizar Link' : 'Editar Link') : 'Novo Link'}
          </ModalTitle>
          <ModalActions>
            {link && (
              <>
                <ModalButton
                  variant="secondary"
                  onClick={handleOpenLink}
                  title="Abrir link"
                  disabled={!formData.url}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Abrir
                </ModalButton>
                <ModalButton
                  variant="danger"
                  onClick={handleDelete}
                  title="Excluir link"
                >
                  <FontAwesomeIcon icon={faTrash} />
                  Excluir
                </ModalButton>
              </>
            )}
            <ModalButton
              variant="secondary"
              onClick={onClose}
              title="Fechar"
            >
              <FontAwesomeIcon icon={faTimes} />
              Fechar
            </ModalButton>
          </ModalActions>
        </ModalHeader>

        <ModalContent>
          <FormGroup>
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite o nome do link..."
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              disabled={modo === 'visualizar'}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="url">URL *</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://exemplo.com"
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              disabled={modo === 'visualizar'}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="imagemUrl">URL da Imagem</Label>
            <Input
              id="imagemUrl"
              type="url"
              placeholder="https://exemplo.com/imagem.jpg"
              value={formData.imagemUrl || ''}
              onChange={(e) => handleInputChange('imagemUrl', e.target.value)}
              disabled={modo === 'visualizar'}
            />
            <small style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)' }}>
              URL opcional para uma imagem de preview do link
            </small>
          </FormGroup>

          {modo === 'editar' && (
            <ModalActions style={{ justifyContent: 'flex-end', marginTop: 'var(--espacamentoMedio)' }}>
              <ModalButton
                onClick={handleSave}
                disabled={carregando}
              >
                <FontAwesomeIcon icon={faSave} />
                {carregando ? 'Salvando...' : 'Salvar'}
              </ModalButton>
            </ModalActions>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalLink;