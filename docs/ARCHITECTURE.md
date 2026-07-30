# ARCHITECTURE

## Objetivo

Este documento descreve toda a arquitetura do sistema.

Seu objetivo é manter o projeto organizado e consistente durante todo o desenvolvimento.

---

# Arquitetura Geral

**Página Estática — Client-Side Rendering (CSR) puro.**

A aplicação é uma Single Page Application (SPA) no sentido estrutural: uma única página HTML com seções ancoradas e navegação suave por scroll. Não há roteamento dinâmico, servidor de aplicação ou backend.

A arquitetura pode ser classificada como:

- **Monolítica Estática**: todo o código (HTML, CSS, JS) reside em arquivos planos, sem etapa de build.
- **Sem Backend**: nenhuma requisição a servidor de aplicação é feita em tempo de execução.
- **Deploy Estático**: os arquivos são servidos diretamente por CDN (Vercel).

---

# Estrutura do Projeto

```
LP NOOBZIM/
├── index.html          # Documento HTML principal — contém toda a estrutura da página
├── css/
│   └── styles.css      # Folha de estilos principal com variáveis CSS e @keyframes
├── js/
│   └── main.js         # Lógica de interação (IntersectionObserver, contador, marquee)
├── assets/
│   ├── images/         # Imagens do criador e projetos
│   └── logos/          # Logotipos das marcas parceiras (TODO: disponibilizar em alta resolução)
├── docs/               # Documentação do projeto
└── PROJECT_BRIEF.md    # Fonte oficial de verdade do projeto
```

> **Nota:** A estrutura de pastas acima é a recomendada para o MVP. Poderá ser ajustada durante a implementação.

---

# Camadas

## Apresentação (HTML)

### Responsabilidade

Estrutura semântica da página. Define as seções, conteúdos textuais e referências a recursos (imagens, scripts, estilos).

### Comunicação

É o ponto de entrada da aplicação. Carrega CSS e JS.

### Dependências permitidas

Apenas arquivos locais do projeto (CSS e JS próprios).

---

## Estilo (CSS)

### Responsabilidade

Define a identidade visual completa: paleta de cores via variáveis CSS nativas, tipografia, layout responsivo, animações via `@keyframes` e breakpoints mobile-first.

### Comunicação

Aplicado ao HTML via `<link>` no `<head>`. Não depende de JS para estilos base.

### Dependências permitidas

Apenas variáveis CSS nativas. Nenhuma biblioteca CSS externa (sem Tailwind, Bootstrap, etc.).

---

## Interação (JavaScript)

### Responsabilidade

Implementa toda a lógica de interação do usuário:
- Contador dinâmico de métricas (IntersectionObserver).
- Animação de entrada dos elementos via IntersectionObserver.
- Carrossel horizontal em loop infinito (Infinite Marquee).
- Smooth scroll para âncoras.

### Comunicação

Manipula o DOM diretamente. Não faz requisições HTTP externas no MVP.

### Dependências permitidas

JavaScript Vanilla puro. Nenhum framework ou biblioteca externa.

---

# Fluxo da Aplicação

```
Usuário acessa a URL
        ↓
Vercel (CDN) serve index.html
        ↓
Browser carrega CSS (styles.css)
        ↓
Browser carrega JS (main.js)
        ↓
IntersectionObserver registra as seções
        ↓
Usuário rola a página
        ↓
Elementos entram no viewport → animações disparam
        ↓
Seção de Métricas entra no viewport → contador dinâmico inicia
        ↓
Usuário clica no CTA → mailto: abre cliente de e-mail
```

---

# Módulos

## Hero Section
Responsabilidade: Apresentação de alto impacto do criador. Exibe nicho, bio e botão CTA com animação Pulse contínua.

## Métricas e Alcance
Responsabilidade: Exibição dos dados de seguidores e engajamento do Instagram e TikTok. Implementa contador dinâmico ativado por IntersectionObserver.

## Público-Alvo
Responsabilidade: Apresentação visual da demografia do público do criador.

## Projetos Principais
Responsabilidade: Cards interativos dos projetos "Arrume-se com o PCD!" e "Repórter Rebaixado" com efeito Hover Lift.

## Ações Sociais
Responsabilidade: Destaque para as ações solidárias do criador (Páscoa Solidária e Natal Solidário).

## Marcas Parceiras
Responsabilidade: Exibição de logotipos e nomes de marcas parceiras em carrossel horizontal contínuo (Infinite Marquee).

## Footer / CTA de Contato
Responsabilidade: Fechamento da página com e-mail direto via `mailto:` para contato comercial.

---

# Padrões

- **IntersectionObserver Pattern**: Observação de elementos no viewport para disparar animações e contadores apenas quando necessário (otimização de performance).
- **CSS Custom Properties (Variables)**: Centralização da paleta de cores e tokens de design no `:root` do CSS.
- **Mobile-First**: Estilos base escritos para mobile, com breakpoints para telas maiores.
- **Semântica HTML5**: Uso de elementos semânticos (`<header>`, `<section>`, `<article>`, `<footer>`, `<nav>`) para acessibilidade e SEO.

---

# Organização do Código

- **HTML**: Estruturado com IDs únicos por seção para âncoras e referências no JS.
- **CSS**: Variáveis no `:root`, estilos globais, depois seção por seção, depois animações.
- **JS**: Código organizado por funcionalidade (contador, observer, marquee), sem classes desnecessárias.

---

# Comunicação

Por se tratar de uma página estática sem backend, não há comunicação entre módulos via API. A comunicação ocorre exclusivamente dentro do browser:

- **HTML → CSS**: via classes e IDs.
- **HTML → JS**: via `id` e `data-*` attributes.
- **JS → DOM**: manipulação direta via `querySelector`, `classList`, etc.

---

# Gerenciamento de Estado

A página é essencialmente sem estado (stateless). O único "estado" gerenciado é:

- **Contadores animados**: valores numéricos que incrementam progressivamente até atingir o valor alvo.
- **Classes CSS de visibilidade**: adicionadas via JS quando elementos entram no viewport (ex: classe `.is-visible`).

Não há biblioteca de gerenciamento de estado (Redux, Zustand, etc.).

---

# Tratamento de Erros

Por ser uma página estática sem integrações externas no MVP:

- Não há tratamento de erros de rede.
- O link `mailto:` depende do cliente de e-mail do usuário — não há fallback implementado no MVP.
- Erros de JS não-críticos são suprimidos silenciosamente (não impactam a visualização da página).

---

# Logs

Não há sistema de logs no MVP. O console do browser pode ser utilizado durante o desenvolvimento para debug.

---

# Segurança

Por ser uma página estática pública sem autenticação:

- Não há dados sensíveis armazenados ou processados.
- O único ponto de saída de dados é o link `mailto:`, que delega ao cliente de e-mail do usuário.
- Nenhuma entrada de dados do usuário é processada no MVP.

---

# Escalabilidade

A arquitetura estática tem escalabilidade horizontal nativa via CDN (Vercel):

- Qualquer aumento de tráfego é absorvido pela infraestrutura da Vercel sem configuração adicional.
- Para evoluções futuras (V2, V3, V4), a arquitetura deverá ser substituída por um framework (ex: Next.js) com backend dedicado.

---

# Decisões Arquiteturais

| Decisão | Justificativa |
|---------|---------------|
| Página estática sem framework | Máxima performance e carregamento rápido para reter executivos B2B |
| JavaScript Vanilla | Eliminar overhead de frameworks para tempo de carregamento < 3s |
| CSS Vanilla com variáveis nativas | Consistência visual sem dependências externas |
| IntersectionObserver nativo | Performance de animação sem bibliotecas adicionais |
| Hospedagem na Vercel | Deploy simples, CDN global, HTTPS automático, gratuito para projetos estáticos |

---

# Restrições

- Não utilizar React, Angular, Vue ou qualquer framework JS pesado.
- Não utilizar jQuery, Bootstrap ou Tailwind CSS.
- Não utilizar banco de dados.
- Não realizar requisições HTTP externas no MVP.
- O código deve ser mantível por um único desenvolvedor.

---

# Observações

- A estrutura de pastas poderá ser ajustada conforme necessidade durante a implementação.
- Para versões futuras (V2+), considerar migração para Next.js para suportar integrações com APIs externas.
