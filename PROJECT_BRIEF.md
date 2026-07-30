# PROJECT_BRIEF.md

## 1. Visão Geral do Projeto

O projeto consiste no desenvolvimento de uma Landing Page MVP atuando como um Mídia Kit interativo para o criador de conteúdo "Noobzim" (Renan Macedo). A aplicação tem como foco a conversão e captação de patrocinadores (B2B), apresentando de forma dinâmica e animada o perfil do criador, suas métricas de engajamento, público-alvo, projetos de destaque, ações sociais e marcas parceiras.

## 2. Problema e Solução

**Problema:** Mídia kits tradicionais em formato PDF (como o documento "Mídia Kit - noooobzim (2026).pdf") são estáticos, limitam o engajamento imediato e não transmitem a dinamicidade da identidade visual e carisma do criador, reduzindo o impacto da primeira impressão sobre possíveis patrocinadores.
**Solução:** Uma página web fluida, interativa e de carregamento rápido (Landing Page) que organize as informações do PDF com animações direcionadas, tipografia marcante e chamadas para ação (CTAs) claras, facilitando o contato comercial e retendo a atenção do usuário.

## 3. Perfis de Usuários (Atores)

1. **Patrocinador / Representante de Marca (Usuário Final):** Profissional de marketing ou agência que acessa a página para avaliar o alcance, o nicho (Humor, Lifestyle e Games) e o engajamento do criador com o intuito de fechar parcerias comerciais.
2. **Administrador / Criador (Noobzim - TODO):** Usuário responsável por solicitar atualizações nas métricas e novos projetos (No MVP, a atualização é manual via código).

## 4. Escopo e Funcionalidades (MVP)

A Landing Page será estruturada em seções sequenciais e ancoradas (Single Page Application - SPA structure):

* **Hero Section:** Apresentação de alto impacto contendo o nicho ("Humor, Lifestyle e Games") e um resumo biográfico (criador de conteúdo PCD, 23 anos, etc.). Inclui botão de Call to Action (CTA) com animação contínua (Pulse).
* **Métricas e Alcance (Social Proof):** Exibição de dados do Instagram (+8.300 seguidores, 10,3% de engajamento) e TikTok (+15.300 seguidores, 11,1% de engajamento).
* *Comportamento:* Implementação de um contador dinâmico acionado via `IntersectionObserver` quando a seção entra no viewport.


* **Público-Alvo:** Apresentação visual da demografia e faixa etária predominante (18-24 anos: 40,9%; 25-34 anos: 34,4%). TODO: Definir formato exato da visualização (gráficos ou tipografia em destaque).
* **Projetos Principais:** Exibição em formato de *cards* interativos dos projetos "Arrume-se com o PCD!" e "Repórter Rebaixado".
* *Comportamento:* Efeito *Hover Lift* (elevação no eixo Y e sombra) para revelar foco descritivo.


* **Ações Sociais:** Seção destacando o propósito do criador (Páscoa Solidária e Natal Solidário em parceria com a Furia).
* **Marcas Parceiras:** Exibição de logotipos e nomes de marcas parceiras atuais.
* *Comportamento:* Carrossel horizontal contínuo (*Infinite Marquee*) em loop infinito.


* **Footer / CTA de Contato:** Fechamento com e-mail direto (CONTATONOOBZIM@GMAIL.COM) configurado como link `mailto:` para reduzir o atrito na conversão.

## 5. Regras de Negócio

* **Fidelidade Visual:** A identidade visual deve seguir estritamente a paleta de cores extraída da referência fornecida:
* Fundo Primário: `#9c634c` (Terra)
* Texto Secundário: `#f4e3c5` (Bege Claro)
* Destaques: `#f1aa00` (Amarelo)
* Detalhes/Botões: `#225a5e` (Azul Esverdeado)
* Elementos Escuros: `#111111` (Preto)


* **Tipografia:** Utilização de fontes de forte impacto ('Impact', 'Arial Black') para títulos e sem serifa ('Arial') para leitura, refletindo a estética urbana e energética solicitada.
* **Atualização de Métricas:** Sendo um MVP estático, as métricas de engajamento e visualizações refletem uma "fotografia" (dados de 90 dias referenciados no documento base) e não são geradas em tempo real.

## 6. Arquitetura e Tecnologias

* **Front-end:** HTML5 semântico, CSS3 (Vanilla) estruturado com variáveis CSS nativas e animações via `@keyframes`.
* **Lógica de Interação:** JavaScript (Vanilla) sem dependência de frameworks pesados (como React ou Angular) para garantir máxima performance e carregamento rápido.
* **Performance:** Utilização da API nativa do browser `IntersectionObserver` para otimizar o disparo das animações apenas quando os elementos estão visíveis na tela.
* **Padrão Arquitetural:** Página estática (Client-side rendering puro).

## 7. Integrações

* **MVP:** Nenhuma integração externa via API. O contato comercial é realizado através do protocolo nativo do navegador `mailto:`.
* **Analytcs (TODO):** Necessidade de definir integração com Google Analytics ou Meta Pixel para rastrear acessos de agências.

## 8. Restrições e Premissas

* **Hospedagem (TODO):** O código atual não prevê o ambiente de deploy.
* O sistema não possui banco de dados. Os dados residem estaticamente no HTML.
* O carregamento da página deve ser abaixo de 3 segundos para reter a atenção rápida de executivos B2B.

## 9. Próximas Versões (Roadmap - Pós MVP)

* **V2:** Integração com APIs do Instagram Graph e TikTok for Developers para atualização automática de seguidores e taxas de engajamento em tempo real.
* **V3:** Formulário de contato embutido utilizando serviço de form-to-email (ex: Formspree, EmailJS) para evitar dependência do cliente de e-mail local do usuário.
* **V4:** Dashboard administrativo (CMS simples) para o próprio criador atualizar os projetos, fotos e patrocinadores ativos.

## 10. Pendências

* Qual será a plataforma de hospedagem (Deploy) escolhida para publicar o MVP (Vercel, Netlify, GitHub Pages, Hostinger)?
iremos utilizar a VERCEL
* O domínio principal da aplicação já foi adquirido (ex: `noobzim.com.br`) ou os apontamentos de DNS (TODO) precisam ser configurados?
não possui dominio
* Os logotipos vetorizados ou em alta resolução (PNG transparente) das marcas parceiras (Mad Favela, Diversi, Xbox, etc.) para o componente *Infinite Marquee* já estão disponíveis em nuvem?
ainda não, iremos implementar mais pra frente
* Como o Noobzim é um criador focado também em PCD, existem diretrizes específicas de Acessibilidade (WCAG, leitor de tela reforçado, contraste além do padrão) que devem ser rigorosamente aplicadas à página?
não
* Será necessário instalar ferramentas de rastreamento (Google Analytics, Meta Pixel) neste MVP para entender de onde as marcas estão acessando a Landing Page?
ainda não, iremos implementar mais pra frente
* Há necessidade de ajustar o comportamento responsivo (Mobile) de formas específicas que fujam da quebra tradicional em coluna única?
desde o inicio vamos deixar responsivo para MOBILE