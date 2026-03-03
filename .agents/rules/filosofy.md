---
trigger: always_on
---

Aqui está o conjunto de regras de game design e balanceamento para o Arkadice, formatado como diretrizes parametrizadas prontas:

***

# Arkadice — Design Rules v1.0
### Parâmetros para Criação e Análise de Mecânicas

***

## Filosofia Central

Toda mecânica criada para o Arkadice deve ser julgada contra três princípios inegociáveis, nesta ordem de prioridade:

1. **Narrativa primeiro** — A mecânica deve gerar ou amplificar uma história, não substituí-la. Se uma regra não produz consequências narrativas interessantes, ela não pertence ao sistema. [youtube](https://www.youtube.com/watch?v=3W8Xu2LRKrg)
2. **Escolhas significativas** — Toda opção dada ao jogador deve ter custo ou tradeoff real. Escolhas sem custo são ilusões de profundidade. [gamedesignskills](https://gamedesignskills.com/game-design/rpg/)
3. **Complexidade justificada** — Uma mecânica complexa só é aceita se a sua profundidade for acessível após a segunda rodada de uso. Complexidade não dominada pelo jogador é ruído. [docsbot](https://docsbot.ai/prompts/creative/rpg-mechanics-design)

***

## Regras de Escopo de Mecânica

Ao criar ou analisar uma mecânica, o modelo deve classificá-la em uma das três camadas antes de desenvolver qualquer detalhe:

- **Camada Core** — Mecânicas que existem em toda sessão (combate, atributos, rolagens base). Devem ser simples, rápidas e memoráveis.
- **Camada Modular** — Mecânicas opcionais ativadas por contexto (magia, crafting, investigação). Podem ter mais sub-regras, mas devem ser autocontidas.
- **Camada Avançada** — Mecânicas de meta-progressão do personagem (evolução, legado, reputação). Permitidas serem mais densas, pois o jogador as acessa gradualmente.

> ❌ O modelo **não deve misturar camadas** numa mesma mecânica. Se uma regra parece pertencer a duas camadas, ela deve ser dividida em dois sistemas separados.

***

## Parâmetros de Balanceamento

Estes são os eixos que o modelo deve verificar em toda mecânica proposta: [gamedeveloper](https://www.gamedeveloper.com/design/four-axes-of-rpg-design)

### Eixo 1 — Aleatoriedade vs. Determinismo
- Mecânicas Core devem ter uma **fração determinística** clara (o que o personagem controla) e uma **fração aleatória** (o que o dado decide).
- A fração determinística deve crescer com a progressão do personagem — jogadores avançados devem sentir que suas escolhas passadas importam.
- Nunca crie mecânicas onde o resultado é 100% aleatório em situações de alto impacto narrativo.

### Eixo 2 — Unicidade de Nicho
- Cada classe, habilidade ou build deve possuir pelo menos **um domínio onde é a melhor opção**. Nenhum conjunto de escolhas deve ser universalmente inferior. [youtube](https://www.youtube.com/watch?v=3W8Xu2LRKrg)
- Ao criar uma mecânica nova, o modelo deve identificar: *"Que nicho esta mecânica protege? Qual arquétipo de personagem brilha aqui?"*

### Eixo 3 — Custo vs. Recompensa
- Toda recompensa deve ter um custo **categoricamente equivalente**: recursos, tempo, risco ou oportunidade.
- O modelo deve rejeitar qualquer mecânica onde a recompensa não possua ao menos **um vetor de custo concreto**.
- Poderes passivos (sem custo de ativação) são permitidos apenas se possuírem condição situacional limitante.

### Eixo 4 — Liberdade vs. Estrutura
- O sistema Arkadice valoriza **caminhos emergentes** — o jogador constrói a história, não segue um trilho. Mecânicas que forçam um único caminho de progressão ou que bloqueiam estilos de jogo alternativos devem ser refatoradas. [forum.rpg](https://forum.rpg.net/index.php)
- Sistemas de progressão devem permitir ao menos **dois arquétipos funcionalmente distintos** dentro da mesma classe ou conceito.

***

## Regras de Complexidade

O modelo deve aplicar o **Teste dos 3 Turnos** em toda mecânica:

> *"Um jogador novo consegue usar esta mecânica de forma autônoma após 3 turnos de observação?"*

- Se **sim** → aprovada para camada Core ou Modular.
- Se **não** → a mecânica deve ser simplificada ou movida para a camada Avançada com onboarding explícito.

Regras adicionais de complexidade:
- **Máximo de 3 variáveis ativas por rolagem** em mecânicas Core (ex: atributo + bônus de habilidade + situação). Variáveis extras devem ser pré-calculadas, não somadas na hora. [reddit](https://www.reddit.com/r/RPGdesign/comments/d3prbo/balancing_combat_in_a_tabletop_rpg/)
- **Efeitos encadeados** (uma mecânica que ativa outra que ativa outra) são permitidos apenas na camada Avançada e com no máximo 2 elos de cadeia.
- **Exceções a regras gerais** são permitidas, mas cada exceção adicionada exige a remoção ou simplificação de outra regra existente — o sistema não deve crescer indefinidamente.

***

## Parâmetros de Criação de Mecânicas Novas

Quando o modelo for solicitado a **criar** uma mecânica, deve seguir este pipeline:

```
1. OBJETIVO NARRATIVO
   → Qual experiência de jogo esta mecânica cria?
   → Que tipo de história ela torna possível?

2. CLASSIFICAÇÃO DE CAMADA
   → Core / Modular / Avançada?

3. DEFINIÇÃO DE NICHO
   → Qual arquétipo ou contexto esta mecânica serve melhor?

4. MAPEAMENTO DE CUSTO/RECOMPENSA
   → Qual o custo? Qual a recompensa? São proporcionais?

5. TESTE DE COMPLEXIDADE (3 Turnos)
   → Passou? Ajuste se necessário.

6. VERIFICAÇÃO DE CONFLITO
   → Esta mecânica sobrepõe ou invalida alguma mecânica existente?
   → Se sim, propor fusão ou diferenciação.

7. SAÍDA
   → Nome da mecânica
   → Descrição em 2-3 linhas (linguagem de jogador)
   → Mecânica técnica (sem valores fixos, apenas fórmula/estrutura)
   → Nicho protegido
   → Possíveis interações com outras mecânicas
```

***

## Regras de Interação entre Mecânicas

- Toda mecânica nova deve ser verificada contra as **mecânicas Core existentes** para garantir que não as torna irrelevantes. [reddit](https://www.reddit.com/r/RPGdesign/comments/dqqann/balance/)
- **Combos e sinergias** são desejados, mas não devem ser tão poderosos que tornem inviáveis as builds que não os utilizam.
- Mecânicas que interagem com o sistema de progressão (level-up, evolução de habilidades) devem **escalar de forma sublinear** — o delta de poder entre personagens novos e avançados deve ser de sensação, não de impossibilidade. [sinisterdesign](https://sinisterdesign.net/designing-rpg-mechanics-for-scalability/)

***

## Restrições Absolutas (Hardcoded)

O modelo deve **recusar ou refatorar** qualquer mecânica que:

- Elimine a agência do jogador por mais de **1 turno completo** sem consentimento narrativo.
- Crie um estado de **vitória garantida** sem possibilidade de intervenção dos outros jogadores ou do mestre.
- Possua um **caminho ótimo único** — se existe sempre uma escolha melhor, a mecânica está quebrada.
- Torne um arquétipo de personagem **mecanicamente inútil** em qualquer tipo de sessão (combate, social, exploração).
- Requeira que o jogador consulte **mais de uma tabela externa** para resolver uma ação simples.

***

## Glossário de Termos do Sistema

Para garantir consistência nas gerações, o modelo deve usar e reconhecer estes termos como padrão Arkadice:

| Termo | Significado no contexto Arkadice |
|---|---|
| **Mecânica Core** | Regra presente em toda sessão, sem exceção |
| **Mecânica Modular** | Regra ativada por contexto ou escolha do jogador |
| **Nicho** | Domínio onde um arquétipo é a melhor opção |
| **Vetor de Custo** | Recurso, risco ou oportunidade sacrificada para ativar algo |
| **Caminho Emergente** | Progressão única construída pelas escolhas do jogador |
| **Delta de Poder** | Diferença de eficácia entre personagens de níveis distintos |
| **Teste dos 3 Turnos** | Critério de complexidade máxima para mecânicas |
