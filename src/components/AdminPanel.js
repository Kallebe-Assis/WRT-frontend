import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faUsers,
  faDatabase,
  faChartBar,
  faCog,
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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
`;

const Card = styled.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
`;

const CardTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const CardConteudo = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
`;

const StatLabel = styled.span`
  color: var(--corTextoPrimaria);
  font-weight: 500;
`;

const StatValue = styled.span`
  color: var(--corPrimaria);
  font-weight: 600;
  font-size: 1.1rem;
`;

const AdminPanel = () => {
  return (
    <Container>
      <Titulo>
        <FontAwesomeIcon icon={faUserShield} />
        Painel Administrativo
      </Titulo>

      <Grid>
        <Card>
          <CardTitulo>
            <FontAwesomeIcon icon={faUsers} />
            Usuários
          </CardTitulo>
          <CardConteudo>
            <StatItem>
              <StatLabel>Total de Usuários</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Usuários Ativos</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Novos Hoje</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
          </CardConteudo>
        </Card>

        <Card>
          <CardTitulo>
            <FontAwesomeIcon icon={faDatabase} />
            Dados
          </CardTitulo>
          <CardConteudo>
            <StatItem>
              <StatLabel>Total de Notas</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Total de Links</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Notas Favoritas</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
          </CardConteudo>
        </Card>

        <Card>
          <CardTitulo>
            <FontAwesomeIcon icon={faChartBar} />
            Estatísticas
          </CardTitulo>
          <CardConteudo>
            <StatItem>
              <StatLabel>Requisições Hoje</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Erros Hoje</StatLabel>
              <StatValue>0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Taxa de Sucesso</StatLabel>
              <StatValue>0%</StatValue>
            </StatItem>
          </CardConteudo>
        </Card>

        <Card>
          <CardTitulo>
            <FontAwesomeIcon icon={faCog} />
            Sistema
          </CardTitulo>
          <CardConteudo>
            <StatItem>
              <StatLabel>Versão</StatLabel>
              <StatValue>v1.0.0</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Status</StatLabel>
              <StatValue>Online</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Backend</StatLabel>
              <StatValue>Vercel</StatValue>
            </StatItem>
          </CardConteudo>
        </Card>
      </Grid>

      <Card style={{ marginTop: 'var(--espacamentoGrande)' }}>
        <CardTitulo>
          <FontAwesomeIcon icon={faInfoCircle} />
          Informações do Sistema
        </CardTitulo>
        <CardConteudo>
          <p>
            Este é o painel administrativo do WRTmind. Aqui você pode monitorar 
            estatísticas do sistema, gerenciar usuários e visualizar dados importantes.
          </p>
          <p style={{ marginTop: 'var(--espacamentoMedio)' }}>
            <strong>Backend:</strong> https://wrt-back.vercel.app
          </p>
          <p>
            <strong>Versão:</strong> WRTmind v1.0.0
          </p>
        </CardConteudo>
      </Card>
    </Container>
  );
};

export default AdminPanel; 