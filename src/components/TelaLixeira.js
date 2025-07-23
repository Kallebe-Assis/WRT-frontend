import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrash, 
  faUndo, 
  faTrashAlt, 
  faExclamationTriangle,
  faInfoCircle,
  faCalendarAlt,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';

// Styled Components
const ContainerLixeira = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderLixeira = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBorda);
`;

const TituloLixeira = styled.h2`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corTextoPrimaria);
  margin: 0;
  
  svg {
    color: var(--corAviso);
  }
`;

const EstatisticasLixeira = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  font-size: 0.9rem;
  color: var(--corTextoSecundaria);
`;

const AvisoLixeira = styled.div`
  background: var(--corAvisoClara);
  border: 1px solid var(--corAviso);
  border-radius: var(--bordaRaio);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corAvisoEscura);
`;

const ListaNotasDeletadas = styled.div`
  display: grid;
  gap: var(--espacamentoMedio);
`;

const CardNotaDeletada = styled.div`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBorda);
  border-radius: var(--bordaRaio);
  padding: var(--espacamentoMedio);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoPequeno);
`;

const TituloNota = styled.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: 1.1rem;
  flex: 1;
`;

const BotoesAcao = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`;

const BotaoAcao = styled.button`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: none;
  border-radius: var(--bordaRaio);
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const BotaoRestaurar = styled(BotaoAcao)`
  background: var(--corSucesso);
  color: white;
  
  &:hover {
    background: var(--corSucessoEscura);
  }
`;

const BotaoExcluirDefinitivo = styled(BotaoAcao)`
  background: var(--corErro);
  color: white;
  
  &:hover {
    background: var(--corErroEscura);
  }
`;

const ConteudoNota = styled.div`
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoMedio);
  line-height: 1.5;
  
  p {
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const MetadadosNota = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  font-size: 0.85rem;
  color: var(--corTextoTerciaria);
`;

const MetadadoItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const BadgeTopico = styled.span`
  background: var(--corPrimariaClara);
  color: var(--corPrimaria);
  padding: 2px var(--espacamentoPequeno);
  border-radius: 12px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MensagemVazia = styled.div`
  text-align: center;
  padding: var(--espacamentoGrande);
  color: var(--corTextoSecundaria);
  
  svg {
    font-size: 3rem;
    margin-bottom: var(--espacamentoMedio);
    opacity: 0.5;
  }
`;

const TelaLixeira = () => {
  const { 
    notasDeletadas, 
    restaurarNota, 
    excluirNotaDefinitivamente,
    carregando 
  } = useNotasAPIContext();

  const [notaRestaurando, setNotaRestaurando] = useState(null);
  const [notaExcluindo, setNotaExcluindo] = useState(null);

  const handleRestaurarNota = async (nota) => {
    if (window.confirm(`Tem certeza que deseja restaurar a nota "${nota.titulo}"?`)) {
      setNotaRestaurando(nota.id || nota._id);
      try {
        await restaurarNota(nota.id || nota._id);
        alert('Nota restaurada com sucesso!');
      } catch (error) {
        console.error('Erro ao restaurar nota:', error);
        alert('Erro ao restaurar nota. Tente novamente.');
      } finally {
        setNotaRestaurando(null);
      }
    }
  };

  const handleExcluirDefinitivamente = async (nota) => {
    const confirmacao = window.confirm(
      `ATENÇÃO: Esta ação é irreversível!\n\nTem certeza que deseja excluir definitivamente a nota "${nota.titulo}"?\n\nEsta nota será removida permanentemente e não poderá ser recuperada.`
    );
    
    if (confirmacao) {
      setNotaExcluindo(nota.id || nota._id);
      try {
        await excluirNotaDefinitivamente(nota.id || nota._id);
        alert('Nota excluída definitivamente!');
      } catch (error) {
        console.error('Erro ao excluir nota definitivamente:', error);
        alert('Erro ao excluir nota. Tente novamente.');
      } finally {
        setNotaExcluindo(null);
      }
    }
  };

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncarTexto = (texto, limite = 150) => {
    if (!texto) return '';
    return texto.length > limite ? texto.substring(0, limite) + '...' : texto;
  };

  if (carregando) {
    return (
      <ContainerLixeira>
        <div>Carregando lixeira...</div>
      </ContainerLixeira>
    );
  }

  return (
    <ContainerLixeira>
      <HeaderLixeira>
        <TituloLixeira>
          <FontAwesomeIcon icon={faTrash} />
          Lixeira
        </TituloLixeira>
        <EstatisticasLixeira>
          <span>{notasDeletadas.length} nota{notasDeletadas.length !== 1 ? 's' : ''} excluída{notasDeletadas.length !== 1 ? 's' : ''}</span>
        </EstatisticasLixeira>
      </HeaderLixeira>

      <AvisoLixeira>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <div>
          <strong>Atenção:</strong> As notas na lixeira são excluídas automaticamente após 30 dias. 
          Você pode restaurá-las ou excluí-las definitivamente.
        </div>
      </AvisoLixeira>

      {notasDeletadas.length === 0 ? (
        <MensagemVazia>
          <FontAwesomeIcon icon={faTrashAlt} />
          <h3>Lixeira vazia</h3>
          <p>Nenhuma nota foi excluída ainda.</p>
        </MensagemVazia>
      ) : (
        <ListaNotasDeletadas>
          {notasDeletadas.map(nota => (
            <CardNotaDeletada key={nota.id || nota._id}>
              <HeaderCard>
                <TituloNota>{nota.titulo}</TituloNota>
                <BotoesAcao>
                  <BotaoRestaurar
                    onClick={() => handleRestaurarNota(nota)}
                    disabled={notaRestaurando === (nota.id || nota._id)}
                    title="Restaurar nota"
                  >
                    <FontAwesomeIcon icon={faUndo} />
                    {notaRestaurando === (nota.id || nota._id) ? 'Restaurando...' : 'Restaurar'}
                  </BotaoRestaurar>
                  <BotaoExcluirDefinitivo
                    onClick={() => handleExcluirDefinitivamente(nota)}
                    disabled={notaExcluindo === (nota.id || nota._id)}
                    title="Excluir definitivamente"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    {notaExcluindo === (nota.id || nota._id) ? 'Excluindo...' : 'Excluir'}
                  </BotaoExcluirDefinitivo>
                </BotoesAcao>
              </HeaderCard>

              <ConteudoNota>
                <p>{truncarTexto(nota.conteudo, 200)}</p>
              </ConteudoNota>

              <MetadadosNota>
                <MetadadoItem>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>Excluída em: {formatarData(nota.dataModificacao)}</span>
                </MetadadoItem>
                
                {nota.topico && (
                  <MetadadoItem>
                    <FontAwesomeIcon icon={faTag} />
                    <BadgeTopico>
                      <FontAwesomeIcon icon={faTag} size="xs" />
                      {nota.topico}
                    </BadgeTopico>
                  </MetadadoItem>
                )}
                
                <MetadadoItem>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>Criada em: {formatarData(nota.dataCriacao)}</span>
                </MetadadoItem>
              </MetadadosNota>
            </CardNotaDeletada>
          ))}
        </ListaNotasDeletadas>
      )}
    </ContainerLixeira>
  );
};

export default TelaLixeira; 