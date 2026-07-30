# UX RULES

## Objetivo

Definir todas as regras de experiência do usuário do projeto.

Este documento complementa o Design System.

---

# Princípios

1. **Impacto Imediato:** O usuário deve entender quem é o Noobzim e o que ele oferece em menos de 3 segundos de visualização do Hero.
2. **Zero Fricção:** O caminho do patrocinador até o contato comercial deve ser o mais curto possível (Hero → CTA direto).
3. **Prova Social Progressiva:** As métricas e projetos reforçam a credibilidade antes do CTA final.
4. **Dinamismo Visual:** Animações e interações transmitem a energia e o carisma do criador. A página não deve parecer estática.
5. **Mobile-First:** A experiência mobile é tão completa e polida quanto a desktop — não uma versão simplificada.

---

# Navegação

- A página é uma SPA (Single Page Application) de scroll vertical. Não há rotas ou páginas secundárias no MVP.
- O menu de navegação (se implementado) deve usar âncoras HTML (`href="#secao"`) com scroll suave (`scroll-behavior: smooth`).
- O usuário deve conseguir voltar ao topo facilmente (botão "Voltar ao topo" ou header fixo).
- A âncora do CTA principal deve levar diretamente ao Footer/Contato.

---

# Formulários

Não aplicável no MVP. Não há formulários.

Para versões futuras (V3 — formulário de contato):
- Campos mínimos: Nome, E-mail, Empresa, Mensagem.
- Feedback imediato de validação (inline).
- Mensagem de sucesso após envio.
- Fallback via `mailto:` em caso de falha do serviço.

---

# Feedback

## Loading

Não aplicável no MVP (página estática sem requisições assíncronas).

Para versões futuras com APIs: indicador de carregamento nas seções de métricas enquanto os dados são buscados.

## Sucesso

Não aplicável no MVP.

## Erro

Não aplicável no MVP.

## Avisos

Não aplicável no MVP.

---

# Validação

Não aplicável no MVP. Não há formulários ou entrada de dados.

---

# Estados Vazios

Não aplicável no MVP. Todos os dados estão presentes estaticamente.

Para a seção de Marcas Parceiras: se nenhum logo estiver disponível, exibir os nomes das marcas em texto como fallback.

---

# Paginação

Não aplicável. A página é um scroll único (SPA).

---

# Busca

Não aplicável no MVP.

---

# Filtros

Não aplicável no MVP.

---

# Responsividade

- **Mobile-first obrigatório:** Todos os estilos são escritos para mobile (375px–430px) primeiro.
- **Breakpoints progressivos:** Estilos para tablet (768px+) e desktop (1024px+) adicionados via media queries.
- **Sem comportamento especial além da quebra em coluna única:** Confirmado pelo cliente. Não há layouts mobile customizados além da responsividade padrão.
- **Touch targets:** Botões e links devem ter área mínima de toque de 44x44px em mobile (WCAG).
- **Texto:** Tamanho mínimo de `16px` para corpo de texto em mobile (evitar zoom automático do iOS).
- **Imagens:** Responsivas com `max-width: 100%` e `height: auto`.

---

# Acessibilidade

Requisitos mínimos para o MVP:

- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Todos os atributos `alt` em imagens preenchidos de forma descritiva.
- Links com texto descritivo ou `aria-label` claro.
- Contraste de texto mínimo 4.5:1 (WCAG AA) para texto normal.
- Contraste de texto mínimo 3:1 (WCAG AA) para texto grande (títulos).
- Navegação por teclado funcional: CTA, links e cards acessíveis via Tab.
- Animações respeitam `prefers-reduced-motion: reduce`.

> Não há requisitos de acessibilidade reforçada além do padrão web para este MVP (confirmado pelo cliente).

---

# Performance Percebida

Estratégias para que a página pareça carregada rapidamente:

- **Above the fold imediato:** O Hero deve carregar e ser visível sem precisar rolar — CSS crítico inline ou arquivo CSS pequeno.
- **Animações de entrada progressivas:** As seções abaixo do Hero entram com fade-in suave ao rolar, criando a sensação de conteúdo "vivo".
- **Imagens otimizadas:** Usar formatos modernos (WebP) e dimensões adequadas para evitar download excessivo.
- **Contador dinâmico:** O contador das métricas cria percepção de "dados em tempo real", mesmo sendo estático.
- **Tempo de carregamento < 3 segundos:** Critério obrigatório de negócio.

---

# Consistência

Regras de consistência visual obrigatórias:

- Usar sempre as variáveis CSS do DESIGN_SYSTEM.md para cores e tipografia. Nunca valores hardcoded.
- Espaçamentos seguem o sistema de múltiplos de 8px definido no DESIGN_SYSTEM.md.
- O CTA de contato deve ser o mesmo (`mailto:CONTATONOOBZIM@GMAIL.COM`) em todos os pontos da página onde aparecer.
- O efeito Hover Lift deve ser idêntico em todos os cards de projetos.
- O estilo dos títulos de seção deve ser consistente ao longo de toda a página.
- A paleta de cores não deve ter variações não aprovadas no DESIGN_SYSTEM.md.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| SPA de scroll único | Simplifica a navegação e mantém o patrocinador no fluxo de conversão sem distrações. |
| CTA via mailto: no MVP | Zero fricção, sem dependência de serviços externos. |
| Animações de entrada por scroll (IntersectionObserver) | Revelação progressiva do conteúdo mantém o usuário engajado durante a rolagem. |
| Mobile-first obrigatório desde o início | Decisão do cliente. Garante que o mobile seja tratado como prioridade, não como adaptação. |

---

# Pendências

- TODO: Definir comportamento exato da visualização de Público-Alvo (gráficos, barras ou tipografia em destaque).
- TODO: Definir se haverá menu de navegação fixo no topo (Navbar sticky) ou não.
- TODO: Definir comportamento do Infinite Marquee em dispositivos touch (pause no tap?).
