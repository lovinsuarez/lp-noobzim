# SECURITY

## Objetivo

Este documento define as diretrizes de segurança do projeto.

Seu objetivo é proteger usuários, dados e infraestrutura.

---

# Autenticação

Não aplicável no MVP. A Landing Page é pública e não requer autenticação de nenhum tipo.

Para versões futuras (V4 — Dashboard Administrativo): definir estratégia de autenticação (ex: NextAuth com provedor OAuth como Google, ou e-mail/senha com bcrypt).

---

# Autorização

Não aplicável no MVP. Toda a página é pública e de leitura apenas.

Para versões futuras: implementar modelo de autorização baseado em roles (ex: `admin` para o criador, `visitor` para patrocinadores).

---

# Controle de Acesso

| Perfil | Acesso | Nível |
|--------|--------|-------|
| Visitante (Patrocinador) | Página pública (visualização) | Público |
| Admin (Noobzim) | Repositório GitHub (edição de código) | Privado (via GitHub auth) |

No MVP, o controle de acesso é gerenciado pelo GitHub (repositório privado ou público conforme decisão do cliente).

---

# Proteção de Dados

## Armazenamento

Não há armazenamento de dados de usuários no MVP. Nenhum dado pessoal de visitantes é coletado ou armazenado.

## Criptografia

Não aplicável no MVP. Nenhum dado sensível é processado.

## Mascaramento

Não aplicável no MVP.

## LGPD

No MVP, a página não coleta dados pessoais de visitantes. Não é necessária política de privacidade ou cookie banner.

Para versões futuras com analytics (Google Analytics, Meta Pixel) ou formulário de contato, será necessário:
- Implementar banner de consentimento de cookies.
- Adicionar página ou modal de Política de Privacidade.
- Garantir conformidade com a LGPD.

---

# Senhas

Não aplicável no MVP. Não há sistema de login ou cadastro.

---

# Tokens

Não aplicável no MVP. Não há integração com APIs externas que requeiram tokens.

Para versões futuras (V2+): tokens de API (Instagram, TikTok) devem ser armazenados como variáveis de ambiente na Vercel, nunca commitados no repositório.

---

# Sessões

Não aplicável no MVP. Não há gestão de sessão.

---

# Upload de Arquivos

Não aplicável no MVP. Não há upload de arquivos por parte do usuário.

Assets (imagens, logos) são adicionados diretamente ao repositório pelo desenvolvedor.

---

# APIs

## Proteção

Não aplicável no MVP. Nenhuma API própria exposta.

## Rate Limit

Não aplicável no MVP.

## CORS

Não aplicável no MVP. Página estática sem requisições cross-origin.

## Headers de Segurança

A Vercel aplica automaticamente alguns headers de segurança. Para o MVP, são suficientes os headers padrão da plataforma.

Para versões futuras, configurar via `vercel.json`:
- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

# Banco de Dados

Não aplicável no MVP. Não há banco de dados.

---

# Logs

Não há logs de dados sensíveis no MVP.

Durante desenvolvimento: `console.log()` não deve conter dados sensíveis. Remover antes de commitar.

---

# Monitoramento

Não aplicável no MVP.

TODO (Pós-MVP): Avaliar integração com Sentry para monitoramento de erros JavaScript no lado do cliente.

---

# Vulnerabilidades

## SQL Injection

Não aplicável. Não há banco de dados ou queries SQL.

## XSS (Cross-Site Scripting)

**Risco:** Baixo no MVP (sem entrada de dados do usuário).

**Mitigação:** Não usar `innerHTML` para inserir conteúdo dinâmico. Usar `textContent` para qualquer manipulação de texto via JS.

## CSRF (Cross-Site Request Forgery)

Não aplicável no MVP. Nenhum formulário ou requisição POST.

## SSRF (Server-Side Request Forgery)

Não aplicável no MVP. Sem servidor de aplicação.

## Clickjacking

**Risco:** Baixo.

**Mitigação futura:** Configurar header `X-Frame-Options: DENY` via `vercel.json`.

---

# Dependências

No MVP, não há dependências NPM ou bibliotecas externas. Zero risco de supply chain attack.

Para versões futuras:
- Auditar dependências regularmente com `npm audit`.
- Manter dependências atualizadas.
- Evitar pacotes sem manutenção ativa.

---

# Backup

O repositório GitHub é o único backup do código-fonte. O Git garante histórico completo de versões.

Não há backup de banco de dados (inexistente no MVP).

**Boas práticas:**
- Nunca trabalhar diretamente na branch `main` sem revisão.
- Manter repositório remoto no GitHub sempre atualizado.

---

# Recuperação

Em caso de deploy com problema em produção:

1. Acessar o dashboard da Vercel.
2. Identificar o deploy anterior estável.
3. Fazer rollback pelo dashboard da Vercel com um clique.

O tempo de recuperação estimado é inferior a 5 minutos.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Página pública sem autenticação | MVP de apresentação. Não há conteúdo restrito. |
| Zero coleta de dados no MVP | Elimina necessidade de LGPD, política de privacidade e cookie banner no MVP. |
| Vercel para hosting | HTTPS automático, proteção DDoS básica via CDN, rollback fácil. |
| Sem innerHTML para conteúdo dinâmico | Mitigação preventiva de XSS, mesmo sem entradas de usuário no MVP. |

---

# Pendências

- TODO: Configurar headers de segurança via `vercel.json` (X-Frame-Options, CSP, etc.).
- TODO: Implementar banner de consentimento de cookies quando analytics for adicionado (pós-MVP).
- TODO: Definir estratégia de autenticação para dashboard administrativo (V4).
- TODO: Avaliar política de privacidade necessária para versões com formulário de contato (V3).
