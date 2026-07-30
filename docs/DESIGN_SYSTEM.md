# DESIGN SYSTEM

## Objetivo

Este documento define todos os padrões visuais e de experiência do usuário do projeto.

Seu objetivo é garantir consistência entre todas as telas da aplicação.

Nenhum componente deve ser criado sem seguir este documento.

---

# Identidade Visual

## Conceito

A identidade visual da Landing Page do Noobzim reflete a estética urbana, energética e jovem do criador de conteúdo. O design combina tons terrosos quentes com amarelo vibrante e azul-esverdeado como destaque, criando contraste forte e personalidade marcante. A tipografia de impacto reforça o estilo direto e dinâmico do nicho (Humor, Lifestyle e Games).

---

## Público-alvo

A interface foi projetada para dois perfis:

1. **Patrocinador / Representante de Marca (usuário principal):** Profissional de marketing ou de agência, focado em resultados, que precisa avaliar rapidamente o alcance e o engajamento do criador.
2. **Noobzim (criador, admin):** Responsável por solicitar atualizações de conteúdo (no MVP, via edição manual do código).

---

# Paleta de Cores

| Nome | HEX | Utilização |
|------|-----|-----------|
| Terra (Fundo Primário) | `#9c634c` | Cor de fundo principal da página |
| Bege Claro (Texto Secundário) | `#f4e3c5` | Textos sobre fundos escuros, subtítulos |
| Amarelo (Destaque) | `#f1aa00` | CTAs, números de métricas, elementos de ênfase |
| Azul Esverdeado (Detalhes/Botões) | `#225a5e` | Botões secundários, bordas, ícones de destaque |
| Preto (Elementos Escuros) | `#111111` | Fundos alternativos de seção, texto principal sobre fundos claros |

**Variáveis CSS (`:root`):**

```css
:root {
  --color-primary-bg: #9c634c;
  --color-text-secondary: #f4e3c5;
  --color-accent: #f1aa00;
  --color-detail: #225a5e;
  --color-dark: #111111;
}
```

---

# Tipografia

## Fonte principal (Títulos)

- `Impact`, `Arial Black`, sans-serif — fontes de forte impacto, refletindo a estética urbana e energética.

## Fonte secundária (Corpo)

- `Arial`, sans-serif — sem serifa, para leitura confortável.

## Tamanhos (referência)

| Elemento | Tamanho Base |
|---------|-------------|
| H1 (Hero) | 3rem–5rem (responsivo) |
| H2 (Seção) | 2rem–3rem |
| H3 (Subseção) | 1.5rem–2rem |
| Corpo | 1rem–1.125rem |
| Legenda | 0.875rem |

## Pesos

- Títulos: Bold / Black (700–900)
- Corpo: Regular (400)
- Destaques: Bold (700)

---

# Espaçamentos

Sistema de espaçamento baseado em múltiplos de `8px`:

| Token | Valor |
|-------|-------|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 32px |
| xl | 48px |
| xxl | 64px |
| xxxl | 96px |

---

# Bordas

## Radius

- Cards: `8px`–`12px`
- Botões: `4px`–`8px`
- Imagens de destaque: `0` (sem arredondamento) ou `50%` para avatares circulares

## Espessuras

- Bordas decorativas: `2px`–`4px`
- Cor padrão de borda: `#f1aa00` (Amarelo) ou `#225a5e` (Azul Esverdeado)

## Sombras

- Cards no estado default: `0 2px 8px rgba(0,0,0,0.3)`
- Cards no estado hover (Hover Lift): `0 8px 24px rgba(0,0,0,0.5)`, `translateY(-8px)`

---

# Ícones

Não há biblioteca de ícones definida para o MVP. Caso necessário, utilizar SVGs inline ou ícones Unicode. Qualquer biblioteca de ícones (ex: Font Awesome) deverá ser aprovada antes de adicionada.

---

# Componentes

## Botão CTA Principal

### Objetivo

Chamar o usuário para ação de contato comercial.

### Estados

- **Default:** Fundo `#f1aa00`, texto `#111111`, borda `none`.
- **Hover:** Leve escurecimento do fundo (filter: brightness(90%)).
- **Focus:** Outline visível para acessibilidade.
- **Animação:** Pulse contínua via `@keyframes`.

### Variantes

- CTA Principal (Hero): tamanho grande, animação Pulse.
- CTA Secundário (Footer): tamanho padrão.

### Regras de utilização

- Sempre usar texto direto e ativo ("Fale Comigo", "Seja Parceiro").
- Nunca remover a animação Pulse do CTA principal do Hero.

### Acessibilidade

- Atributo `aria-label` descritivo.
- Cor de texto com contraste mínimo 4.5:1 sobre o fundo amarelo.

---

## Card de Projeto

### Objetivo

Apresentar os projetos principais do criador de forma visual e interativa.

### Estados

- **Default:** Imagem + título + breve descrição visíveis.
- **Hover (Hover Lift):** Elevação no eixo Y (`translateY(-8px)`) e sombra ampliada. Foco descritivo revelado.

### Variantes

- Card padrão (projetos).

### Regras de utilização

- Todos os cards devem ter dimensões uniformes.
- O efeito Hover Lift é obrigatório.

### Acessibilidade

- Imagem com `alt` descritivo.
- Conteúdo oculto no hover deve ser acessível por teclado (`:focus-within`).

---

## Seção de Métricas

### Objetivo

Exibir dados de seguidores e engajamento com contador dinâmico.

### Estados

- **Antes do viewport:** Valores em `0`.
- **Após IntersectionObserver:** Contador animado até o valor final.

### Variantes

- Instagram: +8.300 seguidores, 10,3% de engajamento.
- TikTok: +15.300 seguidores, 11,1% de engajamento.

### Regras de utilização

- O contador só dispara UMA vez por sessão de visualização.
- Valores exibidos com formatação numérica (ponto separador de milhar).

### Acessibilidade

- Valores finais devem estar disponíveis em atributos `aria-label` para leitores de tela.

---

## Infinite Marquee (Carrossel de Marcas)

### Objetivo

Exibir logotipos das marcas parceiras em loop contínuo horizontal.

### Estados

- **Default:** Animação CSS contínua (`@keyframes`).
- **Hover:** Pausa na animação (`animation-play-state: paused`).

### Variantes

- Loop simples (MVP).

### Regras de utilização

- Duplicar os itens no HTML para garantir loop infinito sem salto visual.
- TODO: Logotipos em PNG transparente ou SVG. Ainda não disponíveis.

### Acessibilidade

- Região marcada com `aria-label="Marcas parceiras"`.
- Animação deve respeitar `prefers-reduced-motion`.

---

# Layout

## Grid

Layout de coluna única para mobile. Para desktop, uso de `display: flex` ou `display: grid` por seção conforme necessidade visual.

## Breakpoints

| Nome | Largura Mínima |
|------|---------------|
| mobile (padrão) | 0px |
| tablet | 768px |
| desktop | 1024px |
| wide | 1280px |

## Containers

Largura máxima do container de conteúdo: `1200px` com `margin: 0 auto` e `padding` lateral.

## Responsividade

Mobile-first. Todos os estilos base são escritos para mobile. Breakpoints progressivos expandem o layout para telas maiores.

---

# Feedback Visual

## Loading

Não aplicável no MVP (página estática sem requisições assíncronas).

## Success

Não aplicável no MVP.

## Error

Não aplicável no MVP.

## Warning

Não aplicável no MVP.

## Empty States

Não aplicável no MVP. Todos os dados estão presentes estaticamente.

---

# Acessibilidade

Requisitos mínimos para o MVP:

- HTML semântico com elementos corretos (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Atributos `alt` em todas as imagens.
- Links com texto descritivo ou `aria-label`.
- Contraste de texto mínimo 4.5:1 (WCAG AA).
- Navegação por teclado funcional para CTA e cards.
- Respeito a `prefers-reduced-motion` nas animações.

> Não há diretrizes específicas de acessibilidade reforçada além do padrão web para este MVP.

---

# UX

Princípios adotados:

- **Impacto imediato:** O Hero deve comunicar o valor do criador em menos de 3 segundos de leitura.
- **Zero fricção:** O CTA de contato deve ser acionável com um único clique.
- **Progressão visual:** As animações de entrada guiam o olhar do usuário de cima para baixo.
- **Prova social:** Métricas em destaque validam a credibilidade do criador antes do CTA final.

---

# Responsividade

- Layout mobile-first obrigatório desde o início do desenvolvimento.
- Seções que usam grid/flex em desktop devem colapsar para coluna única em mobile.
- Fonte Hero: escala entre `2.5rem` (mobile) e `5rem` (desktop).
- Cards de projetos: `1 coluna` (mobile) → `2 colunas` (tablet) → `2 colunas` (desktop).
- Não há comportamento responsivo especial fora da quebra tradicional em coluna única (confirmado pelo cliente).

---

# Animações

| Animação | Descrição | Gatilho |
|---------|-----------|---------|
| Pulse (CTA) | Escala e opacidade pulsando continuamente no botão principal | CSS automático (`@keyframes`) |
| Contador Dinâmico | Incremento numérico de 0 até o valor alvo | IntersectionObserver (seção de métricas entra no viewport) |
| Hover Lift (Cards) | `translateY(-8px)` + sombra ampliada | `:hover` CSS |
| Infinite Marquee | Scroll horizontal contínuo dos logotipos | CSS automático (`@keyframes`) |
| Entrada de Seções | Fade-in + slide-up ao entrar no viewport | IntersectionObserver |

Regras gerais:
- Duração máxima de animações de entrada: `600ms`.
- `ease-out` como curva padrão.
- Respeitar `prefers-reduced-motion: reduce` desabilitando animações não essenciais.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Paleta terrosa + amarelo | Fidelidade à identidade visual existente do criador (extraída do PDF de referência) |
| Tipografia Impact/Arial Black | Reflete estética urbana e energética do nicho Humor/Games |
| Mobile-first desde o início | Decisão explícita do cliente para garantir experiência mobile completa |
| Animações via CSS puro | Sem dependências externas, máxima performance |

---

# Pendências

- TODO: Definir formato exato da visualização do Público-Alvo (gráficos ou tipografia em destaque).
- TODO: Obter logotipos em alta resolução (PNG transparente) das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) para o Infinite Marquee.
