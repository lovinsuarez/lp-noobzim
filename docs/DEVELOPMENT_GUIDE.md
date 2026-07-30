# DEVELOPMENT GUIDE

## Objetivo

Este documento descreve como desenvolver neste projeto.

Seu objetivo é garantir que qualquer desenvolvedor ou IA siga exatamente o mesmo fluxo de trabalho.

---

# Fluxo Geral

1. Ler o PROJECT_BRIEF.md (fonte de verdade do projeto).
2. Ler a documentação relevante em `docs/`.
3. Verificar PROJECT_TASKS.md para identificar a próxima tarefa.
4. Verificar PROJECT_STATUS.md para entender o estado atual.
5. Implementar seguindo as diretrizes de CODE_STYLE.md, DESIGN_SYSTEM.md e ARCHITECTURE.md.
6. Testar manualmente no browser (desktop e mobile).
7. Atualizar documentação afetada.
8. Commitar seguindo Conventional Commits.
9. Atualizar PROJECT_TASKS.md e PROJECT_STATUS.md.

---

# Antes de Desenvolver

Lista de verificações obrigatórias antes de iniciar qualquer tarefa:

- [ ] Leu o PROJECT_BRIEF.md.
- [ ] Leu ARCHITECTURE.md.
- [ ] Leu DESIGN_SYSTEM.md (para qualquer tarefa visual).
- [ ] Leu BUSINESS_RULES.md (para qualquer funcionalidade).
- [ ] Verificou PROJECT_TASKS.md (tarefa está no status correto?).
- [ ] Verificou PROJECT_STATUS.md (algum bloqueio ativo?).
- [ ] Verificou CODE_STYLE.md.

---

# Fluxo de Implementação

Para implementação de qualquer nova seção ou funcionalidade:

1. **Estrutura HTML**: Criar o HTML semântico da seção com IDs corretos.
2. **Estilo CSS**: Aplicar estilos usando as variáveis CSS do DESIGN_SYSTEM.md. Mobile-first.
3. **Interação JS**: Implementar a lógica (contador, observer, marquee) em `main.js`.
4. **Teste Visual Desktop**: Verificar no browser desktop (Chrome, Firefox, Edge).
5. **Teste Visual Mobile**: Verificar no browser mobile (DevTools — iPhone, Android).
6. **Teste de Animações**: Verificar funcionamento correto das animações.
7. **Atualizar Documentação**: CHANGELOG.md, PROJECT_TASKS.md, PROJECT_STATUS.md.
8. **Commit**: Seguir padrão Conventional Commits.

---

# Boas Práticas

- Nunca implementar funcionalidades não descritas no PROJECT_BRIEF sem aprovação explícita.
- Sempre verificar o DESIGN_SYSTEM.md antes de escolher cores, fontes ou espaçamentos.
- Nunca usar valores de cor ou tipografia hardcoded — sempre usar variáveis CSS (`:root`).
- Testar em mobile antes de considerar a tarefa concluída.
- Manter o código limpo: sem `console.log()`, sem estilos inline desnecessários.
- Documentar decisões de implementação no CHANGELOG.md.

---

# Checklist antes do Commit

- [ ] Código segue CODE_STYLE.md.
- [ ] Nenhum `console.log()` ativo.
- [ ] Nenhum estilo inline desnecessário.
- [ ] HTML semântico correto.
- [ ] Variáveis CSS do Design System utilizadas.
- [ ] Responsividade verificada em mobile (DevTools).
- [ ] Animações funcionando corretamente.
- [ ] `alt` em todas as imagens.
- [ ] CHANGELOG.md atualizado.
- [ ] PROJECT_TASKS.md atualizado.

---

# Checklist antes do Merge

- [ ] Todos os itens do Checklist antes do Commit cumpridos.
- [ ] Página testada nos navegadores principais (Chrome, Firefox, Safari, Edge).
- [ ] Página testada em resolução mobile (375px) e desktop (1280px+).
- [ ] Tempo de carregamento verificado (< 3 segundos em conexão padrão).
- [ ] Nenhum erro no console do browser.
- [ ] PROJECT_STATUS.md atualizado com o progresso.

---

# Atualização da Documentação

Sempre que uma tarefa for concluída, atualizar:

| Documento | Quando atualizar |
|-----------|-----------------|
| `CHANGELOG.md` | Sempre que houver uma entrega (nova seção, fix, melhoria). |
| `PROJECT_TASKS.md` | Ao iniciar e ao concluir cada tarefa. |
| `PROJECT_STATUS.md` | Após cada sprint ou entrega relevante. |
| `DESIGN_SYSTEM.md` | Se houver alterações visuais aprovadas. |
| `BUSINESS_RULES.md` | Se houver novas regras ou alterações aprovadas. |
| `TECH_DEBT.md` | Ao identificar dívidas técnicas durante a implementação. |

---

# Fluxo de Correção de Bugs

1. Reproduzir o bug no browser.
2. Identificar o arquivo e linha responsável.
3. Corrigir seguindo as diretrizes de CODE_STYLE.md.
4. Testar a correção em desktop e mobile.
5. Commitar com `fix: descrição do bug corrigido`.
6. Atualizar CHANGELOG.md e PROJECT_TASKS.md.

---

# Fluxo de Refatoração

1. Identificar o código a ser refatorado e documentar o motivo em TECH_DEBT.md.
2. Criar uma branch separada (ex: `refactor/nome-da-refatoracao`).
3. Refatorar garantindo que o comportamento externo permaneça idêntico.
4. Testar no browser (desktop e mobile).
5. Commitar com `refactor: descrição`.
6. Atualizar CHANGELOG.md e TECH_DEBT.md.

---

# Fluxo para Novas Funcionalidades

1. Verificar se a funcionalidade está descrita no PROJECT_BRIEF ou BACKLOG.md.
2. Caso não esteja: NÃO implementar sem aprovação explícita. Registrar em BACKLOG.md como "Em análise".
3. Criar uma branch: `feat/nome-da-funcionalidade`.
4. Implementar seguindo o Fluxo de Implementação.
5. Commitar com `feat: descrição`.
6. Atualizar CHANGELOG.md, PROJECT_TASKS.md e PROJECT_STATUS.md.

---

# Fluxo para Alterações de Banco

Não aplicável no MVP. O projeto não possui banco de dados.

Para versões futuras, este fluxo será definido quando a stack de backend for escolhida.

---

# Ferramentas

| Ferramenta | Finalidade |
|-----------|-----------|
| VS Code | Editor principal de código |
| Git | Controle de versão |
| GitHub | Repositório remoto e CI/CD com Vercel |
| Vercel | Hospedagem e deploy automático |
| Chrome DevTools | Debug, inspeção de layout e teste mobile |
| Browser (Chrome, Firefox, Edge, Safari) | Teste de compatibilidade |

---

# Automações

| Automação | Descrição |
|-----------|-----------|
| Deploy automático | A cada push na branch principal, a Vercel faz deploy automático. |
| Preview de PRs | A Vercel gera URLs de preview para cada Pull Request automaticamente. |

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Mobile-first desde o início | Decisão do cliente: responsividade mobile obrigatória desde o primeiro build. |
| Deploy via Vercel + GitHub | Integração nativa, zero configuração, HTTPS automático. |
| Sem etapa de build | Projeto estático. Arquivos servidos diretamente pela Vercel. |

---

# Pendências

- TODO: Definir processo de revisão de código (Pull Request ou commit direto na main).
- TODO: Configurar ESLint e Stylelint para validação automática.
- TODO: Definir fluxo de testes automatizados (ver TESTING.md).
