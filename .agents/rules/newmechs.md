---
trigger: model_decision
description: Quando o usuário solicitar explicitamente a criação de uma  mecânica nova OU quando você identificar que uma sugestão  sua merece ser formalizada, preencha o Template de Ficha  de Mecânica completo
---

Quando o usuário solicitar explicitamente a criação de uma 
mecânica nova OU quando você identificar que uma sugestão 
sua merece ser formalizada, preencha o Template de Ficha 
de Mecânica completo. Em conversas exploratórias ou 
brainstorming, use apenas o pipeline de 7 passos resumido.


# [NOME DA MECÂNICA]
> Versão: 1.0 | Autor: Arkadice AI | Status: RASCUNHO

---

## 🎯 OBJETIVO NARRATIVO
- **Experiência gerada:** [Que sensação/situação esta mecânica cria para o jogador?]
- **Histórias que habilita:** [Cite 2 exemplos concretos de cenas que só existem por causa desta mecânica]
- **Histórias que NÃO é para habilitar:** [Delimitar o escopo evita feature creep]

---

## 🗂️ CLASSIFICAÇÃO
- **Camada:** [ ] Core  [ ] Modular  [ ] Avançada
- **Justificativa:** [Por que pertence a esta camada e não às outras?]
- **Domínio de Jogo:** [ ] Combate  [ ] Social  [ ] Exploração  [ ] Meta-Progressão  [ ] Outro: ___

---

## 🏹 NICHO PROTEGIDO
- **Arquétipo principal:** [Qual tipo de personagem usa isso melhor?]
- **Contexto de brilho:** [Em qual situação de jogo este arquétipo é a melhor opção graças a esta mecânica?]
- **Arquétipos secundários:** [Outros personagens que podem usar, porém com menor eficiência]
- **Arquétipos que NÃO se beneficiam:** [Isso é saudável — nicho claro implica exclusão deliberada]

---

## ⚖️ CUSTO vs. RECOMPENSA
- **Recompensa:** [O que o jogador ganha ao usar esta mecânica?]
- **Vetor de Custo Principal:** [ ] Recurso  [ ] Tempo/Turno  [ ] Risco  [ ] Oportunidade
- **Descrição do Custo:** [Como o custo se manifesta na prática?]
- **Proporcionalidade:** [ ] Custo alto / Recompensa alta  [ ] Custo baixo / Recompensa baixa  [ ] Outro: ___
- **⚠️ ALERTA:** Se o campo "Vetor de Custo" estiver vazio, a mecânica deve ser RECUSADA.

---

## 🔧 ESTRUTURA TÉCNICA
- **Fórmula/Estrutura:** [Descreva a mecânica sem valores fixos — use variáveis como (Atributo X), (Nível), (Recurso Y)]
- **Número de variáveis ativas por ação:** [Deve ser ≤ 3 para camadas Core e Modular]
- **Existe efeito encadeado?** [ ] Não  [ ] Sim — quantos elos: ___  (máximo 2 para Avançada)
- **Requer tabela externa?** [ ] Não  [ ] Sim — quantidade de tabelas: ___ (máximo 1)

---

## 🧪 TESTE DOS 3 TURNOS
- **Descrição em linguagem de jogador (2-3 linhas):**
  > [Escreva como explicaria a um jogador novo na mesa, sem jargão técnico]
- **Resultado do Teste:** [ ] Aprovado — jogador autônomo após 3 observações
                          [ ] Reprovado — requer simplificação ou mover de camada

---

## 🔗 VERIFICAÇÃO DE CONFLITO
| Mecânica Existente | Tipo de Interação | Ação Necessária |
|---|---|---|
| [Nome]             | [ ] Sinergia [ ] Sobreposição [ ] Neutro | [Nenhuma / Diferenciar / Fundir] |
| [Nome]             | [ ] Sinergia [ ] Sobreposição [ ] Neutro | [Nenhuma / Diferenciar / Fundir] |

- **Esta mecânica torna alguma mecânica Core irrelevante?** [ ] Não  [ ] Sim → BLOQUEADO até refatoração

---

## 🚫 CHECKLIST DE RESTRIÇÕES ABSOLUTAS
Marque apenas se a mecânica VIOLA a restrição — qualquer marcação bloqueia a aprovação:

- [ ] Elimina agência do jogador por mais de 1 turno
- [ ] Cria estado de vitória garantida
- [ ] Possui caminho ótimo único (sempre existe uma escolha melhor)
- [ ] Torna um arquétipo mecanicamente inútil em algum domínio
- [ ] Requer consulta a mais de 1 tabela externa por ação simples

**Status Final:** [ ] ✅ APROVADA  [ ] ⚠️ APROVADA COM RESSALVAS  [ ] ❌ BLOQUEADA
**Ressalvas (se houver):** ___

---

## 📝 POSSÍVEIS EXPANSÕES FUTURAS
[Opcional — Liste 1-2 formas como esta mecânica pode evoluir em camadas superiores sem quebrar a base]
