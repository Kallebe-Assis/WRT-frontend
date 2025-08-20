import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckSquare, 
  faSquare, 
  faPlus,
  faTrash,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

const ChecklistContainer = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin: var(--espacamentoMedio) 0;
  border: 1px solid var(--corBordaPrimaria);
`;

const ChecklistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
  padding-bottom: var(--espacamentoPequeno);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ChecklistTitle = styled.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`;

const ChecklistStats = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const ChecklistItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`;

const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  transition: all var(--transicaoRapida);
  cursor: pointer;
  
  &:hover {
    background: var(--corFundoHover);
    border-color: var(--corPrimaria);
  }
  
  ${props => props.completed && `
    background: var(--corFundoTerciaria);
    opacity: 0.7;
    text-decoration: line-through;
    color: var(--corTextoSecundaria);
  `}
`;

const Checkbox = styled.button`
  background: none;
  border: none;
  color: ${props => props.checked ? 'var(--corPrimaria)' : 'var(--corTextoSecundaria)'};
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--corFundoHover);
    color: var(--corPrimaria);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--corPrimaria);
  }
`;

const ItemText = styled.span`
  flex: 1;
  font-size: var(--tamanhoFonteMedia);
  color: inherit;
  word-break: break-word;
`;

const ItemActions = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${ChecklistItem}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--corFundoHover);
    color: var(--corPrimaria);
  }
  
  &.delete:hover {
    color: var(--corErro);
  }
`;

const AddItemForm = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  margin-top: var(--espacamentoMedio);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const AddItemInput = styled.input`
  flex: 1;
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoSecundaria);
  }
`;

const AddItemButton = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioPequena);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  
  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const EditItemInput = styled.input`
  flex: 1;
  padding: var(--espacamentoPequeno);
  border: 1px solid var(--corPrimaria);
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  }
`;

const Checklist = ({ 
  items = [], 
  onItemsChange, 
  title = "Checklist",
  editable = true 
}) => {
  const [checklistItems, setChecklistItems] = useState(items);
  const [newItemText, setNewItemText] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Atualizar items quando a prop mudar
  useEffect(() => {
    setChecklistItems(items);
  }, [items]);

  // Ordenar items: não marcados primeiro, marcados por último
  const sortedItems = [...checklistItems].sort((a, b) => {
    if (a.completed === b.completed) {
      return a.id - b.id; // Manter ordem original para items com mesmo status
    }
    return a.completed ? 1 : -1; // Não marcados primeiro
  });

  const handleToggleItem = (itemId) => {
    const updatedItems = checklistItems.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setChecklistItems(updatedItems);
    onItemsChange?.(updatedItems);
  };

  const handleAddItem = () => {
    if (!newItemText.trim()) return;

    const newItem = {
      id: Date.now(),
      text: newItemText.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    const updatedItems = [...checklistItems, newItem];
    setChecklistItems(updatedItems);
    setNewItemText('');
    onItemsChange?.(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = checklistItems.filter(item => item.id !== itemId);
    setChecklistItems(updatedItems);
    onItemsChange?.(updatedItems);
  };

  const handleStartEdit = (item) => {
    setEditingItemId(item.id);
    setEditingText(item.text);
  };

  const handleSaveEdit = (itemId) => {
    if (!editingText.trim()) return;

    const updatedItems = checklistItems.map(item =>
      item.id === itemId ? { ...item, text: editingText.trim() } : item
    );
    setChecklistItems(updatedItems);
    setEditingItemId(null);
    setEditingText('');
    onItemsChange?.(updatedItems);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditingText('');
  };

  const handleKeyPress = (e, action, itemId = null) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (action === 'add') {
        handleAddItem();
      } else if (action === 'edit') {
        handleSaveEdit(itemId);
      }
    } else if (e.key === 'Escape' && action === 'edit') {
      handleCancelEdit();
    }
  };

  const completedCount = checklistItems.filter(item => item.completed).length;
  const totalCount = checklistItems.length;

  return (
    <ChecklistContainer>
      <ChecklistHeader>
        <ChecklistTitle>{title}</ChecklistTitle>
        <ChecklistStats>
          <span>{completedCount} de {totalCount} concluído</span>
          {totalCount > 0 && (
            <span>{Math.round((completedCount / totalCount) * 100)}%</span>
          )}
        </ChecklistStats>
      </ChecklistHeader>

      <ChecklistItems>
        {sortedItems.map(item => (
          <ChecklistItem 
            key={item.id} 
            completed={item.completed}
            onClick={() => handleToggleItem(item.id)}
          >
            <Checkbox
              checked={item.completed}
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon 
                icon={item.completed ? faCheckSquare : faSquare} 
                size="sm"
              />
            </Checkbox>

            {editingItemId === item.id ? (
              <EditItemInput
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e, 'edit', item.id)}
                onBlur={() => handleSaveEdit(item.id)}
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <ItemText>{item.text}</ItemText>
            )}

            {editable && editingItemId !== item.id && (
              <ItemActions onClick={(e) => e.stopPropagation()}>
                <ActionButton
                  onClick={() => handleStartEdit(item)}
                  title="Editar item"
                >
                  <FontAwesomeIcon icon={faEdit} size="sm" />
                </ActionButton>
                <ActionButton
                  className="delete"
                  onClick={() => handleDeleteItem(item.id)}
                  title="Excluir item"
                >
                  <FontAwesomeIcon icon={faTrash} size="sm" />
                </ActionButton>
              </ItemActions>
            )}
          </ChecklistItem>
        ))}
      </ChecklistItems>

      {editable && (
        <AddItemForm>
          <AddItemInput
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, 'add')}
            placeholder="Adicionar novo item..."
          />
          <AddItemButton
            onClick={handleAddItem}
            disabled={!newItemText.trim()}
          >
            <FontAwesomeIcon icon={faPlus} size="sm" />
            Adicionar
          </AddItemButton>
        </AddItemForm>
      )}
    </ChecklistContainer>
  );
};

export default Checklist;
