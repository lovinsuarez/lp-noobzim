# ENVIRONMENT

## Objetivo

Documentar todos os ambientes utilizados pelo projeto.

---

# Ambientes

## Desenvolvimento

**Objetivo:** Ambiente local do desenvolvedor para escrita e teste do código.

**URL:** `http://localhost` ou abertura direta do `index.html` no browser (sem servidor local necessário para MVP estático). Opcionalmente, usar extensão Live Server no VS Code.

**Infraestrutura:** Máquina local do desenvolvedor. Sistema Operacional: Windows (conforme configuração do usuário).

**Banco:** Não aplicável.

**Variáveis:** Não há variáveis de ambiente no MVP.

**Observações:** Por ser uma página estática, não é necessário servidor Node.js ou qualquer runtime no ambiente de desenvolvimento. Um simples `index.html` aberto no browser já é suficiente para desenvolvimento e teste.

---

## Homologação

**Objetivo:** Validar a página antes de publicar em produção. Verificação visual e funcional por parte do cliente (Noobzim).

**URL:** URL de preview gerada automaticamente pela Vercel a cada Pull Request ou deploy de branch (ex: `https://lp-noobzim-git-feature-xyz.vercel.app`).

**Infraestrutura:** Vercel (ambiente de preview automático).

**Banco:** Não aplicável.

**Variáveis:** Não há variáveis de ambiente.

**Observações:** A Vercel gera automaticamente URLs de preview para cada branch/PR. Não é necessário configurar um ambiente de homologação separado.

---

## Produção

**Objetivo:** Ambiente público acessível pelos patrocinadores e representantes de marcas.

**URL:** TODO — Subdomínio padrão gerado pela Vercel (ex: `lp-noobzim.vercel.app`) até aquisição de domínio próprio.

**Infraestrutura:** Vercel (CDN global, HTTPS automático).

**Banco:** Não aplicável.

**Variáveis:** Não há variáveis de ambiente no MVP.

**Observações:** Deploy automático a cada push na branch principal (`main`). HTTPS provisionado automaticamente pela Vercel.

---

# Variáveis de Ambiente

Não há variáveis de ambiente no MVP. A página é completamente estática.

| Variável | Obrigatória | Ambiente | Descrição |
|----------|-------------|----------|-----------|
| — | — | — | Nenhuma variável de ambiente definida para o MVP |

Para versões futuras (V2+) com integrações de API, as seguintes variáveis serão necessárias:

| Variável | Obrigatória | Ambiente | Descrição |
|----------|-------------|----------|-----------|
| `INSTAGRAM_ACCESS_TOKEN` | Sim (V2) | Produção | Token de acesso à Instagram Graph API |
| `TIKTOK_ACCESS_TOKEN` | Sim (V2) | Produção | Token de acesso à TikTok for Developers API |
| `FORMSPREE_ENDPOINT` | Sim (V3) | Produção | Endpoint do Formspree para formulário de contato |

---

# Serviços Externos

| Serviço | Ambiente | Finalidade | Status |
|---------|----------|-----------|--------|
| Vercel | Produção + Homologação | Hospedagem e CI/CD | Ativo |
| GitHub | Todos | Repositório de código e versionamento | Ativo |
| Gmail (mailto:) | Produção | Contato comercial direto | Ativo |
| Google Analytics | Produção | Rastreamento de acessos | TODO (Pós-MVP) |
| Meta Pixel | Produção | Rastreamento de campanhas | TODO (Pós-MVP) |

---

# Secrets

Não há secrets no MVP (sem tokens, chaves de API ou credenciais).

Para versões futuras, os secrets serão armazenados nas variáveis de ambiente da Vercel (configuradas via dashboard da Vercel, nunca commitadas no repositório).

---

# Backup

O repositório GitHub funciona como backup automático do código-fonte via controle de versão (Git).

Não há backup de banco de dados (inexistente no MVP).

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Sem variáveis de ambiente no MVP | Projeto completamente estático. Nenhuma credencial ou configuração dinâmica necessária. |
| Vercel como hospedagem | Deploy simples, CDN global, HTTPS automático, gratuito para projetos estáticos. |
| Preview automático via Vercel | Facilita homologação pelo cliente sem configuração adicional. |

---

# Pendências

- TODO: Definir e adquirir domínio próprio (ex: `noobzim.com.br`) para apontar para a Vercel.
- TODO: Configurar domínio customizado na Vercel após aquisição.
- TODO: Documentar variáveis de ambiente para integrações de API (V2).
