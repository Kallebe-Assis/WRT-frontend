import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSave,
  faTrash,
  faHeart,
  faStar
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

const ModalContent = styled.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
`;

const BotaoFechar = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--bordaRaioPequena);

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`;

const ModalBody = styled.div`
  padding: var(--espacamentoGrande);
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
`;

const Label = styled.label`
  display: block;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-family: inherit;
  resize: vertical;
  min-height: 200px;
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoMedia);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
  gap: var(--espacamentoMedio);
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const BotaoPrimario = styled(BotaoAcao)`
  background: var(--corPrimaria);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`;

const BotaoSecundario = styled(BotaoAcao)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover:not(:disabled) {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`;

const BotaoPerigo = styled(BotaoAcao)`
  background: var(--corErro);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`;

const BotaoFavorito = styled(BotaoAcao)`
  background: ${props => props.favorito ? '#FF6B6B' : 'var(--corFundoSecundaria)'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoPrimaria)'};
  border: 2px solid ${props => props.favorito ? '#FF6B6B' : 'var(--corBordaPrimaria)'};

  &:hover:not(:disabled) {
    background: ${props => props.favorito ? '#FF5252' : 'var(--corFundoTerciaria)'};
    border-color: ${props => props.favorito ? '#FF5252' : 'var(--corPrimaria)'};
  }
`;

const ModalItem = ({
  isVisible,
  item,
  modo,
  categorias = [],
  onSave,
  onDelete,
  onClose,
  carregando = false
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    conteudo: '',
    topico: '',
    categoria: ''
  });

  // Atualizar formData quando item mudar
  useEffect(() => {
    if (item) {
      setFormData({
        titulo: item.titulo || item.nome || '',
        conteudo: item.conteudo || '',
        topico: item.topico || '',
        categoria: item.categoria || ''
      });
    } else {
      setFormData({
        titulo: '',
        conteudo: '',
        topico: '',
        categoria: ''
      });
    }
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(item?.id, formData);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      onDelete(item?.id);
    }
  };

  const getTitulo = () => {
    switch (modo) {
      case 'novo':
        return 'Novo Item';
      case 'editar':
        return 'Editar Item';
      case 'visualizar':
        return 'Visualizar Item';
      default:
        return 'Item';
    }
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{getTitulo()}</ModalTitle>
          <BotaoFechar onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </BotaoFechar>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleInputChange}
                placeholder="Digite o título..."
                disabled={modo === 'visualizar'}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="conteudo">Conteúdo</Label>
              <Textarea
                id="conteudo"
                name="conteudo"
                value={formData.conteudo}
                onChange={handleInputChange}
                placeholder="Digite o conteúdo..."
                disabled={modo === 'visualizar'}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="topico">Tópico</Label>
              <Input
                id="topico"
                name="topico"
                type="text"
                value={formData.topico}
                onChange={handleInputChange}
                placeholder="Digite o tópico..."
                disabled={modo === 'visualizar'}
              />
            </FormGroup>

            {categorias.length > 0 && (
              <FormGroup>
                <Label htmlFor="categoria">Categoria</Label>
                <Select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.nome}>
                      {categoria.nome}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            )}
          </ModalBody>

          <ModalFooter>
            <div style={{ display: 'flex', gap: 'var(--espacamentoMedio)' }}>
              {modo !== 'visualizar' && (
                <BotaoPrimario type="submit" disabled={carregando}>
                  <FontAwesomeIcon icon={faSave} />
                  {item?.id ? 'Atualizar' : 'Salvar'}
                </BotaoPrimario>
              )}

              {modo === 'visualizar' && item?.id && (
                <BotaoFavorito
                  favorito={item.favorito}
                  onClick={() => {
                    // Implementar toggle de favorito
                    console.log('Toggle favorito:', item.id);
                  }}
                >
                  <FontAwesomeIcon icon={item.favorito ? faHeart : faStar} />
                  {item.favorito ? 'Favorito' : 'Favoritar'}
                </BotaoFavorito>
              )}
            </div>

            <div style={{ display: 'flex', gap: 'var(--espacamentoMedio)' }}>
              {modo !== 'visualizar' && item?.id && (
                <BotaoPerigo onClick={handleDelete} disabled={carregando}>
                  <FontAwesomeIcon icon={faTrash} />
                  Excluir
                </BotaoPerigo>
              )}

              <BotaoSecundario onClick={onClose} disabled={carregando}>
                Cancelar
              </BotaoSecundario>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalItem; 