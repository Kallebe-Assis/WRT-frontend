import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSave,
  faTrash,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import RichTextEditor from './RichTextEditor';
import FullFormattedContent from './FullFormattedContent';
import { notasAPI } from '../config/api';

// Animação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

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
  width: 95%;
  height: 95vh;
  max-width: 1400px;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const BotaoHeader = styled.button`
  background: transparent;
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  padding: 4px 10px;
  border-radius: var(--bordaRaioPequena);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
    border-color: var(--corPrimaria);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BotaoSalvar = styled(BotaoHeader)`
  background: var(--corPrimaria);
  color: white;
  border-color: var(--corPrimaria);

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    color: white;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const BotaoExcluir = styled(BotaoHeader)`
  color: #e74c3c;
  border-color: #e74c3c;

  &:hover {
    background: #e74c3c;
    color: white;
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--corTextoPrimaria);
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
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormGroupConteudo = styled.div`
  margin-bottom: var(--espacamentoMedio);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

const FormRow = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`;

const FormGroupTitulo = styled.div`
  flex: 1;
  margin-bottom: var(--espacamentoMedio);
`;

const FormGroupTopico = styled.div`
  width: 200px;
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
  min-height: 400px;
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

const AutoSaveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--corTextoSecundaria);
  margin-right: var(--espacamentoMedio);
  
  .auto-save-icon {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.isSaving ? '#ffa500' : props.hasChanges ? '#4CAF50' : '#ccc'};
    animation: ${props => props.isSaving ? 'pulse 1s infinite' : 'none'};
  }
  
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
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
  carregando = false,
  onFavoritarItem
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    conteudo: '',
    topico: ''
  });

  // Sistema de auto-save
  const [hasChanges, setHasChanges] = useState(false);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const autoSaveTimerRef = useRef(null);
  const lastSavedDataRef = useRef(null);

  // Atualizar formData quando item mudar
  useEffect(() => {
    if (item) {
      const newFormData = {
        titulo: item.titulo || item.nome || '',
        conteudo: item.conteudo || '',
        topico: item.topico || item.categoria || ''
      };
      setFormData(newFormData);
      lastSavedDataRef.current = JSON.stringify(newFormData);
      setHasChanges(false);
    } else {
      setFormData({
        titulo: '',
        conteudo: '',
        topico: ''
      });
      lastSavedDataRef.current = null;
      setHasChanges(false);
    }
  }, [item]);

  // Função para detectar mudanças
  const detectChanges = (newFormData) => {
    const currentData = JSON.stringify(newFormData);
    const hasChanges = currentData !== lastSavedDataRef.current;
    setHasChanges(hasChanges);
    return hasChanges;
  };

  // Função de auto-save
  const performAutoSave = async (isManual = false) => {
    if (!hasChanges || !item?.id || modo !== 'editar') return;

    try {
      setIsAutoSaving(true);
      console.log(isManual ? 'Save manual executando...' : 'Auto-save executando...');
      
      if (isManual) {
        // Save manual - usa onSave e fecha modal
        if (onSave) {
          console.log('Save manual: Iniciando...');
          await onSave(item.id, formData);
          console.log('Save manual: Concluído!');
          lastSavedDataRef.current = JSON.stringify(formData);
          setHasChanges(false);
          console.log('Save manual concluído!');
          onClose();
        }
      } else {
        // Auto-save - chama API diretamente sem fechar modal
        try {
          console.log('Auto-save: Iniciando chamada para API...');
          console.log('Auto-save: Dados a serem salvos:', formData);
          console.log('Auto-save: ID da nota:', item.id);
          
          // Verificar se os dados estão no formato correto
          const dadosParaSalvar = {
            titulo: formData.titulo,
            conteudo: formData.conteudo,
            topico: formData.topico,
            categoria: formData.topico // Adicionar categoria se necessário
          };
          
          console.log('Auto-save: Dados formatados:', dadosParaSalvar);
          
          const resultado = await notasAPI.atualizar(item.id, dadosParaSalvar);
          console.log('Auto-save: Resposta da API:', resultado);
          
          lastSavedDataRef.current = JSON.stringify(formData);
          setHasChanges(false);
          console.log('Auto-save concluído com sucesso!');
        } catch (apiError) {
          console.error('Erro no auto-save API:', apiError);
          console.error('Detalhes do erro:', apiError.message);
        }
      }
    } catch (error) {
      console.error('Erro no save:', error);
    } finally {
      setIsAutoSaving(false);
    }
  };

  // Timer de auto-save
  useEffect(() => {
    if (hasChanges && modo === 'editar' && item?.id) {
      // Limpar timer anterior
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }

      // Configurar novo timer
      autoSaveTimerRef.current = setTimeout(() => {
        performAutoSave(false); // Auto-save não fecha o modal
      }, 3000); // 3 segundos
    }

    // Cleanup ao desmontar
    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [hasChanges, formData, modo, item?.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value
    };
    setFormData(newFormData);
    detectChanges(newFormData);
  };

  const handleContentChange = (content) => {
    const newFormData = {
      ...formData,
      conteudo: content
    };
    setFormData(newFormData);
    detectChanges(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      if (hasChanges) {
        // Forçar save manual que fecha o modal
        performAutoSave(true);
      } else {
        // Se não há mudanças, apenas fecha o modal
        onClose();
      }
    }
  };

  // Função para fechar modal com atualização
  const handleClose = () => {
    // Se há mudanças salvas pelo auto-save, forçar atualização
    if (!hasChanges && lastSavedDataRef.current) {
      console.log('Fechando modal com dados atualizados pelo auto-save');
      // Forçar uma atualização da lista de notas
      if (onSave) {
        // Chama onSave silenciosamente para atualizar a lista
        onSave(item?.id, formData);
      }
    }
    
    // Se há mudanças não salvas, perguntar se quer salvar
    if (hasChanges) {
      const confirmar = window.confirm('Há alterações não salvas. Deseja salvar antes de fechar?');
      if (confirmar) {
        performAutoSave(true); // Save manual que fecha o modal
        return;
      }
    }
    
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      onDelete(item?.id);
    }
  };

  const handleToggleFavorito = () => {
    if (onFavoritarItem && item) {
      onFavoritarItem(item.id);
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
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            <HeaderLeft>
              <ModalTitle>{getTitulo()}</ModalTitle>
              <BotaoFechar onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
              </BotaoFechar>
            </HeaderLeft>
            <HeaderRight>
              {modo === 'editar' && item?.id && (
                <AutoSaveIndicator 
                  hasChanges={hasChanges} 
                  isSaving={isAutoSaving}
                >
                  <div className="auto-save-icon"></div>
                  {isAutoSaving ? 'Salvando...' : hasChanges ? 'Alterações não salvas' : 'Salvo'}
                </AutoSaveIndicator>
              )}

              {modo !== 'visualizar' && (
                <BotaoSalvar type="submit" disabled={carregando}>
                  {carregando ? (
                    <Spinner />
                  ) : (
                    <FontAwesomeIcon icon={faSave} />
                  )}
                  {item?.id ? 'Atualizar' : 'Salvar'}
                </BotaoSalvar>
              )}

              {modo === 'visualizar' && item?.id && (
                <BotaoFavorito
                  favorito={item.favorito}
                  onClick={handleToggleFavorito}
                >
                  <FontAwesomeIcon icon={item.favorito ? faHeart : faStar} />
                  {item.favorito ? 'Favorito' : 'Favoritar'}
                </BotaoFavorito>
              )}

              {modo !== 'visualizar' && item?.id && (
                <BotaoExcluir onClick={handleDelete} disabled={carregando}>
                  <FontAwesomeIcon icon={faTrash} />
                  Excluir
                </BotaoExcluir>
              )}

              <BotaoHeader onClick={handleClose} disabled={carregando}>
                Cancelar
              </BotaoHeader>
            </HeaderRight>
          </ModalHeader>

          <ModalBody>
            <FormRow>
              <FormGroupTitulo>
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
              </FormGroupTitulo>
              <FormGroupTopico>
                <Label htmlFor="topico">Tópico</Label>
                <Select
                  id="topico"
                  name="topico"
                  value={formData.topico}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                >
                  <option value="">Selecione um tópico</option>
                  {(() => {
                    if (Array.isArray(categorias)) {
                      return categorias.map((categoria, index) => {
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
                      });
                    }
                    return null;
                  })()}
                </Select>
              </FormGroupTopico>
            </FormRow>

            <FormGroupConteudo>
              <Label htmlFor="conteudo">Conteúdo</Label>
              {modo === 'visualizar' ? (
                <FullFormattedContent content={formData.conteudo} />
              ) : (
                <RichTextEditor
                  key={`editor-${item?.id || 'new'}-${modo}`}
                  value={formData.conteudo}
                  onChange={handleContentChange}
                  disabled={modo === 'visualizar'}
                />
              )}
            </FormGroupConteudo>

            {/* Removido o campo de categoria duplicado - agora o campo topico é o select de categorias */}
          </ModalBody>

          <ModalFooter>
            {/* Botões movidos para o ModalHeader */}
          </ModalFooter>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalItem; 