# 📊 Sistema de Logs - WRTmind

## **Visão Geral:**
Sistema completo de logs para monitorar e diagnosticar operações do Firebase e da API em tempo real.

## **Localização:**
**Configurações → Aba "Logs"**

## **Funcionalidades Implementadas:**

### **🔥 Logs do Firebase**
- **Criação de notas**: Confirmação de salvamento no Firestore
- **Busca de notas**: Query executada e resultados encontrados
- **Atualizações**: Confirmação de modificações
- **Exclusões**: Confirmação de remoção lógica
- **Operações em lote**: Logs de múltiplas operações

### **🌐 Logs da API**
- **Requisições**: Headers, parâmetros e respostas
- **Autenticação**: Status do user-id
- **Erros**: Detalhes de falhas
- **Performance**: Tempo de resposta

### **❌ Logs de Erro**
- **Erros do Firebase**: Falhas de conexão, permissões
- **Erros da API**: Status codes, mensagens de erro
- **Erros de validação**: Dados inválidos
- **Stack traces**: Detalhes técnicos

### **ℹ️ Logs de Informação**
- **Inicialização**: Status do sistema
- **Configurações**: Mudanças de configuração
- **Estatísticas**: Métricas de uso

## **Interface de Logs:**

### **📈 Estatísticas em Tempo Real**
- **Total**: Número total de logs
- **Firebase**: Logs de operações do banco
- **API**: Logs de requisições
- **Erros**: Logs de falhas

### **🔧 Controles de Filtro**
- **Seletor de tipo**: Filtrar por categoria
- **Botão Atualizar**: Recarregar logs
- **Botão Exportar**: Download em JSON
- **Botão Limpar**: Remover todos os logs

### **📋 Visualização de Logs**
- **Ícones coloridos**: Identificação visual por tipo
- **Timestamps**: Data e hora precisas
- **Mensagens detalhadas**: Descrição clara
- **Dados técnicos**: JSON expandível
- **Scroll infinito**: Navegação fácil

## **Tipos de Log:**

### **🔥 Firebase (Laranja)**
```javascript
{
  type: 'firebase',
  message: 'Nota criada com sucesso no Firestore',
  details: {
    userId: 'user123',
    notaId: 'nota456',
    titulo: 'Minha Nota',
    timestamp: '2024-01-15T10:30:00Z'
  }
}
```

### **🌐 API (Azul)**
```javascript
{
  type: 'api',
  message: 'GET /api/notas - 200 OK',
  details: {
    userId: 'user123',
    headers: { 'user-id': 'user123' },
    query: { ativo: true },
    responseTime: 150
  }
}
```

### **❌ Erro (Vermelho)**
```javascript
{
  type: 'error',
  message: 'Falha ao conectar com Firebase',
  details: {
    error: 'Permission denied',
    stack: 'Error: Permission denied...',
    timestamp: '2024-01-15T10:30:00Z'
  }
}
```

## **Como Usar:**

### **1. Acessar Logs:**
1. Configurações → Aba "Logs"
2. Logs carregam automaticamente
3. Visualizar estatísticas e lista

### **2. Filtrar Logs:**
1. Selecionar tipo no dropdown
2. Clicar "Atualizar"
3. Logs filtrados aparecem

### **3. Exportar Logs:**
1. Clicar "Exportar"
2. Arquivo JSON baixado
3. Nome: `wrtmind-logs-YYYY-MM-DD.json`

### **4. Limpar Logs:**
1. Clicar "Limpar"
2. Confirmar ação
3. Todos os logs removidos

## **Casos de Uso:**

### **Diagnóstico de Problemas:**
1. **Erro 401**: Verificar logs de API
2. **Notas não salvam**: Verificar logs do Firebase
3. **Performance lenta**: Analisar tempos de resposta
4. **Dados corrompidos**: Rastrear operações

### **Monitoramento:**
1. **Uso do sistema**: Estatísticas de operações
2. **Padrões de erro**: Identificar problemas recorrentes
3. **Performance**: Tempos de resposta da API
4. **Conectividade**: Status do Firebase

### **Desenvolvimento:**
1. **Debug de features**: Rastrear operações
2. **Testes**: Verificar comportamento
3. **Otimização**: Identificar gargalos
4. **Documentação**: Histórico de mudanças

## **Arquivos Relacionados:**

### **Backend:**
- `services/LogService.js` - Serviço de logs
- `routes/logs.js` - API de logs
- `models/NotaFirebase.js` - Logs do Firebase
- `server.js` - Integração das rotas

### **Frontend:**
- `components/Configuracoes.js` - Interface de logs
- `utils/debug.js` - Ferramentas de debug

## **Configurações:**

### **Limite de Logs:**
- **Máximo**: 100 logs em memória
- **Rotação**: Logs antigos removidos automaticamente
- **Persistência**: Logs em memória (não salvos)

### **Filtros Disponíveis:**
- **Todos**: Todos os tipos
- **Firebase**: Apenas operações do banco
- **API**: Apenas requisições
- **Erros**: Apenas falhas
- **Info**: Apenas informações

## **Próximas Melhorias:**

- [ ] **Persistência**: Salvar logs no Firebase
- [ ] **Retenção**: Configurar período de retenção
- [ ] **Alertas**: Notificações para erros críticos
- [ ] **Métricas**: Gráficos de performance
- [ ] **Busca**: Pesquisar em logs
- [ ] **Agregação**: Relatórios automáticos
- [ ] **Webhooks**: Integração com sistemas externos 