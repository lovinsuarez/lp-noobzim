# VISÃO DO PRODUTO

## Objetivo

Criar uma Landing Page interativa e de alto impacto que sirva como Mídia Kit digital para o criador de conteúdo Noobzim (Renan Macedo), substituindo o PDF estático por uma experiência web fluida, animada e orientada à conversão de patrocinadores B2B.

---

# Problema

Mídia kits tradicionais em formato PDF são estáticos, limitam o engajamento imediato e não transmitem a dinamicidade da identidade visual e o carisma do criador. Isso reduz o impacto da primeira impressão sobre possíveis patrocinadores e dificulta o processo de captação comercial.

---

# Solução

Uma Landing Page web fluida, interativa e de carregamento rápido que organiza as informações do Mídia Kit com animações direcionadas, tipografia marcante e chamadas para ação (CTAs) claras. A página facilita o contato comercial direto via link `mailto:` e retém a atenção do usuário por meio de animações acionadas pela rolagem (IntersectionObserver) e componentes dinâmicos como carrossel infinito e contador de métricas.

---

# Público-alvo

A interface foi projetada primariamente para:

- **Patrocinador / Representante de Marca**: Profissional de marketing ou agência que acessa a página para avaliar o alcance, o nicho (Humor, Lifestyle e Games) e o engajamento do criador com o intuito de fechar parcerias comerciais.
- **Administrador / Criador (Noobzim — Renan Macedo)**: Responsável por solicitar atualizações manuais no conteúdo da página (no MVP a atualização é feita diretamente no código).

---

# Proposta de Valor

A Landing Page entrega dinamismo, impacto visual e agilidade que o PDF estático não oferece:

- Animações e contadores dinâmicos que demonstram engajamento em tempo real de forma visual.
- Identidade visual fiel à marca do criador (paleta de cores, tipografia de impacto).
- CTA direto via `mailto:` que elimina fricção no processo de contato comercial.
- Carregamento abaixo de 3 segundos, adequado para o ritmo de executivos B2B.
- Responsivo para mobile desde o primeiro build.

---

# Objetivos do Negócio

- Aumentar a taxa de conversão de contatos comerciais oriundos de marcas patrocinadoras.
- Consolidar a imagem profissional do Noobzim no mercado de influência digital B2B.
- Substituir o PDF como principal instrumento de apresentação para parceiros e agências.
- Facilitar o acesso de marcas ao perfil, métricas e projetos do criador com zero atrito.

---

# Objetivos Técnicos

- Construir uma página estática (Client-side rendering puro) sem dependências de frameworks pesados.
- Garantir tempo de carregamento inferior a 3 segundos.
- Implementar animações via `@keyframes` e `IntersectionObserver` para performance otimizada.
- Utilizar apenas HTML5 semântico, CSS3 (Vanilla) com variáveis CSS nativas e JavaScript Vanilla.
- Garantir responsividade completa para dispositivos mobile desde o início.

---

# MVP

A primeira versão entregável (MVP) consiste em uma Landing Page estática (SPA structure) com as seguintes seções:

1. **Hero Section** — Apresentação de alto impacto com nicho e bio do criador. CTA com animação Pulse.
2. **Métricas e Alcance** — Dados do Instagram e TikTok com contador dinâmico via IntersectionObserver.
3. **Público-Alvo** — Apresentação visual da demografia (18-24 anos: 40,9%; 25-34 anos: 34,4%).
4. **Projetos Principais** — Cards interativos com efeito Hover Lift.
5. **Ações Sociais** — Destaque para Páscoa Solidária e Natal Solidário.
6. **Marcas Parceiras** — Logotipos em carrossel horizontal com Infinite Marquee em loop infinito.
7. **Footer / CTA de Contato** — E-mail direto via `mailto:CONTATONOOBZIM@GMAIL.COM`.

---

# Futuro do Produto

- **V2:** Integração com APIs do Instagram Graph e TikTok for Developers para atualização automática de métricas em tempo real.
- **V3:** Formulário de contato embutido usando serviço form-to-email (Formspree ou EmailJS).
- **V4:** Dashboard administrativo (CMS simples) para o criador atualizar projetos, fotos e patrocinadores.
- **Futuro:** Integração com Google Analytics e/ou Meta Pixel para rastrear acessos de agências.

---

# Restrições

- O MVP não possui banco de dados. Todos os dados residem estaticamente no HTML.
- Não há integração com APIs externas no MVP.
- A plataforma de hospedagem definida é a Vercel. Não há domínio próprio adquirido no momento.
- Os logotipos das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) ainda não estão disponíveis em alta resolução — serão implementados em versão futura.
- Não há diretrizes específicas de acessibilidade WCAG além do padrão web para o MVP.
- Rastreamento com Google Analytics ou Meta Pixel não faz parte do MVP.

---

# Indicadores de Sucesso

- A página carrega em menos de 3 segundos em conexões padrão.
- O layout é completamente responsivo em dispositivos mobile.
- O CTA de contato (`mailto:`) funciona corretamente em todos os navegadores principais.
- As animações (contador, Hover Lift, Infinite Marquee, Pulse) funcionam sem travamentos.
- O projeto é publicado com sucesso na Vercel.
- A identidade visual (paleta, tipografia) está fiel às diretrizes definidas no PROJECT_BRIEF.
