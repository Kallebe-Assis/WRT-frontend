# Correção do TinyMCE - Plugins Gratuitos

## Problema Identificado

O erro estava ocorrendo porque a configuração do TinyMCE estava tentando usar plugins premium que não estão habilitados na chave de API gratuita:

```
The checklist premium plugin is not enabled on your API key. Upgrade your account.
The mediaembed premium plugin is not enabled on your API key. Upgrade your account.
The casechange premium plugin is not enabled on your API key. Upgrade your account.
The formatpainter premium plugin is not enabled on your API key. Upgrade your account.
The pageembed premium plugin is not enabled on your API key. Upgrade your account.
The a11ychecker premium plugin is not enabled on your API key. Upgrade your account.
The permanentpen premium plugin is not enabled on your API key. Upgrade your account.
The powerpaste premium plugin is not enabled on your API key. Upgrade your account.
The advtable premium plugin is not enabled on your API key. Upgrade your account.
The advcode premium plugin is not enabled on your API key. Upgrade your account.
The editimage premium plugin is not enabled on your API key. Upgrade your account.
The advtemplate premium plugin is not enabled on your API key. Upgrade your account.
The ai premium plugin is not enabled on your API key. Upgrade your account.
The mentions premium plugin is not enabled on your API key. Upgrade your account.
The tinycomments premium plugin is not enabled on your API key. Upgrade your account.
```

## Solução Implementada

### 1. Arquivo de Configuração (`src/config/tinymce-config.js`)

**ANTES:**
```javascript
plugins: [
  // Core editing features
  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
  // Premium features (included in free trial)
  'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
],
```

**DEPOIS:**
```javascript
plugins: [
  // APENAS PLUGINS GRATUITOS
  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount'
],
```

### 2. Componente RichTextEditor (`src/components/RichTextEditor.js`)

**ANTES:**
```javascript
plugins: [
  // Core editing features
  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
  // Premium features (included in free trial)
  'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
],
```

**DEPOIS:**
```javascript
plugins: [
  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount'
],
```

### 3. Toolbar Atualizada

**ANTES:**
```javascript
toolbar: 'undo redo | fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image | table | codesample | align lineheight | numlist bullist indent outdent | checklist | removeformat'
```

**DEPOIS:**
```javascript
toolbar: 'undo redo | fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image | table | codesample | align lineheight | numlist bullist indent outdent | removeformat'
```

## Plugins Removidos (Premium)

- ❌ `checklist` - Listas de verificação
- ❌ `mediaembed` - Incorporação de mídia avançada
- ❌ `casechange` - Mudança de maiúsculas/minúsculas
- ❌ `formatpainter` - Pincel de formatação
- ❌ `pageembed` - Incorporação de páginas
- ❌ `a11ychecker` - Verificador de acessibilidade
- ❌ `permanentpen` - Caneta permanente
- ❌ `powerpaste` - Colagem avançada
- ❌ `advtable` - Tabelas avançadas
- ❌ `advcode` - Código avançado
- ❌ `editimage` - Edição de imagem
- ❌ `advtemplate` - Templates avançados
- ❌ `ai` - Assistente de IA
- ❌ `mentions` - Menções
- ❌ `tinycomments` - Comentários
- ❌ `tableofcontents` - Índice
- ❌ `footnotes` - Notas de rodapé
- ❌ `mergetags` - Tags de mesclagem
- ❌ `autocorrect` - Autocorreção
- ❌ `typography` - Tipografia
- ❌ `inlinecss` - CSS inline
- ❌ `markdown` - Markdown
- ❌ `importword` - Importar Word
- ❌ `exportword` - Exportar Word
- ❌ `exportpdf` - Exportar PDF

## Plugins Mantidos (Gratuitos)

- ✅ `anchor` - Âncoras
- ✅ `autolink` - Links automáticos
- ✅ `charmap` - Mapa de caracteres
- ✅ `codesample` - Amostras de código
- ✅ `emoticons` - Emojis
- ✅ `image` - Imagens
- ✅ `link` - Links
- ✅ `lists` - Listas
- ✅ `media` - Mídia
- ✅ `searchreplace` - Buscar e substituir
- ✅ `table` - Tabelas básicas
- ✅ `visualblocks` - Blocos visuais
- ✅ `wordcount` - Contador de palavras

## Funcionalidades Mantidas

- ✅ **Formatação de texto** - Negrito, itálico, sublinhado, tachado
- ✅ **Cores** - Cor do texto e fundo
- ✅ **Links e imagens** - Inserção e edição
- ✅ **Tabelas** - Criação e edição básica
- ✅ **Listas** - Numeradas e com marcadores
- ✅ **Alinhamento** - Esquerda, centro, direita
- ✅ **Código** - Inserção de amostras de código
- ✅ **Emojis** - Inserção de emoticons
- ✅ **Desfazer/Refazer** - Histórico de ações

## Resultado

Agora o TinyMCE funciona perfeitamente com a chave de API gratuita, sem erros de plugins premium. Todas as funcionalidades básicas de edição de texto rico estão disponíveis e funcionando corretamente.

## Chave de API

A chave de API utilizada é: `dovo08r35w45rtk3mu0yhvdctb2nb7oee5t944bj78bk79cz`

Esta é uma chave gratuita que permite o uso dos plugins básicos do TinyMCE sem custos.
