import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSave, 
  faTrash, 
  faStar,
  faEye,
  faEdit,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import RichTextEditor from './RichTextEditor';

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  color: var(--corPrimaria);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoPequeno);
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ModalContainer = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  width: 95%;
  max-width: 1200px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all var(--transicaoRapida);
  animation: ${slideInUp} 0.4s ease-out;
  border: 2px solid var(--corPrimaria);
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 98%;
    height: 98vh;
    max-width: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
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
  animation: ${slideInDown} 0.5s ease-out 0.1s both;
`;

const ModalTitle = styled.h2`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corTextoPrimaria);
  margin: 0;
  animation: ${pulse} 2s ease-in-out infinite;
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
  position: relative;
  
  &:hover {
    background: ${props => props.variant === 'danger' ? 'var(--corErroHover)' : 
                       props.variant === 'secondary' ? 'var(--corFundoSecundaria)' : 
                       'var(--corSecundaria)'};
    transform: translateY(-2px);
    box-shadow: var(--sombraLeve);
  }

  &:active {
    transform: translateY(0);
  }

  ${props => props.loading && `
    pointer-events: none;
    opacity: 0.7;
  `}
`;

const ModalContent = styled.div`
  padding: var(--espacamentoGrande);
  flex: 1;
  overflow-y: auto;
  min-height: 600px;
  max-height: calc(95vh - 140px);
  animation: ${fadeIn} 0.6s ease-out 0.2s both;

  @media (max-width: 768px) {
    max-height: calc(98vh - 140px);
    padding: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    max-height: calc(100vh - 140px);
    padding: var(--espacamentoPequeno);
  }
`;

const ModalFooter = styled.div`
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-top: 2px solid var(--corBordaPrimaria);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--corFundoTerciaria);
  animation: ${slideInDown} 0.5s ease-out 0.3s both;
`;

const ModalFooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const ModalFooterInfo = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-style: italic;
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
  animation: ${fadeIn} 0.8s ease-out 0.4s both;
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
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoSecundaria);
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
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ModalNota = ({ 
  nota, 
  isOpen, 
  onClose, 
  onSave, 
  onDelete, 
  onToggleFavorite,
  categorias = [],
  topicos = []
}) => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [topico, setTopico] = useState('');
  const [favorita, setFavorita] = useState(false);
  const [loadingStates, setLoadingStates] = useState({
    save: false,
    delete: false,
    favorite: false
  });

  useEffect(() => {
    if (nota) {
      setTitulo(nota.titulo || '');
      setConteudo(nota.conteudo || '');
      setCategoria(nota.categoria || '');
      setTopico(nota.topico || '');
      setFavorita(nota.favorita || false);
    }
  }, [nota]);

  const setLoading = (action, loading) => {
    setLoadingStates(prev => ({
      ...prev,
      [action]: loading
    }));
  };

  const handleSave = async () => {
    if (!titulo.trim()) {
      alert('Por favor, insira um título para a nota.');
      return;
    }

    setLoading('save', true);
    try {
      await onSave({
        ...nota,
        titulo: titulo.trim(),
        conteudo,
        categoria,
        topico,
        favorita
      });
      onClose();
    } catch (error) {
      console.error('Erro ao salvar nota:', error);
      alert('Erro ao salvar nota. Tente novamente.');
    } finally {
      setLoading('save', false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja excluir esta nota?')) {
      return;
    }

    setLoading('delete', true);
    try {
      await onDelete(nota.id);
      onClose();
    } catch (error) {
      console.error('Erro ao excluir nota:', error);
      alert('Erro ao excluir nota. Tente novamente.');
    } finally {
      setLoading('delete', false);
    }
  };

  const handleToggleFavorite = async () => {
    setLoading('favorite', true);
    try {
      const novaFavorita = !favorita;
      setFavorita(novaFavorita);
      await onToggleFavorite(nota.id, novaFavorita);
    } catch (error) {
      console.error('Erro ao favoritar nota:', error);
      setFavorita(!favorita); // Reverter estado
      alert('Erro ao favoritar nota. Tente novamente.');
    } finally {
      setLoading('favorite', false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {nota ? 'Editar Nota' : 'Nova Nota'}
          </ModalTitle>
          <ModalActions>
            <ModalButton
              variant="secondary"
              onClick={handleToggleFavorite}
              loading={loadingStates.favorite}
              title={favorita ? "Desfavoritar" : "Favoritar"}
            >
              {loadingStates.favorite ? (
                <LoadingSpinner>
                  <FontAwesomeIcon icon={faSpinner} />
                </LoadingSpinner>
              ) : (
                <FontAwesomeIcon 
                  icon={faStar} 
                  style={{ color: favorita ? '#FFD700' : 'inherit' }}
                />
              )}
            </ModalButton>
            <ModalButton
              variant="danger"
              onClick={handleDelete}
              loading={loadingStates.delete}
              title="Excluir"
            >
              {loadingStates.delete ? (
                <LoadingSpinner>
                  <FontAwesomeIcon icon={faSpinner} />
                </LoadingSpinner>
              ) : (
                <FontAwesomeIcon icon={faTrash} />
              )}
            </ModalButton>
            <ModalButton
              variant="secondary"
              onClick={onClose}
              title="Fechar"
            >
              <FontAwesomeIcon icon={faTimes} />
            </ModalButton>
          </ModalActions>
        </ModalHeader>

        <ModalContent>
          <FormGroup>
            <Label htmlFor="titulo">Título *</Label>
            <Input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Digite o título da nota..."
              maxLength={100}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="categoria">Categoria</Label>
            <Select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((cat) => (
                <option key={cat.id || cat} value={cat.id || cat}>
                  {typeof cat === 'object' ? cat.nome : cat}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="topico">Tópico</Label>
            <Select
              id="topico"
              value={topico}
              onChange={(e) => setTopico(e.target.value)}
            >
              <option value="">Selecione um tópico</option>
              {topicos.map((top) => (
                <option key={top.id || top} value={top.id || top}>
                  {typeof top === 'object' ? top.nome : top}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="conteudo">Conteúdo</Label>
            <RichTextEditor
              value={conteudo}
              onChange={setConteudo}
              placeholder="Digite o conteúdo da nota..."
            />
          </FormGroup>
        </ModalContent>

        <ModalFooter>
          <ModalFooterInfo>
            {nota ? `Editando nota criada em ${new Date(nota.createdAt || Date.now()).toLocaleDateString()}` : 'Criando nova nota'}
          </ModalFooterInfo>
          <ModalFooterActions>
            <ModalButton
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </ModalButton>
            <ModalButton
              onClick={handleSave}
              loading={loadingStates.save}
            >
              {loadingStates.save ? (
                <LoadingSpinner>
                  <FontAwesomeIcon icon={faSpinner} />
                </LoadingSpinner>
              ) : (
                <FontAwesomeIcon icon={faSave} />
              )}
              Salvar
            </ModalButton>
          </ModalFooterActions>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalNota;