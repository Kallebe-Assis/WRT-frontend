import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faDatabase, 
  faSync, 
  faTrash, 
  faShieldAlt,
  faTags,
  faPlus,
  faEdit,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { categoriasAPI } from '../config/api';

const Container = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 800px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
`;

const Secao = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
  border: 1px solid var(--corBorda);
`;

const SecaoTitulo = styled.h2`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const Botao = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-radius: var(--bordaRaioPequena);
  cursor: pointer;
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);

  &:hover {
    background: var(--corPrimariaHover);
  }

  &:disabled {
    background: var(--corDesabilitada);
    cursor: not-allowed;
  }
`;

const BotaoSecundario = styled(Botao)`
  background: var(--corSecundaria);
  
  &:hover {
    background: var(--corSecundariaHover);
  }
`;

const BotaoPerigo = styled(Botao)`
  background: var(--corPerigo);
  
  &:hover {
    background: var(--corPerigoHover);
  }
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioPequena);
  margin-bottom: var(--espacamentoMedio);
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatusLabel = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`;

const StatusValue = styled.span`
  color: var(--corTextoPrimaria);
  font-weight: 500;
`;

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.status === 'online' ? 'var(--corSucesso)' : 'var(--corPerigo)'};
`;

const CategoriasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoMedio);
`;

const CategoriaCard = styled.div`
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  position: relative;
`;

const CategoriaCor = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.cor};
  border-radius: var(--bordaRaioPequena);
  margin-bottom: var(--espacamentoMedio);
`;

const CategoriaNome = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  margin-bottom: var(--espacamentoPequeno);
`;

const CategoriaAcoes = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  margin-top: var(--espacamentoMedio);
`;

const BotaoAcao = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: color 0.2s;

  &:hover {
    color: var(--corTextoPrimaria);
    background: var(--corFundoSecundaria);
  }
`;

const Modal = styled.div`
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
`;

const ModalContent = styled.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const ModalTitulo = styled.h2`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
`;

const Label = styled.label`
  display: block;
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoPequeno);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaioPequena);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
  }
`;

const ModalAcoes = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  justify-content: flex-end;
  margin-top: var(--espacamentoGrande);
`;

const Configuracoes = ({ 
  onAbrirLogs, 
  onAbrirAdmin, 
  syncStatus, 
  lastSync, 
  onSincronizar 
}) => {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    cor: '#007bff'
  });

  // Carregar categorias
  const carregarCategorias = async () => {
    setCarregando(true);
    try {
      const response = await categoriasAPI.buscarTodos();
      setCategorias(response.categorias || []);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  // Abrir modal para criar/editar categoria
  const abrirModal = (categoria = null) => {
    if (categoria) {
      setCategoriaEditando(categoria);
      setFormData({
        nome: categoria.nome,
        cor: categoria.cor || '#007bff'
      });
    } else {
      setCategoriaEditando(null);
      setFormData({
        nome: '',
        cor: '#007bff'
      });
    }
    setModalAberto(true);
  };

  // Salvar categoria
  const salvarCategoria = async () => {
    if (!formData.nome.trim()) {
      alert('Nome é obrigatório');
      return;
    }

    try {
      if (categoriaEditando) {
        await categoriasAPI.atualizar(categoriaEditando.id, formData);
      } else {
        await categoriasAPI.criar(formData);
      }
      
      setModalAberto(false);
      carregarCategorias();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
      alert('Erro ao salvar categoria');
    }
  };

  // Excluir categoria
  const excluirCategoria = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta categoria?')) {
      return;
    }

    try {
      await categoriasAPI.deletar(id);
      carregarCategorias();
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      alert('Erro ao excluir categoria');
    }
  };

  return (
    <Container>
      <Titulo>Configurações</Titulo>

      {/* Seção de Categorias */}
      <Secao>
        <SecaoTitulo>
          <FontAwesomeIcon icon={faTags} />
          Gerenciar Categorias
        </SecaoTitulo>
        
        <Botao onClick={() => abrirModal()}>
          <FontAwesomeIcon icon={faPlus} />
          Nova Categoria
        </Botao>

        {carregando ? (
          <p>Carregando categorias...</p>
        ) : (
          <CategoriasGrid>
            {categorias.map(categoria => (
              <CategoriaCard key={categoria.id}>
                <CategoriaCor cor={categoria.cor} />
                <CategoriaNome>{categoria.nome}</CategoriaNome>
                <CategoriaAcoes>
                  <BotaoAcao onClick={() => abrirModal(categoria)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </BotaoAcao>
                  <BotaoAcao onClick={() => excluirCategoria(categoria.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </BotaoAcao>
                </CategoriaAcoes>
              </CategoriaCard>
            ))}
          </CategoriasGrid>
        )}
      </Secao>

      {/* Seção de Sincronização */}
      <Secao>
        <SecaoTitulo>
          <FontAwesomeIcon icon={faSync} />
          Sincronização
        </SecaoTitulo>
        
        <StatusItem>
          <StatusInfo>
            <StatusLabel>Status</StatusLabel>
            <StatusValue>
              {syncStatus === 'online' ? 'Online' : 'Offline'}
            </StatusValue>
          </StatusInfo>
          <StatusIndicator status={syncStatus} />
        </StatusItem>

        <StatusItem>
          <StatusInfo>
            <StatusLabel>Última Sincronização</StatusLabel>
            <StatusValue>
              {lastSync ? new Date(lastSync).toLocaleString('pt-BR') : 'Nunca'}
            </StatusValue>
          </StatusInfo>
        </StatusItem>

        <Botao onClick={onSincronizar} disabled={syncStatus !== 'online'}>
          <FontAwesomeIcon icon={faSync} />
          Sincronizar Manualmente
        </Botao>
      </Secao>

      {/* Seção de Sistema */}
      <Secao>
        <SecaoTitulo>
          <FontAwesomeIcon icon={faCog} />
          Sistema
        </SecaoTitulo>
        
        <BotaoSecundario onClick={onAbrirLogs}>
          <FontAwesomeIcon icon={faDatabase} />
          Ver Logs do Sistema
        </BotaoSecundario>

        <BotaoSecundario onClick={onAbrirAdmin} style={{ marginLeft: 'var(--espacamentoMedio)' }}>
          <FontAwesomeIcon icon={faShieldAlt} />
          Painel Administrativo
        </BotaoSecundario>
      </Secao>

      {/* Modal de Categoria */}
      {modalAberto && (
        <Modal onClick={() => setModalAberto(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitulo>
              {categoriaEditando ? 'Editar Categoria' : 'Nova Categoria'}
            </ModalTitulo>
            
            <FormGroup>
              <Label>Nome</Label>
              <Input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                placeholder="Digite o nome da categoria"
              />
            </FormGroup>

            <FormGroup>
              <Label>Cor</Label>
              <Input
                type="color"
                value={formData.cor}
                onChange={(e) => setFormData({ ...formData, cor: e.target.value })}
              />
            </FormGroup>

            <ModalAcoes>
              <BotaoSecundario onClick={() => setModalAberto(false)}>
                <FontAwesomeIcon icon={faTimes} />
                Cancelar
              </BotaoSecundario>
              <Botao onClick={salvarCategoria}>
                Salvar
              </Botao>
            </ModalAcoes>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Configuracoes; 