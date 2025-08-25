import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSave, 
  faTrash, 
  faCheck,
  faCalendarAlt,
  faClock,
  faTag,
  faEdit,
  faEye
} from '@fortawesome/free-solid-svg-icons';

// Estilos
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioGrande);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 2px solid var(--corBordaPrimaria);
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
`;

const ModalTitle = styled.h2`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 700;
  margin: 0;
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
  overflow-y: auto;
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: var(--espacamentoMedio);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--espacamentoPequeno);
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoMedia);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  margin-bottom: var(--espacamentoMedio);
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const StatusConcluido = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: ${props => props.concluido ? 'var(--corSucesso)' : 'var(--corAviso)'};
  color: white;
  border-radius: var(--bordaRaioMedia);
  font-weight: 600;
  margin-bottom: var(--espacamentoMedio);
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-top: 2px solid var(--corBordaPrimaria);
  background: var(--corFundoTerciaria);
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const BotaoPrimario = styled(BotaoAcao)`
  background: var(--corPrimaria);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`;

const BotaoSecundario = styled(BotaoAcao)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover:not(:disabled) {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`;

const BotaoPerigo = styled(BotaoAcao)`
  background: var(--corErro);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`;

const BotaoSucesso = styled(BotaoAcao)`
  background: var(--corSucesso);
  color: white;

  &:hover:not(:disabled) {
    background: var(--corSucessoHover);
    transform: translateY(-1px);
  }
`;

const ModalAgendamento = ({ 
  agendamento, 
  onSave, 
  onDelete, 
  onClose, 
  onToggleConcluido 
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    data: '',
    hora: '',
    duracao: 60,
    categoria: '',
    concluido: false
  });
  const [modo, setModo] = useState('editar'); // 'editar', 'visualizar'

  // Categorias disponíveis
  const categorias = [
    'Reunião',
    'Trabalho',
    'Saúde',
    'Pessoal',
    'Estudo',
    'Lazer',
    'Outro'
  ];

  // Inicializar formData quando agendamento mudar
  useEffect(() => {
    if (agendamento) {
      const data = new Date(agendamento.data);
      setFormData({
        titulo: agendamento.titulo || '',
        descricao: agendamento.descricao || '',
        data: data.toISOString().split('T')[0],
        hora: data.toTimeString().slice(0, 5),
        duracao: agendamento.duracao || 60,
        categoria: agendamento.categoria || '',
        concluido: agendamento.concluido || false
      });
    } else {
      // Novo agendamento
      const hoje = new Date();
      setFormData({
        titulo: '',
        descricao: '',
        data: hoje.toISOString().split('T')[0],
        hora: hoje.toTimeString().slice(0, 5),
        duracao: 60,
        categoria: '',
        concluido: false
      });
    }
  }, [agendamento]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataHora = new Date(`${formData.data}T${formData.hora}`);
    
    const agendamentoData = {
      ...formData,
      data: dataHora,
      id: agendamento?.id
    };

    onSave(agendamentoData);
  };

  const handleDelete = () => {
    if (agendamento?.id && window.confirm('Tem certeza que deseja excluir este agendamento?')) {
      onDelete(agendamento.id);
      onClose();
    }
  };

  const handleToggleConcluido = () => {
    if (agendamento?.id) {
      onToggleConcluido(agendamento.id);
    }
  };

  const toggleModo = () => {
    setModo(modo === 'editar' ? 'visualizar' : 'editar');
  };

  const getTitulo = () => {
    if (!agendamento) return 'Novo Agendamento';
    return modo === 'visualizar' ? 'Visualizar Agendamento' : 'Editar Agendamento';
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{getTitulo()}</ModalTitle>
          <BotaoFechar onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </BotaoFechar>
        </ModalHeader>

        <ModalBody>
          {agendamento && (
            <StatusConcluido concluido={formData.concluido}>
              <FontAwesomeIcon icon={faCheck} />
              {formData.concluido ? 'Concluído' : 'Pendente'}
            </StatusConcluido>
          )}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="titulo">
                <FontAwesomeIcon icon={faCalendarAlt} />
                Título *
              </Label>
              <Input
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleInputChange}
                placeholder="Digite o título do agendamento..."
                disabled={modo === 'visualizar'}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="descricao">
                <FontAwesomeIcon icon={faEdit} />
                Descrição
              </Label>
              <Textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                placeholder="Digite a descrição do agendamento..."
                disabled={modo === 'visualizar'}
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="data">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Data *
                </Label>
                <Input
                  id="data"
                  name="data"
                  type="date"
                  value={formData.data}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="hora">
                  <FontAwesomeIcon icon={faClock} />
                  Hora *
                </Label>
                <Input
                  id="hora"
                  name="hora"
                  type="time"
                  value={formData.hora}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="duracao">
                  <FontAwesomeIcon icon={faClock} />
                  Duração (minutos)
                </Label>
                <Select
                  id="duracao"
                  name="duracao"
                  value={formData.duracao}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                >
                  <option value={15}>15 minutos</option>
                  <option value={30}>30 minutos</option>
                  <option value={60}>1 hora</option>
                  <option value={90}>1 hora e 30 minutos</option>
                  <option value={120}>2 horas</option>
                  <option value={180}>3 horas</option>
                  <option value={240}>4 horas</option>
                  <option value={480}>Dia inteiro</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="categoria">
                  <FontAwesomeIcon icon={faTag} />
                  Categoria
                </Label>
                <Select
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleInputChange}
                  disabled={modo === 'visualizar'}
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map(categoria => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </FormRow>

            {agendamento && (
              <CheckboxContainer>
                <Checkbox
                  id="concluido"
                  name="concluido"
                  type="checkbox"
                  checked={formData.concluido}
                  onChange={handleToggleConcluido}
                  disabled={modo === 'visualizar'}
                />
                <CheckboxLabel htmlFor="concluido">
                  Marcar como concluído
                </CheckboxLabel>
              </CheckboxContainer>
            )}
          </form>
        </ModalBody>

        <ModalFooter>
          <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)' }}>
            {agendamento && (
              <>
                <BotaoSecundario onClick={toggleModo}>
                  <FontAwesomeIcon icon={modo === 'visualizar' ? faEdit : faEye} />
                  {modo === 'visualizar' ? 'Editar' : 'Visualizar'}
                </BotaoSecundario>
                <BotaoPerigo onClick={handleDelete}>
                  <FontAwesomeIcon icon={faTrash} />
                  Excluir
                </BotaoPerigo>
              </>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)' }}>
            <BotaoSecundario onClick={onClose}>
              Cancelar
            </BotaoSecundario>
            {modo === 'editar' && (
              <BotaoPrimario onClick={handleSubmit}>
                <FontAwesomeIcon icon={faSave} />
                {agendamento ? 'Atualizar' : 'Salvar'}
              </BotaoPrimario>
            )}
          </div>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAgendamento;
