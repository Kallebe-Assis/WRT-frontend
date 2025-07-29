import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoGrande);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const EstadoVazio = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const IconeVazio = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
`;

const TelaLixeira = () => {
  return (
    <Container>
      <Titulo>
        <FontAwesomeIcon icon={faTrash} />
        Lixeira
      </Titulo>

      <EstadoVazio>
        <IconeVazio>
          <FontAwesomeIcon icon={faTrash} />
        </IconeVazio>
        <h3>Lixeira vazia</h3>
        <p>Nenhum item foi excluído ainda.</p>
        <p style={{ fontSize: 'var(--tamanhoFontePequena)', marginTop: 'var(--espacamentoMedio)' }}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Itens excluídos aparecerão aqui por 30 dias antes de serem removidos permanentemente.
        </p>
      </EstadoVazio>
    </Container>
  );
};

export default TelaLixeira; 