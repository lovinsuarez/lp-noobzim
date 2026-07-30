# PROJECT TASKS

> Este documento representa a fila oficial de trabalho do projeto.
>
> Toda tarefa deve possuir origem no PROJECT_BRIEF ou em uma decisão aprovada pelo usuário.
>
> Não devem existir tarefas fora do escopo definido.

---

# Regras

As tarefas devem ser:

- pequenas
- objetivas
- claras
- independentes sempre que possível

Cada tarefa representa uma única unidade de trabalho.

---

# BACKLOG

Ideias aprovadas para desenvolvimento futuro. Ainda não priorizadas.

- **[BG-001]** Integração com Instagram Graph API (V2) — ver BACKLOG.md
- **[BG-002]** Integração com TikTok for Developers API (V2) — ver BACKLOG.md
- **[BG-003]** Formulário de contato embutido — Formspree ou EmailJS (V3) — ver BACKLOG.md
- **[BG-004]** Dashboard Administrativo / CMS simples (V4) — ver BACKLOG.md
- **[BG-005]** Integração com Google Analytics (pós-MVP) — ver BACKLOG.md
- **[BG-006]** Integração com Meta Pixel (pós-MVP) — ver BACKLOG.md
- **[BG-007]** Aquisição de domínio próprio — ver BACKLOG.md
- **[BG-008]** Logotipos das marcas parceiras em alta resolução — ver BACKLOG.md

---

# TODO

Tarefas prontas para serem iniciadas. Ordenadas por prioridade.

### Sprint 2 — Estrutura Base e Hero Section

- [ ] **[T-001]** Criar estrutura de pastas do projeto (`css/`, `js/`, `assets/images/`, `assets/logos/`)
- [ ] **[T-002]** Criar `index.html` com estrutura HTML5 semântica completa e seções âncoras
- [ ] **[T-003]** Criar `css/styles.css` com variáveis CSS do Design System (`:root`, paleta, tipografia)
- [ ] **[T-004]** Criar `js/main.js` com estrutura base (comentários de seção, DOMContentLoaded)
- [ ] **[T-005]** Implementar Hero Section — layout, tipografia e conteúdo (nicho, bio)
- [ ] **[T-006]** Implementar botão CTA no Hero com animação Pulse via `@keyframes`
- [ ] **[T-007]** Garantir responsividade mobile da Hero Section (375px, 768px, 1024px+)
- [ ] **[T-008]** Conectar repositório GitHub à Vercel e publicar primeiro deploy de preview
- [ ] **[T-009]** Configurar `vercel.json` com headers de segurança básicos

### Sprint 3 — Métricas, Público-Alvo e Projetos

- [ ] **[T-010]** Implementar Seção de Métricas — layout com valores do Instagram e TikTok
- [ ] **[T-011]** Implementar contador dinâmico via IntersectionObserver (anima de 0 até o valor alvo)
- [ ] **[T-012]** Implementar Seção de Público-Alvo (formato de visualização: TODO — definir com cliente)
- [ ] **[T-013]** Implementar Seção de Projetos — cards "Arrume-se com o PCD!" e "Repórter Rebaixado"
- [ ] **[T-014]** Implementar efeito Hover Lift nos cards de projetos (CSS + JS)
- [ ] **[T-015]** Garantir responsividade mobile das seções Métricas, Público-Alvo e Projetos

### Sprint 4 — Ações Sociais, Marcas, Footer e Finalização

- [ ] **[T-016]** Implementar Seção de Ações Sociais (Páscoa Solidária e Natal Solidário)
- [ ] **[T-017]** Implementar Seção de Marcas Parceiras com Infinite Marquee via `@keyframes`
- [ ] **[T-018]** Implementar placeholder de texto para marcas parceiras (logos pendentes)
- [ ] **[T-019]** Implementar Footer com CTA `mailto:CONTATONOOBZIM@GMAIL.COM`
- [ ] **[T-020]** Implementar animações de entrada (fade-in + slide-up) via IntersectionObserver para todas as seções
- [ ] **[T-021]** Garantir responsividade mobile de todas as seções restantes
- [ ] **[T-022]** Teste cross-browser (Chrome, Firefox, Edge, Safari)
- [ ] **[T-023]** Teste de performance com Google Lighthouse (meta: score ≥ 90)
- [ ] **[T-024]** Validação HTML5 com W3C Validator
- [ ] **[T-025]** Revisão final de acessibilidade (alt, aria-label, contraste, teclado)
- [ ] **[T-026]** Deploy em produção na Vercel (branch main)
- [ ] **[T-027]** Aprovação do cliente (Noobzim)

---

# EM ANDAMENTO

Tarefas atualmente sendo desenvolvidas.

*(Nenhuma tarefa em andamento no momento)*

---

# AGUARDANDO

Tarefas bloqueadas aguardando alguma decisão.

- **[T-012-WAIT]** Definição do formato da visualização do Público-Alvo (gráficos ou tipografia em destaque) — aguardando decisão do cliente.
- **[T-017-WAIT-LOGOS]** Logotipos das marcas parceiras em alta resolução — aguardando fornecimento pelo cliente/marcas.
- **[INFRA-WAIT]** Assets de imagens do criador e projetos — aguardando fornecimento pelo cliente.

---

# CONCLUÍDO

Tarefas finalizadas.

- **[T-DOC-001]** Leitura e análise completa do PROJECT_BRIEF.md
  - Data: 2026-07-30
  - Resultado: Todas as informações do projeto mapeadas e documentadas.

- **[T-DOC-002]** Preenchimento de todos os documentos em `docs/`
  - Data: 2026-07-30
  - Resultado: 20 documentos criados: ARCHITECTURE.md, API_SPEC.md, BACKLOG.md, BUSINESS_RULES.md, CHANGELOG.md, CODE_STYLE.md, DATABASE.md, DESIGN_SYSTEM.md, DEVELOPMENT_GUIDE.md, ENVIRONMENT.md, ERROR_HANDLING.md, PROJECT_BRIEF.md, README.md, ROADMAP.md, SECURITY.md, TECH_DEBT.md, TECH_STACK.md, TESTING.md, UX_RULES.md, VISION.md.

- **[T-DOC-003]** Atualização do PROJECT_STATUS.md e PROJECT_TASKS.md
  - Data: 2026-07-30
  - Resultado: Ambos os arquivos atualizados com o estado atual do projeto.

---

# DÍVIDA TÉCNICA

Liste tarefas técnicas que deverão ser executadas futuramente.

- **[TD-001]** Integrar métricas em tempo real (V2) — ver TECH_DEBT.md
- **[TD-002]** Configurar ESLint + Stylelint + Prettier — ver TECH_DEBT.md
- **[TD-003]** Implementar testes automatizados (E2E com Playwright) — ver TECH_DEBT.md
- **[TD-004]** Substituir placeholders de logos pelas imagens reais — ver TECH_DEBT.md
- **[TD-005]** Substituir mailto: por formulário de contato (V3) — ver TECH_DEBT.md
- **[TD-006]** Configurar headers de segurança via vercel.json — ver TECH_DEBT.md
- **[TD-007]** Integrar monitoramento de erros (Sentry) — ver TECH_DEBT.md

---

# OBSERVAÇÕES

- A documentação foi concluída em 2026-07-30 e o projeto está pronto para início do desenvolvimento.
- O maior bloqueio atual é a ausência de assets (imagens e logos) que dependem do cliente.
- A Sprint 2 pode iniciar imediatamente com as tarefas que não dependem de assets externos (T-001 a T-009).
- Toda mudança de escopo deve ser registrada no PROJECT_BRIEF.md antes de ser implementada.
