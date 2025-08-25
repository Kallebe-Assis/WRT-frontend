import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faPlus, 
  faChevronLeft, 
  faChevronRight,
  faCalendarDay,
  faCalendarWeek,
  faCalendar,
  faCheck,
  faTimes,
  faEdit,
  faTrash,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import ModalAgendamento from './ModalAgendamento';

// Estilos
const AgendaContainer = styled.div`
  padding: var(--espacamentoGrande);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--corFundoPrimaria);
`;

const HeaderAgenda = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
`;

const TituloAgenda = styled.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const ControlesAgenda = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const BotaoControle = styled.button`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoPrimaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  font-size: var(--tamanhoFontePequena);

  &:hover {
    background: var(--corFundoHover);
    border-color: var(--corPrimaria);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: white;
    border-color: var(--corPrimaria);
  }
`;

const BotaoNovo = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  font-weight: 600;

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`;

const NavegacaoCalendario = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`;

const BotaoNavegacao = styled.button`
  background: transparent;
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoPrimaria);
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--corFundoHover);
    border-color: var(--corPrimaria);
  }
`;

const MesAnoAtual = styled.h2`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  margin: 0;
  min-width: 200px;
  text-align: center;
`;

// Calendário Mensal
const CalendarioMensal = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  overflow: hidden;
  flex: 1;
  min-height: 500px;
`;

const CabecalhoDias = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: var(--corFundoTerciaria);
`;

const DiaCabecalho = styled.div`
  padding: var(--espacamentoPequeno);
  text-align: center;
  font-weight: 600;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const CelulaDia = styled.div`
  background: var(--corFundoPrimaria);
  min-height: 120px;
  padding: var(--espacamentoPequeno);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  position: relative;
  border: 1px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoHover);
  }

  &.outro-mes {
    background: var(--corFundoSecundaria);
    color: var(--corTextoSecundaria);
  }

  &.hoje {
    background: rgba(102, 126, 234, 0.1);
    border-color: var(--corPrimaria);
  }

  &.selecionado {
    background: var(--corPrimaria);
    color: white;
  }
`;

const NumeroDia = styled.div`
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
  margin-bottom: var(--espacamentoPequeno);
`;

const ListaAgendamentos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 80px;
  overflow-y: auto;
`;

const AgendamentoItem = styled.div`
  padding: 2px 4px;
  border-radius: var(--bordaRaioPequena);
  font-size: 0.7rem;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  background: ${props => props.concluido ? 'var(--corSucesso)' : 'var(--corPrimaria)'};
  color: white;
  text-decoration: ${props => props.concluido ? 'line-through' : 'none'};
  opacity: ${props => props.concluido ? 0.7 : 1};

  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

// Calendário Semanal
const CalendarioSemanal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
`;

const CabecalhoSemana = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  background: var(--corFundoTerciaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ColunaHora = styled.div`
  padding: var(--espacamentoPequeno);
  text-align: center;
  font-weight: 600;
  color: var(--corTextoPrimaria);
  border-right: 1px solid var(--corBordaPrimaria);
`;

const ColunaDia = styled.div`
  padding: var(--espacamentoPequeno);
  text-align: center;
  font-weight: 600;
  color: var(--corTextoPrimaria);
  border-right: 1px solid var(--corBordaPrimaria);

  &:last-child {
    border-right: none;
  }
`;

const GradeSemanal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LinhaHora = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid var(--corBordaPrimaria);
  min-height: 60px;

  &:last-child {
    border-bottom: none;
  }
`;

const CelulaHora = styled.div`
  padding: var(--espacamentoPequeno);
  text-align: center;
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  border-right: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoPrimaria);
`;

const CelulaEvento = styled.div`
  padding: var(--espacamentoPequeno);
  border-right: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoPrimaria);
  position: relative;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: var(--corFundoHover);
  }
`;

// Calendário Diário
const CalendarioDiario = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
`;

const CabecalhoDia = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  background: var(--corFundoTerciaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const GradeDiaria = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const LinhaHoraDiaria = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  border-bottom: 1px solid var(--corBordaPrimaria);
  min-height: 60px;

  &:last-child {
    border-bottom: none;
  }
`;

const CelulaEventoDiaria = styled.div`
  padding: var(--espacamentoPequeno);
  border-right: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoPrimaria);
  position: relative;
  cursor: pointer;

  &:hover {
    background: var(--corFundoHover);
  }
`;

// Modal de Desenvolvimento
const ModalDesenvolvimento = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: var(--corFundoPrimaria);
  padding: var(--espacamentoGrande);
  border-radius: var(--bordaRaioGrande);
  text-align: center;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const TelaAgenda = () => {
  const [dataAtual, setDataAtual] = useState(new Date());
  const [visualizacao, setVisualizacao] = useState('mes'); // 'mes', 'semana', 'dia'
  const [agendamentos, setAgendamentos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [mostrarModalDesenvolvimento, setMostrarModalDesenvolvimento] = useState(true);

  // Dados de exemplo para demonstração
  const agendamentosExemplo = [
    {
      id: 1,
      titulo: 'Reunião com Cliente',
      descricao: 'Apresentação do projeto final',
      data: new Date(2024, 11, 15, 14, 0),
      duracao: 60,
      concluido: false,
      categoria: 'Reunião'
    },
    {
      id: 2,
      titulo: 'Dentista',
      descricao: 'Consulta de rotina',
      data: new Date(2024, 11, 16, 9, 30),
      duracao: 30,
      concluido: true,
      categoria: 'Saúde'
    },
    {
      id: 3,
      titulo: 'Entrega do Projeto',
      descricao: 'Finalizar e entregar o projeto X',
      data: new Date(2024, 11, 18, 17, 0),
      duracao: 120,
      concluido: false,
      categoria: 'Trabalho'
    }
  ];

  useEffect(() => {
    setAgendamentos(agendamentosExemplo);
  }, []);

  // Funções de navegação
  const irParaMesAnterior = () => {
    setDataAtual(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const irParaProximoMes = () => {
    setDataAtual(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const irParaHoje = () => {
    setDataAtual(new Date());
  };

  // Funções de CRUD
  const abrirModalNovo = () => {
    setAgendamentoSelecionado(null);
    setModalAberto(true);
  };

  const abrirModalEditar = (agendamento) => {
    setAgendamentoSelecionado(agendamento);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setAgendamentoSelecionado(null);
  };

  const salvarAgendamento = (agendamento) => {
    if (agendamento.id) {
      // Editar
      setAgendamentos(prev => 
        prev.map(item => item.id === agendamento.id ? agendamento : item)
      );
    } else {
      // Novo
      const novoAgendamento = {
        ...agendamento,
        id: Date.now()
      };
      setAgendamentos(prev => [...prev, novoAgendamento]);
    }
    fecharModal();
  };

  const excluirAgendamento = (id) => {
    setAgendamentos(prev => prev.filter(item => item.id !== id));
  };

  const toggleConcluido = (id) => {
    setAgendamentos(prev => 
      prev.map(item => 
        item.id === id ? { ...item, concluido: !item.concluido } : item
      )
    );
  };

  // Funções de renderização do calendário
  const renderCalendarioMensal = () => {
    const primeiroDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
    const ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
    const inicioSemana = primeiroDia.getDay();
    const diasNoMes = ultimoDia.getDate();
    const hoje = new Date();

    const dias = [];
    
    // Dias do mês anterior
    const ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
    for (let i = inicioSemana - 1; i >= 0; i--) {
      const dia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1, ultimoDiaMesAnterior.getDate() - i);
      dias.push({ data: dia, outroMes: true });
    }

    // Dias do mês atual
    for (let i = 1; i <= diasNoMes; i++) {
      const dia = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), i);
      dias.push({ data: dia, outroMes: false });
    }

    // Dias do próximo mês
    const diasRestantes = 42 - dias.length; // 6 semanas * 7 dias
    for (let i = 1; i <= diasRestantes; i++) {
      const dia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, i);
      dias.push({ data: dia, outroMes: true });
    }

    return (
      <CalendarioMensal>
        <CabecalhoDias>
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(dia => (
            <DiaCabecalho key={dia}>{dia}</DiaCabecalho>
          ))}
        </CabecalhoDias>
        {dias.map(({ data, outroMes }, index) => {
          const agendamentosDoDia = agendamentos.filter(agendamento => {
            const agendamentoData = new Date(agendamento.data);
            return agendamentoData.toDateString() === data.toDateString();
          });

          const ehHoje = data.toDateString() === hoje.toDateString();

          return (
            <CelulaDia 
              key={index} 
              className={`${outroMes ? 'outro-mes' : ''} ${ehHoje ? 'hoje' : ''}`}
              onClick={() => {
                setDataAtual(data);
                setVisualizacao('dia');
              }}
            >
              <NumeroDia>{data.getDate()}</NumeroDia>
              <ListaAgendamentos>
                {agendamentosDoDia.slice(0, 3).map(agendamento => (
                  <AgendamentoItem
                    key={agendamento.id}
                    concluido={agendamento.concluido}
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirModalEditar(agendamento);
                    }}
                  >
                    {agendamento.titulo}
                  </AgendamentoItem>
                ))}
                {agendamentosDoDia.length > 3 && (
                  <AgendamentoItem>
                    +{agendamentosDoDia.length - 3} mais
                  </AgendamentoItem>
                )}
              </ListaAgendamentos>
            </CelulaDia>
          );
        })}
      </CalendarioMensal>
    );
  };

  const renderCalendarioSemanal = () => {
    const inicioSemana = new Date(dataAtual);
    inicioSemana.setDate(dataAtual.getDate() - dataAtual.getDay());
    
    const diasSemana = [];
    for (let i = 0; i < 7; i++) {
      const dia = new Date(inicioSemana);
      dia.setDate(inicioSemana.getDate() + i);
      diasSemana.push(dia);
    }

    const horas = Array.from({ length: 24 }, (_, i) => i);

    return (
      <CalendarioSemanal>
        <CabecalhoSemana>
          <ColunaHora>Hora</ColunaHora>
          {diasSemana.map(dia => (
            <ColunaDia key={dia.toDateString()}>
              {dia.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' })}
            </ColunaDia>
          ))}
        </CabecalhoSemana>
        <GradeSemanal>
          {horas.map(hora => (
            <LinhaHora key={hora}>
              <CelulaHora>{hora}:00</CelulaHora>
              {diasSemana.map(dia => {
                const agendamentosHora = agendamentos.filter(agendamento => {
                  const agendamentoData = new Date(agendamento.data);
                  return agendamentoData.toDateString() === dia.toDateString() && 
                         agendamentoData.getHours() === hora;
                });

                return (
                  <CelulaEvento key={dia.toDateString()}>
                    {agendamentosHora.map(agendamento => (
                      <AgendamentoItem
                        key={agendamento.id}
                        concluido={agendamento.concluido}
                        onClick={() => abrirModalEditar(agendamento)}
                      >
                        {agendamento.titulo}
                      </AgendamentoItem>
                    ))}
                  </CelulaEvento>
                );
              })}
            </LinhaHora>
          ))}
        </GradeSemanal>
      </CalendarioSemanal>
    );
  };

  const renderCalendarioDiario = () => {
    const horas = Array.from({ length: 24 }, (_, i) => i);
    const agendamentosDoDia = agendamentos.filter(agendamento => {
      const agendamentoData = new Date(agendamento.data);
      return agendamentoData.toDateString() === dataAtual.toDateString();
    });

    return (
      <CalendarioDiario>
        <CabecalhoDia>
          <ColunaHora>Hora</ColunaHora>
          <ColunaDia>
            {dataAtual.toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </ColunaDia>
        </CabecalhoDia>
        <GradeDiaria>
          {horas.map(hora => {
            const agendamentosHora = agendamentosDoDia.filter(agendamento => {
              const agendamentoData = new Date(agendamento.data);
              return agendamentoData.getHours() === hora;
            });

            return (
              <LinhaHoraDiaria key={hora}>
                <CelulaHora>{hora}:00</CelulaHora>
                <CelulaEventoDiaria>
                  {agendamentosHora.map(agendamento => (
                    <AgendamentoItem
                      key={agendamento.id}
                      concluido={agendamento.concluido}
                      onClick={() => abrirModalEditar(agendamento)}
                    >
                      {agendamento.titulo} - {agendamento.descricao}
                    </AgendamentoItem>
                  ))}
                </CelulaEventoDiaria>
              </LinhaHoraDiaria>
            );
          })}
        </GradeDiaria>
      </CalendarioDiario>
    );
  };

  const renderCalendario = () => {
    switch (visualizacao) {
      case 'semana':
        return renderCalendarioSemanal();
      case 'dia':
        return renderCalendarioDiario();
      default:
        return renderCalendarioMensal();
    }
  };

  return (
    <>
      <AgendaContainer>
        <HeaderAgenda>
          <TituloAgenda>
            <FontAwesomeIcon icon={faCalendarAlt} />
            Minha Agenda
          </TituloAgenda>
          <ControlesAgenda>
            <BotaoControle
              className={visualizacao === 'mes' ? 'ativo' : ''}
              onClick={() => setVisualizacao('mes')}
            >
              <FontAwesomeIcon icon={faCalendar} />
              Mês
            </BotaoControle>
            <BotaoControle
              className={visualizacao === 'semana' ? 'ativo' : ''}
              onClick={() => setVisualizacao('semana')}
            >
              <FontAwesomeIcon icon={faCalendarWeek} />
              Semana
            </BotaoControle>
            <BotaoControle
              className={visualizacao === 'dia' ? 'ativo' : ''}
              onClick={() => setVisualizacao('dia')}
            >
              <FontAwesomeIcon icon={faCalendarDay} />
              Dia
            </BotaoControle>
            <BotaoNovo onClick={abrirModalNovo}>
              <FontAwesomeIcon icon={faPlus} />
              Novo Agendamento
            </BotaoNovo>
          </ControlesAgenda>
        </HeaderAgenda>

        <NavegacaoCalendario>
          <BotaoNavegacao onClick={irParaMesAnterior}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </BotaoNavegacao>
          <MesAnoAtual>
            {dataAtual.toLocaleDateString('pt-BR', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </MesAnoAtual>
          <BotaoNavegacao onClick={irParaProximoMes}>
            <FontAwesomeIcon icon={faChevronRight} />
          </BotaoNavegacao>
          <BotaoControle onClick={irParaHoje}>
            Hoje
          </BotaoControle>
        </NavegacaoCalendario>

        {renderCalendario()}
      </AgendaContainer>

      {modalAberto && (
        <ModalAgendamento
          agendamento={agendamentoSelecionado}
          onSave={salvarAgendamento}
          onDelete={excluirAgendamento}
          onClose={fecharModal}
          onToggleConcluido={toggleConcluido}
        />
      )}

      {mostrarModalDesenvolvimento && (
        <ModalDesenvolvimento>
          <ModalContent>
            <h2>🚧 Em Desenvolvimento</h2>
            <p>
              A tela de Agenda está sendo desenvolvida e em breve estará disponível com todas as funcionalidades!
            </p>
            <p>
              <strong>Funcionalidades planejadas:</strong>
            </p>
            <ul style={{ textAlign: 'left', margin: '20px 0' }}>
              <li>✅ Visualização mensal, semanal e diária</li>
              <li>✅ Criação, edição e exclusão de agendamentos</li>
              <li>✅ Marcação de tarefas concluídas</li>
              <li>✅ Categorização de eventos</li>
              <li>✅ Lembretes e notificações</li>
              <li>✅ Integração com backend</li>
            </ul>
            <BotaoNovo onClick={() => setMostrarModalDesenvolvimento(false)}>
              Entendi, continuar
            </BotaoNovo>
          </ModalContent>
        </ModalDesenvolvimento>
      )}
    </>
  );
};

export default TelaAgenda;
