import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faStickyNote,
  faTrash,
  faTrashAlt,
  faCog,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faSearch,
  faSort,
  faFilter,
  faBars,
  faTimes,
  faTag,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${props => props.recolhido ? 'var(--larguraMenuRecolhido)' : 'var(--larguraMenu)'};
  background: var(--corFundoTerciaria);
  border-right: 1px solid var(--corBordaPrimaria);
  transition: width var(--transicaoMedia);
  z-index: var(--zIndexDropdown);
  box-shadow: var(--sombraLeve);
  overflow: hidden;
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.recolhido ? 'center' : 'space-between'};
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
  height: var(--alturaHeader);
  min-height: 60px;
`;

const TituloMenu = styled.h2`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  margin: 0;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;
`;

const BotaoAlternar = styled.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  flex-shrink: 0;

  &:hover {
    background: var(--corSecundaria);
    transform: scale(1.05);
  }
`;

const MenuContent = styled.div`
  padding: var(--espacamentoMedio);
  height: calc(100vh - var(--alturaHeader));
  overflow-y: auto;
  overflow-x: hidden;
`;

const SecaoMenu = styled.div`
  margin-bottom: var(--espacamentoGrande);
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};
`;

const TituloSecao = styled.h3`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--espacamentoMedio);
  white-space: nowrap;
  overflow: hidden;
`;

const ListaNavegacao = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemNavegacao = styled.li`
  margin-bottom: var(--espacamentoPequeno);
`;

const BotaoNavegacao = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: ${props => props.ativo ? 'var(--corPrimaria)' : 'transparent'};
  color: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)'};
  border: none;
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${props => props.ativo ? 'var(--corSecundaria)' : 'var(--corFundoSecundaria)'};
    transform: translateX(2px);
  }

  &:active {
    transform: translateX(2px) scale(0.98);
  }
`;

const IconeNavegacao = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextoNavegacao = styled.span`
  flex: 1;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contador = styled.span`
  background: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corPrimaria)'};
  color: ${props => props.ativo ? 'var(--corPrimaria)' : 'var(--corTextoClara)'};
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  flex-shrink: 0;
`;

const SecaoBusca = styled.div`
  margin-bottom: var(--espacamentoGrande);
`;

const ContainerBusca = styled.div`
  position: relative;
  margin-bottom: var(--espacamentoMedio);
`;

const InputBusca = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio) var(--espacamentoMedio) var(--espacamentoMedio) 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  opacity: ${props => props.recolhido ? 0 : 1};
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`;

const IconeBusca = styled.div`
  position: absolute;
  left: var(--espacamentoMedio);
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};
`;

const SecaoOrdenacao = styled.div`
  margin-bottom: var(--espacamentoGrande);
`;

const SelectOrdenacao = styled.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;
  opacity: ${props => props.recolhido ? 0 : 1};
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const OpcaoOrdenacao = styled.option`
  background: var(--corFundoTerciaria);
  color: var(--corTextoPrimaria);
`;

const SecaoConfiguracoes = styled.div`
  margin-top: auto;
  padding-top: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const BotaoConfiguracoes = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: transparent;
  color: var(--corTextoPrimaria);
  border: none;
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: var(--corFundoSecundaria);
    transform: translateX(2px);
  }

  &:active {
    transform: translateX(2px) scale(0.98);
  }
`;

const MenuLateral = ({ onAbrirConfiguracoes }) => {
  const {
    categoriaAtiva,
    menuRecolhido,
    termoBusca,
    ordenacao,
    alternarMenu,
    definirCategoriaAtiva,
    definirTermoBusca,
    definirOrdenacao,
    estatisticas,
    // buscarFavoritas // DESABILITADO
  } = useNotasAPIContext();

  // const [contadorFavoritos, setContadorFavoritos] = useState(0); // DESABILITADO

  // useEffect(() => {
  //   const carregarContadorFavoritos = async () => {
  //     try {
  //       // Verificar se o usuário está logado
  //       const user = localStorage.getItem('user');
  //       if (!user) {
  //         console.log('⚠️ Usuário não logado, pulando carregamento de favoritos');
  //         setContadorFavoritos(0);
  //         return;
  //       }

  //       // Verificar se os dados do usuário são válidos
  //       let userData;
  //       try {
  //         userData = JSON.parse(user);
  //         if (!userData.id) {
  //         console.log('⚠️ Dados do usuário inválidos, pulando carregamento de favoritos');
  //         setContadorFavoritos(0);
  //         return;
  //       } catch (error) {
  //         console.log('⚠️ Erro ao parsear dados do usuário, pulando carregamento de favoritos');
  //         setContadorFavoritos(0);
  //         return;
  //       }

  //       const favoritas = await buscarFavoritas();
  //       setContadorFavoritos(favoritas.length);
  //     } catch (error) {
  //       console.error('Erro ao carregar contador de favoritos:', error);
  //       setContadorFavoritos(0);
  //     }
  //   };

  //   carregarContadorFavoritos();
  // }, []); // Remover buscarFavoritas da dependência para evitar loop

  // Listener para favoritos alterados (DESABILITADO)
  // useEffect(() => {
  //   const handleFavoritosAlterados = async () => {
  //     try {
  //       const favoritas = await buscarFavoritas();
  //       setContadorFavoritos(favoritas.length);
  //     } catch (error) {
  //       console.error('Erro ao atualizar contador de favoritos:', error);
  //     }
  //   };

  //   window.addEventListener('favoritosAlterados', handleFavoritosAlterados);

  //   return () => {
  //     window.removeEventListener('favoritosAlterados', handleFavoritosAlterados);
  //   };
  // }, []);

  // Listener para logout (DESABILITADO)
  // useEffect(() => {
  //   const handleUserLogout = () => {
  //     console.log('🚪 Evento de logout detectado no MenuLateral');
  //     setContadorFavoritos(0);
  //   };

  //   window.addEventListener('userLogout', handleUserLogout);

  //   return () => {
  //     window.removeEventListener('userLogout', handleUserLogout);
  //   };
  // }, []);

  const itensNavegacao = [
    {
      id: 'anotacoes',
      titulo: 'Notes',
      icone: faStickyNote,
      contador: estatisticas.totalNotas
    },
    {
      id: 'lixeira',
      titulo: 'Trash',
      icone: faTrashAlt,
      contador: estatisticas.notasDeletadas
    }
  ];



  const opcoesOrdenacao = [
    { valor: 'dataCriacao', label: 'Data de Criação' },
    { valor: 'dataModificacao', label: 'Data de Modificação' },
    { valor: 'titulo', label: 'Título' },
    { valor: 'topico', label: 'Tópico' }
  ];

  return (
    <MenuContainer recolhido={menuRecolhido}>
      <MenuHeader recolhido={menuRecolhido}>
        <TituloMenu recolhido={menuRecolhido}>WRTmind</TituloMenu>
        <BotaoAlternar onClick={alternarMenu}>
          <FontAwesomeIcon
            icon={menuRecolhido ? faChevronRight : faChevronLeft}
            size="sm"
          />
        </BotaoAlternar>
      </MenuHeader>

      <MenuContent>
        <SecaoBusca>
          <TituloSecao recolhido={menuRecolhido}>Buscar</TituloSecao>
          <ContainerBusca>
            <IconeBusca recolhido={menuRecolhido}>
              <FontAwesomeIcon icon={faSearch} size="sm" />
            </IconeBusca>
            <InputBusca
              type="text"
              placeholder="Buscar por título..."
              value={termoBusca}
              onChange={(e) => definirTermoBusca(e.target.value)}
              recolhido={menuRecolhido}
            />
          </ContainerBusca>
        </SecaoBusca>

        <SecaoOrdenacao>
          <TituloSecao recolhido={menuRecolhido}>Ordenar por</TituloSecao>
          <SelectOrdenacao
            value={ordenacao}
            onChange={(e) => definirOrdenacao(e.target.value)}
            recolhido={menuRecolhido}
          >
            {opcoesOrdenacao.map(opcao => (
              <OpcaoOrdenacao key={opcao.valor} value={opcao.valor}>
                {opcao.label}
              </OpcaoOrdenacao>
            ))}
          </SelectOrdenacao>
        </SecaoOrdenacao>

        <SecaoMenu recolhido={menuRecolhido}>
          <TituloSecao recolhido={menuRecolhido}>Tópicos</TituloSecao>
          <ListaNavegacao>
            {estatisticas.notasPorTopico.map(({ topico, quantidade }) => (
              <ItemNavegacao key={topico}>
                <BotaoNavegacao
                  onClick={() => definirCategoriaAtiva(topico)}
                  title={menuRecolhido ? topico : ''}
                >
                  <IconeNavegacao>
                    <FontAwesomeIcon icon={faTag} size="sm" />
                  </IconeNavegacao>
                  <TextoNavegacao recolhido={menuRecolhido}>
                    {topico}
                  </TextoNavegacao>
                  <Contador recolhido={menuRecolhido}>
                    {quantidade}
                  </Contador>
                </BotaoNavegacao>
              </ItemNavegacao>
            ))}
          </ListaNavegacao>
        </SecaoMenu>

        <SecaoMenu recolhido={menuRecolhido}>
          <TituloSecao recolhido={menuRecolhido}>Navegação</TituloSecao>
          <ListaNavegacao>
            <ItemNavegacao>
              <BotaoNavegacao
                ativo={categoriaAtiva === 'anotacoes'}
                onClick={() => definirCategoriaAtiva('anotacoes')}
                title={menuRecolhido ? 'Notes' : ''}
              >
                <IconeNavegacao>
                  <FontAwesomeIcon icon={faStickyNote} size="sm" />
                </IconeNavegacao>
                <TextoNavegacao recolhido={menuRecolhido}>
                  Notes
                </TextoNavegacao>
                <Contador ativo={categoriaAtiva === 'anotacoes'} recolhido={menuRecolhido}>
                  {estatisticas.totalNotas}
                </Contador>
              </BotaoNavegacao>
            </ItemNavegacao>

            <ItemNavegacao>
              <BotaoNavegacao
                ativo={categoriaAtiva === 'favoritos'}
                onClick={() => definirCategoriaAtiva('favoritos')}
                title={menuRecolhido ? 'Favorites' : ''}
              >
                <IconeNavegacao>
                  <FontAwesomeIcon icon={faHeart} size="sm" />
                </IconeNavegacao>
                <TextoNavegacao recolhido={menuRecolhido}>
                  Favorites
                </TextoNavegacao>
                <Contador ativo={categoriaAtiva === 'favoritos'} recolhido={menuRecolhido}>
                  {contadorFavoritos}
                </Contador>
              </BotaoNavegacao>
            </ItemNavegacao>

            <ItemNavegacao>
              <BotaoNavegacao
                ativo={categoriaAtiva === 'lixeira'}
                onClick={() => definirCategoriaAtiva('lixeira')}
                title={menuRecolhido ? 'Trash' : ''}
              >
                <IconeNavegacao>
                  <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                </IconeNavegacao>
                <TextoNavegacao recolhido={menuRecolhido}>
                  Trash
                </TextoNavegacao>
                <Contador ativo={categoriaAtiva === 'lixeira'} recolhido={menuRecolhido}>
                  {estatisticas.notasDeletadas}
                </Contador>
              </BotaoNavegacao>
            </ItemNavegacao>
          </ListaNavegacao>
        </SecaoMenu>

        <SecaoConfiguracoes>
          <BotaoConfiguracoes
            onClick={onAbrirConfiguracoes}
            title={menuRecolhido ? 'Configurações' : ''}
          >
            <IconeNavegacao>
              <FontAwesomeIcon icon={faCog} size="sm" />
            </IconeNavegacao>
            <TextoNavegacao recolhido={menuRecolhido}>
              Configurações
            </TextoNavegacao>
          </BotaoConfiguracoes>
        </SecaoConfiguracoes>
      </MenuContent>
    </MenuContainer>
  );
};

export default MenuLateral; 