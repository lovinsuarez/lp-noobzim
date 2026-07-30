# API SPECIFICATION

## Objetivo

Este documento define todos os contratos da API do sistema.

Seu objetivo é garantir consistência entre frontend, backend e integrações.

Nenhum endpoint deve ser implementado sem estar documentado.

---

# Informações Gerais

## Arquitetura

Não aplicável no MVP.

A Landing Page do Noobzim é uma aplicação estática sem API própria. Não há backend, servidor de aplicação ou endpoints REST/GraphQL/RPC implementados.

---

## Base URL

Não aplicável no MVP.

URL de produção (Vercel): TODO — subdomínio padrão gerado pela Vercel até aquisição de domínio próprio.

---

## Autenticação

Não aplicável no MVP. A página é pública e não requer autenticação.

---

# Convenções

Não aplicável no MVP.

---

# Endpoints

Não há endpoints no MVP.

---

# Webhooks

Não aplicável no MVP.

---

# Integrações

## MVP

Nenhuma integração externa via API. O único protocolo de comunicação externo é o `mailto:` nativo do navegador para contato comercial.

## Futuras Integrações (Pós-MVP)

| Versão | Serviço | Finalidade |
|--------|---------|-----------|
| V2 | Instagram Graph API | Atualização automática de seguidores e taxa de engajamento em tempo real |
| V2 | TikTok for Developers API | Atualização automática de seguidores e taxa de engajamento em tempo real |
| V3 | Formspree / EmailJS | Formulário de contato embutido (form-to-email) |
| Pós-MVP | Google Analytics | Rastreamento de acessos e origem de visitantes |
| Pós-MVP | Meta Pixel | Rastreamento de campanhas de marketing |

---

# Versionamento

Não aplicável no MVP. Caso APIs sejam implementadas em versões futuras, adotar versionamento via prefixo de URL (ex: `/api/v1/`).

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Sem API no MVP | A Landing Page é estática. Nenhuma requisição externa é necessária para o MVP funcionar. |
| Contato via mailto: | Protocolo nativo do browser. Zero dependência de serviços externos no MVP. |

---

# Pendências

- TODO: Documentar endpoints da Instagram Graph API para integração futura (V2).
- TODO: Documentar endpoints da TikTok for Developers API para integração futura (V2).
- TODO: Documentar integração com Formspree ou EmailJS para formulário de contato (V3).
- TODO: Definir estratégia de autenticação para futuras APIs (caso o dashboard admin seja implementado em V4).
