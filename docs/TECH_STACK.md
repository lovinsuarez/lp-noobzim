# TECH STACK

## Objetivo

Este documento define oficialmente todas as tecnologias utilizadas no projeto.

Seu objetivo é garantir consistência durante todo o ciclo de desenvolvimento.

Nenhuma tecnologia deve ser adicionada, removida ou substituída sem aprovação explícita.

---

# Visão Geral

O projeto LP NOOBZIM é uma Landing Page estática (MVP) sem dependência de frameworks ou bibliotecas pesadas. A stack foi escolhida com foco absoluto em performance, carregamento rápido e simplicidade de manutenção.

**Stack resumida:** HTML5 + CSS3 (Vanilla) + JavaScript (Vanilla) + Vercel

---

# Frontend

## Framework

Nenhum. A página é construída com HTML5 puro (sem framework SPA como React, Vue ou Angular).

## Linguagem

- **HTML5** — Estrutura semântica da página.
- **CSS3** — Estilo, layout, animações e responsividade.
- **JavaScript (ES6+)** — Lógica de interação (IntersectionObserver, contador, marquee).

## UI

Vanilla CSS com variáveis CSS nativas (`:root`). Sem bibliotecas de componentes (sem Bootstrap, Tailwind, Material UI, etc.).

## Gerenciamento de Estado

Não aplicável. A página é stateless. O único estado gerenciado são classes CSS adicionadas via JS (visibilidade) e valores de contadores animados.

## Validação

Não aplicável no MVP. Não há formulários.

## Formulários

Não há formulários no MVP. O contato é realizado via link `mailto:`.

## Roteamento

Não aplicável. A navegação é feita por scroll suave para âncoras HTML internas (`#secao`).

## Requisições HTTP

Nenhuma no MVP. A página é completamente estática.

## Testes

TODO — Estratégia de testes a ser definida. Ver TESTING.md.

## Build

Não há etapa de build. Os arquivos são servidos diretamente pela Vercel como assets estáticos.

---

# Backend

Não aplicável no MVP. A página é Client-Side Rendering puro sem servidor de aplicação.

---

# Banco de Dados

## Tecnologia

Não aplicável. Não há banco de dados.

## Modelo

Os dados residem estaticamente no HTML (texto inline, atributos `data-*`).

## Migrations

Não aplicável.

## Backup

Não aplicável. O código-fonte versionado no GitHub é o único repositório de dados.

---

# Infraestrutura

## Hospedagem

**Vercel** — Plataforma de deploy estático com CDN global e HTTPS automático.

## Banco

Não aplicável.

## CDN

Vercel Edge Network (CDN embutido na plataforma).

## Storage

Não aplicável no MVP. Assets (imagens) armazenados no próprio repositório.

## DNS

TODO — Domínio próprio não adquirido. Será utilizado o subdomínio padrão gerado pela Vercel (ex: `lp-noobzim.vercel.app`).

## Monitoramento

TODO — Não definido para o MVP.

## Logs

TODO — Não definido para o MVP. Vercel fornece logs básicos de acesso pelo dashboard.

## CI/CD

**GitHub + Vercel**: Deploy automático a cada push na branch principal via integração nativa Vercel + GitHub.

---

# Ferramentas de Desenvolvimento

- **Git** — Controle de versão.
- **GitHub** — Repositório remoto e integração com Vercel.
- **VS Code** — Editor principal.
- **Vercel CLI** (opcional) — Deploy e preview via terminal.
- **Browser DevTools** — Debug e inspeção de layout/performance.

---

# Bibliotecas Principais

| Biblioteca | Finalidade | Motivo da Escolha |
|-----------|-----------|-------------------|
| Nenhuma | — | Projeto MVP estático. Nenhuma dependência externa para maximizar performance e simplicidade. |

---

# Serviços Externos

| Serviço | Finalidade | Status |
|---------|-----------|--------|
| Vercel | Hospedagem e CI/CD | Ativo |
| Gmail (mailto:) | Contato comercial via protocolo nativo | Ativo |
| Google Analytics | Rastreamento de acessos | TODO (Pós-MVP) |
| Meta Pixel | Rastreamento de campanhas | TODO (Pós-MVP) |
| Instagram Graph API | Métricas em tempo real | TODO (V2) |
| TikTok for Developers API | Métricas em tempo real | TODO (V2) |
| Formspree / EmailJS | Formulário de contato | TODO (V3) |

---

# Padrões

- **HTML5 Semântico**: Uso obrigatório de elementos semânticos.
- **CSS Mobile-First**: Estilos base para mobile, breakpoints para desktop.
- **CSS Custom Properties**: Variáveis no `:root` para tokens de design.
- **ES6+ Vanilla JS**: Arrow functions, `const`/`let`, template literals, IntersectionObserver.
- **Conventional Commits** (recomendado): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`.

---

# Restrições

- **Não utilizar** React, Angular, Vue ou qualquer framework JS.
- **Não utilizar** jQuery.
- **Não utilizar** Bootstrap, Tailwind CSS ou qualquer framework CSS.
- **Não utilizar** bibliotecas de animação (GSAP, Anime.js, etc.) — animações devem ser implementadas em CSS puro com `@keyframes`.
- **Não realizar** requisições HTTP externas no MVP.
- **Evitar** dependências NPM desnecessárias.

---

# Atualizações

Qualquer nova tecnologia deve ser avaliada sob os seguintes critérios antes de entrar no projeto:

1. **Necessidade real**: Existe uma limitação técnica que a tecnologia resolve?
2. **Impacto na performance**: O tempo de carregamento ainda fica abaixo de 3 segundos?
3. **Manutenibilidade**: Aumenta ou reduz a complexidade para manutenção por um único desenvolvedor?
4. **Aprovação explícita**: A decisão deve ser registrada no PROJECT_BRIEF e neste documento.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| HTML/CSS/JS Vanilla | Máxima performance. Elimina overhead de frameworks para tempo de carregamento < 3s. |
| Vercel | Deploy simples, CDN global, HTTPS automático, gratuito para projetos estáticos. |
| IntersectionObserver nativo | API nativa do browser, sem dependências externas, performance otimizada. |
| Sem banco de dados | MVP estático. Dados residem no HTML. Sem custo de infraestrutura. |

---

# Pendências

- TODO: Definir estratégia de testes (ver TESTING.md).
- TODO: Adquirir domínio próprio e configurar DNS na Vercel.
- TODO: Definir integração com Google Analytics / Meta Pixel (pós-MVP).
- TODO: Obter logotipos em alta resolução das marcas parceiras.
