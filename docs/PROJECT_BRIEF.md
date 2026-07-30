# PROJECT BRIEF

> Este documento é a fonte oficial de verdade do projeto.
>
> Toda a documentação, implementação e decisões técnicas deverão ser derivadas deste documento.
>
> Nenhuma funcionalidade deve ser implementada sem estar descrita ou aprovada neste documento.

---

# 1. Visão Geral

## Nome do Projeto

LP NOOBZIM

## Descrição

Desenvolvimento de uma Landing Page MVP atuando como Mídia Kit interativo para o criador de conteúdo Noobzim (Renan Macedo). A aplicação tem como foco a conversão e captação de patrocinadores (B2B), apresentando de forma dinâmica e animada o perfil do criador, suas métricas de engajamento, público-alvo, projetos de destaque, ações sociais e marcas parceiras.

## Problema

Mídia kits tradicionais em formato PDF (como o documento "Mídia Kit - noooobzim (2026).pdf") são estáticos, limitam o engajamento imediato e não transmitem a dinamicidade da identidade visual e carisma do criador, reduzindo o impacto da primeira impressão sobre possíveis patrocinadores.

## Solução

Uma página web fluida, interativa e de carregamento rápido (Landing Page) que organize as informações do PDF com animações direcionadas, tipografia marcante e chamadas para ação (CTAs) claras, facilitando o contato comercial e retendo a atenção do usuário.

## Objetivos

- Substituir o PDF estático por uma Landing Page interativa e de alto impacto.
- Aumentar a taxa de conversão de contatos comerciais com marcas patrocinadoras.
- Consolidar a imagem profissional do Noobzim no mercado de influência digital B2B.
- Garantir carregamento inferior a 3 segundos para reter a atenção de executivos B2B.
- Entregar uma página completamente responsiva para dispositivos mobile desde o primeiro build.

---

# 2. Escopo

## MVP

A Landing Page será estruturada em seções sequenciais e ancoradas (SPA structure):

- **Hero Section:** Apresentação de alto impacto com nicho ("Humor, Lifestyle e Games"), resumo biográfico e CTA com animação Pulse.
- **Métricas e Alcance:** Instagram (+8.300 seguidores, 10,3%) e TikTok (+15.300 seguidores, 11,1%) com contador dinâmico via IntersectionObserver.
- **Público-Alvo:** Visualização da demografia (18-24 anos: 40,9%; 25-34 anos: 34,4%).
- **Projetos Principais:** Cards interativos com efeito Hover Lift ("Arrume-se com o PCD!" e "Repórter Rebaixado").
- **Ações Sociais:** Páscoa Solidária e Natal Solidário (parceria com a Furia).
- **Marcas Parceiras:** Carrossel Infinite Marquee em loop infinito.
- **Footer / CTA de Contato:** E-mail direto via `mailto:CONTATONOOBZIM@GMAIL.COM`.

## Fora do Escopo

- Integração com APIs externas (Instagram Graph API, TikTok for Developers API).
- Formulário de contato embutido.
- Dashboard administrativo (CMS).
- Google Analytics e Meta Pixel.
- Logotipos das marcas parceiras (pendente fornecimento dos assets).
- Domínio próprio.

## Futuras Expansões

- **V2:** Integração com Instagram Graph API e TikTok for Developers para métricas em tempo real.
- **V3:** Formulário de contato embutido (Formspree ou EmailJS).
- **V4:** Dashboard administrativo (CMS simples) para o criador atualizar conteúdo.
- **Pós-MVP:** Google Analytics e Meta Pixel para rastreamento de acessos.

---

# 3. Usuários

## Tipos de Usuários

### Patrocinador / Representante de Marca (Usuário Final)

- **Objetivo:** Avaliar o alcance, nicho e engajamento do criador para fechar parcerias comerciais.
- **Permissões:** Visualização pública da Landing Page. Contato via `mailto:`.
- **Responsabilidades:** Acessar a página, avaliar as métricas e iniciar contato comercial.

### Administrador / Criador (Noobzim — Renan Macedo)

- **Objetivo:** Solicitar atualizações nas métricas, projetos e patrocinadores.
- **Permissões:** Acesso ao repositório GitHub para edição manual do código (MVP). TODO: Dashboard administrativo (V4).
- **Responsabilidades:** Fornecer assets (imagens, logos), aprovar o design e solicitar atualizações de conteúdo.

---

# 4. Funcionalidades

## Hero Section

- **Objetivo:** Apresentação de alto impacto do criador para capturar a atenção imediata.
- **Funcionalidades:** Exibição do nicho, bio do criador, botão CTA com animação Pulse contínua.
- **Fluxo principal:** Usuário acessa a página → vê o Hero → clica no CTA → abre cliente de e-mail.
- **Regras:** Animação Pulse obrigatória no CTA. Deve ser desabilitada com `prefers-reduced-motion`.

## Métricas e Alcance

- **Objetivo:** Demonstrar prova social com dados de seguidores e engajamento.
- **Funcionalidades:** Exibição de métricas estáticas com contador dinâmico via IntersectionObserver.
- **Fluxo principal:** Usuário rola até a seção → contador inicia em 0 → incrementa até o valor final.
- **Regras:** Instagram: +8.300 / 10,3%. TikTok: +15.300 / 11,1%. Contador dispara apenas uma vez por visualização.

## Público-Alvo

- **Objetivo:** Demonstrar a qualidade e perfil do público do criador.
- **Funcionalidades:** Visualização dos dados demográficos (18-24: 40,9%, 25-34: 34,4%).
- **Regras:** TODO — Formato exato da visualização ainda não definido.

## Projetos Principais

- **Objetivo:** Apresentar os projetos de maior destaque do criador.
- **Funcionalidades:** Cards interativos com efeito Hover Lift.
- **Projetos:** "Arrume-se com o PCD!" e "Repórter Rebaixado".
- **Regras:** Hover Lift obrigatório. Em mobile, conteúdo descritivo visível por padrão.

## Ações Sociais

- **Objetivo:** Reforçar o propósito social do criador como diferencial para marcas.
- **Funcionalidades:** Destaque para Páscoa Solidária e Natal Solidário (parceria com Furia).

## Marcas Parceiras

- **Objetivo:** Demonstrar credibilidade através das marcas já parceiras.
- **Funcionalidades:** Infinite Marquee em loop infinito com logotipos e nomes.
- **Regras:** Loop sem salto visual. Pausa no hover. Respeitar `prefers-reduced-motion`.
- **Pendência:** Logos em alta resolução ainda não disponíveis.

## Footer / CTA de Contato

- **Objetivo:** Converter o visitante em contato comercial.
- **Funcionalidades:** Link `mailto:CONTATONOOBZIM@GMAIL.COM`.
- **Regras:** E-mail exato: CONTATONOOBZIM@GMAIL.COM. Link `mailto:` nativo.

---

# 5. Fluxos do Sistema

## Fluxo Principal de Conversão

```
Patrocinador acessa a URL
        ↓
Hero Section (impacto imediato + CTA)
        ↓
Rola para baixo
        ↓
Métricas (prova social — contador animado)
        ↓
Público-Alvo (validação do nicho)
        ↓
Projetos (credibilidade e criatividade)
        ↓
Ações Sociais (propósito e valores)
        ↓
Marcas Parceiras (prova social adicional)
        ↓
Footer / CTA de Contato (conversão)
        ↓
Abre cliente de e-mail com mailto:
```

---

# 6. Regras de Negócio

Ver `docs/BUSINESS_RULES.md` para lista completa.

Resumo das principais:

| ID | Regra |
|----|-------|
| RG-001 | Dados residem estaticamente no HTML. Sem banco de dados. |
| RG-002 | Carregamento < 3 segundos. |
| RG-003 | Fidelidade visual à paleta e tipografia definidas. |
| RG-004 | Responsividade mobile-first obrigatória desde o início. |
| BR-001 | CTA com animação Pulse contínua. |
| BR-004 | Contador via IntersectionObserver, dispara uma vez por visualização. |
| BR-010 | Infinite Marquee em loop contínuo, pausa no hover. |
| BR-012 | Contato via `mailto:CONTATONOOBZIM@GMAIL.COM`. |

---

# 7. Modelo de Dados

Não há banco de dados. Os dados residem estaticamente no HTML.

| Dado | Valor | Localização |
|------|-------|-------------|
| Nome do criador | Noobzim (Renan Macedo) | HTML inline |
| Nicho | Humor, Lifestyle e Games | HTML inline |
| Instagram — Seguidores | +8.300 | HTML (data-target) |
| Instagram — Engajamento | 10,3% | HTML inline |
| TikTok — Seguidores | +15.300 | HTML (data-target) |
| TikTok — Engajamento | 11,1% | HTML inline |
| Público 18-24 anos | 40,9% | HTML inline |
| Público 25-34 anos | 34,4% | HTML inline |
| Projeto 1 | Arrume-se com o PCD! | HTML inline |
| Projeto 2 | Repórter Rebaixado | HTML inline |
| E-mail | CONTATONOOBZIM@GMAIL.COM | HTML href |

---

# 8. Tecnologias

**Frontend:** HTML5 semântico, CSS3 (Vanilla), JavaScript (Vanilla, ES6+)

**Backend:** Não aplicável (MVP estático)

**Banco de Dados:** Não aplicável

**ORM:** Não aplicável

**Autenticação:** Não aplicável (MVP)

**Armazenamento:** Assets no repositório GitHub

**Infraestrutura:** Vercel (CDN, HTTPS automático, deploy automático)

**Hospedagem:** Vercel

**Serviços externos (MVP):** Nenhum

**Bibliotecas importantes:** Nenhuma (sem dependências externas)

---

# 9. Arquitetura

Ver `docs/ARCHITECTURE.md` para documentação completa.

- **Padrão:** Página estática — Client-Side Rendering puro.
- **Estrutura:** `index.html`, `css/styles.css`, `js/main.js`, `assets/`.
- **Camadas:** HTML (estrutura) → CSS (visual) → JS (interação).
- **Comunicação:** DOM manipulation via JavaScript Vanilla.
- **Deploy:** Arquivos estáticos servidos via Vercel CDN.

---

# 10. Interface

Ver `docs/DESIGN_SYSTEM.md` e `docs/UX_RULES.md` para documentação completa.

**Estilo visual:** Urbano, energético, marcante. Tons terrosos + amarelo vibrante + azul-esverdeado.

**Paleta:**
- Fundo: `#9c634c` (Terra)
- Texto: `#f4e3c5` (Bege Claro)
- Destaque: `#f1aa00` (Amarelo)
- Detalhes: `#225a5e` (Azul Esverdeado)
- Escuro: `#111111` (Preto)

**Tipografia:** Impact / Arial Black (títulos) + Arial (corpo)

**Componentes:** Botão CTA (Pulse), Cards (Hover Lift), Infinite Marquee, Contador Dinâmico.

**Responsividade:** Mobile-first. Todos os estilos começam para mobile (375px+).

**Acessibilidade:** HTML semântico, alt nas imagens, contraste mínimo WCAG AA, prefers-reduced-motion.

---

# 11. Segurança

Ver `docs/SECURITY.md` para documentação completa.

- Página pública sem autenticação. Nenhum dado sensível processado.
- Sem banco de dados. Zero risco de SQL Injection.
- Sem `innerHTML` para conteúdo dinâmico (mitigação preventiva de XSS).
- HTTPS automático via Vercel.
- TODO: Configurar headers de segurança via `vercel.json`.

---

# 12. Requisitos Não Funcionais

**Performance:** Carregamento < 3 segundos. Score Lighthouse Performance ≥ 90.

**Escalabilidade:** Escalabilidade horizontal nativa via CDN da Vercel.

**Disponibilidade:** Garantida pela infraestrutura da Vercel (SLA implícito).

**Logs:** Não há sistema de logs no MVP. Logs de acesso básicos disponíveis no dashboard Vercel.

**Monitoramento:** TODO (pós-MVP).

**Backup:** Repositório GitHub.

**Manutenibilidade:** Código mantível por um único desenvolvedor. Sem dependências externas.

---

# 13. Integrações

## MVP

Nenhuma integração via API. Único protocolo externo: `mailto:` (nativo do browser).

## Pós-MVP

| Versão | Integração | Objetivo |
|--------|-----------|---------|
| V2 | Instagram Graph API | Métricas em tempo real |
| V2 | TikTok for Developers API | Métricas em tempo real |
| V3 | Formspree / EmailJS | Formulário de contato |
| Pós-MVP | Google Analytics | Rastreamento de acessos |
| Pós-MVP | Meta Pixel | Rastreamento de campanhas |

---

# 14. Restrições

**Técnicas:**
- Sem banco de dados.
- Sem framework JS ou CSS.
- Sem requisições HTTP externas no MVP.
- Código mantível por um único desenvolvedor.

**Operacionais:**
- Métricas atualizadas manualmente (fotografia de 90 dias).
- Logotipos de parceiros ainda não disponíveis.
- Domínio próprio não adquirido.

**Ambientais:**
- Hospedagem: Vercel (definido pelo cliente).
- Domínio: nenhum no momento.

---

# 15. Decisões do Projeto

| Decisão | Justificativa | Impacto |
|---------|--------------|---------|
| HTML/CSS/JS Vanilla | Performance máxima, carregamento < 3s, zero dependências | Todo o desenvolvimento |
| Hospedagem na Vercel | Deploy simples, CDN global, HTTPS automático, gratuito | Infraestrutura |
| Contato via mailto: | Zero fricção, sem dependência de serviços externos | Conversão |
| Mobile-first desde o início | Decisão do cliente | Todo o CSS |
| Sem analytics no MVP | Decisão do cliente (implementar pós-MVP) | Rastreamento |
| Logotipos pós-MVP | Assets não disponíveis no momento | Seção de Marcas |

---

# 16. Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|-------------|---------|-----------|
| Logotipos não fornecidos no prazo | Alta | Médio | Placeholders textuais no MVP |
| Dados de métricas desatualizados | Média | Médio | Documentar no site a data de referência dos dados |
| Incompatibilidade cross-browser (IntersectionObserver) | Baixa | Baixo | Implementar fallback para browsers antigos |
| Mudanças de escopo durante desenvolvimento | Média | Alto | Qualquer mudança deve ser aprovada e registrada no PROJECT_BRIEF |
| Domínio não disponível para lançamento | Média | Baixo | Usar subdomínio Vercel temporariamente |

---

# 17. Critérios de Sucesso

- A página carrega em menos de 3 segundos em conexões padrão.
- O layout é completamente responsivo em dispositivos mobile (375px+).
- Todas as animações (Pulse, contador, Hover Lift, Marquee) funcionam sem travamentos.
- O link `mailto:` funciona corretamente em todos os navegadores principais.
- O projeto é publicado com sucesso na Vercel.
- A identidade visual está fiel à paleta e tipografia definidas.
- O cliente (Noobzim) aprova o resultado final.

---

# 18. Pendências

- TODO: Formato exato da visualização do Público-Alvo (gráficos ou tipografia em destaque).
- TODO: Logotipos das marcas parceiras em alta resolução.
- TODO: Imagens do criador e dos projetos.
- TODO: Domínio próprio (sem previsão de aquisição).
- TODO: Definir responsável pelo desenvolvimento.
- TODO: URL do repositório GitHub.

---

# 19. Glossário

| Termo | Definição |
|-------|-----------|
| MVP | Minimum Viable Product — versão mínima funcional do produto |
| SPA | Single Page Application — aplicação de página única |
| CTA | Call to Action — chamada para ação |
| Mídia Kit | Material de apresentação do criador para patrocinadores |
| PCD | Pessoa com Deficiência |
| B2B | Business to Business — relação comercial entre empresas |
| IntersectionObserver | API nativa do browser para detectar quando elementos entram/saem do viewport |
| Infinite Marquee | Carrossel horizontal em loop infinito via animação CSS |
| Hover Lift | Efeito de elevação (translateY + sombra) aplicado ao passar o cursor sobre um elemento |
| CDN | Content Delivery Network — rede de distribuição de conteúdo |
| LGPD | Lei Geral de Proteção de Dados — legislação brasileira de privacidade |
| WCAG | Web Content Accessibility Guidelines — diretrizes de acessibilidade web |

---

# 20. Resumo Executivo

O projeto **LP NOOBZIM** é uma Landing Page MVP que substitui o Mídia Kit PDF estático do criador de conteúdo Noobzim (Renan Macedo) por uma experiência web interativa, animada e responsiva.

**Stack:** HTML5 + CSS3 (Vanilla) + JavaScript (Vanilla) — sem frameworks. Deploy na Vercel via integração GitHub.

**Público-alvo:** Patrocinadores e representantes de marcas B2B nos nichos de Humor, Lifestyle e Games.

**Estrutura:** 7 seções sequenciais — Hero, Métricas, Público-Alvo, Projetos, Ações Sociais, Marcas Parceiras e Footer/Contato.

**Diferenciais técnicos:** Contador dinâmico via IntersectionObserver, animação Pulse no CTA, efeito Hover Lift nos cards, Infinite Marquee em CSS puro. Mobile-first obrigatório.

**Conversão:** CTA direto via `mailto:CONTATONOOBZIM@GMAIL.COM` — zero fricção.

**Restrições:** Sem banco de dados, sem APIs externas, sem frameworks pesados. Dados estáticos no HTML. Carregamento < 3 segundos como critério de negócio.

**Próximas versões:** V2 (métricas em tempo real via API), V3 (formulário de contato), V4 (dashboard admin).
