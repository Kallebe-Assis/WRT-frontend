import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faHeart,
  faFilter,
  faTimes,
  faList,
  faTh,
  faThLarge,
  faThList,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import CardItem from './CardItem';
import { copiarParaClipboard } from '../utils/formatacao';
import NotasLoading from './NotasLoading';

const Container = styled.div`
  padding: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoMedio);
  }
`;

const TituloSecao = styled.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteExtraGrande);
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFonteGrande);
  }
`;

const Contador = styled.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: var(--espacamentoPequeno);
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  min-height: 44px;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno) var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
    gap: var(--espacamentoPequeno);
    min-height: 44px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 80px;
  }
`;

const BotaoSecundario = styled(BotaoAcao)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`;

const ContainerBusca = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    order: -1;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const InputBusca = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio) var(--espacamentoMedio) var(--espacamentoMedio) 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  min-height: 44px;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno) var(--espacamentoPequeno) var(--espacamentoPequeno) 35px;
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno) var(--espacamentoPequeno) var(--espacamentoPequeno) 30px;
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }
`;

const IconeBusca = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
`;

const ContainerFiltros = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  align-items: center;
`;

const BotaoFiltro = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  min-height: 44px;
  min-width: 80px;
  justify-content: center;

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno) var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
    min-width: 70px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 60px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    if (props.tipo === 'link') {
      return 'repeat(auto-fill, minmax(140px, 1fr))';
    }
    
    switch (props.visualizacao) {
      case 'lista':
        return '1fr';
      case 'grade2':
        return 'repeat(2, 1fr)';
      case 'grade4':
        return 'repeat(4, 1fr)';
      case 'grade6':
        return 'repeat(6, 1fr)';
      default:
        return 'repeat(auto-fill, minmax(300px, 1fr))';
    }
  }};
  gap: ${props => props.tipo === 'link' ? '8px' : 'var(--espacamentoGrande)'};
  margin-top: var(--espacamentoGrande);

  @media (max-width: 768px) {
    grid-template-columns: ${props => {
      if (props.tipo === 'link') {
        return 'repeat(auto-fill, minmax(120px, 1fr))';
      }
      
      switch (props.visualizacao) {
        case 'lista':
          return '1fr';
        case 'grade2':
          return 'repeat(2, 1fr)';
        case 'grade4':
          return 'repeat(2, 1fr)';
        case 'grade6':
          return 'repeat(3, 1fr)';
        default:
          return 'repeat(auto-fill, minmax(250px, 1fr))';
      }
    }};
    gap: ${props => props.tipo === 'link' ? '6px' : 'var(--espacamentoMedio)'};
    margin-top: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    grid-template-columns: ${props => {
      if (props.tipo === 'link') {
        return 'repeat(auto-fill, minmax(100px, 1fr))';
      }
      
      switch (props.visualizacao) {
        case 'lista':
          return '1fr';
        case 'grade2':
        case 'grade4':
        case 'grade6':
          return '1fr';
        default:
          return '1fr';
      }
    }};
    gap: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)'};
    margin-top: var(--espacamentoPequeno);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);

  @media (max-width: 768px) {
    padding: var(--espacamentoGrande);
    font-size: var(--tamanhoFonteMedia);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
  }
`;

const VisualizacaoDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const BotaoVisualizacao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  min-height: 44px;
  min-width: 120px;
  justify-content: center;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
  }

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 90px;
  }
`;

const DropdownVisualizacao = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--corFundoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  min-width: 150px;
  opacity: ${props => props.ativo ? '1' : '0'};
  visibility: ${props => props.ativo ? 'visible' : 'hidden'};
  transform: ${props => props.ativo ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all var(--transicaoMedia);

  @media (max-width: 768px) {
    min-width: 130px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
  }
`;

const OpcaoVisualizacao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  width: 100%;
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: transparent;
  color: var(--corTextoPrimaria);
  border: none;
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;

  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corPrimaria);
  }

  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }

  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
  }
`;

const FiltroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  margin-bottom: var(--espacamentoMedio);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--espacamentoPequeno);
  }
`;

const FiltroSelect = styled.select`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoMedia);
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 120px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 100%;
  }
`;

const BotaoLimparFiltro = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  color: var(--corTextoSecundaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
    color: var(--corPrimaria);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
    min-width: 44px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    width: 100%;
    justify-content: center;
  }
`;

const ContadorFiltros = styled.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  margin-left: var(--espacamentoPequeno);

  @media (max-width: 768px) {
    padding: 1px 6px;
    font-size: 10px;
  }
`;

const IconeVazio = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`;

const DropdownCategoria = styled.div`
  position: relative;
  min-width: 180px;
  margin-left: var(--espacamentoMedio);
`;

const DropdownBotao = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 180px;
  padding: 12px 18px;
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: border-color 0.2s, box-shadow 0.2s;
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    border-color: var(--corPrimaria);
    box-shadow: 0 4px 16px rgba(102,126,234,0.10);
    outline: none;
  }
`;

const SetaDropdown = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
  transition: transform 0.25s cubic-bezier(.4,1.4,.6,1);
  svg {
    display: block;
    transition: inherit;
    transform: ${({ aberto }) => (aberto ? 'rotate(-180deg)' : 'rotate(0deg)')};
  }
`;

const DropdownLista = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: var(--corFundoSecundaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  margin: 0;
  padding: 8px 0;
  list-style: none;
  opacity: ${({ aberto }) => (aberto ? 1 : 0)};
  pointer-events: ${({ aberto }) => (aberto ? 'auto' : 'none')};
  transform: ${({ aberto }) => (aberto ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.25s, transform 0.25s cubic-bezier(.4,1.4,.6,1);
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 12px 20px;
  color: ${({ selecionado }) => (selecionado ? 'var(--corPrimaria)' : 'var(--corTextoPrimaria)')};
  background: ${({ selecionado }) => (selecionado ? 'rgba(102,126,234,0.08)' : 'transparent')};
  font-weight: ${({ selecionado }) => (selecionado ? 700 : 400)};
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-left: 3px solid transparent;
  &:hover {
    background: rgba(102,126,234,0.13);
    color: var(--corPrimaria);
    border-left: 3px solid var(--corPrimaria);
  }
`;

const ListaItens = ({
  itens,
  tipo,
  titulo,
  icone,
  carregando,
  onNovo,
  onEditar,
  onExcluir,
  onVisualizar,
  onCopiar,
  onExportar,
  onImprimir,
  onTelaCheia,
  modoOrdenacao = 'automatico',
  categorias = []
}) => {
  // Verificar se onTelaCheia é uma função válida
  const handleTelaCheia = (item) => {
    if (typeof onTelaCheia === 'function') {
      onTelaCheia(item);
    } else {
      console.warn('onTelaCheia não é uma função válida:', onTelaCheia);
    }
  };
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas');
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [visualizacao, setVisualizacao] = useState('auto');
  const [dropdownVisualizacaoAberto, setDropdownVisualizacaoAberto] = useState(false);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownVisualizacaoAberto) {
        const dropdown = document.querySelector('[data-dropdown="visualizacao"]');
        if (dropdown && !dropdown.contains(event.target)) {
          setDropdownVisualizacaoAberto(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisualizacaoAberto]);

  // Obter categorias únicas das notas
  const categoriasUnicas = useMemo(() => {
    if (tipo === 'nota' && itens) {
      const categorias = itens
        .map(item => item.topico || item.categoria)
        .filter(Boolean)
        .filter((value, index, self) => self.indexOf(value) === index);
      return categorias.sort();
    }
    return [];
  }, [itens, tipo]);

  // Filtrar itens baseado no termo de busca e categoria
  const itensFiltrados = itens?.filter(item => {
    // Filtro por termo de busca
    if (termoBusca) {
      const busca = termoBusca.toLowerCase();
      if (tipo === 'nota') {
        const matchTitulo = item.titulo?.toLowerCase().includes(busca);
        const matchConteudo = item.conteudo?.toLowerCase().includes(busca);
        const matchTopico = item.topico?.toLowerCase().includes(busca);
        if (!matchTitulo && !matchConteudo && !matchTopico) {
          return false;
        }
      } else if (tipo === 'link') {
        const matchNome = item.nome?.toLowerCase().includes(busca);
        const matchUrl = item.url?.toLowerCase().includes(busca);
        const matchCategoria = item.categoria?.toLowerCase().includes(busca);
        if (!matchNome && !matchUrl && !matchCategoria) {
          return false;
        }
      }
    }

    // Filtro por categoria/tópico
    if (categoriaFiltro !== 'todas') {
      if (tipo === 'nota') {
        const itemCategoria = item.topico || item.categoria;
        if (itemCategoria !== categoriaFiltro) {
          return false;
        }
      } else if (tipo === 'link') {
        const itemCategoria = typeof item.categoria === 'object' 
          ? item.categoria.nome 
          : item.categoria;
        if (itemCategoria !== categoriaFiltro) {
          return false;
        }
      }
    }

    return true;
  }) || [];

  // Mostrar loading se estiver carregando
  if (carregando) {
    return (
      <Container tipo={tipo}>
        <NotasLoading
          mensagem={`Carregando ${tipo === 'nota' ? 'notas' : 'links'}...`}
          subMensagem="Conectando com o servidor"
        />
      </Container>
    );
  }

  const handleCopiar = async (item) => {
    const textoParaCopiar = tipo === 'nota' 
      ? `${item.titulo}\n${item.conteudo}`
      : `${item.nome}\n${item.url}`;
    
    const sucesso = await copiarParaClipboard(textoParaCopiar);
    if (sucesso && onCopiar) {
      onCopiar('Conteúdo copiado para a área de transferência!');
    }
  };

  const handleClickLink = (link) => {
    if (link.url) {
      window.open(link.url, '_blank');
    }
  };



  const limparFiltros = () => {
    setTermoBusca('');
    setFiltroAtivo('todos');
    setCategoriaFiltro('todas');
  };

  const toggleDropdownVisualizacao = () => {
    setDropdownVisualizacaoAberto(!dropdownVisualizacaoAberto);
  };

  const selecionarVisualizacao = (novaVisualizacao) => {
    setVisualizacao(novaVisualizacao);
    setDropdownVisualizacaoAberto(false);
  };

  const getIconeVisualizacao = () => {
    switch (visualizacao) {
      case 'lista':
        return faThList;
      case 'grade2':
        return faTh;
      case 'grade4':
        return faThLarge;
      case 'grade6':
        return faThLarge;
      default:
        return faThLarge;
    }
  };

  const getTextoVisualizacao = () => {
    switch (visualizacao) {
      case 'lista':
        return 'Lista';
      case 'grade2':
        return '2 Colunas';
      case 'grade4':
        return '4 Colunas';
      case 'grade6':
        return '6 Colunas';
      default:
        return 'Auto';
    }
  };

  const temFiltrosAtivos = termoBusca || categoriaFiltro !== 'todas';

  // Se for tipo 'link', renderizar grade de links
  if (tipo === 'link') {
    return (
      <Container tipo={tipo}>
        <Header tipo={tipo}>
          <TituloSecao>
            <FontAwesomeIcon icon={icone} />
            {titulo}
            <Contador>{itens.length}</Contador>
          </TituloSecao>

          <ContainerBotoes>
            <ContainerBusca>
              <IconeBusca>
                <FontAwesomeIcon icon={faSearch} />
              </IconeBusca>
              <InputBusca
                type="text"
                placeholder="Buscar links..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </ContainerBusca>

            <BotaoAcao onClick={onNovo}>
              <FontAwesomeIcon icon={faPlus} />
              Novo Link
            </BotaoAcao>
          </ContainerBotoes>
        </Header>

        {itensFiltrados.length === 0 ? (
          <EmptyState>
            <IconeVazio>
              <FontAwesomeIcon icon={icone} />
            </IconeVazio>
            <h3>Nenhum link encontrado</h3>
            <p>Clique em "Novo Link" para começar a adicionar seus links favoritos.</p>
          </EmptyState>
        ) : (
          <GridContainer tipo={tipo} visualizacao={visualizacao}>
            {itensFiltrados.map((link) => (
              <CardItem
                key={link.id}
                item={link}
                tipo="link"
                onEditar={() => onEditar(link)}
                onExcluir={() => onExcluir(link.id)}
                onVisualizar={() => handleClickLink(link)}
                onCopiar={() => handleCopiar(link)}
                // Não passar onTelaCheia para links
              />
            ))}
          </GridContainer>
        )}
      </Container>
    );
  }

  // Renderizar lista de notas
  return (
    <Container tipo={tipo}>
      <Header tipo={tipo}>
        <TituloSecao>
          <FontAwesomeIcon icon={icone} />
          {titulo}
          <Contador>{itens.length}</Contador>
        </TituloSecao>

        <ContainerBotoes>
          <ContainerBusca>
            <IconeBusca>
              <FontAwesomeIcon icon={faSearch} />
            </IconeBusca>
            <InputBusca
              type="text"
              placeholder="Buscar notas..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </ContainerBusca>

          {/* Filtro de categoria customizado */}
          <DropdownCategoria>
            <DropdownBotao
              onClick={() => setDropdownAberto((aberto) => !aberto)}
              tabIndex={0}
              onBlur={() => setTimeout(() => setDropdownAberto(false), 150)}
              aria-haspopup="listbox"
              aria-expanded={dropdownAberto}
            >
              <FontAwesomeIcon icon={faList} style={{ marginRight: 8 }} />
              {categoriaFiltro === 'todas' ? 'Todas as categorias' : categoriaFiltro}
              <SetaDropdown aberto={dropdownAberto}>
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </SetaDropdown>
            </DropdownBotao>
            <DropdownLista aberto={dropdownAberto} tabIndex={-1} role="listbox">
              <DropdownItem
                selecionado={categoriaFiltro === 'todas'}
                onClick={() => { setCategoriaFiltro('todas'); setDropdownAberto(false); }}
                role="option"
                aria-selected={categoriaFiltro === 'todas'}
              >
                Todas as categorias
              </DropdownItem>
              {categoriasUnicas.map((categoria) => (
                <DropdownItem
                  key={categoria}
                  selecionado={categoriaFiltro === categoria}
                  onClick={() => { setCategoriaFiltro(categoria); setDropdownAberto(false); }}
                  role="option"
                  aria-selected={categoriaFiltro === categoria}
                >
                  {categoria}
                </DropdownItem>
              ))}
            </DropdownLista>
          </DropdownCategoria>

          {/* Botão de Visualização - Apenas para notas */}
          {tipo === 'nota' && (
            <VisualizacaoDropdown data-dropdown="visualizacao">
              <BotaoVisualizacao
                onClick={toggleDropdownVisualizacao}
                onBlur={() => setTimeout(() => setDropdownVisualizacaoAberto(false), 150)}
              >
                <FontAwesomeIcon icon={getIconeVisualizacao()} />
                {getTextoVisualizacao()}
                <FontAwesomeIcon icon={faCaretDown} />
              </BotaoVisualizacao>
              
              <DropdownVisualizacao ativo={dropdownVisualizacaoAberto}>
                <OpcaoVisualizacao
                  className={visualizacao === 'auto' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('auto')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  Auto
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'lista' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('lista')}
                >
                  <FontAwesomeIcon icon={faThList} />
                  Lista
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade2' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade2')}
                >
                  <FontAwesomeIcon icon={faTh} />
                  2 Colunas
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade4' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade4')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  4 Colunas
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade6' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade6')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  6 Colunas
                </OpcaoVisualizacao>
              </DropdownVisualizacao>
            </VisualizacaoDropdown>
          )}

          <BotaoAcao onClick={onNovo}>
            <FontAwesomeIcon icon={faPlus} />
            Nova Nota
          </BotaoAcao>
        </ContainerBotoes>
      </Header>

      {/* Filtro por categoria/tópico */}
      {categoriasUnicas.length > 0 && (
        <FiltroContainer>
          {temFiltrosAtivos && (
            <BotaoLimparFiltro onClick={limparFiltros}>
              <FontAwesomeIcon icon={faTimes} />
              Limpar Filtros
            </BotaoLimparFiltro>
          )}

          {temFiltrosAtivos && (
            <ContadorFiltros>
              {itensFiltrados.length} de {itens.length}
            </ContadorFiltros>
          )}
        </FiltroContainer>
      )}

              {itensFiltrados.length === 0 ? (
          <EmptyState>
            <IconeVazio>
              <FontAwesomeIcon icon={icone} />
            </IconeVazio>
            <h3>
              {temFiltrosAtivos 
                ? 'Nenhuma nota encontrada com os filtros aplicados' 
                : 'Nenhuma nota encontrada'
              }
            </h3>
            <p>
              {temFiltrosAtivos 
                ? 'Tente ajustar os filtros ou clique em "Limpar Filtros" para ver todas as notas.'
                : 'Clique em "Nova Nota" para começar a criar suas anotações.'
              }
            </p>
            {temFiltrosAtivos && (
              <BotaoLimparFiltro 
                onClick={limparFiltros}
                style={{ marginTop: 'var(--espacamentoMedio)' }}
              >
                <FontAwesomeIcon icon={faTimes} />
                Limpar Filtros
              </BotaoLimparFiltro>
            )}
          </EmptyState>
        ) : (
        <GridContainer tipo={tipo} visualizacao={visualizacao}>
          {itensFiltrados.map((nota) => (
            <CardItem
              key={nota.id}
              item={nota}
              tipo="nota"
              onEditar={() => onEditar(nota)}
              onExcluir={() => onExcluir(nota.id)}
              onVisualizar={() => onVisualizar(nota)}
              onCopiar={() => handleCopiar(nota)}
              onExportar={() => onExportar(nota)}
              onImprimir={() => onImprimir(nota)}
              onTelaCheia={() => handleTelaCheia(nota)}
            />
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

export default ListaItens; 