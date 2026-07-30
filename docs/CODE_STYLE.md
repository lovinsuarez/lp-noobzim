# CODE STYLE

## Objetivo

Este documento define os padrões obrigatórios de escrita do código.

Todos os desenvolvedores e IAs devem seguir este documento.

---

# Linguagem

- **HTML5** — Estrutura e conteúdo.
- **CSS3** — Estilo, layout e animações.
- **JavaScript (ES6+)** — Lógica de interação.

---

# Convenções

## Nome de arquivos

- Minúsculas com hífens: `styles.css`, `main.js`, `index.html`.
- Sem espaços ou caracteres especiais.

## Nome de pastas

- Minúsculas com hífens: `assets/`, `css/`, `js/`, `images/`, `logos/`.

## Nome de classes CSS

- **BEM simplificado** (Block__Element--Modifier) ou kebab-case descritivo:
  - `.hero-section`, `.metric-card`, `.cta-button`, `.partner-logo`.
- Nomes descritivos do componente/estado.

## Nome de IDs (HTML)

- kebab-case: `#hero`, `#metricas`, `#projetos`, `#acoes-sociais`, `#marcas-parceiras`, `#contato`.
- Reservar IDs para âncoras de navegação e referências no JS.

## Nome de funções (JS)

- camelCase: `startCounter()`, `initIntersectionObserver()`, `initMarquee()`.
- Nomes verbais descrevendo a ação.

## Nome de variáveis (JS)

- camelCase: `targetValue`, `currentCount`, `observer`, `elements`.
- Nomes descritivos, sem abreviações desnecessárias.

## Nome de constantes (JS)

- camelCase ou UPPER_SNAKE_CASE para constantes globais:
  - `const ANIMATION_DURATION = 600;`
  - `const counterDuration = 2000;`

## Nome de variáveis CSS

- kebab-case com prefixo `--color-`, `--font-`, `--spacing-`:
  - `--color-primary-bg`, `--font-title`, `--spacing-lg`.

---

# Organização

## HTML

1. `<head>`: meta tags, título, link para CSS.
2. `<body>`: navegação (`<nav>`), seções (`<section>` com `id`), footer (`<footer>`).
3. Script JS no final do `<body>`.

## CSS

1. Variáveis globais (`:root`).
2. Reset/base global.
3. Layout geral (container, grid base).
4. Seção por seção (mesma ordem do HTML).
5. Componentes reutilizáveis (botões, cards).
6. Animações (`@keyframes`).
7. Media queries (mobile-first).

## JavaScript

1. Declarações de constantes e referências ao DOM.
2. Funções utilitárias.
3. Funções por funcionalidade (contador, observer, marquee).
4. Inicialização (chamadas de função no final, após carregamento do DOM).

---

# Boas Práticas

- Usar `const` por padrão. Usar `let` apenas quando o valor precisar ser reatribuído. Nunca usar `var`.
- Usar `querySelector` e `querySelectorAll` para seleção de elementos DOM.
- Usar `classList.add()`, `classList.remove()`, `classList.toggle()` para manipulação de classes.
- Separar preocupações: HTML (estrutura), CSS (visual), JS (comportamento).
- Não usar estilos inline no HTML (`style=""`), exceto para valores dinâmicos gerados pelo JS.
- Usar variáveis CSS (`var(--color-accent)`) no CSS para manter consistência com o Design System.
- Comentar trechos de código não óbvios com `// Comentário` (JS) ou `/* Comentário */` (CSS).
- Todo `id` de âncora deve corresponder a um `href` no menu de navegação.
- Sempre usar `alt` descritivo em imagens.

---

# Más Práticas

- **Proibido** usar `document.write()`.
- **Proibido** usar `innerHTML` para inserir conteúdo dinâmico (risco de XSS, ainda que o MVP não receba dados externos).
- **Proibido** usar `!important` no CSS, exceto em casos extremos documentados.
- **Proibido** usar IDs duplicados no HTML.
- **Proibido** usar estilos inline para aparência visual (apenas para valores calculados pelo JS).
- **Proibido** commitar código com `console.log()` ativos (remover antes do commit).
- **Proibido** usar `*` como seletor CSS desnecessariamente.

---

# Comentários

- **Usar comentários** para documentar:
  - Seções do HTML (`<!-- HERO SECTION -->`).
  - Seções do CSS (`/* === HERO SECTION === */`).
  - Funções JS não óbvias.
  - Decisões de implementação importantes.
- **Não comentar** código óbvio (ex: `// incrementa o contador`).
- Comentários de TODO devem usar o padrão: `// TODO: descrição da pendência`.

---

# Tipagem

Não aplicável. O projeto usa JavaScript puro (sem TypeScript no MVP).

Boas práticas de tipagem implícita:
- Nomear variáveis de forma que o tipo seja inferível pelo nome.
- Documentar tipos esperados em funções via comentários JSDoc quando necessário.

---

# Tratamento de Erros

- Erros não-críticos de JS (ex: elemento não encontrado) devem ser suprimidos silenciosamente ou verificados antes da execução:
  ```javascript
  const element = document.querySelector('#minha-secao');
  if (element) {
    // executa lógica
  }
  ```
- Não usar `try/catch` desnecessariamente. Preferir verificação condicional.

---

# Logs

- `console.log()` é permitido **apenas durante o desenvolvimento**.
- **Remover todos os `console.log()`** antes de commitar para a branch principal.
- Em caso de debug necessário em produção, usar as DevTools do browser.

---

# Testes

TODO — Estratégia de testes a ser definida. Ver TESTING.md.

No MVP, os testes são manuais: verificação visual no browser em diferentes dispositivos e navegadores.

---

# Lint

TODO — Nenhuma ferramenta de lint configurada no MVP.

Recomendação futura: ESLint para JS + Stylelint para CSS.

---

# Formatação

- **Indentação:** 2 espaços (HTML, CSS, JS).
- **Aspas:** Duplas no HTML (`class="..."`) e JS (`"string"`). Simples opcionalmente no JS para strings internas.
- **Ponto e vírgula:** Obrigatório no JavaScript.
- **Linha em branco:** Uma linha em branco entre blocos de código distintos.
- **Comprimento máximo de linha:** 120 caracteres (recomendado).
- **Formatação automática:** Recomendado usar Prettier com configuração padrão.

---

# Estrutura dos Commits

Padrão recomendado (Conventional Commits):

```
<tipo>: <descrição curta em português>

<corpo opcional>

<rodapé opcional>
```

**Tipos:**
- `feat:` — Nova funcionalidade.
- `fix:` — Correção de bug.
- `docs:` — Atualização de documentação.
- `style:` — Mudanças de estilo (CSS, formatação, sem lógica).
- `refactor:` — Refatoração sem mudança de comportamento.
- `chore:` — Tarefas de manutenção (configuração, dependências).

**Exemplos:**
- `feat: adicionar seção hero com animação pulse`
- `fix: corrigir contador não reseta ao sair do viewport`
- `docs: preencher documentação inicial do projeto`

---

# Revisão de Código

Critérios mínimos antes de qualquer merge:

- [ ] O código segue as convenções de nomenclatura deste documento.
- [ ] Nenhum `console.log()` ativo.
- [ ] Nenhum estilo inline desnecessário.
- [ ] Variáveis CSS do Design System utilizadas corretamente.
- [ ] HTML semântico com `alt` em imagens e `aria-label` em links.
- [ ] Responsividade verificada em mobile.
- [ ] Animações verificadas em desktop e mobile.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| JavaScript Vanilla sem TypeScript | MVP simples. TypeScript adicionaria overhead de configuração desnecessário. |
| CSS Vanilla sem pré-processadores | Variáveis CSS nativas são suficientes para o escopo do projeto. |
| Conventional Commits recomendado | Facilita geração de CHANGELOG e histórico legível. |

---

# Pendências

- TODO: Configurar ESLint e Stylelint para validação automática de código.
- TODO: Configurar Prettier para formatação automática.
- TODO: Definir estratégia de testes (ver TESTING.md).
