# DATABASE

## Objetivo

Este documento descreve a estrutura lógica do banco de dados.

Seu objetivo é facilitar a implementação, manutenção e evolução do sistema.

---

# Banco de Dados

## Tecnologia

Não aplicável no MVP.

O projeto LP NOOBZIM é uma Landing Page estática. Não há banco de dados. Todos os dados residem estaticamente no código HTML.

## ORM

Não aplicável no MVP.

## Estratégia de Migrations

Não aplicável no MVP.

## Convenções utilizadas

Não aplicável no MVP.

---

# Convenções

Não aplicável no MVP.

---

# Entidades

Não aplicável no MVP. Os dados estáticos da página são:

| Dado | Local de Armazenamento | Tipo |
|------|----------------------|------|
| Nome do criador | HTML (inline) | Texto |
| Bio do criador | HTML (inline) | Texto |
| Seguidores Instagram | HTML (atributo `data-target` ou inline) | Número |
| Engajamento Instagram | HTML (inline) | Porcentagem |
| Seguidores TikTok | HTML (atributo `data-target` ou inline) | Número |
| Engajamento TikTok | HTML (inline) | Porcentagem |
| Dados de Público-Alvo | HTML (inline) | Texto/Número |
| Projetos (nome, descrição) | HTML (inline) | Texto |
| Ações Sociais (nome, descrição) | HTML (inline) | Texto |
| Marcas Parceiras (nome, logo) | HTML (inline) + assets/ | Texto/Imagem |
| E-mail de contato | HTML (href mailto:) | E-mail |

---

# Relacionamentos Gerais

Não aplicável no MVP.

---

# Regras de Integridade

Não aplicável no MVP.

As únicas "regras de integridade" são:

- O e-mail de contato deve ser sempre `CONTATONOOBZIM@GMAIL.COM`.
- Os valores de métricas devem refletir os dados do período de referência (90 dias do Mídia Kit PDF).
- Qualquer atualização de dados deve ser feita manualmente no código HTML e registrada no CHANGELOG.

---

# Estratégias

## Soft Delete

Não aplicável.

## Cascade

Não aplicável.

## Versionamento

Não aplicável. Dados versionados via Git (controle de versão do código).

## Auditoria

Não aplicável. Histórico de alterações registrado no CHANGELOG.md e no Git.

---

# Performance

Não aplicável para banco de dados.

A performance da página é gerenciada via otimização de assets (imagens comprimidas), animações via CSS puro e IntersectionObserver.

---

# Observações

- Para versões futuras (V2), será necessário avaliar a adoção de um banco de dados para armazenar métricas obtidas via API (ex: Supabase, PlanetScale).
- Para o dashboard administrativo (V4), será necessário banco de dados completo com autenticação.
- Qualquer decisão sobre banco de dados deve ser registrada no PROJECT_BRIEF antes de implementação.
