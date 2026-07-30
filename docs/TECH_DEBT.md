# TECH DEBT

## Objetivo

Registrar todas as dívidas técnicas identificadas durante o desenvolvimento.

Nenhuma dívida técnica deve ficar apenas na memória da equipe.

---

# Organização

Cada dívida contém:

- ID
- Nome
- Descrição
- Motivo
- Impacto
- Prioridade
- Complexidade
- Responsável
- Status

---

# Prioridade

🔥 Crítica

🟠 Alta

🟡 Média

🟢 Baixa

---

# Status

⚪ Não iniciado

🟡 Planejado

🔵 Em andamento

🟢 Resolvido

🔴 Cancelado

---

# Dívidas Técnicas

## TD-001

**Nome:** Dados de Métricas Estáticos no HTML

**Descrição:** Os valores de métricas do Instagram e TikTok (seguidores, engajamento) estão hardcoded no HTML. Qualquer atualização requer edição manual do código.

**Motivo:** Decisão de MVP para garantir entrega rápida sem dependência de APIs externas.

**Impacto:** Os dados ficam desatualizados ao longo do tempo, podendo gerar desconfiança em patrocinadores que verificam os números diretamente nas plataformas.

**Plano de correção:** Integração com Instagram Graph API e TikTok for Developers API na V2 do projeto (ver BACKLOG.md — BG-001 e BG-002).

**Prioridade:** 🟠 Alta

**Complexidade:** Alta

**Responsável:** TODO

**Status:** 🟡 Planejado (V2)

---

## TD-002

**Nome:** Ausência de Ferramentas de Lint e Formatação

**Descrição:** O projeto não possui ESLint (JS), Stylelint (CSS) ou Prettier configurados. A consistência de código depende exclusivamente da disciplina do desenvolvedor.

**Motivo:** MVP rápido sem etapa de configuração de tooling.

**Impacto:** Inconsistências de formatação podem acumular ao longo do tempo, dificultando manutenção.

**Plano de correção:** Configurar ESLint, Stylelint e Prettier antes do início da Sprint 2.

**Prioridade:** 🟡 Média

**Complexidade:** Baixa

**Responsável:** TODO

**Status:** ⚪ Não iniciado

---

## TD-003

**Nome:** Ausência de Testes Automatizados

**Descrição:** O projeto não possui testes automatizados (unitários, integração, E2E). A validação é feita manualmente no browser.

**Motivo:** MVP estático sem lógica de negócio complexa. Testes manuais suficientes para o escopo inicial.

**Impacto:** Risco de regressões visuais e funcionais em versões futuras sem cobertura automatizada.

**Plano de correção:** Definir estratégia de testes (ver TESTING.md). Considerar Playwright para E2E em versões futuras.

**Prioridade:** 🟡 Média

**Complexidade:** Média

**Responsável:** TODO

**Status:** ⚪ Não iniciado

---

## TD-004

**Nome:** Logotipos das Marcas Parceiras Ausentes

**Descrição:** Os logotipos das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) para o componente Infinite Marquee ainda não estão disponíveis. O MVP utilizará placeholders.

**Motivo:** Assets não fornecidos pelo cliente no momento do desenvolvimento.

**Impacto:** O componente de Marcas Parceiras fica incompleto visualmente no MVP.

**Plano de correção:** Substituir placeholders pelos logotipos reais quando os assets forem fornecidos.

**Prioridade:** 🟡 Média

**Complexidade:** Baixa

**Responsável:** Noobzim (fornecimento dos assets)

**Status:** ⚪ Não iniciado

---

## TD-005

**Nome:** Contato via Mailto sem Fallback

**Descrição:** O CTA de contato usa o protocolo `mailto:` nativo, que depende de um cliente de e-mail configurado no dispositivo do usuário. Usuários sem cliente de e-mail configurado ficam sem opção de contato na página.

**Motivo:** Decisão de MVP para eliminar dependências externas e simplificar o contato comercial.

**Impacto:** Patrocinadores que usam webmail (Gmail, Outlook Web) sem cliente de e-mail local podem ter dificuldade em iniciar o contato.

**Plano de correção:** Implementar formulário de contato embutido na V3 (Formspree ou EmailJS) — ver BACKLOG.md BG-003.

**Prioridade:** 🟠 Alta

**Complexidade:** Média

**Responsável:** TODO

**Status:** 🟡 Planejado (V3)

---

## TD-006

**Nome:** Ausência de Headers de Segurança

**Descrição:** O projeto não possui configuração de headers de segurança HTTP (CSP, X-Frame-Options, etc.) via `vercel.json`.

**Motivo:** MVP focado em entrega de funcionalidade. Headers de segurança são configurações de infraestrutura.

**Impacto:** Baixo risco no MVP (página pública estática sem dados sensíveis), mas boas práticas recomendam a configuração.

**Plano de correção:** Criar `vercel.json` com headers de segurança antes do deploy em produção.

**Prioridade:** 🟢 Baixa

**Complexidade:** Baixa

**Responsável:** TODO

**Status:** ⚪ Não iniciado

---

## TD-007

**Nome:** Sem Monitoramento de Erros em Produção

**Descrição:** Não há ferramenta de monitoramento de erros JavaScript em produção (ex: Sentry). Erros em produção só são detectados se reportados pelo usuário.

**Motivo:** MVP sem orçamento para ferramentas de monitoramento pagas.

**Impacto:** Erros silenciosos em produção podem passar despercebidos.

**Plano de correção:** Avaliar integração com Sentry (plano gratuito disponível) em versões futuras.

**Prioridade:** 🟢 Baixa

**Complexidade:** Baixa

**Responsável:** TODO

**Status:** ⚪ Não iniciado

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Aceitar TD-001 no MVP | Velocidade de entrega prioritária. Dados serão integrados via API na V2. |
| Aceitar TD-005 no MVP | Simplicidade de implementação. Formulário de contato planejado para V3. |

---

# Pendências

- TODO: Definir responsável (desenvolvedor) para cada dívida técnica.
- TODO: Priorizar TD-002 (lint/formatação) antes do início das sprints de desenvolvimento.
