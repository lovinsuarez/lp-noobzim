# ERROR HANDLING

## Objetivo

Definir a estratégia oficial de tratamento de erros do projeto.

---

# Princípios

- **Graceful Degradation:** A página deve permanecer funcional e legível mesmo se partes do JavaScript falharem. A estrutura HTML e o CSS garantem o conteúdo mínimo acessível.
- **Verificação Antes da Execução:** Sempre verificar a existência de elementos DOM antes de manipulá-los.
- **Sem Exibição de Erros Técnicos ao Usuário:** O usuário final (patrocinador) nunca deve ver mensagens de erro técnicas.
- **Console Limpo em Produção:** Nenhum `console.log()`, `console.error()` ou `console.warn()` ativo no código de produção.

---

# Tipos de Erros

## Validação

Não aplicável no MVP. Não há formulários ou entrada de dados do usuário.

## Negócio

Não aplicável no MVP. Não há lógica de negócio complexa que possa gerar erros de regras.

## Infraestrutura

Possível erro: falha no carregamento de assets (imagens, CSS, JS) pelo browser.

**Estratégia:** Atributos `alt` em imagens garantem texto descritivo caso a imagem não carregue. CSS e JS são arquivos locais — falha de carregamento indica problema de deploy (verificar Vercel).

## Integrações

Não aplicável no MVP. Nenhuma integração externa via API.

## Autenticação

Não aplicável no MVP. A página é pública.

## Autorização

Não aplicável no MVP.

## Banco

Não aplicável no MVP. Não há banco de dados.

## Internos (JavaScript)

Possíveis erros internos do JS:

1. **Elemento DOM não encontrado:** O `querySelector` retorna `null` se o elemento não existir.
2. **IntersectionObserver não suportado:** Navegadores muito antigos podem não suportar a API.
3. **Animação de contador:** Divisão por zero ou valor inválido no `data-target`.

---

# Estratégia

## Elemento DOM não encontrado

```javascript
const element = document.querySelector('#minha-secao');
if (!element) return; // Sair silenciosamente se o elemento não existir
// Continuar com a lógica normalmente
```

Padrão obrigatório: verificar a existência do elemento antes de qualquer manipulação.

## IntersectionObserver não suportado

```javascript
if ('IntersectionObserver' in window) {
  // Inicializar IntersectionObserver
} else {
  // Fallback: exibir conteúdo diretamente sem animação de entrada
}
```

## Contador com valor inválido

```javascript
const target = parseInt(element.dataset.target, 10);
if (isNaN(target) || target <= 0) return; // Sair se o valor for inválido
```

## Falha no carregamento de imagem

```html
<img src="assets/images/foto.jpg" alt="Foto do Noobzim — Renan Macedo, criador de conteúdo PCD">
```

O `alt` garante contexto mesmo sem a imagem. Para logos do Marquee, usar texto alternativo descritivo.

---

# Mensagens

Não há mensagens de erro exibidas ao usuário no MVP.

Para versões futuras com formulário de contato (V3):
- **Erro de envio:** "Não foi possível enviar sua mensagem. Por favor, tente novamente ou envie um e-mail diretamente para CONTATONOOBZIM@GMAIL.COM."
- **Campos obrigatórios:** "Este campo é obrigatório."

---

# Logs

No MVP, não há sistema de logs.

Regras durante desenvolvimento:
- `console.log()` permitido apenas durante desenvolvimento.
- Remover todos os logs antes de commitar para a branch principal.

Para versões futuras com backend, considerar integração com serviço de monitoramento de erros (ex: Sentry).

---

# Monitoramento

Não aplicável no MVP.

TODO (Pós-MVP): Avaliar integração com Sentry ou similar para monitoramento de erros em JavaScript do lado do cliente.

---

# Alertas

Não aplicável no MVP.

---

# Recuperação

## Falha no JavaScript

A página deve ser projetada com **Progressive Enhancement**: todo o conteúdo essencial é acessível via HTML puro, sem dependência de JavaScript. O JS apenas aprimora a experiência (animações, contador). Se o JS falhar:

- O conteúdo textual permanece visível.
- As métricas são exibidas com seus valores finais estáticos (via HTML).
- O CTA de contato funciona via link `<a href="mailto:">` nativo.

## Falha no CSS

Improvável em produção (CSS é arquivo estático local). Em caso extremo, o HTML semântico fornece estrutura legível sem estilo.

---

# Decisões

| Decisão | Justificativa |
|---------|---------------|
| Progressive Enhancement | Garantir que a página funcione sem JS para máxima resiliência e acessibilidade. |
| Verificação condicional antes de DOM manipulation | Evitar erros de runtime que possam quebrar outras funcionalidades do JS. |
| Sem exibição de erros técnicos | O público-alvo (patrocinadores) não deve ver mensagens de erro que prejudiquem a credibilidade. |

---

# Pendências

- TODO: Definir estratégia de monitoramento de erros para versões futuras (Sentry ou similar).
- TODO: Implementar fallback explícito para o IntersectionObserver em navegadores antigos.
