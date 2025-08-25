import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faSave,
  faTrash,
  faHeart,
  faStar,
  faEdit,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import TiptapEditor from './TiptapEditor';
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
  width: 100vw;
  height: 100vh;
  background: var(--corFundoSecundaria);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--corFundoSecundaria);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100vh;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-bottom: 1px solid var(--corBordaPrimaria);
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 50px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4px 8px;
    height: 45px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    height: auto;
    min-height: 40px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BotaoHeader = styled.button`
  background: transparent;
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  padding: 6px 12px;
  border-radius: var(--bordaRaioPequena);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;

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
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 700;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    text-align: center;
  }
`;

const BotaoFechar = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: var(--bordaRaioPequena);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`;

const ModalBody = styled.div`
  padding: var(--espacamentoGrande);
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  max-height: calc(100vh - 50px);
  scrollbar-width: thin;
  scrollbar-color: var(--corBordaPrimaria) transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--corBordaPrimaria);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--corPrimaria);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoMedio);
    max-height: calc(100vh - 45px);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    max-height: calc(100vh - 40px);
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoGrande);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    margin-bottom: var(--espacamentoPequeno);
  }
`;

const FormGroupConteudo = styled.div`
  margin-bottom: var(--espacamentoMedio);
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  
  > div {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoPequeno);
  flex-shrink: 0;
`;

const FormGroupTitulo = styled.div`
  flex: 1;
  margin-bottom: var(--espacamentoPequeno);
  flex-shrink: 0;
`;

const FormGroupTopico = styled.div`
  width: 200px;
  margin-bottom: var(--espacamentoPequeno);
  flex-shrink: 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFontePequena);
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoPequeno);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  height: 36px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    height: 32px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    height: 30px;
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
  transition: all var(--transicaoMedia);
  resize: vertical;
  min-height: 350px;
  max-height: 50vh;
  font-family: inherit;
  overflow-y: auto;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-height: 250px;
    max-height: 40vh;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    min-height: 200px;
    max-height: 35vh;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--espacamentoPequeno);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoMedia);
  height: 36px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    height: 32px;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
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

const BotaoFavorito = styled(BotaoHeader)`
  background: ${props => props.favorito ? '#FF6B6B' : 'transparent'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoSecundaria)'};
  border-color: ${props => props.favorito ? '#FF6B6B' : 'var(--corBordaPrimaria)'};

  &:hover:not(:disabled) {
    background: ${props => props.favorito ? '#FF5252' : 'var(--corFundoHover)'};
    border-color: ${props => props.favorito ? '#FF5252' : 'var(--corPrimaria)'};
    color: ${props => props.favorito ? 'white' : 'var(--corTextoPrimaria)'};
  }
`;

const AutoSaveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.65rem;
  color: var(--corTextoSecundaria);
  margin-right: 8px;
  
  .auto-save-icon {
    width: 5px;
    height: 5px;
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
  onAutoSave, // Nova prop para auto-save
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

  // Estado local para alternar entre visualização e edição
  const [modoLocal, setModoLocal] = useState(modo);

  // Atualizar modo local quando o modo prop mudar
  useEffect(() => {
    setModoLocal(modo);
  }, [modo]);

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
    // Para notas novas, considerar mudanças se há conteúdo
    if (modoLocal === 'novo' || !item?.id) {
      const temConteudo = newFormData.titulo?.trim() || newFormData.conteudo?.trim();
      setHasChanges(!!temConteudo);
      return !!temConteudo;
    }

    // Para notas existentes, comparar com dados originais
    // Comparar apenas título e tópico com JSON, mas conteúdo com normalização
    const originalData = lastSavedDataRef.current ? JSON.parse(lastSavedDataRef.current) : null;
    
    if (!originalData) {
      setHasChanges(true);
      return true;
    }

    // Comparar título e tópico
    const tituloChanged = newFormData.titulo !== originalData.titulo;
    const topicoChanged = newFormData.topico !== originalData.topico;
    
    // Para o conteúdo, normalizar HTML antes de comparar
    const normalizeContent = (content) => {
      if (!content) return '';
      // Remover espaços extras e quebras de linha desnecessárias
      return content.replace(/\s+/g, ' ').trim();
    };
    
    const conteudoChanged = normalizeContent(newFormData.conteudo) !== normalizeContent(originalData.conteudo);
    
    const hasChanges = tituloChanged || topicoChanged || conteudoChanged;
    
    console.log('🔍 Detecção de mudanças:', {
      tituloChanged,
      topicoChanged,
      conteudoChanged,
      hasChanges,
      originalTitulo: originalData.titulo,
      newTitulo: newFormData.titulo,
      originalTopico: originalData.topico,
      newTopico: newFormData.topico,
      originalConteudoLength: originalData.conteudo?.length,
      newConteudoLength: newFormData.conteudo?.length
    });
    
    setHasChanges(hasChanges);
    return hasChanges;
  };

  // Função de auto-save
  const performAutoSave = useCallback(async (isManual = false) => {
    console.log(`🔧 performAutoSave chamado - isManual: ${isManual}`);
    
    if (!onSave && !onAutoSave) {
      console.log('❌ Nenhuma função de save disponível');
      return;
    }
    
    try {
      setIsAutoSaving(true);
      console.log(`💾 Executando ${isManual ? 'save manual' : 'auto-save'}...`);
      
      // Usar função apropriada baseada no tipo de save
      if (isManual) {
        // Save manual - usar onSave
        if (onSave) {
          await onSave(item?.id, formData);
        }
      } else {
        // Auto-save - usar onAutoSave se disponível, senão onSave
        if (onAutoSave) {
          await onAutoSave(item?.id, formData);
        } else if (onSave) {
          await onSave(item?.id, formData);
        }
      }
      
      // Atualizar referência dos dados salvos
      lastSavedDataRef.current = JSON.stringify(formData);
      setHasChanges(false);
      
      console.log(`✅ ${isManual ? 'Save manual' : 'Auto-save'} concluído com sucesso`);
      
      // Se for save manual (botão Atualizar clicado), fechar modal
      if (isManual) {
        console.log('🚪 Save manual concluído, fechando modal...');
        onClose();
      } else {
        console.log('🔄 Auto-save concluído, modal permanece aberto');
      }
    } catch (error) {
      console.error('Erro no auto-save:', error);
      
      // Se for erro de API, tentar obter detalhes
      if (error.response) {
        const apiError = error.response.data;
        console.error('Detalhes do erro:', apiError.message);
      }
    } finally {
      setIsAutoSaving(false);
    }
  }, [onSave, onAutoSave, item?.id, formData, onClose]);

  // Timer de auto-save (apenas para notas existentes)
  useEffect(() => {
    console.log(`🕐 useEffect auto-save - hasChanges: ${hasChanges}, modoLocal: ${modoLocal}, itemId: ${item?.id}`);
    
    if (hasChanges && modoLocal === 'editar' && item?.id) {
      console.log('⏰ Configurando timer de auto-save...');
      
      // Limpar timer anterior
      if (autoSaveTimerRef.current) {
        console.log('🧹 Limpando timer anterior');
        clearTimeout(autoSaveTimerRef.current);
      }

      // Configurar novo timer
      autoSaveTimerRef.current = setTimeout(() => {
        console.log('⏰ Timer de auto-save disparado - salvando sem fechar modal');
        performAutoSave(false); // Auto-save NUNCA fecha o modal
      }, 3000); // 3 segundos
    } else {
      console.log('⏰ Condições não atendidas para auto-save');
    }

    // Cleanup ao desmontar
    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [hasChanges, modoLocal, item?.id, formData.titulo, formData.conteudo, formData.topico, performAutoSave]);

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

  const handleSubmit = () => {
    console.log('Botão Atualizar clicado - executando save manual');
    
    // Sempre salvar quando o usuário clica em Atualizar
    if (onSave) {
      console.log('Salvando nota...');
      performAutoSave(true); // Save manual que fecha o modal
    }
  };

  // Função para fechar modal - APENAS quando usuário clica explicitamente
  const handleClose = () => {
    console.log('Função handleClose chamada - usuário clicou explicitamente');
    
    // Para notas novas, sempre perguntar se quer salvar se há conteúdo
    if (modoLocal === 'novo' || !item?.id) {
      const temConteudo = formData.titulo?.trim() || formData.conteudo?.trim();
      if (temConteudo) {
        const confirmar = window.confirm('Deseja salvar esta nota antes de fechar?');
        if (confirmar) {
          console.log('Usuário confirmou salvar antes de fechar');
          performAutoSave(true); // Save manual que fecha o modal
          return;
        }
      }
    } else {
      // Para notas existentes, perguntar se quer salvar se há mudanças
      if (hasChanges) {
        const confirmar = window.confirm('Há alterações não salvas. Deseja salvar antes de fechar?');
        if (confirmar) {
          console.log('Usuário confirmou salvar alterações antes de fechar');
          performAutoSave(true); // Save manual que fecha o modal
          return;
        }
      }
    }
    
    console.log('Fechando modal sem salvar');
    onClose();
  };

  const handleDelete = () => {
    if (onDelete && item?.id) {
      const confirmar = window.confirm('Tem certeza que deseja excluir este item?');
      if (confirmar) {
        onDelete(item.id);
      }
    }
  };

  const handleToggleFavorito = () => {
    if (onFavoritarItem && item?.id) {
      onFavoritarItem(item.id);
    }
  };

  // Função para alternar entre visualização e edição
  const handleToggleModo = () => {
    setModoLocal(modoLocal === 'visualizar' ? 'editar' : 'visualizar');
  };

  const getTitulo = () => {
    if (!item) return 'Novo Item';
    
    switch (modoLocal) {
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
    <ModalOverlay>
      <ModalContent>
        <div>
          <ModalHeader>
            <HeaderLeft>
              <ModalTitle>{getTitulo()}</ModalTitle>
              <BotaoFechar onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
              </BotaoFechar>
            </HeaderLeft>
            <HeaderRight>
              {/* Botão para alternar entre visualização e edição */}
              {item?.id && (
                <BotaoHeader onClick={handleToggleModo} disabled={carregando}>
                  <FontAwesomeIcon icon={modoLocal === 'visualizar' ? faEdit : faEye} />
                  {modoLocal === 'visualizar' ? 'Editar' : 'Visualizar'}
                </BotaoHeader>
              )}

              {modoLocal === 'editar' && item?.id && (
                <AutoSaveIndicator 
                  hasChanges={hasChanges} 
                  isSaving={isAutoSaving}
                >
                  <div className="auto-save-icon"></div>
                  {isAutoSaving ? 'Salvando...' : hasChanges ? 'Alterações não salvas' : 'Salvo'}
                </AutoSaveIndicator>
              )}

              {modoLocal !== 'visualizar' && (
                <BotaoSalvar onClick={handleSubmit} disabled={carregando}>
                  {carregando ? (
                    <Spinner />
                  ) : (
                    <FontAwesomeIcon icon={faSave} />
                  )}
                  {item?.id ? 'Atualizar' : 'Salvar'}
                </BotaoSalvar>
              )}

              {modoLocal === 'visualizar' && item?.id && (
                <BotaoFavorito
                  favorito={item.favorito}
                  onClick={handleToggleFavorito}
                >
                  <FontAwesomeIcon icon={item.favorito ? faHeart : faStar} />
                  {item.favorito ? 'Favorito' : 'Favoritar'}
                </BotaoFavorito>
              )}

              {modoLocal !== 'visualizar' && item?.id && (
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
                  disabled={modoLocal === 'visualizar'}
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
                  disabled={modoLocal === 'visualizar'}
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
              {modoLocal === 'visualizar' ? (
                <FullFormattedContent content={formData.conteudo} />
              ) : (
                <TiptapEditor
                  key={`editor-${item?.id || 'new'}-${modoLocal}`}
                  value={formData.conteudo}
                  onChange={handleContentChange}
                  disabled={modoLocal === 'visualizar'}
                />
              )}
            </FormGroupConteudo>

            {/* Removido o campo de categoria duplicado - agora o campo topico é o select de categorias */}
          </ModalBody>


        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalItem; 