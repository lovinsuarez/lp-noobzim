# ROADMAP

## Objetivo

Apresentar o planejamento geral do projeto LP NOOBZIM, organizando as entregas por versão e sprint.

---

# Visão Geral

O desenvolvimento é organizado em versões incrementais (MVP → V2 → V3 → V4), cada uma adicionando novas camadas de funcionalidade sobre a base do MVP estático.

---

# Releases

## v1.0.0 — MVP (Landing Page Estática)

**Objetivo:** Substituir o PDF do Mídia Kit por uma Landing Page interativa e responsiva publicada na Vercel.

**Funcionalidades:**
- Hero Section com CTA e animação Pulse.
- Seção de Métricas com contador dinâmico (IntersectionObserver).
- Seção de Público-Alvo com dados demográficos.
- Seção de Projetos com cards e efeito Hover Lift.
- Seção de Ações Sociais.
- Seção de Marcas Parceiras com Infinite Marquee.
- Footer com CTA de contato via `mailto:`.
- Responsividade mobile-first completa.
- Deploy na Vercel.

---

## v2.0.0 — Métricas em Tempo Real

**Objetivo:** Substituir dados estáticos por métricas atualizadas automaticamente via APIs oficiais.

**Funcionalidades:**
- Integração com Instagram Graph API.
- Integração com TikTok for Developers API.
- Atualização automática de seguidores e taxas de engajamento.

---

## v3.0.0 — Formulário de Contato

**Objetivo:** Eliminar dependência do cliente de e-mail local do usuário para contato comercial.

**Funcionalidades:**
- Formulário de contato embutido na página.
- Integração com Formspree ou EmailJS (form-to-email).

---

## v4.0.0 — Dashboard Administrativo

**Objetivo:** Permitir que o próprio Noobzim atualize conteúdos da página sem editar código.

**Funcionalidades:**
- CMS simples com autenticação.
- Gerenciamento de projetos, fotos e patrocinadores ativos.

---

# Sprints

## Sprint 1 — Inicialização e Documentação

### Objetivo

Estruturar o projeto e preencher toda a documentação base antes de iniciar o desenvolvimento.

### Funcionalidades

- Leitura e análise do PROJECT_BRIEF.md.
- Preenchimento de todos os documentos em `docs/`.
- Definição de padrões de código, design e arquitetura.
- Configuração inicial do repositório.

### Dependências

Nenhuma.

### Critérios de Conclusão

- Todos os documentos em `docs/` preenchidos.
- PROJECT_STATUS.md e PROJECT_TASKS.md atualizados.
- Repositório inicializado e conectado à Vercel.

### Status

🔵 Em andamento

---

## Sprint 2 — Estrutura Base e Hero Section

### Objetivo

Criar a estrutura HTML/CSS/JS base do projeto e implementar a Hero Section.

### Funcionalidades

- Estrutura de pastas do projeto.
- `index.html` com estrutura semântica completa.
- `styles.css` com variáveis CSS do Design System.
- `main.js` com estrutura base.
- Hero Section completa (layout, tipografia, CTA com animação Pulse).
- Responsividade mobile da Hero Section.

### Dependências

Sprint 1 concluída.

### Critérios de Conclusão

- Hero Section visível e responsiva em mobile e desktop.
- Animação Pulse funcionando no CTA.
- Deploy de preview na Vercel.

### Status

⚪ Não iniciado

---

## Sprint 3 — Métricas, Público-Alvo e Projetos

### Objetivo

Implementar as seções de Métricas, Público-Alvo e Projetos Principais.

### Funcionalidades

- Seção de Métricas com contador dinâmico (IntersectionObserver).
- Seção de Público-Alvo com visualização de dados demográficos.
- Seção de Projetos com cards e efeito Hover Lift.
- Responsividade mobile de todas as seções.

### Dependências

Sprint 2 concluída.

### Critérios de Conclusão

- Contador de métricas dispara ao entrar no viewport.
- Cards de projetos com efeito Hover Lift funcionando.
- Todas as seções responsivas em mobile.

### Status

⚪ Não iniciado

---

## Sprint 4 — Ações Sociais, Marcas e Footer

### Objetivo

Implementar as seções restantes e finalizar o MVP.

### Funcionalidades

- Seção de Ações Sociais.
- Seção de Marcas Parceiras com Infinite Marquee.
- Footer com CTA de contato via `mailto:`.
- Ajustes finais de layout e responsividade.
- Testes cross-browser.

### Dependências

Sprint 3 concluída. Assets de logos (TODO — pendente).

### Critérios de Conclusão

- Infinite Marquee em loop contínuo sem salto visual.
- Link `mailto:` funcionando em todos os navegadores.
- Página aprovada pelo cliente (Noobzim).
- Deploy em produção na Vercel.

### Status

⚪ Não iniciado

---

# Marcos Importantes

| Marco | Descrição | Status |
|-------|-----------|--------|
| Documentação completa | Todos os docs preenchidos | 🔵 Em andamento |
| Primeiro deploy na Vercel | Estrutura base publicada | ⚪ Não iniciado |
| MVP completo | Todas as seções implementadas | ⚪ Não iniciado |
| Aprovação do cliente | Noobzim aprova o MVP | ⚪ Não iniciado |
| Deploy em produção | MVP publicado na URL definitiva | ⚪ Não iniciado |

---

# Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Logotipos das marcas parceiras não disponíveis | Alta | Médio | Usar placeholders textuais no MVP; logos implementados em versão futura |
| Domínio não adquirido para o lançamento | Média | Baixo | Usar subdomínio da Vercel (ex: `lp-noobzim.vercel.app`) temporariamente |
| Mudanças de escopo durante o desenvolvimento | Média | Alto | Qualquer mudança deve ser registrada no PROJECT_BRIEF antes de implementada |
| Compatibilidade com navegadores antigos (IntersectionObserver) | Baixa | Baixo | Implementar fallback para exibir conteúdo sem animação |

---

# Dependências

| Dependência | Responsável | Status |
|-------------|------------|--------|
| Imagens do criador (foto, projetos) | Noobzim | TODO |
| Logotipos das marcas parceiras | Noobzim / Marcas | TODO (Pós-MVP) |
| Domínio próprio | Noobzim | TODO |
| Conta Vercel conectada ao repositório | Desenvolvedor | TODO |

---

# Observações

- O MVP prioriza velocidade de entrega e impacto visual sobre completude de funcionalidades.
- Logotipos de marcas parceiras serão implementados em versão futura quando disponíveis.
- O Roadmap será revisado após a aprovação do MVP pelo cliente.
