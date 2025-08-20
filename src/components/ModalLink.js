import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSave
} from '@fortawesome/free-solid-svg-icons';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoModal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--zIndexModal);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--sombraForte);
  border: 2px solid var(--corBordaPrimaria);
  position: relative;
  animation: scaleIn 0.3s ease-out;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`;

const Label = styled.label`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const Input = styled.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoGrande);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, var(--corSucesso) 0%, #45a049 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);
  flex: 1;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #45a049 0%, var(--corSucesso) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const CancelButton = styled.button`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const DeleteButton = styled.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
  color: var(--corErro);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corErro);
  font-size: var(--tamanhoFonteMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  color: var(--corSucesso);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corSucesso);
  font-size: var(--tamanhoFonteMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
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
          <CloseButton onClick={onClose} title="Fechar">
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>

        <Form>
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
            <ButtonGroup>
              <SaveButton
                onClick={handleSave}
                disabled={carregando}
              >
                <FontAwesomeIcon icon={faSave} />
                {carregando ? 'Salvando...' : 'Salvar'}
              </SaveButton>
              <CancelButton onClick={onClose} disabled={carregando}>
                {carregando ? 'Aguarde...' : 'Fechar'}
              </CancelButton>
            </ButtonGroup>
          )}
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalLink;