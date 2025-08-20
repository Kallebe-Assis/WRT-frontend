import React, { useState } from 'react';
import styled from 'styled-components';
import Checklist from './Checklist';

const ExemploContainer = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 800px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  color: var(--corTextoPrimaria);
  text-align: center;
  margin-bottom: var(--espacamentoGrande);
`;

const Descricao = styled.p`
  color: var(--corTextoSecundaria);
  text-align: center;
  margin-bottom: var(--espacamentoGrande);
  line-height: 1.6;
`;

const ExemploChecklist = () => {
  const [checklistItems, setChecklistItems] = useState([
    {
      id: 1,
      text: "Estudar React",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      text: "Fazer exercícios",
      completed: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      text: "Ler documentação",
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 4,
      text: "Praticar programação",
      completed: true,
      createdAt: new Date().toISOString()
    }
  ]);

  const handleItemsChange = (newItems) => {
    setChecklistItems(newItems);
    console.log('Checklist atualizado:', newItems);
  };

  return (
    <ExemploContainer>
      <Titulo>Exemplo de Checklist Funcional</Titulo>
      
      <Descricao>
        Este é um exemplo de como usar o componente de checklist. 
        Você pode marcar/desmarcar itens clicando no checkbox ou no item inteiro. 
        Os itens marcados aparecem por último na lista. 
        Você também pode adicionar, editar e excluir itens.
      </Descricao>

      <Checklist
        items={checklistItems}
        onItemsChange={handleItemsChange}
        title="Minhas Tarefas"
        editable={true}
      />

      <Descricao style={{ marginTop: 'var(--espacamentoGrande)' }}>
        <strong>Funcionalidades implementadas:</strong>
        <br />
        ✅ Marcar/desmarcar itens clicando no checkbox ou no item
        <br />
        ✅ Itens marcados aparecem por último na lista
        <br />
        ✅ Adicionar novos itens
        <br />
        ✅ Editar itens existentes
        <br />
        ✅ Excluir itens
        <br />
        ✅ Contador de progresso
        <br />
        ✅ Interface responsiva e moderna
      </Descricao>
    </ExemploContainer>
  );
};

export default ExemploChecklist;
