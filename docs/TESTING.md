# TESTING

## Objetivo

Este documento define a estratégia de testes do projeto.

Seu objetivo é garantir qualidade e estabilidade durante toda a evolução do sistema.

---

# Estratégia Geral

No MVP, a estratégia de testes é **manual**, realizada diretamente no browser. Por ser uma Landing Page estática sem lógica de negócio complexa, testes manuais visuais e funcionais são suficientes para validar a entrega.

Testes automatizados serão avaliados para versões futuras conforme a complexidade do projeto aumentar.

---

# Tipos de Testes

## MVP (Manuais)

- **Teste Visual:** Verificação da fidelidade visual ao DESIGN_SYSTEM.md (cores, tipografia, espaçamentos, componentes).
- **Teste Funcional:** Verificação das funcionalidades interativas (contador, animações, marquee, CTA).
- **Teste Responsivo:** Verificação do layout em diferentes tamanhos de tela (mobile, tablet, desktop).
- **Teste Cross-Browser:** Verificação de compatibilidade nos navegadores principais.

## Pós-MVP (Automatizados — TODO)

- **E2E (End-to-End):** Validação de fluxos completos do usuário na página (ex: Playwright).
- **Visual Regression:** Detecção automática de regressões visuais entre deploys (ex: Percy, Chromatic).
- **Performance:** Verificação do tempo de carregamento (ex: Lighthouse CI).

---

# Cobertura

## MVP

Não há meta de cobertura automatizada. Cobertura manual:

| Área | Cobertura Esperada |
|------|--------------------|
| Layout visual (desktop) | 100% das seções |
| Layout visual (mobile) | 100% das seções |
| Funcionalidades JS (contador, marquee) | 100% |
| Cross-browser (Chrome, Firefox, Edge, Safari) | 100% |

## Pós-MVP

TODO — Definir metas de cobertura de testes automatizados.

---

# Ferramentas

## MVP

| Ferramenta | Finalidade |
|-----------|-----------|
| Chrome DevTools | Teste responsivo (modo mobile), debug, inspeção de layout |
| Google Lighthouse | Verificação de performance, acessibilidade e SEO |
| W3C Validator | Validação de HTML semântico |
| Browser nativo | Teste manual funcional e visual |

## Pós-MVP (TODO)

| Ferramenta | Finalidade |
|-----------|-----------|
| Playwright | Testes E2E automatizados |
| Lighthouse CI | Monitoramento contínuo de performance no CI/CD |
| Percy / Chromatic | Testes de regressão visual |

---

# Estrutura

Não há estrutura de testes automatizados no MVP.

Para versões futuras, recomenda-se:

```
tests/
├── e2e/
│   ├── hero.spec.ts
│   ├── metricas.spec.ts
│   └── contato.spec.ts
└── visual/
    └── snapshots/
```

---

# Convenções

Não aplicável no MVP.

Para testes automatizados futuros: usar nomenclatura descritiva em português ou inglês consistente.
Exemplo: `should display hero section with pulse animation`.

---

# Critérios de Aprovação

Uma tarefa/seção é considerada aprovada quando:

- [ ] Layout visual fiel ao DESIGN_SYSTEM.md em desktop (1280px+).
- [ ] Layout visual fiel ao DESIGN_SYSTEM.md em mobile (375px).
- [ ] Funcionalidades JS funcionando corretamente (contador dispara no viewport, marquee em loop, animações).
- [ ] Link `mailto:` abre o cliente de e-mail corretamente.
- [ ] Nenhum erro no console do browser (Chrome, Firefox).
- [ ] Tempo de carregamento < 3 segundos (Lighthouse, conexão 3G rápida).
- [ ] Score Lighthouse Performance ≥ 90.
- [ ] Score Lighthouse Accessibility ≥ 80.

---

# Testes Obrigatórios

Para cada seção implementada:

1. **Hero Section:**
   - [ ] Animação Pulse no CTA funcionando.
   - [ ] Layout responsivo em mobile (375px) e desktop (1280px+).
   - [ ] Texto legível (contraste adequado).

2. **Métricas e Alcance:**
   - [ ] Contador inicia em 0 e termina no valor correto ao entrar no viewport.
   - [ ] Contador dispara apenas ao entrar no viewport (IntersectionObserver).
   - [ ] Valores corretos: Instagram 8.300 / 10,3%, TikTok 15.300 / 11,1%.

3. **Público-Alvo:**
   - [ ] Dados demográficos exibidos corretamente (18-24: 40,9%, 25-34: 34,4%).

4. **Projetos:**
   - [ ] Efeito Hover Lift funcionando nos cards (desktop).
   - [ ] Conteúdo descritivo visível em mobile (sem dependência de hover).

5. **Ações Sociais:**
   - [ ] Conteúdo correto exibido (Páscoa Solidária, Natal Solidário).

6. **Marcas Parceiras:**
   - [ ] Infinite Marquee em loop contínuo sem salto visual.
   - [ ] Animação pausa ao hover (desktop).

7. **Footer:**
   - [ ] Link `mailto:CONTATONOOBZIM@GMAIL.COM` abre cliente de e-mail.

---

# Testes Manuais

**Quando realizar:**
- Ao concluir cada seção da Landing Page.
- Antes de todo commit na branch principal.
- Antes de qualquer deploy em produção.
- Após qualquer refatoração de CSS ou JS.

**Dispositivos de teste:**
- Desktop: Chrome (1280px+), Firefox, Edge.
- Mobile: Chrome DevTools — iPhone 12/13 (390px) e Android (360px).
- Opcional: Safari Desktop e Safari Mobile (via BrowserStack ou dispositivo real).

---

# Testes Automatizados

TODO — Não definidos para o MVP.

Para versões futuras, considerar:
- Playwright para testes E2E da Landing Page completa.
- Lighthouse CI integrado ao GitHub Actions para monitoramento de performance.

---

# CI/CD

TODO — Não definido para o MVP.

Atualmente, o deploy é feito automaticamente via Vercel a cada push. Não há pipeline de testes automatizados no CI.

Para versões futuras, integrar Lighthouse CI ao GitHub Actions para bloquear deploys com score de performance < 90.

---

# Dados para Teste

Não aplicável no MVP. Todos os dados são estáticos e residem no HTML.

---

# Ambientes

| Ambiente | Onde os testes são executados |
|----------|------------------------------|
| Desenvolvimento | Browser local (index.html aberto diretamente ou Live Server) |
| Homologação | URL de preview gerada automaticamente pela Vercel |
| Produção | URL de produção na Vercel após aprovação do cliente |

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Testes manuais no MVP | Sem lógica de negócio complexa. Testes manuais são suficientes e mais rápidos de implementar. |
| Google Lighthouse como ferramenta de performance | Gratuito, nativo do Chrome, padrão da indústria. |

---

# Pendências

- TODO: Definir estratégia de testes automatizados para versões futuras.
- TODO: Configurar Lighthouse CI no GitHub Actions para monitoramento de performance.
- TODO: Definir dispositivos físicos de teste (iOS e Android reais) para validação de compatibilidade.
