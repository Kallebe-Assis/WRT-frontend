# 🐛 Ferramentas de Debug - WRTmind

## **Localização:**
As ferramentas de debug estão disponíveis em: **Configurações → Aba "Debug"**

## **Funcionalidades Implementadas:**

### **🔐 Seção de Autenticação**
- **Verificar Auth**: Testa o estado da autenticação atual
  - Verifica se há usuário no localStorage
  - Mostra dados do usuário logado
  - Exibe o User ID para requisições

### **🌐 Seção de Testes de API**
Botões para testar diferentes endpoints da API:

- **🟢 Testar Notas** (`/notas`)
  - Testa o endpoint de listagem de notas
  - Verifica autenticação e resposta

- **🔵 Testar Links** (`/links`)
  - Testa o endpoint de listagem de links
  - Verifica autenticação e resposta

- **🟣 Testar Categorias** (`/categorias`)
  - Testa o endpoint de listagem de categorias
  - Verifica autenticação e resposta

- **🟠 Testar Sync** (`/sync/status`)
  - Testa o endpoint de status de sincronização
  - Verifica autenticação e resposta

### **💾 Seção de Informações do Sistema**
Exibe informações técnicas do ambiente:

- **User Agent**: Navegador e sistema operacional
- **Local Storage**: Status do usuário logado
- **API Base URL**: URL base da API
- **Timestamp**: Data e hora atual

### **🧹 Seção de Limpeza**
Ferramentas para limpar dados:

- **🔴 Limpar LocalStorage**
  - Remove todos os dados do localStorage
  - Força logout do usuário
  - Requer recarregamento da página

- **⚫ Limpar Console**
  - Limpa o console do navegador
  - Remove logs antigos

## **Como Usar:**

### **1. Acessar as Ferramentas:**
1. Clique no ícone de configurações (⚙️) no menu lateral
2. Clique na aba "Debug" (🐛)
3. Use os botões conforme necessário

### **2. Verificar Problemas:**
1. **Se houver erro 401**: Use "Verificar Auth" para ver se o usuário está logado
2. **Se houver erro de API**: Use os botões de teste para verificar cada endpoint
3. **Se houver problemas de dados**: Use "Limpar LocalStorage" para resetar

### **3. Debug de Desenvolvimento:**
1. Abra o console do navegador (F12)
2. Use as ferramentas de debug
3. Verifique os logs detalhados no console

## **Logs de Debug:**

### **Frontend (Console do Navegador):**
- `🔍 === DEBUG AUTENTICAÇÃO ===`
- `🌐 makeRequest - Endpoint:`
- `📡 makeRequest - Status:`
- `📦 makeRequest - Dados recebidos:`

### **Backend (Terminal do Servidor):**
- `📝 GET /api/notas - Headers recebidos:`
- `📝 GET /api/notas - User ID:`
- `❌ GET /api/notas - User ID não fornecido`

## **Casos de Uso:**

### **Problema: Erro 401 ao carregar notas**
1. Clique em "Verificar Auth"
2. Se não houver usuário, faça login novamente
3. Se houver usuário, clique em "Testar Notas"
4. Verifique os logs no console

### **Problema: Links não carregam**
1. Clique em "Testar Links"
2. Verifique se retorna status 200
3. Se retornar erro, verifique o backend

### **Problema: Dados corrompidos**
1. Clique em "Limpar LocalStorage"
2. Recarregue a página
3. Faça login novamente

## **Arquivos Relacionados:**

- `utils/debug.js` - Funções de debug
- `components/Configuracoes.js` - Interface das ferramentas
- `config/api.js` - Logs de requisições
- `routes/notas.js` - Logs do backend

## **Próximas Melhorias:**

- [ ] Adicionar testes de performance
- [ ] Logs de erro mais detalhados
- [ ] Exportar logs para arquivo
- [ ] Testes automatizados
- [ ] Monitoramento em tempo real 