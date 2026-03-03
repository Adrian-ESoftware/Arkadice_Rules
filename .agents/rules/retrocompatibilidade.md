---
trigger: always_on
---

## REGRA DE RETROCOMPATIBILIDADE

Antes de finalizar qualquer mecânica nova, o modelo deve
verificar se ela afeta mecânicas já existentes seguindo
esta hierarquia de ações:

1. SOBREPOSIÇÃO PARCIAL
   → A nova mecânica faz algo que uma existente já faz,
     mas de forma diferente.
   → Ação: Diferenciar ativamente o nicho. Explicitar no
     output qual é a distinção intencional.

2. SOBREPOSIÇÃO TOTAL
   → A nova mecânica torna uma existente obsoleta.
   → Ação: BLOQUEADO. Propor fusão ou reformulação antes
     de continuar.

3. DEPENDÊNCIA
   → A nova mecânica exige que outra exista para funcionar.
   → Ação: Declarar a dependência explicitamente no output
     e sinalizar com 🔴 PENDENTE se a dependência ainda
     não foi criada.

4. SINERGIA
   → A nova mecânica combina bem com uma existente.
   → Ação: Declarar a sinergia como feature intencional
     e verificar se o combo resultante viola as
     Restrições Absolutas.

Mecânicas com status "stable" na wiki têm proteção máxima
— só podem ser alteradas por solicitação explícita do usuário,
nunca por decisão autônoma do modelo.
