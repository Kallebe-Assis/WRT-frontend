import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faEdit, 
  faTrash, 
  faCopy, 
  faCalendarAlt,
  faTag,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';
import GerenciadorTopicos from './GerenciadorTopicos';
import {
  formatarData,
  formatarCategoria,
  formatarStatus,
  formatarPrioridade,
  obterCorStatus,
  obterCorPrioridade,
  copiarParaClipboard
} from '../utils/formatacao';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoModal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--zIndexModal);
  backdrop-filter: blur(5px);
  padding: var(--espacamentoMedio);
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  width: 100%;
  max-width: ${props => props.tipo === 'link' ? '600px' : '900px'};
  max-height: 90vh;
  overflow: hidden;
  animation: fadeIn 0.3s ease-out;
  border: 2px solid var(--corBordaPrimaria);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoGrande);
  border-bottom: 2px solid var(--corBordaPrimaria);
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);
`;

const ModalTitle = styled.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
  flex: 1;
  margin-right: var(--espacamentoMedio);
`;

const HeaderActions = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio);
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  color: var(--corTextoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &.danger:hover {
    background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
    border-color: var(--corErro);
  }
`;

const BotaoFechar = styled.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`;

const ModalContent = styled.div`
  padding: var(--espacamentoGrande);
  max-height: calc(90vh - 80px);
  overflow-y: auto;
`;

const ItemMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  background: ${props => props.background || 'var(--corFundoSecundaria)'};
  color: ${props => props.color || 'var(--corTextoPrimaria)'};
  border: 1px solid ${props => props.border || 'transparent'};
`;

const ContentSection = styled.div`
  margin-bottom: var(--espacamentoGrande);
`;

const SectionTitle = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  margin-bottom: var(--espacamentoMedio);
  padding-bottom: var(--espacamentoPequeno);
  border-bottom: 2px solid var(--corBordaPrimaria);
`;

const ContentDisplay = styled.div`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  min-height: 200px;
  line-height: 1.8;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);

  /* Estilos para conteúdo HTML */
  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin: var(--espacamentoMedio) 0 var(--espacamentoPequeno) 0;
  }

  p {
    margin-bottom: var(--espacamentoMedio);
  }

  ul, ol {
    margin: var(--espacamentoMedio) 0;
    padding-left: var(--espacamentoGrande);
  }

  li {
    margin-bottom: var(--espacamentoPequeno);
  }

  blockquote {
    border-left: 4px solid var(--corPrimaria);
    margin: var(--espacamentoMedio) 0;
    padding-left: var(--espacamentoMedio);
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  code {
    background: var(--corFundoTerciaria);
    padding: 2px 6px;
    border-radius: var(--bordaRaioPequena);
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background: var(--corFundoTerciaria);
    padding: var(--espacamentoMedio);
    border-radius: var(--bordaRaioMedia);
    overflow-x: auto;
    margin: var(--espacamentoMedio) 0;
  }

  a {
    color: var(--corPrimaria);
    text-decoration: underline;
  }

  a:hover {
    color: var(--corSecundaria);
  }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s, strike {
    text-decoration: line-through;
  }
`;

const DatesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoGrande);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
`;

const DateLabel = styled.span`
  color: var(--corTextoSecundaria);
  font-weight: 500;
  min-width: 80px;
`;

const DateValue = styled.span`
  color: var(--corTextoPrimaria);
  font-weight: 600;
`;

const ModalVisualizar = ({ 
  visivel, 
  item, 
  tipo, 
  onFechar, 
  onEditar, 
  onExcluir,
  onCopiar 
}) => {
  const { categorias } = useNotasAPIContext();

  const handleCopiar = async () => {
    if (!item) return;
    
    const textoParaCopiar = `${item.titulo}\n\n${item.conteudo.replace(/<[^>]*>/g, '')}`;
    const sucesso = await copiarParaClipboard(textoParaCopiar);
    
    if (sucesso && onCopiar) {
      onCopiar('Conteúdo copiado para a área de transferência!');
    }
  };

  const renderizarBadges = () => {
    if (!item) return null;

    const badges = [];

    // Badge de categoria
    badges.push(
      <Badge key="categoria" background="var(--corFundoTerciaria)">
        <FontAwesomeIcon icon={faTag} />
        {formatarCategoria(item.categoria)}
      </Badge>
    );

    // Badge de prioridade (apenas para projetos e reuniões)
    if (item.prioridade && (tipo === 'projeto' || tipo === 'reuniao')) {
      badges.push(
        <Badge 
          key="prioridade" 
          background={obterCorPrioridade(item.prioridade)}
          color="white"
        >
          <FontAwesomeIcon icon={faFlag} />
          {formatarPrioridade(item.prioridade)}
        </Badge>
      );
    }

    // Badge de status (apenas para projetos e reuniões)
    if (item.status && (tipo === 'projeto' || tipo === 'reuniao')) {
      badges.push(
        <Badge 
          key="status" 
          background={obterCorStatus(item.status)}
          color="white"
        >
          <FontAwesomeIcon icon={faClock} />
          {formatarStatus(item.status)}
        </Badge>
      );
    }

    return badges;
  };

  const renderizarConteudo = () => {
    if (!item) return null;

    if (tipo === 'link') {
      return (
        <>
          {item.imagemUrl && (
            <LinkImageContainer>
              <img src={item.imagemUrl} alt={item.nome} />
            </LinkImageContainer>
          )}
          
          <LinkInfo>
            <InfoSection>
              <InfoLabel>Nome</InfoLabel>
              <InfoValue>{item.nome}</InfoValue>
            </InfoSection>
            
            <InfoSection>
              <InfoLabel>URL</InfoLabel>
              <LinkUrl onClick={() => window.open(item.url, '_blank')}>
                {item.url}
              </LinkUrl>
            </InfoSection>
            
            {item.descricao && (
              <InfoSection>
                <InfoLabel>Descrição</InfoLabel>
                <InfoValue>{item.descricao}</InfoValue>
              </InfoSection>
            )}
            
            <InfoSection>
              <InfoLabel>Data de Criação</InfoLabel>
              <InfoValue>{formatarData(item.createdAt)}</InfoValue>
            </InfoSection>
            
            {item.categoria && (
              <InfoSection>
                <InfoLabel>Categoria</InfoLabel>
                <InfoValue>{item.categoria}</InfoValue>
              </InfoSection>
            )}
          </LinkInfo>
        </>
      );
    }

    // Conteúdo para notas (mantido como estava)
    return (
      <div>
        {renderizarBadges()}
        
        <div style={{ marginBottom: 'var(--espacamentoGrande)' }}>
          <h3 style={{ 
            color: 'var(--corTextoPrimaria)', 
            marginBottom: 'var(--espacamentoMedio)',
            fontSize: 'var(--tamanhoFonteExtraGrande)',
            fontWeight: '600'
          }}>
            {item.titulo}
          </h3>
          
          <div style={{ 
            color: 'var(--corTextoSecundaria)', 
            lineHeight: '1.8',
            fontSize: 'var(--tamanhoFonteMedia)',
            whiteSpace: 'pre-wrap'
          }}>
            {item.conteudo}
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 'var(--espacamentoMedio)',
          marginTop: 'var(--espacamentoGrande)'
        }}>
          <div style={{ 
            background: 'var(--corFundoSecundaria)', 
            padding: 'var(--espacamentoMedio)', 
            borderRadius: 'var(--bordaRaioMedia)',
            border: '1px solid var(--corBordaPrimaria)'
          }}>
            <div style={{ 
              color: 'var(--corTextoSecundaria)', 
              fontSize: 'var(--tamanhoFontePequena)', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 'var(--espacamentoPequeno)'
            }}>
              Criado em
            </div>
            <div style={{ color: 'var(--corTextoPrimaria)' }}>
              {formatarData(item.dataCriacao)}
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--corFundoSecundaria)', 
            padding: 'var(--espacamentoMedio)', 
            borderRadius: 'var(--bordaRaioMedia)',
            border: '1px solid var(--corBordaPrimaria)'
          }}>
            <div style={{ 
              color: 'var(--corTextoSecundaria)', 
              fontSize: 'var(--tamanhoFontePequena)', 
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 'var(--espacamentoPequeno)'
            }}>
              Modificado em
            </div>
            <div style={{ color: 'var(--corTextoPrimaria)' }}>
              {formatarData(item.dataModificacao)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!visivel || !item) return null;

  const categoria = categorias.find(cat => cat.id === item.categoriaId);
  const dataCriacao = new Date(item.dataCriacao).toLocaleDateString('pt-BR');
  const dataAtualizacao = new Date(item.dataAtualizacao).toLocaleDateString('pt-BR');

  const obterCorPrioridade = (prioridade) => {
    switch (prioridade) {
      case 'alta': return '#f44336';
      case 'media': return '#ff9800';
      case 'baixa': return '#4caf50';
      default: return '#9e9e9e';
    }
  };

  const obterCorStatus = (status) => {
    switch (status) {
      case 'concluido': return '#4caf50';
      case 'em_andamento': return '#2196f3';
      case 'pendente': return '#ff9800';
      case 'cancelado': return '#f44336';
      default: return '#9e9e9e';
    }
  };

  const obterTextoPrioridade = (prioridade) => {
    switch (prioridade) {
      case 'alta': return 'Alta';
      case 'media': return 'Média';
      case 'baixa': return 'Baixa';
      default: return 'Não definida';
    }
  };

  const obterTextoStatus = (status) => {
    switch (status) {
      case 'concluido': return 'Concluído';
      case 'em_andamento': return 'Em Andamento';
      case 'pendente': return 'Pendente';
      case 'cancelado': return 'Cancelado';
      default: return 'Não definido';
    }
  };

  return (
    <ModalOverlay onClick={onFechar}>
      <ModalContainer tipo={tipo} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            {tipo === 'link' ? item.nome : item.titulo}
          </ModalTitle>
          <HeaderActions>
            <ActionButton onClick={onCopiar}>
              <FontAwesomeIcon icon={faCopy} />
              Copiar
            </ActionButton>
            <ActionButton onClick={onEditar}>
              <FontAwesomeIcon icon={faEdit} />
              Editar
            </ActionButton>
            <ActionButton className="danger" onClick={onExcluir}>
              <FontAwesomeIcon icon={faTrash} />
              Excluir
            </ActionButton>
            <BotaoFechar onClick={onFechar}>
              <FontAwesomeIcon icon={faTimes} />
            </BotaoFechar>
          </HeaderActions>
        </ModalHeader>
        
        <ModalContent>
          {renderizarConteudo()}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalVisualizar; 