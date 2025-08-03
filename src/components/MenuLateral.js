import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStickyNote,
  faLink,
  faCog,
  faSearch,
  faBars,
  faTimes,
  faTag,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: calc(var(--zIndexDropdown) - 1);
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: all var(--transicaoMedia);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${props => props.recolhido ? 'var(--larguraMenuRecolhido)' : 'var(--larguraMenu)'};
  background: linear-gradient(180deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-right: 2px solid var(--corBordaPrimaria);
  transition: width var(--transicaoMedia);
  z-index: var(--zIndexDropdown);
  box-shadow: var(--sombraMedia);
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: ${props => props.recolhido ? '60px' : '250px'};
    transform: ${props => props.mobileVisible ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform var(--transicaoMedia), width var(--transicaoMedia);
  }

  @media (max-width: 480px) {
    width: ${props => props.recolhido ? '50px' : '200px'};
  }

  @media (max-width: 360px) {
    width: ${props => props.recolhido ? '45px' : '180px'};
  }
`;

const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.recolhido ? 'center' : 'space-between'};
  padding: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
  height: var(--alturaHeader);
  min-height: 60px;
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    min-height: 50px;
  }
`;

const TituloMenu = styled.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  margin: 0;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteExtraGrande);
  }
`;

const BotaoAlternar = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  flex-shrink: 0;
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const MenuContent = styled.div`
  padding: var(--espacamentoMedio);
  height: calc(100vh - var(--alturaHeader));
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
  }
`;

const SecaoMenu = styled.div`
  margin-bottom: var(--espacamentoGrande);

  @media (max-width: 768px) {
    margin-bottom: var(--espacamentoMedio);
  }
`;

const TituloSecao = styled.h3`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--espacamentoMedio);
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: var(--espacamentoPequeno);
  }
`;

const SecaoBusca = styled.div`
  margin-bottom: var(--espacamentoGrande);
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};
`;

const ContainerBusca = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconeBusca = styled.div`
  position: absolute;
  left: var(--espacamentoPequeno);
  color: var(--corTextoSecundaria);
  z-index: 1;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
`;

const InputBusca = styled.input`
  width: 100%;
  padding: var(--espacamentoPequeno) var(--espacamentoPequeno) var(--espacamentoPequeno) calc(var(--espacamentoPequeno) + 20px);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
  transition: all var(--transicaoRapida);
  opacity: ${props => props.recolhido ? 0 : 1};
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 2px var(--corPrimariaTransparente);
  }

  &::placeholder {
    color: var(--corTextoSecundaria);
  }
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
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: ${props => props.ativo ? 'var(--corPrimaria)' : 'transparent'};
  color: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)'};
  border: ${props => props.ativo ? 'none' : '1px solid var(--corBordaPrimaria)'};
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.ativo ? 'var(--corSecundaria)' : 'var(--corFundoSecundaria)'};
    border-color: ${props => props.ativo ? 'transparent' : 'var(--corPrimaria)'};
    transform: translateX(2px) scale(0.98);
  }
`;

const IconeNavegacao = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--espacamentoMedio);
  flex-shrink: 0;
`;

const TextoNavegacao = styled.span`
  flex: 1;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
`;

const Contador = styled.span`
  background: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corPrimaria)'};
  color: ${props => props.ativo ? 'var(--corPrimaria)' : 'var(--corTextoClara)'};
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  margin-left: var(--espacamentoPequeno);
  flex-shrink: 0;
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);

  @media (max-width: 768px) {
    min-width: 16px;
    height: 16px;
    font-size: 10px;
    margin-left: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    min-width: 14px;
    height: 14px;
    font-size: 9px;
  }
`;

const SecaoConfiguracoes = styled.div`
  margin-top: auto;
  padding-top: var(--espacamentoGrande);
  border-top: 1px solid var(--corBordaPrimaria);
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  pointer-events: ${props => props.recolhido ? 'none' : 'auto'};
  visibility: ${props => props.recolhido ? 'hidden' : 'visible'};
`;

const BotaoConfiguracoes = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: transparent;
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;

  &:hover {
    background: var(--corFundoSecundaria);
    border-color: var(--corPrimaria);
    transform: translateX(2px) scale(0.98);
  }
`;

const ListaItens = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemMenu = styled.li`
  margin-bottom: var(--espacamentoPequeno);
`;

const BotaoMenu = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: ${props => props.ativo ? 'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)' : 'transparent'};
  color: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)'};
  border: none;
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  font-size: var(--tamanhoFonteMedia);
  font-weight: ${props => props.ativo ? '600' : '500'};
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => props.ativo 
      ? 'linear-gradient(135deg, var(--corPrimariaHover) 0%, var(--corSecundariaHover) 100%)' 
      : 'var(--corFundoTerciaria)'};
    transform: translateX(4px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    gap: var(--espacamentoPequeno);
  }
`;

const IconeMenu = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: var(--tamanhoFonteMedia);

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: var(--tamanhoFontePequena);
  }
`;

const TextoMenu = styled.span`
  opacity: ${props => props.recolhido ? 0 : 1};
  transition: opacity var(--transicaoMedia);
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
`;



const BotaoMobile = styled.button`
  position: fixed;
  top: var(--espacamentoMedio);
  left: var(--espacamentoMedio);
  z-index: calc(var(--zIndexDropdown) + 1);
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraMedia);

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--sombraForte);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuLateral = ({ 
  onAbrirConfiguracoes, 
  telaAtiva, 
  onTelaChange,
  totalLinks = 0
}) => {
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

  const [favoritos, setFavoritos] = useState([]); // Estado para armazenar os favoritos
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Função para alternar a visibilidade do menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  // Carregar favoritos quando componente montar
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const userData = localStorage.getItem('user');
        if (!userData) {
          return;
        }

        const user = JSON.parse(userData);
        if (!user || !user.id) {
          return;
        }

        // Carregar favoritos do localStorage ou API
        const favoritosSalvos = localStorage.getItem(`favoritos_${user.id}`);
        if (favoritosSalvos) {
          try {
            const favoritos = JSON.parse(favoritosSalvos);
            setFavoritos(favoritos);
          } catch (error) {
            console.error('Erro ao carregar favoritos:', error);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    };

    carregarFavoritos();
  }, []);

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
      id: 'inicial',
      titulo: 'Início',
      icone: faHome
    },
    {
      id: 'notas',
      titulo: 'Minhas Notas',
      icone: faStickyNote,
      contador: estatisticas.totalNotas
    },
    {
      id: 'links',
      titulo: 'Meus Links',
      icone: faLink,
      contador: totalLinks
    }
  ];

  const opcoesOrdenacao = [
    { valor: 'dataCriacao', label: 'Data de Criação' },
    { valor: 'dataModificacao', label: 'Data de Modificação' },
    { valor: 'titulo', label: 'Título' },
    { valor: 'categoria', label: 'Categoria' }
  ];

  return (
    <>
      <MenuOverlay visible={mobileMenuVisible} onClick={toggleMobileMenu} />
      <MenuContainer recolhido={menuRecolhido} mobileVisible={mobileMenuVisible}>
        <MenuHeader recolhido={menuRecolhido}>
          <TituloMenu recolhido={menuRecolhido}>WRTmind</TituloMenu>
          <BotaoAlternar onClick={alternarMenu}>
            <FontAwesomeIcon
              icon={menuRecolhido ? faTimes : faBars}
              size="sm"
            />
          </BotaoAlternar>
        </MenuHeader>

        <MenuContent>
          <SecaoBusca recolhido={menuRecolhido}>
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

          <SecaoConfiguracoes recolhido={menuRecolhido}>
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

          <SecaoMenu recolhido={menuRecolhido}>
            <TituloSecao recolhido={menuRecolhido}>Navegação</TituloSecao>
            <ListaNavegacao>
              {itensNavegacao.map(item => (
                <ItemNavegacao key={item.id}>
                  <BotaoNavegacao
                    ativo={telaAtiva === item.id}
                    onClick={() => onTelaChange(item.id)}
                    title={menuRecolhido ? item.titulo : ''}
                  >
                    <IconeNavegacao>
                      <FontAwesomeIcon icon={item.icone} size="sm" />
                    </IconeNavegacao>
                    <TextoNavegacao recolhido={menuRecolhido}>
                      {item.titulo}
                    </TextoNavegacao>
                    {item.contador !== undefined && (
                      <Contador ativo={telaAtiva === item.id} recolhido={menuRecolhido}>
                        {item.contador}
                      </Contador>
                    )}
                  </BotaoNavegacao>
                </ItemNavegacao>
              ))}
            </ListaNavegacao>
          </SecaoMenu>
        </MenuContent>
      </MenuContainer>
      <BotaoMobile onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </BotaoMobile>
    </>
  );
};

export default MenuLateral; 