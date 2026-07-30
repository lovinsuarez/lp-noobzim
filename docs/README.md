# LP NOOBZIM

## Sobre o Projeto

**LP NOOBZIM** é uma Landing Page interativa desenvolvida como Mídia Kit digital para o criador de conteúdo **Noobzim (Renan Macedo)**.

O sistema resolve o problema dos mídia kits tradicionais em PDF, que são estáticos e não transmitem a dinamicidade do criador. A Landing Page substitui o PDF com uma experiência web fluida, animada e orientada à conversão de patrocinadores B2B.

**Desenvolvida para:** Patrocinadores e representantes de marcas que acessam a página para avaliar o alcance e o engajamento do criador nos nichos de Humor, Lifestyle e Games.

---

# Principais Funcionalidades

- **Hero Section:** Apresentação de alto impacto com nicho do criador e botão CTA com animação Pulse contínua.
- **Métricas e Alcance:** Instagram (+8.300 seguidores, 10,3% de engajamento) e TikTok (+15.300 seguidores, 11,1% de engajamento) com contador dinâmico via IntersectionObserver.
- **Público-Alvo:** Visualização da demografia do público (18-24 anos: 40,9%; 25-34 anos: 34,4%).
- **Projetos Principais:** Cards interativos com efeito Hover Lift para "Arrume-se com o PCD!" e "Repórter Rebaixado".
- **Ações Sociais:** Destaque para Páscoa Solidária e Natal Solidário (parceria com a Furia).
- **Marcas Parceiras:** Carrossel horizontal contínuo (Infinite Marquee) em loop infinito.
- **Footer / CTA de Contato:** E-mail direto via `mailto:CONTATONOOBZIM@GMAIL.COM`.

---

# Tecnologias

**Frontend**
- HTML5 semântico
- CSS3 Vanilla (variáveis CSS nativas + `@keyframes`)
- JavaScript Vanilla (ES6+) — IntersectionObserver, manipulação DOM

**Backend**
- Não aplicável (MVP estático)

**Banco de Dados**
- Não aplicável (dados estáticos no HTML)

**Hospedagem**
- Vercel (CDN global, HTTPS automático, deploy automático via GitHub)

**Infraestrutura**
- GitHub (repositório e CI/CD)
- Vercel (hosting)

---

# Estrutura do Projeto

```
LP NOOBZIM/
├── index.html              # Documento HTML principal
├── css/
│   └── styles.css          # Estilos globais, variáveis e animações
├── js/
│   └── main.js             # Lógica de interação (counter, observer, marquee)
├── assets/
│   ├── images/             # Imagens do criador e projetos
│   └── logos/              # Logotipos das marcas parceiras
├── docs/                   # Documentação completa do projeto
│   ├── ARCHITECTURE.md
│   ├── BACKLOG.md
│   ├── BUSINESS_RULES.md
│   ├── CHANGELOG.md
│   ├── CODE_STYLE.md
│   ├── DATABASE.md
│   ├── DESIGN_SYSTEM.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── ENVIRONMENT.md
│   ├── ERROR_HANDLING.md
│   ├── PROJECT_BRIEF.md
│   ├── README.md
│   ├── ROADMAP.md
│   ├── SECURITY.md
│   ├── TECH_DEBT.md
│   ├── TECH_STACK.md
│   ├── TESTING.md
│   ├── UX_RULES.md
│   └── VISION.md
├── PROJECT_BRIEF.md        # Fonte de verdade do projeto
├── PROJECT_STATUS.md       # Estado atual do projeto
└── PROJECT_TASKS.md        # Fila de tarefas
```

---

# Como executar

## Pré-requisitos

Nenhuma dependência de runtime. Apenas um navegador moderno (Chrome, Firefox, Edge ou Safari).

## Instalação

Clone o repositório:

```bash
git clone https://github.com/TODO/lp-noobzim.git
cd "LP NOOBZIM"
```

## Configuração do ambiente

Nenhuma configuração necessária. Projeto completamente estático.

## Execução

Abrir `index.html` diretamente no browser, ou usar a extensão **Live Server** no VS Code para hot reload durante desenvolvimento:

1. Instalar a extensão "Live Server" no VS Code.
2. Clicar com o botão direito em `index.html` → "Open with Live Server".

## Build

Não há etapa de build. Os arquivos são servidos diretamente.

## Deploy

O deploy é automático via integração GitHub + Vercel.

1. Conectar o repositório GitHub à Vercel.
2. Configurar a branch principal (`main`) como branch de produção.
3. A cada `git push`, a Vercel faz o deploy automaticamente.

---

# Estrutura da Documentação

| Documento | Descrição |
|-----------|-----------|
| `ARCHITECTURE.md` | Arquitetura geral, estrutura de pastas, fluxo da aplicação |
| `BACKLOG.md` | Funcionalidades aprovadas para versões futuras |
| `BUSINESS_RULES.md` | Regras de negócio por seção/módulo |
| `CHANGELOG.md` | Histórico de versões e alterações |
| `CODE_STYLE.md` | Padrões de escrita de código |
| `DATABASE.md` | Ausência de banco de dados (dados estáticos no HTML) |
| `DESIGN_SYSTEM.md` | Paleta de cores, tipografia, componentes, animações |
| `DEVELOPMENT_GUIDE.md` | Fluxo de desenvolvimento, checklists, boas práticas |
| `ENVIRONMENT.md` | Ambientes de desenvolvimento, homologação e produção |
| `ERROR_HANDLING.md` | Estratégia de tratamento de erros |
| `PROJECT_BRIEF.md` | Fonte oficial de verdade do projeto |
| `README.md` | Este documento |
| `ROADMAP.md` | Planejamento de versões futuras |
| `SECURITY.md` | Diretrizes de segurança |
| `TECH_DEBT.md` | Dívidas técnicas identificadas |
| `TECH_STACK.md` | Stack tecnológica completa |
| `TESTING.md` | Estratégia de testes |
| `UX_RULES.md` | Regras de experiência do usuário |
| `VISION.md` | Visão do produto, objetivos e proposta de valor |

---

# Convenções

- **Mobile-first:** Todos os estilos são escritos para mobile primeiro.
- **CSS Custom Properties:** Todas as cores e tokens de design usam variáveis CSS do `:root`.
- **Conventional Commits:** `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- **Sem frameworks:** HTML/CSS/JS Vanilla puro. Nenhuma dependência externa.
- **IntersectionObserver:** Animações disparadas apenas quando os elementos entram no viewport.

---

# Links

**Repositório:** TODO — URL do repositório no GitHub.

**Produção:** TODO — URL gerada pela Vercel após o primeiro deploy.

**Documentação:** Pasta `docs/` neste repositório.

**Figma:** TODO — Nenhum arquivo Figma definido para o MVP.

**E-mail de contato do criador:** CONTATONOOBZIM@GMAIL.COM
