import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStickyNote, 
  faLink, 
  faHeart, 
  faPlus,
  faWifi,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;

  @media (max-width: 768px) {
    padding: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--espacamentoExtraGrande);
`;

const Titulo = styled.h1`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--espacamentoMedio);
  animation: fadeIn 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitulo = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);
  margin-bottom: var(--espacamentoGrande);
  animation: fadeIn 0.7s ease-out;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteMedio);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequeno);
  }
`;

const StatusConectividade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--espacamentoPequeno);
  margin-bottom: var(--espacamentoMedio);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedio);
  font-size: var(--tamanhoFontePequeno);
  font-weight: 500;
  transition: all var(--transicaoRapida);
  
  ${props => props.isOnline ? `
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
  ` : `
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
  `}
  
  .status-icon {
    font-size: 0.9em;
    animation: ${props => props.isOnline ? 'pulse' : 'none'} 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequeno);
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: var(--espacamentoPequeno);
  }
`;

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoExtraGrande);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: var(--espacamentoPequeno);
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  text-align: center;
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-6px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
    
    .card-icon {
      transform: scale(1.1) translateY(-5px);
      animation: iconFloat 2s ease-in-out infinite;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  
  &.card-icon {
    animation: iconGlow 3s ease-in-out infinite;
  }
`;

const CardTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteExtraGrande);
  font-weight: 600;
  margin-bottom: var(--espacamentoMedio);
`;

const CardDescricao = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  margin-bottom: var(--espacamentoGrande);
`;

const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumero = styled.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corPrimaria);
`;

const StatLabel = styled.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const BotaoAcao = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
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
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const TelaInicial = ({ notas, links, onNovoItem, onNovoLink, forcarAtualizacao, isOnline }) => {
  const estatisticas = {
    totalNotas: Array.isArray(notas) ? notas.length : 0,
    totalLinks: Array.isArray(links) ? links.length : 0,
    notasFavoritas: Array.isArray(notas) ? notas.filter(nota => nota.favorito).length : 0,
    linksFavoritos: Array.isArray(links) ? links.filter(link => link.favorito).length : 0
  };

  return (
    <Container>
      <Header>
        <Titulo>WRTmind</Titulo>
        <Subtitulo>Organize suas ideias e links de forma inteligente</Subtitulo>
        
        {/* Indicador de Status de Conectividade */}
        <StatusConectividade isOnline={isOnline}>
          <FontAwesomeIcon 
            icon={isOnline ? faWifi : faTimes} 
            className="status-icon"
          />
          {isOnline ? 'Online - Sincronizado' : 'Offline - Modo local'}
        </StatusConectividade>
      </Header>

      <GridCards>
        {/* Notas */}
        <Card onClick={() => onNovoItem('nota')}>
          <CardIcon className="card-icon">
            <FontAwesomeIcon icon={faStickyNote} />
          </CardIcon>
          <CardTitulo>Notas</CardTitulo>
          <CardDescricao>
            Crie, edite e organize suas anotações.
          </CardDescricao>
          <CardStats>
            <Stat>
              <StatNumero>{notas?.length || 0}</StatNumero>
              <StatLabel>Total de Notas</StatLabel>
            </Stat>
            <Stat>
              <StatNumero>
                {(notas?.filter(n => n.favorito) || []).length}
              </StatNumero>
              <StatLabel>Favoritos</StatLabel>
            </Stat>
          </CardStats>
          <BotaoAcao onClick={(e) => { e.stopPropagation(); onNovoItem('nota'); }}>
            <FontAwesomeIcon icon={faPlus} /> Adicionar Nota
          </BotaoAcao>
        </Card>

        {/* Links */}
        <Card onClick={() => onNovoLink()}>
          <CardIcon className="card-icon">
            <FontAwesomeIcon icon={faLink} />
          </CardIcon>
          <CardTitulo>Links</CardTitulo>
          <CardDescricao>
            Adicione links úteis para facilitar o acesso.
          </CardDescricao>
          <CardStats>
            <Stat>
              <StatNumero>{links?.length || 0}</StatNumero>
              <StatLabel>Total de Links</StatLabel>
            </Stat>
            <Stat>
              <StatNumero>
                {(links?.filter(l => l.favorito) || []).length}
              </StatNumero>
              <StatLabel>Favoritos</StatLabel>
            </Stat>
          </CardStats>
          <BotaoAcao onClick={(e) => { e.stopPropagation(); onNovoLink(); }}>
            <FontAwesomeIcon icon={faPlus} /> Adicionar Link
          </BotaoAcao>
        </Card>

        {/* Favoritos */}
        <Card onClick={() => window.dispatchEvent(new CustomEvent('navegarPara', { detail: 'favoritos' }))}>
          <CardIcon className="card-icon">
            <FontAwesomeIcon icon={faHeart} />
          </CardIcon>
          <CardTitulo>Favoritos</CardTitulo>
          <CardDescricao>
            Veja seus itens favoritos em um só lugar.
          </CardDescricao>
          <CardStats>
            <Stat>
              <StatNumero>
                {(notas?.filter(n => n.favorito) || []).length}
              </StatNumero>
              <StatLabel>Notas Favoritas</StatLabel>
            </Stat>
            <Stat>
              <StatNumero>
                {(links?.filter(l => l.favorito) || []).length}
              </StatNumero>
              <StatLabel>Links Favoritos</StatLabel>
            </Stat>
          </CardStats>
          <BotaoAcao onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent('navegarPara', { detail: 'favoritos' })); }}>
            <FontAwesomeIcon icon={faHeart} /> Ver Favoritos
          </BotaoAcao>
        </Card>
      </GridCards>
    </Container>
  );
};

export default TelaInicial; 