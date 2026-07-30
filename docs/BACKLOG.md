# BACKLOG

## Objetivo

Este documento centraliza todas as funcionalidades, melhorias, ideias e evoluções aprovadas para o projeto que ainda não fazem parte do desenvolvimento atual.

O backlog representa a visão futura do sistema e deve servir como fonte oficial de priorização das próximas entregas.

---

# Organização

As funcionalidades são agrupadas por módulo/versão.

Cada item contém:

- ID
- Nome
- Descrição
- Prioridade
- Complexidade
- Dependências
- Status
- Observações

---

# Priorização

🔥 Crítica

🟠 Alta

🟡 Média

🟢 Baixa

---

# Status

⚪ Não iniciado

🟡 Em análise

🟢 Aprovado

🔴 Cancelado

---

# Itens do Backlog

## V2 — Integração de Métricas em Tempo Real

### BG-001

**Nome:** Integração com Instagram Graph API

**Descrição:** Substituir os valores estáticos de seguidores e engajamento do Instagram por dados em tempo real consumidos via Instagram Graph API.

**Prioridade:** 🟠 Alta

**Complexidade:** Alta — requer configuração de app no Meta for Developers, autenticação OAuth, refresh token e endpoint de dados.

**Dependências:** Conta de desenvolvedor no Meta, acesso à Instagram Graph API, backend ou serverless function para proteger o token.

**Status:** 🟢 Aprovado

---

### BG-002

**Nome:** Integração com TikTok for Developers API

**Descrição:** Substituir os valores estáticos de seguidores e engajamento do TikTok por dados em tempo real consumidos via TikTok for Developers API.

**Prioridade:** 🟠 Alta

**Complexidade:** Alta — requer configuração de app no TikTok for Developers, autenticação e endpoint de dados.

**Dependências:** Conta de desenvolvedor no TikTok, acesso à API, backend ou serverless function.

**Status:** 🟢 Aprovado

---

## V3 — Formulário de Contato

### BG-003

**Nome:** Formulário de Contato Embutido

**Descrição:** Implementar formulário de contato embutido na página usando Formspree ou EmailJS, eliminando a dependência do cliente de e-mail local do usuário.

**Prioridade:** 🟡 Média

**Complexidade:** Média — integração com serviço form-to-email externo.

**Dependências:** Definição do serviço (Formspree ou EmailJS), cadastro e configuração da conta.

**Status:** 🟢 Aprovado

---

## V4 — Dashboard Administrativo

### BG-004

**Nome:** CMS Simples para o Criador

**Descrição:** Dashboard administrativo que permita ao próprio Noobzim atualizar projetos, fotos e patrocinadores ativos sem necessidade de editar o código-fonte.

**Prioridade:** 🟡 Média

**Complexidade:** Alta — requer autenticação, banco de dados e interface de administração.

**Dependências:** Definição da stack de backend (ex: Next.js + Supabase), autenticação (ex: NextAuth).

**Status:** 🟡 Em análise

---

## Pós-MVP — Analytics e Rastreamento

### BG-005

**Nome:** Integração com Google Analytics

**Descrição:** Adicionar script do Google Analytics para rastrear acessos, origem dos visitantes (agências, marcas) e comportamento na página.

**Prioridade:** 🟡 Média

**Complexidade:** Baixa — inserção de script de rastreamento.

**Dependências:** Criação de conta no Google Analytics 4.

**Status:** 🟢 Aprovado

---

### BG-006

**Nome:** Integração com Meta Pixel

**Descrição:** Adicionar Meta Pixel para rastrear acessos de campanhas pagas de marketing.

**Prioridade:** 🟢 Baixa

**Complexidade:** Baixa — inserção de script de rastreamento.

**Dependências:** Conta Business no Meta, ID do Pixel.

**Status:** 🟢 Aprovado

---

## Pós-MVP — Infraestrutura

### BG-007

**Nome:** Domínio Próprio

**Descrição:** Adquirir e configurar domínio próprio (ex: `noobzim.com.br`) apontando para a Vercel via DNS.

**Prioridade:** 🟠 Alta

**Complexidade:** Baixa — compra de domínio + configuração de DNS na Vercel.

**Dependências:** Aquisição do domínio em registradora (ex: Registro.br, GoDaddy).

**Status:** ⚪ Não iniciado

---

### BG-008

**Nome:** Logotipos das Marcas Parceiras

**Descrição:** Obter logotipos vetorizados ou em alta resolução (PNG transparente) das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) para o Infinite Marquee.

**Prioridade:** 🟡 Média

**Complexidade:** Baixa — apenas coleta e inserção de assets.

**Dependências:** Contato com as marcas parceiras para fornecimento dos assets.

**Status:** ⚪ Não iniciado

---

# Ideias Futuras

- Página de obrigado (Thank You Page) após envio do formulário de contato (V3+).
- Versão em inglês da Landing Page para alcançar marcas internacionais.
- Seção de depoimentos de marcas parceiras.
- Integração com calendário para agendamento de reuniões (ex: Calendly).
- Animações de parallax no Hero para maior impacto visual.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Backlog organizado por versão (V2, V3, V4) | Alinhado com o Roadmap definido no PROJECT_BRIEF |
| Google Analytics e Meta Pixel pós-MVP | Definido pelo cliente: não faz parte do MVP |
| Logotipos das marcas: pós-MVP | Assets ainda não disponíveis |

---

# Pendências

- TODO: Definir data alvo para início do V2.
- TODO: Definir serviço de formulário de contato (Formspree ou EmailJS) para V3.
- TODO: Validar escopo e tecnologia do dashboard administrativo (V4).
