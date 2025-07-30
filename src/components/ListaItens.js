import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import CardItem from './CardItem';
import { copiarParaClipboard } from '../utils/formatacao';
import NotasLoading from './NotasLoading';

const Container = styled.div`
  padding: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`;

const TituloSecao = styled.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;
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

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
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
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
  }
`;

const GradeItens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--espacamentoMedio);
`;

const EstadoVazio = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const IconeVazio = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
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
  onFavoritar,
  modoOrdenacao = 'automatico'
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

  // Filtrar itens baseado no termo de busca
  const itensFiltrados = itens?.filter(item => {
    if (termoBusca) {
      const busca = termoBusca.toLowerCase();
      if (tipo === 'nota') {
        return item.titulo?.toLowerCase().includes(busca) ||
               item.conteudo?.toLowerCase().includes(busca);
      } else if (tipo === 'link') {
        return item.nome?.toLowerCase().includes(busca) ||
               item.url?.toLowerCase().includes(busca);
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

  const handleFavoritar = async (itemId) => {
    if (onFavoritar) {
      try {
        await onFavoritar(itemId);
      } catch (error) {
        console.error('Erro ao favoritar item:', error);
      }
    }
  };

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
          <EstadoVazio>
            <IconeVazio>
              <FontAwesomeIcon icon={icone} />
            </IconeVazio>
            <h3>Nenhum link encontrado</h3>
            <p>Clique em "Novo Link" para começar a adicionar seus links favoritos.</p>
          </EstadoVazio>
        ) : (
          <GradeItens>
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
          </GradeItens>
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

          <ContainerFiltros>
            <BotaoFiltro
              className={filtroAtivo === 'todos' ? 'ativo' : ''}
              onClick={() => setFiltroAtivo('todos')}
            >
              Todos
            </BotaoFiltro>
            <BotaoFiltro
              className={filtroAtivo === 'favoritos' ? 'ativo' : ''}
              onClick={() => setFiltroAtivo('favoritos')}
            >
              <FontAwesomeIcon icon={faHeart} />
              Favoritos
            </BotaoFiltro>
          </ContainerFiltros>

          <BotaoAcao onClick={onNovo}>
            <FontAwesomeIcon icon={faPlus} />
            Nova Nota
          </BotaoAcao>
        </ContainerBotoes>
      </Header>

      {itensFiltrados.length === 0 ? (
        <EstadoVazio>
          <IconeVazio>
            <FontAwesomeIcon icon={icone} />
          </IconeVazio>
          <h3>Nenhuma nota encontrada</h3>
          <p>Clique em "Nova Nota" para começar a criar suas anotações.</p>
        </EstadoVazio>
      ) : (
        <GradeItens>
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
              onFavoritar={() => handleFavoritar(nota.id)}
            />
          ))}
        </GradeItens>
      )}
    </Container>
  );
};

export default ListaItens; 