import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faEdit,
  faCopy,
  faPrint,
  faDownload,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import FullscreenButton from './FullscreenButton';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`;

const ModalContent = styled.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
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
`;

const NotaTitulo = styled.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: 1.8rem;
  font-weight: 700;
`;

const NotaConteudo = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.8;
  font-size: var(--tamanhoFonteMedia);
  white-space: pre-wrap;
  margin-bottom: var(--espacamentoGrande);
`;

const NotaMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  flex-wrap: wrap;
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: white;
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

const BotaoFavorito = styled(BotaoAcao)`
  background: ${props => props.favorito ? '#FF6B6B' : 'var(--corFundoSecundaria)'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoPrimaria)'};
  border: 2px solid ${props => props.favorito ? '#FF6B6B' : 'var(--corBordaPrimaria)'};

  &:hover {
    background: ${props => props.favorito ? '#FF5252' : 'var(--corFundoTerciaria)'};
    border-color: ${props => props.favorito ? '#FF5252' : 'var(--corPrimaria)'};
  }
`;

const NotaTelaCheia = ({
  nota,
  isVisible,
  onClose,
  onEditar,
  onCopiar,
  onExportar,
  onImprimir,
  onFavoritar,
  onToggleFullscreen,
  isFullscreen = false
}) => {
  if (!isVisible || !nota) return null;

  const handleCopiar = async () => {
    const textoParaCopiar = `${nota.titulo}\n\n${nota.conteudo}`;
    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      alert('Conteúdo copiado para a área de transferência!');
    } catch (error) {
      console.error('Erro ao copiar:', error);
      alert('Erro ao copiar conteúdo');
    }
  };

  const handleFavoritar = () => {
    if (onFavoritar) {
      onFavoritar(nota.id);
    }
  };

  const formatarData = (dataString) => {
    return new Date(dataString).toLocaleString('pt-BR');
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FontAwesomeIcon icon={faStar} />
            Visualizar Nota
          </ModalTitle>
          <div style={{ display: 'flex', gap: 'var(--espacamentoMedio)', alignItems: 'center' }}>
            {onToggleFullscreen && (
              <FullscreenButton
                onClick={onToggleFullscreen}
                isFullscreen={isFullscreen}
              />
            )}
            <BotaoFechar onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </BotaoFechar>
          </div>
        </ModalHeader>

        <ModalBody>
          <NotaTitulo>{nota.titulo}</NotaTitulo>

          <NotaMeta>
            <MetaInfo>
              <span>Criada em: {formatarData(nota.dataCriacao)}</span>
              {nota.dataModificacao !== nota.dataCriacao && (
                <span>• Editada em: {formatarData(nota.dataModificacao)}</span>
              )}
              {nota.topico && (
                <span>• Tópico: {nota.topico}</span>
              )}
            </MetaInfo>
            {nota.favorito && (
              <FontAwesomeIcon icon={faHeart} style={{ color: '#FF6B6B' }} />
            )}
          </NotaMeta>

          <NotaConteudo>{nota.conteudo}</NotaConteudo>

          <ContainerBotoes>
            <BotaoFavorito
              favorito={nota.favorito}
              onClick={handleFavoritar}
            >
              <FontAwesomeIcon icon={nota.favorito ? faHeart : faStar} />
              {nota.favorito ? 'Favorito' : 'Favoritar'}
            </BotaoFavorito>

            <BotaoSecundario onClick={onEditar}>
              <FontAwesomeIcon icon={faEdit} />
              Editar
            </BotaoSecundario>

            <BotaoSecundario onClick={handleCopiar}>
              <FontAwesomeIcon icon={faCopy} />
              Copiar
            </BotaoSecundario>

            {onExportar && (
              <BotaoSecundario onClick={onExportar}>
                <FontAwesomeIcon icon={faDownload} />
                Exportar
              </BotaoSecundario>
            )}

            {onImprimir && (
              <BotaoSecundario onClick={onImprimir}>
                <FontAwesomeIcon icon={faPrint} />
                Imprimir
              </BotaoSecundario>
            )}
          </ContainerBotoes>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NotaTelaCheia; 