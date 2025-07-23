import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit, 
  faTrash, 
  faEye, 
  faCopy,
  faCalendar,
  faClock,
  faTag,
  faFlag,
  faCheckCircle,
  faUsers,
  faStickyNote,
  faExpand,
  faShare,
  faWhatsapp,
  faTelegram,
  faEnvelope,
  faDownload,
  faPrint,
  faBookmark,
  faBookmark as faBookmarkSolid,
  faHeart,
  faHeart as faHeartSolid,
  faStar,
  faStar as faStarSolid,
  faMagic,
  faRocket,
  faLightbulb,
  faQrcode,
  faLink,
  faFileExport,
  faFileImport,
  faCog,
  faPalette,
  faFont,
  faSearch,
  faUndo,
  faRedo,
  faSave,
  faEyeSlash,
  faCompress,
  faExternalLinkAlt,
  faShareAlt,
  faCrown,
  faFire,
  faRainbow
} from '@fortawesome/free-solid-svg-icons';
import {
  formatarData,
  truncarTexto,
  formatarCategoria,
  formatarStatus,
  formatarPrioridade,
  obterCorStatus,
  obterCorPrioridade,
  copiarParaClipboard
} from '../utils/formatacao';

const CardContainer = styled.div`
  background: var(--corFundoCard);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--sombraHover);
    border-color: var(--corPrimaria);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.corDestaque || 'var(--corPrimaria)'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`;

const CardTitle = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: ${props => props.tipo === 'nota' ? 'var(--tamanhoFonteGrande)' : 'var(--tamanhoFonteExtraGrande)'};
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
  flex: 1;
  margin-right: var(--espacamentoMedio);
`;

const CardActions = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  flex-shrink: 0;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  background: var(--corFundoSecundaria);
  color: var(--corTextoSecundaria);
  border: none;
  border-radius: var(--bordaRaioPequena);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  font-size: var(--tamanhoFontePequena);

  &:hover {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    transform: scale(1.1);
  }

  &.danger:hover {
    background: var(--corErro);
  }
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
  background: ${props => props.background || 'var(--corFundoSecundaria)'};
  color: ${props => props.color || 'var(--corTextoPrimaria)'};
  border: 1px solid ${props => props.border || 'transparent'};
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 120px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 20px;
    background: linear-gradient(transparent, var(--corFundoCard));
    pointer-events: none;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`;

const CardDates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const PriorityIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: var(--bordaRaioCircular);
  background: ${props => props.cor};
  flex-shrink: 0;
`;

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: var(--bordaRaioCircular);
  background: ${props => props.cor};
  border: 2px solid var(--corFundoCard);
  flex-shrink: 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: var(--espacamentoMedio);
  opacity: 0.5;
`;

const EmptyTitle = styled.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`;

const EmptyText = styled.p`
  margin: 0;
  line-height: 1.6;
`;

const CardItem = ({ 
  item, 
  tipo, 
  onEditar, 
  onExcluir, 
  onVisualizar,
  onCopiar,
  onTelaCheia,
  onCompartilhar,
  onFavoritar,
  onBookmark,
  onExportar,
  onImprimir
}) => {
  const handleCopiar = async () => {
    const textoParaCopiar = `${item.titulo}\n\n${item.conteudo || ''}`;
    const sucesso = await copiarParaClipboard(textoParaCopiar);
    
    if (sucesso && onCopiar) {
      onCopiar('Conteúdo copiado para a área de transferência!');
    }
  };

  const handleClickCard = () => {
    // Ao clicar em qualquer lugar da nota, vai direto para edição
    onEditar(item);
  };

  const handleExcluir = (e) => {
    e.stopPropagation();
    
    // Confirmação antes de deletar
    const confirmacao = window.confirm(
      `Tem certeza que deseja excluir a nota "${item.titulo}"?\n\nEsta ação não pode ser desfeita.`
    );
    
    if (confirmacao) {
      onExcluir(item._id || item.id);
    }
  };

  const obterIconeTipo = () => {
    return faStickyNote; // Sempre nota para o novo sistema
  };

  const obterCorDestaque = () => {
    return 'var(--corPrimaria)'; // Cor padrão para notas
  };

  const renderizarConteudo = () => {
    if (!item.conteudo) {
      return <em>Sem conteúdo</em>;
    }
    
    // Remove tags HTML para exibição no card
    const textoLimpo = item.conteudo.replace(/<[^>]*>/g, '');
    const limite = tipo === 'nota' ? 80 : 150;
    return truncarTexto(textoLimpo, limite);
  };

  const renderizarBadges = () => {
    const badges = [];

    // Badge de tópico
    if (item.topico) {
      badges.push(
        <Badge key="topico" background="var(--corFundoSecundaria)">
          <FontAwesomeIcon icon={faTag} size="xs" />
          {item.topico}
        </Badge>
      );
    }

    return badges;
  };

  if (!item) {
    return (
      <EmptyState>
        <EmptyIcon>
          <FontAwesomeIcon icon={obterIconeTipo()} />
        </EmptyIcon>
        <EmptyTitle>Nenhum {tipo} encontrado</EmptyTitle>
        <EmptyText>
          Clique no botão "Novo {tipo}" para criar seu primeiro {tipo}.
        </EmptyText>
      </EmptyState>
    );
  }

  return (
    <CardContainer 
      tipo={tipo}
      corDestaque={obterCorDestaque()}
      onClick={handleClickCard}
      title="Clique para editar esta nota"
    >
      <CardHeader>
        <CardTitle tipo={tipo}>{item.titulo}</CardTitle>
        <CardActions>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onTelaCheia && onTelaCheia(item);
            }}
            title="Visualizar em tela cheia"
          >
            <FontAwesomeIcon icon={faExpand} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onCompartilhar && onCompartilhar(item);
            }}
            title="Compartilhar"
          >
            <FontAwesomeIcon icon={faShare} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onFavoritar && onFavoritar(item);
            }}
            title="Favoritar"
          >
            <FontAwesomeIcon icon={faHeart} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onBookmark && onBookmark(item);
            }}
            title="Adicionar aos favoritos"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              handleCopiar();
            }}
            title="Copiar conteúdo"
          >
            <FontAwesomeIcon icon={faCopy} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onExportar && onExportar(item);
            }}
            title="Exportar"
          >
            <FontAwesomeIcon icon={faDownload} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onImprimir && onImprimir(item);
            }}
            title="Imprimir"
          >
            <FontAwesomeIcon icon={faPrint} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onVisualizar(item);
            }}
            title="Visualizar (não editar)"
          >
            <FontAwesomeIcon icon={faEye} />
          </ActionButton>
          <ActionButton
            onClick={(e) => {
              e.stopPropagation();
              onEditar(item);
            }}
            title="Editar nota"
          >
            <FontAwesomeIcon icon={faEdit} />
          </ActionButton>
          <ActionButton
            onClick={handleExcluir}
            className="danger"
            title="Excluir nota"
          >
            <FontAwesomeIcon icon={faTrash} />
          </ActionButton>
        </CardActions>
      </CardHeader>

      {tipo !== 'nota' && (
        <CardMeta>
          {renderizarBadges()}
        </CardMeta>
      )}

      <CardContent>
        {renderizarConteudo()}
      </CardContent>

      {tipo !== 'nota' && (
        <CardFooter>
          <CardDates>
            <DateItem>
              <FontAwesomeIcon icon={faCalendar} />
              Criado: {formatarData(item.dataCriacao, 'relativo')}
            </DateItem>
            {item.dataModificacao && item.dataCriacao !== item.dataModificacao && (
              <DateItem>
                <FontAwesomeIcon icon={faClock} />
                Editado: {formatarData(item.dataModificacao, 'relativo')}
              </DateItem>
            )}
          </CardDates>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--espacamentoPequeno)' }}>
            {item.ativo === false && (
              <Badge background="var(--corErro)" color="white">
                Deletado
              </Badge>
            )}
          </div>
        </CardFooter>
      )}
    </CardContainer>
  );
};

export default CardItem; 