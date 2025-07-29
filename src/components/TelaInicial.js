import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faTimes,
  faHeart,
  faStickyNote,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import Loading from './Loading';
import { formatarData } from '../utils/formatacao';

const Container = styled.div`
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Subtitulo = styled.p`
  color: var(--corTextoSecundaria);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const GradeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const IconeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 120px;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--corPrimaria);
  }

  &.arrastando {
    opacity: 0.5;
    transform: rotate(5deg);
  }

  &.sobre {
    border-color: var(--corSecundaria);
    background: var(--corFundoHover);
  }
`;

const IconeImagem = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
  border-radius: var(--bordaRaioPequena);
`;

const IconeTexto = styled.span`
  color: var(--corTextoPrimaria);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`;

const BotaoAdicionar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: var(--corFundoCard);
  border: 2px dashed var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 120px;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoHover);
    transform: translateY(-2px);
  }

  &.sobre {
    border-color: var(--corPrimaria);
    background: var(--corFundoHover);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const IconeAdicionar = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--corPrimaria);
  border-radius: 50%;
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1.2rem;
`;

const TextoAdicionar = styled.span`
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;
  font-weight: 500;
`;

// Modal styles
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
`;

const ModalContent = styled.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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

const Contador = styled.span`
  background: var(--corPrimaria);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const TelaInicial = ({ 
  notas, 
  links, 
  carregando, 
  carregandoLinks,
  onNovoItem,
  onEditarItem,
  onVisualizarItem,
  onTelaCheia
}) => {
  const [itensRecentes, setItensRecentes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoNovoItem, setTipoNovoItem] = useState(null);

  // Combinar notas e links recentes
  useEffect(() => {
    const todosItens = [
      ...(notas || []).map(nota => ({ ...nota, tipo: 'nota' })),
      ...(links || []).map(link => ({ ...link, tipo: 'link' }))
    ];

    // Ordenar por data de criação (mais recentes primeiro)
    const itensOrdenados = todosItens
      .sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao))
      .slice(0, 6); // Mostrar apenas os 6 mais recentes

    setItensRecentes(itensOrdenados);
  }, [notas, links]);

  const handleItemClick = (item) => {
    if (item.tipo === 'nota') {
      onVisualizarItem(item);
    } else if (item.tipo === 'link') {
      window.open(item.url, '_blank');
    }
  };

  const handleNovoItem = (tipo) => {
    setTipoNovoItem(tipo);
    setModalAberto(true);
  };

  const handleConfirmarNovo = () => {
    onNovoItem();
    setModalAberto(false);
    setTipoNovoItem(null);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setTipoNovoItem(null);
  };

  if (carregando || carregandoLinks) {
    return <Loading />;
  }

  return (
    <Container>
      <Titulo>Bem-vindo ao WRTmind</Titulo>
      <Subtitulo>
        Gerencie suas notas e links de forma organizada e eficiente.
      </Subtitulo>

      <GradeContainer>
        {/* Notas */}
        <IconeItem onClick={() => handleNovoItem('nota')}>
          <FontAwesomeIcon 
            icon={faStickyNote} 
            style={{ fontSize: '48px', color: 'var(--corPrimaria)' }}
          />
          <IconeTexto>
            Notas
            <Contador>{notas?.length || 0}</Contador>
          </IconeTexto>
        </IconeItem>

        {/* Links */}
        <IconeItem onClick={() => handleNovoItem('link')}>
          <FontAwesomeIcon 
            icon={faLink} 
            style={{ fontSize: '48px', color: 'var(--corSecundaria)' }}
          />
          <IconeTexto>
            Links
            <Contador>{links?.length || 0}</Contador>
          </IconeTexto>
        </IconeItem>

        {/* Favoritos */}
        <IconeItem onClick={() => window.dispatchEvent(new CustomEvent('navegarPara', { detail: 'favoritos' }))}>
          <FontAwesomeIcon 
            icon={faHeart} 
            style={{ fontSize: '48px', color: '#FF6B6B' }}
          />
          <IconeTexto>
            Favoritos
            <Contador>
              {(notas?.filter(n => n.favorito) || []).length}
            </Contador>
          </IconeTexto>
        </IconeItem>

        {/* Adicionar novo */}
        <BotaoAdicionar onClick={() => handleNovoItem('nota')}>
          <IconeAdicionar>
            <FontAwesomeIcon icon={faPlus} />
          </IconeAdicionar>
          <TextoAdicionar>Adicionar</TextoAdicionar>
        </BotaoAdicionar>
      </GradeContainer>

      {/* Itens Recentes */}
      {itensRecentes.length > 0 && (
        <>
          <Titulo style={{ marginTop: '3rem', fontSize: '1.8rem' }}>
            Itens Recentes
          </Titulo>
          <GradeContainer>
            {itensRecentes.map((item) => (
              <IconeItem 
                key={`${item.tipo}-${item.id}`}
                onClick={() => handleItemClick(item)}
              >
                <FontAwesomeIcon 
                  icon={item.tipo === 'nota' ? faStickyNote : faLink}
                  style={{ 
                    fontSize: '32px', 
                    color: item.tipo === 'nota' ? 'var(--corPrimaria)' : 'var(--corSecundaria)' 
                  }}
                />
                <IconeTexto>
                  {item.titulo || item.nome}
                  <br />
                  <small style={{ color: 'var(--corTextoSecundaria)' }}>
                    {formatarData(item.dataCriacao)}
                  </small>
                </IconeTexto>
              </IconeItem>
            ))}
          </GradeContainer>
        </>
      )}

      {/* Modal de confirmação */}
      {modalAberto && (
        <ModalOverlay onClick={handleFecharModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                Novo {tipoNovoItem === 'nota' ? 'Nota' : 'Link'}
              </ModalTitle>
              <BotaoFechar onClick={handleFecharModal}>
                <FontAwesomeIcon icon={faTimes} />
              </BotaoFechar>
            </ModalHeader>
            
            <p style={{ marginBottom: '1.5rem', color: 'var(--corTextoSecundaria)' }}>
              Deseja criar um novo {tipoNovoItem === 'nota' ? 'nota' : 'link'}?
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button 
                onClick={handleFecharModal}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid var(--corBordaPrimaria)',
                  background: 'transparent',
                  borderRadius: 'var(--bordaRaioMedia)',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirmarNovo}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  borderRadius: 'var(--bordaRaioMedia)',
                  cursor: 'pointer'
                }}
              >
                Criar
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default TelaInicial; 