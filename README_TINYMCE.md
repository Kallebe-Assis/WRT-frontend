# Configuração do TinyMCE

## Editor de Texto Rico

O projeto agora utiliza o **TinyMCE** como editor de texto rico para as notas. Este editor oferece funcionalidades completas de formatação:

### ✨ Funcionalidades Disponíveis

#### **Funcionalidades Básicas:**
- **Formatação de Texto**: Negrito, itálico, sublinhado, tachado
- **Tamanho e Tipo de Fonte**: Múltiplas opções de fonte e tamanho
- **Cores**: Cor do texto e cor de fundo
- **Alinhamento**: Esquerda, centro, direita, justificado
- **Listas**: Listas numeradas e com marcadores
- **Links**: Inserção e edição de links
- **Imagens**: Upload e inserção de imagens
- **Tabelas**: Criação e edição de tabelas
- **Código**: Formatação de código inline e em bloco
- **Citações**: Blocos de citação
- **Desfazer/Refazer**: Histórico de ações
- **Verificação Ortográfica**: Corretor ortográfico integrado

#### **Funcionalidades Premium (Incluídas no Trial):**
- **Checklist**: Listas de verificação interativas
- **Media Embed**: Incorporação de vídeos e mídia
- **Case Change**: Alteração de maiúsculas/minúsculas
- **Format Painter**: Copiar formatação
- **Page Embed**: Incorporação de páginas
- **Accessibility Checker**: Verificador de acessibilidade
- **Advanced Tables**: Tabelas avançadas
- **Advanced Code**: Editor de código avançado
- **Edit Image**: Edição de imagens
- **Advanced Templates**: Templates avançados
- **AI Assistant**: Assistente de IA
- **Mentions**: Menções de usuários
- **Tiny Comments**: Sistema de comentários
- **Table of Contents**: Sumário automático
- **Footnotes**: Notas de rodapé
- **Merge Tags**: Tags de mesclagem
- **Auto Correct**: Correção automática
- **Typography**: Tipografia avançada
- **Inline CSS**: CSS inline
- **Markdown**: Suporte a Markdown
- **Import/Export Word**: Importar/exportar Word
- **Export PDF**: Exportar para PDF

### 🔑 Chave API Configurada

A chave API já está configurada no projeto:
```javascript
apiKey='dovo08r35w45rtk3mu0yhvdctb2nb7oee5t944bj78bk79cz'
```

**Nota**: Esta chave é válida até **12 de agosto de 2025** e inclui acesso a todas as funcionalidades premium durante o período de trial.

### 📁 Arquivos de Configuração

- **`src/components/RichTextEditor.js`**: Componente principal do editor
- **`src/config/tinymce-config.js`**: Configuração centralizada
- **`src/components/FormattedContent.js`**: Exibição em cards
- **`src/components/FullFormattedContent.js`**: Exibição completa

### 🎨 Personalização

O editor está totalmente integrado com o tema da aplicação:

- **Cores**: Usa as variáveis CSS do tema
- **Fontes**: Segue o padrão da aplicação
- **Bordas**: Estilo consistente com outros componentes
- **Hover**: Efeitos visuais harmoniosos

### 📱 Responsividade

- **Desktop**: Editor completo com todas as funcionalidades
- **Mobile**: Interface adaptada para telas menores
- **Modal**: Integração perfeita com o modal de notas

### 🔧 Manutenção

Para modificar as funcionalidades do editor:

1. **Edite** `src/config/tinymce-config.js`
2. **Adicione/remova** plugins conforme necessário
3. **Personalize** a toolbar
4. **Ajuste** os estilos CSS

### 🚀 Funcionalidades Avançadas

#### **Toolbar Completa:**
- **Desfazer/Refazer**: Histórico de ações
- **Blocos**: Seleção de tipos de bloco
- **Fontes**: Família e tamanho de fonte
- **Formatação**: Negrito, itálico, sublinhado, tachado
- **Links e Mídia**: Links, imagens, vídeos, tabelas
- **Comentários**: Sistema de comentários
- **Verificação**: Ortografia e acessibilidade
- **Alinhamento**: Texto e altura da linha
- **Listas**: Numeradas, com marcadores, checklist
- **Emojis**: Seleção de emojis
- **Caracteres**: Caracteres especiais

#### **Recursos Especiais:**
- **AI Assistant**: Assistente de inteligência artificial
- **Tiny Comments**: Sistema de comentários colaborativo
- **Advanced Tables**: Tabelas com recursos avançados
- **Code Sample**: Amostras de código formatadas
- **Media Embed**: Incorporação de mídia externa
- **Export Options**: Exportar para Word, PDF, Markdown

### 📅 Trial Period

O acesso às funcionalidades premium está disponível até **12 de agosto de 2025**. Após esse período, você pode:

1. **Renovar a chave API** em https://www.tiny.cloud/
2. **Usar apenas as funcionalidades básicas** (que continuam funcionando)
3. **Configurar uma nova chave gratuita**

---

**Nota**: O TinyMCE é uma biblioteca robusta e bem mantida, garantindo estabilidade e funcionalidades avançadas para o editor de texto rico.