# Briefing: Tradução DE → FR — Site Astro Estático

> **Objetivo:** Traduzir todo o conteúdo alemão para francês, preservando 100% do design, layout, componentes e imagens neutras. Imagens com texto embutido em alemão devem ser sinalizadas para substituição manual.

---

## 0. Pré-requisitos antes de começar

Antes de qualquer alteração, execute os passos abaixo para entender a estrutura real do projeto.

### 0.1 — Mapeie a estrutura do projeto

```bash
# Veja a estrutura de pastas de primeiro nível
find . -maxdepth 3 -type d | grep -v node_modules | grep -v .git | grep -v dist

# Liste arquivos de configuração relevantes
ls astro.config.* tsconfig.* package.json
```

### 0.2 — Identifique como o i18n está implementado

Execute cada comando e relate o que encontrar:

```bash
# Verifica se usa o i18n oficial do Astro (astro.config)
grep -i "i18n\|locale\|lang\|defaultLocale" astro.config.* 2>/dev/null

# Verifica se há pastas de idioma em /src/pages/
ls src/pages/

# Verifica se há arquivos de tradução (JSON/TS/JS)
find . -name "*.json" | xargs grep -l "\"de\"\|\"fr\"\|translations\|messages" 2>/dev/null | grep -v node_modules

# Verifica se há variáveis de tradução em arquivos .astro
grep -r "getLangFromUrl\|useTranslations\|t(\|i18n" src/ --include="*.astro" -l 2>/dev/null
```

### 0.3 — Identifique o padrão atual

Com base na saída dos comandos acima, determine qual cenário se aplica:

| Cenário | Indicador |
|---|---|
| **A** — Pastas duplicadas | `src/pages/de/` e `src/pages/fr/` existem |
| **B** — i18n oficial Astro | `i18n` configurado em `astro.config.*` com `locales` |
| **C** — Arquivos de tradução JSON/TS | Arquivos como `de.json`, `fr.json`, `translations.ts` |
| **D** — Texto inline nos `.astro` | Conteúdo direto nos componentes sem sistema de tradução |

> ⚠️ **Relate o cenário identificado antes de prosseguir.** O plano de execução muda conforme o cenário.

---

## 1. Plano de execução por cenário

### Cenário A — Pastas `/de/` e `/fr/` duplicadas

1. Compare `src/pages/de/` com `src/pages/fr/` para identificar arquivos ausentes no FR
2. Para cada arquivo presente em `/de/` mas ausente em `/fr/`: copie o arquivo e traduza
3. Para arquivos já existentes em `/fr/`: revise e complete a tradução
4. Regra: **mantenha exatamente a mesma estrutura de componentes, classes CSS, atributos e lógica** — altere apenas strings de texto visível

```bash
# Comparar arquivos existentes
diff <(ls src/pages/de/) <(ls src/pages/fr/)
```

### Cenário B — i18n oficial do Astro (`astro.config`)

1. Verifique os locales configurados em `astro.config.*`
2. Localize onde as strings são definidas (geralmente `src/i18n/` ou `src/content/`)
3. Copie o arquivo `de` como base para o `fr` e traduza todas as strings
4. Não altere `astro.config.*` — a rota `/fr/` já deve estar configurada

### Cenário C — Arquivos de tradução JSON/TS

1. Localize os arquivos de tradução (ex: `src/i18n/de.json`, `src/locales/de.ts`)
2. Copie o arquivo alemão como base FR: `cp src/i18n/de.json src/i18n/fr.json`
3. Traduza todos os valores (nunca as chaves) de alemão para francês
4. Verifique se o arquivo FR está sendo importado/registrado no sistema de tradução

### Cenário D — Texto inline nos `.astro`

1. Liste todos os arquivos `.astro` com texto em alemão:
```bash
# Detecta palavras alemãs comuns (heurística)
grep -r "und\|der\|die\|das\|Sie\|nicht\|mit\|für\|ist\|auch\|auf\|an\|werden" src/ --include="*.astro" -l
```
2. Para cada arquivo: substitua o texto alemão pelo francês equivalente
3. **Preserve toda a estrutura HTML, props, classes e lógica Astro intocadas**

---

## 2. Regras de tradução obrigatórias

### ✅ O que traduzir
- Todo texto visível ao usuário (títulos, parágrafos, labels, botões, placeholders)
- Atributos de acessibilidade com texto: `alt`, `aria-label`, `title`, `placeholder`
- Metadados SEO: `<title>`, `<meta name="description">`, `og:title`, `og:description`
- Comentários de conteúdo (se houver comentários editoriais, não de código)

### ❌ O que NÃO alterar
- Nomes de classes CSS (ex: `class="hero-title"`)
- IDs de elementos
- Nomes de componentes Astro (ex: `<HeroSection />`)
- Props que são booleanos ou números
- Caminhos de imagens (`src="/images/banner.jpg"`)
- URLs internas e externas
- Atributos de data (ex: `data-id`, `data-tracking`)
- Código JavaScript/TypeScript interno

### 🇫🇷 Qualidade da tradução francesa
- Use francês europeu padrão (não canadense)
- Mantenha o tom formal/informal equivalente ao alemão original
- Preserve formatação especial: maiúsculas em títulos, pontuação, etc.
- Termos técnicos sem tradução óbvia: mantenha em inglês ou alemão e adicione um comentário `<!-- TODO: revisar termo -->`

---

## 3. Tratamento de imagens com texto em alemão

> ⚠️ Imagens com texto embutido **não podem ser traduzidas por código** — precisam de substituição manual ou recriação.

### 3.1 — Identifique todas as imagens problemáticas

```bash
# Liste todas as imagens usadas no projeto
grep -r "src=.*\.(jpg|jpeg|png|webp|svg|gif)" src/ --include="*.astro" -o | sort | uniq

# SVGs inline podem ter texto — verifique
grep -r "<text\|<tspan" src/ --include="*.svg" -l 2>/dev/null
find public/ -name "*.svg" | xargs grep -l "<text\|<tspan" 2>/dev/null
```

### 3.2 — Gere um relatório de imagens a revisar

Crie o arquivo `FR_IMAGES_TODO.md` na raiz do projeto com:

```markdown
# Imagens com texto em alemão — revisão manual necessária

| Arquivo | Usado em | Texto detectado | Ação necessária |
|---|---|---|---|
| /public/images/banner-hero.jpg | src/pages/index.astro | "Willkommen" | Recriar em FR |
| ... | ... | ... | ... |
```

### 3.3 — Sinalize no código com comentário

Para cada imagem identificada, adicione no `.astro`:

```astro
{/* TODO-FR: Imagem contém texto em alemão — substituir por versão francesa */}
<img src="/images/banner.jpg" alt="Bannière principale" />
```

---

## 4. SEO e metadados por página

Para cada página traduzida, verifique e atualize:

```astro
<!-- Exemplo do que deve ser ajustado em cada página FR -->
<head>
  <title>Titre de la page — Nom du site</title>
  <meta name="description" content="Description en français..." />
  <meta property="og:title" content="Titre de la page" />
  <meta property="og:description" content="Description en français..." />
  <meta property="og:locale" content="fr_FR" />
  <link rel="alternate" hreflang="de" href="/de/pagina" />
  <link rel="alternate" hreflang="fr" href="/fr/pagina" />
</head>
```

---

## 5. Checklist de validação final

Após concluir todas as traduções, execute:

```bash
# Verifica se ainda há palavras alemãs comuns nos arquivos FR
grep -r " und \| der \| die \| das \| Sie \| nicht \| für \| mit " src/pages/fr/ --include="*.astro" 2>/dev/null

# Conta arquivos traduzidos vs total
echo "Arquivos DE:" && ls src/pages/de/ | wc -l
echo "Arquivos FR:" && ls src/pages/fr/ | wc -l
```

Confirme que:
- [ ] Todos os arquivos de `/de/` têm equivalente em `/fr/`
- [ ] Nenhum texto alemão visível permanece nas páginas FR
- [ ] `alt` e `aria-label` estão em francês
- [ ] Metadados SEO estão em francês
- [ ] `FR_IMAGES_TODO.md` foi gerado com todas as imagens a revisar
- [ ] `hreflang` está configurado corretamente para DE e FR
- [ ] O site compila sem erros: `npm run build`

---

## 6. Ordem de execução recomendada

```
1. Execute a fase 0 (diagnóstico) e relate o cenário encontrado
2. Execute o plano do cenário identificado (Seção 1)
3. Trate as imagens com texto (Seção 3) — gere o relatório FR_IMAGES_TODO.md
4. Atualize os metadados SEO de cada página (Seção 4)
5. Execute o checklist de validação (Seção 5)
6. Rode `npm run build` e corrija erros de compilação
7. Rode `npm run preview` para revisão visual
```

---

*Briefing gerado por Oráculo Marketing — Projeto de localização DE → FR*
