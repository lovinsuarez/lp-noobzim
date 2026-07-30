# Escopo de Desenvolvimento — Landing Page Noobzim (MVP)

## 🎯 Objetivo
Desenvolver a Landing Page estática e interativa para o Mídia Kit do criador de conteúdo **Noobzim (Renan Macedo)**, atuando como um Mídia Kit Digital orientado a conversão B2B de patrocinadores nos nichos de Humor, Lifestyle e Games.

---

## 🛠️ Stack Tecnológica & Arquitetura
- **Arquitetura:** SPA Estática (Client-Side Rendering puro) sem backend nem banco de dados.
- **Frontend:** HTML5 Semântico, CSS3 Vanilla (Custom Properties + `@keyframes`), JavaScript Vanilla (ES6+ com `IntersectionObserver`).
- **Hospedagem & Infra:** Vercel (CDN global, HTTPS automático, deploy via Git).
- **Design System Tokens:**
  - `bg-primary`: `#9c634c` (Terra)
  - `text-primary`: `#f4e3c5` (Bege Claro)
  - `accent-yellow`: `#f1aa00` (Amarelo Vibrante / Pulse CTA)
  - `accent-teal`: `#225a5e` (Azul Esverdeado)
  - `dark-bg`: `#111111` (Preto Urbano)
  - `typography-title`: `Impact, "Arial Black", sans-serif`
  - `typography-body`: `Arial, sans-serif`

---

## 📋 Divisão de Agentes & Responsabilidades (Orchestration Map)

| Agente / Especialista | Papel & Responsabilidades | Arquivos Sob Sua Responsabilidade |
| :--- | :--- | :--- |
| **`orchestrator`** | Gestão geral, síntese, controle de escopo e verificação final. | `PROJECT_STATUS.md`, `PROJECT_TASKS.md`, `landing-page-scope.md` |
| **`frontend-specialist`** | Estruturação semântica do HTML, Design System CSS, Animações (`Pulse`, `Hover Lift`, `Infinite Marquee`), Lógica JS (`IntersectionObserver`, Contadores). | `index.html`, `css/styles.css`, `js/main.js` |
| **`devops-engineer`** | Deploy Vercel, segurança HTTP (`vercel.json`), `.gitignore`, ambiente de preview local. | `vercel.json`, `.gitignore` |
| **`test-engineer`** | Verificação visual, responsividade mobile-first (375px+), acessibilidade (WCAG AA), performance Lighthouse (Score ≥ 90). | Relatórios de testes e auditorias |

---

## 🚀 Fases do Desenvolvimento

### Fase 1: Estrutura Base & Configuração do Ambiente (Sprint 2.1)
- [x] Criar branch de desenvolvimento (`develop`).
- [x] Configurar `.gitignore` e `vercel.json` (headers de segurança e cache).
- [ ] Organizar diretórios do projeto (`css/`, `js/`, `assets/images/`, `assets/logos/`).
- [ ] Subir servidor de desenvolvimento local para acompanhamento do projeto em tempo real.

### Fase 2: Hero Section & Design System Tokens (Sprint 2.2)
- [ ] Criar `css/styles.css` com todas as variáveis do `:root`, resetting e tipografia.
- [ ] Criar `index.html` com marcação semântica da Hero Section.
- [ ] Estilizar a Hero Section com imagem de destaque do Noobzim (`assets/TRANSPARENTE-NOOOOBZIM.png` / `001-2-3-blur.png`).
- [ ] Implementar o CTA principal com animação **Pulse** contínua (`@keyframes`).
- [ ] Garantir layout responsivo mobile-first.

### Fase 3: Métricas, Público-Alvo e Projetos (Sprint 3)
- [ ] Criar Seção de Métricas (Instagram +8.300 seguidores / 10,3% engajamento; TikTok +15.300 / 11,1% engajamento).
- [ ] Implementar contador dinâmico animado via `IntersectionObserver` em `js/main.js`.
- [ ] Criar Seção de Público-Alvo (Demografia: 18-24 anos 40,9%; 25-34 anos 34,4%).
- [ ] Criar Seção de Projetos Principais ("Arrume-se com o PCD!" e "Repórter Rebaixado") com cards e efeito **Hover Lift**.

### Fase 4: Ações Sociais, Marcas Parceiras & Footer CTA (Sprint 4)
- [ ] Criar Seção de Ações Sociais (Páscoa Solidária e Natal Solidário / parceria Furia).
- [ ] Criar Seção de Marcas Parceiras com carrossel **Infinite Marquee** contínuo.
- [ ] Criar Footer com CTA de contato direto (`mailto:CONTATONOOBZIM@GMAIL.COM`).
- [ ] Adicionar suporte a `prefers-reduced-motion` para acessibilidade.

### Fase 5: Auditoria & Lançamento (Sprint 5)
- [ ] Teste de performance Google Lighthouse (Alvo: Performance ≥ 90, Acessibilidade ≥ 80).
- [ ] Verificação de responsividade cross-device (375px mobile, 768px tablet, 1280px+ desktop).
- [ ] Deploy na Vercel e sincronização com a branch `main`.

---

## 🎯 Critérios de Aceite (Done When)
- [ ] Página totalmente responsiva e testada em mobile (375px+).
- [ ] Tempo de carregamento inferior a 3 segundos.
- [ ] Todas as 7 seções implementadas de acordo com o `PROJECT_BRIEF.md`.
- [ ] Servidor local ativo para acompanhamento.
