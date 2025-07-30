import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSave, 
  faTrash, 
  faStar,
  faEye,
  faEdit
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
  transition: all var(--transicaoRapida);
`;

const ModalHeader = styled.div`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 2px solid var(--corBordaPrimaria);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--corFundoTerciaria);
  position: sticky;
  top: 0;
  z-index: 10;
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
  min-height: 500px;
  max-height: calc(90vh - 120px);
`;

const ModalFooter = styled.div`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-top: 2px solid var(--corBordaPrimaria);
  background: var(--corFundoTerciaria);
  position: sticky;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  gap: var(--espacamentoPequeno);
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
  min-height: 200px;
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

const ModalNota = ({ 
  isVisible, 
  nota, 
  categorias = [], 
  onSave, 
  onDelete, 
  onClose,
  onToggleFavorite,
  carregando = false 
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    conteudo: '',
    categoria: '',
    favorito: false
  });

  const [modo, setModo] = useState('editar'); // 'editar' ou 'visualizar'

  useEffect(() => {
    if (nota) {
      setFormData({
        titulo: nota.titulo || '',
        conteudo: nota.conteudo || '',
        categoria: nota.categoria || '',
        favorito: nota.favorito || false
      });
    } else {
      setFormData({
        titulo: '',
        conteudo: '',
        categoria: '',
        favorito: false
      });
    }
  }, [nota]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (!formData.titulo.trim()) {
      alert('O título é obrigatório');
      return;
    }
    
    if (!formData.conteudo.trim()) {
      alert('O conteúdo é obrigatório');
      return;
    }

    onSave(nota?.id, formData);
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta nota?')) {
      onDelete(nota?.id);
    }
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(nota?.id);
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {nota ? (modo === 'visualizar' ? 'Visualizar Nota' : 'Editar Nota') : 'Nova Nota'}
          </ModalTitle>
          <ModalActions>
            {nota && (
              <>
                <ModalButton
                  variant="secondary"
                  onClick={() => setModo(modo === 'visualizar' ? 'editar' : 'visualizar')}
                  title={modo === 'visualizar' ? 'Editar' : 'Visualizar'}
                >
                  <FontAwesomeIcon icon={modo === 'visualizar' ? faEdit : faEye} />
                  {modo === 'visualizar' ? 'Editar' : 'Visualizar'}
                </ModalButton>
                <ModalButton
                  variant="secondary"
                  onClick={handleToggleFavorite}
                  title={formData.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <FontAwesomeIcon 
                    icon={faStar} 
                    style={{ color: formData.favorito ? '#FFD700' : 'inherit' }}
                  />
                </ModalButton>
                <ModalButton
                  variant="danger"
                  onClick={handleDelete}
                  title="Excluir nota"
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
            <Label htmlFor="titulo">Título *</Label>
            <Input
              id="titulo"
              type="text"
              placeholder="Digite o título da nota..."
              value={formData.titulo}
              onChange={(e) => handleInputChange('titulo', e.target.value)}
              disabled={modo === 'visualizar'}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="categoria">Categoria</Label>
            <Select
              id="categoria"
              value={formData.categoria}
              onChange={(e) => handleInputChange('categoria', e.target.value)}
              disabled={modo === 'visualizar'}
            >
              <option value="">Selecione uma categoria...</option>
              {Array.isArray(categorias) && categorias.map((categoria) => {
                if (typeof categoria === 'object' && categoria.nome) {
                  return (
                    <option key={categoria.id || categoria.nome} value={categoria.nome}>
                      {categoria.nome}
                    </option>
                  );
                }
                if (typeof categoria === 'string') {
                  return (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  );
                }
                return null;
              })}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="conteudo">Conteúdo *</Label>
            <RichTextEditor
              value={formData.conteudo}
              onChange={(content) => handleInputChange('conteudo', content)}
              placeholder="Digite o conteúdo da nota..."
              height="auto"
              showHeader={false}
              disabled={modo === 'visualizar'}
            />
          </FormGroup>
        </ModalContent>

        {modo === 'editar' && (
          <ModalFooter>
            <ModalButton
              onClick={handleSave}
              disabled={carregando}
            >
              <FontAwesomeIcon icon={faSave} />
              {carregando ? 'Salvando...' : 'Salvar'}
            </ModalButton>
          </ModalFooter>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalNota;