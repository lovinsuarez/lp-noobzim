# BUSINESS RULES

## Objetivo

Este documento define todas as regras de negócio do sistema.

As regras aqui descritas representam o comportamento esperado da aplicação, independentemente da tecnologia utilizada.

Nenhuma implementação deve contrariar este documento.

---

# Como interpretar este documento

Cada regra possui:

- Identificador único
- Nome
- Descrição
- Justificativa
- Impacto
- Módulos afetados

---

# Regras Gerais

- **RG-001:** O sistema não possui banco de dados. Todos os dados residem estaticamente no HTML. Nenhuma atualização de dados ocorre em tempo de execução no MVP.
- **RG-002:** O tempo de carregamento da página deve ser inferior a 3 segundos para reter a atenção de executivos B2B.
- **RG-003:** A identidade visual deve seguir estritamente a paleta de cores e a tipografia definidas no DESIGN_SYSTEM.md.
- **RG-004:** Nenhuma funcionalidade deve ser implementada sem estar descrita no PROJECT_BRIEF ou aprovada explicitamente.
- **RG-005:** A página deve ser responsiva para dispositivos mobile desde o primeiro build.

---

# Regras por Módulo

## Hero Section

### BR-001 - CTA com Animação Pulse Contínua

**Descrição**

O botão de Call to Action principal do Hero deve possuir animação Pulse contínua (escala e opacidade pulsando em loop) para atrair o olhar do usuário.

**Motivo**

A animação contínua no CTA é a principal estratégia de conversão da seção Hero, guiando o patrocinador imediatamente para a ação de contato.

**Impacto**

Hero Section, CTA de Contato.

**Exceções**

A animação deve ser desabilitada para usuários com `prefers-reduced-motion: reduce`.

---

### BR-002 - Conteúdo do Hero

**Descrição**

O Hero deve exibir obrigatoriamente: o nicho do criador ("Humor, Lifestyle e Games") e um resumo biográfico (criador de conteúdo PCD, 23 anos, etc.).

**Motivo**

O patrocinador deve identificar imediatamente com quem está lidando e qual é o nicho de atuação.

**Impacto**

Hero Section.

**Exceções**

Nenhuma.

---

## Métricas e Alcance

### BR-003 - Dados Estáticos de Métricas

**Descrição**

As métricas de engajamento e visualizações refletem uma "fotografia" dos dados de 90 dias referenciados no documento base (PDF Mídia Kit). Não são atualizadas em tempo real.

**Motivo**

MVP estático sem integração com APIs externas.

**Impacto**

Seção de Métricas, credibilidade junto ao patrocinador.

**Exceções**

Futuramente (V2), as métricas serão atualizadas via API do Instagram Graph e TikTok for Developers.

---

### BR-004 - Contador Dinâmico por IntersectionObserver

**Descrição**

O contador dinâmico das métricas deve ser acionado APENAS quando a seção de Métricas entrar no viewport do usuário. O contador deve iniciar em 0 e incrementar progressivamente até o valor final.

**Motivo**

Evitar desperdício de recursos e garantir que o usuário veja a animação completa, criando impacto visual de "crescimento".

**Impacto**

Seção de Métricas, performance da página.

**Exceções**

O contador deve disparar apenas uma vez por sessão de visualização.

---

### BR-005 - Valores Oficiais das Métricas (MVP)

**Descrição**

Os valores estáticos a serem exibidos no MVP são:

- Instagram: +8.300 seguidores, 10,3% de engajamento.
- TikTok: +15.300 seguidores, 11,1% de engajamento.

**Motivo**

Valores extraídos do documento de referência (Mídia Kit PDF).

**Impacto**

Seção de Métricas.

**Exceções**

Nenhuma no MVP. Atualização manual via edição do código.

---

## Público-Alvo

### BR-006 - Dados Demográficos a Exibir

**Descrição**

A seção de Público-Alvo deve apresentar a seguinte distribuição de faixa etária:

- 18-24 anos: 40,9%
- 25-34 anos: 34,4%

**Motivo**

Esses dados são o principal argumento de nicho para marcas que querem atingir o público jovem adulto.

**Impacto**

Seção de Público-Alvo.

**Exceções**

TODO: O formato exato da visualização (gráficos ou tipografia em destaque) ainda não foi definido.

---

## Projetos Principais

### BR-007 - Efeito Hover Lift nos Cards

**Descrição**

Todos os cards de projetos devem implementar o efeito Hover Lift: ao passar o cursor sobre o card, ele deve elevar no eixo Y (`translateY(-8px)`) e exibir sombra ampliada, revelando foco descritivo adicional.

**Motivo**

Aumentar o engajamento e transmitir dinamismo na apresentação dos projetos.

**Impacto**

Seção de Projetos.

**Exceções**

O efeito Hover não se aplica em dispositivos touch. Em mobile, o conteúdo descritivo deve estar visível por padrão.

---

### BR-008 - Projetos Obrigatórios no MVP

**Descrição**

Os seguintes projetos devem estar presentes na seção de Projetos:

1. "Arrume-se com o PCD!"
2. "Repórter Rebaixado"

**Motivo**

São os projetos de maior destaque e representatividade do criador.

**Impacto**

Seção de Projetos.

**Exceções**

Nenhuma.

---

## Ações Sociais

### BR-009 - Ações Sociais Obrigatórias

**Descrição**

A seção de Ações Sociais deve destacar:

- Páscoa Solidária (em parceria com a Furia)
- Natal Solidário (em parceria com a Furia)

**Motivo**

Reforçar o propósito social do criador como diferencial para marcas com responsabilidade social.

**Impacto**

Seção de Ações Sociais.

**Exceções**

Nenhuma.

---

## Marcas Parceiras

### BR-010 - Infinite Marquee em Loop Infinito

**Descrição**

Os logotipos e nomes das marcas parceiras devem ser exibidos em carrossel horizontal contínuo (Infinite Marquee) em loop infinito via animação CSS.

**Motivo**

Transmitir dinamismo e credibilidade através do volume de marcas parceiras sem sobrecarregar a página com um grid estático.

**Impacto**

Seção de Marcas Parceiras.

**Exceções**

A animação deve pausar ao passar o cursor (hover). Deve respeitar `prefers-reduced-motion`.

---

### BR-011 - Logotipos Pendentes

**Descrição**

Os logotipos vetorizados ou em alta resolução (PNG transparente) das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) ainda não estão disponíveis.

**Motivo**

Serão implementados em versão futura quando os assets estiverem disponíveis.

**Impacto**

Seção de Marcas Parceiras.

**Exceções**

No MVP, podem ser utilizados placeholders textuais ou imagens temporárias.

---

## Footer / CTA de Contato

### BR-012 - Contato via Mailto

**Descrição**

O e-mail de contato comercial `CONTATONOOBZIM@GMAIL.COM` deve ser configurado como link `mailto:` no Footer para reduzir o atrito na conversão.

**Motivo**

O protocolo `mailto:` é nativo do browser, não requer integração com serviço externo e garante abertura direta do cliente de e-mail do usuário.

**Impacto**

Footer, taxa de conversão.

**Exceções**

Futuramente (V3), será substituído por formulário de contato embutido (Formspree ou EmailJS) para eliminar a dependência do cliente de e-mail local.

---

# Validações

- O link `mailto:` deve abrir corretamente nos navegadores principais (Chrome, Firefox, Safari, Edge).
- O contador de métricas não deve exceder o valor alvo (sem overshoot).
- O Infinite Marquee não deve apresentar salto visual no loop (os itens devem ser duplicados no HTML para garantir continuidade).
- A página deve ser validada com HTML5 semântico (sem erros no W3C Validator, idealmente).

---

# Fluxos condicionais

- **Dispositivo mobile:** Efeito Hover Lift dos cards não se aplica. O conteúdo descritivo deve estar visível por padrão.
- **prefers-reduced-motion:** Todas as animações (Pulse, contador, Marquee, fade-in) devem ser desabilitadas ou reduzidas.
- **Viewport (IntersectionObserver):** Contador de métricas e animações de entrada só disparam quando os elementos entram no viewport.

---

# Permissões

| Perfil | Acesso | Permissões |
|--------|--------|-----------|
| Patrocinador / Visitante | Página pública | Apenas leitura (visualização da página) |
| Noobzim (Admin) | Repositório GitHub | Edição manual do código-fonte |

---

# Observações

- As métricas exibidas no MVP são estáticas e devem ser atualizadas manualmente pelo desenvolvedor a cada ciclo de revisão.
- Toda decisão que altere alguma regra de negócio deve ser registrada no PROJECT_BRIEF antes de ser implementada.
