## Regras de Funcionamento

Nova Tabela de Dificuldades (CD d20): Baseada na escala padrão de D&D:
• CD 5 (Muito Fácil): Tarefas triviais.
• CD 10 (Fácil): A média para tarefas rotineiras.
• CD 15 (Médio): O padrão para desafios de combate e perícias sob pressão.
• CD 20 (Difícil): Feitos impressionantes.
• CD 25+ (Muito Difícil/Heroico): Quase impossível para iniciantes.

***

## Sistema de Defesa — Resistência (%)

A defesa em Arkadice funciona como **redução percentual de dano**, semelhante ao sistema de Resistência do Minecraft. Porém, para evitar que armaduras bloqueiem dano demais em golpes fortes, toda armadura tem um **teto máximo de dano bloqueado (Absorção)**.

> **PV dos personagens:** entre 6 e 18 no início. Todo o sistema é calibrado para essa escala.

***

### Referência de Dano de Criaturas

| Tier | Criatura (exemplo) | Dano por Golpe | Média |
|------|--------------------|----------------|-------|
| 1 | Goblin, rato gigante | 1d4 | ~2 |
| 2 | Bandido, lobo | 1d6 | ~3 |
| 3 | Ogro, troll | 2d6 | ~7 |
| 4 | Wyvern, quimera | 3d6 | ~10 |
| 5 | Dragão, demônio maior | 4d6 | ~14 |

***

### Como Funciona

Cada armadura tem **dois valores**:

- **Resistência (%)** — Percentual de dano reduzido
- **Absorção Máxima** — Máximo de dano que a armadura pode bloquear por golpe

**Fórmula:** `Dano Final = Dano Bruto - min(Dano Bruto × Resistência%, Absorção Máxima)`

Em palavras simples: *"a armadura reduz X% do dano, mas nunca mais que Y pontos por golpe"*.

***

### Tabela de Armaduras

| Tipo | Resistência | Absorção Máx. | Exemplo |
|------|-------------|---------------|---------|
| **Nenhuma** | 0% | 0 | Roupas comuns |
| **Leve** | 20% | 2 | Couro, tecido reforçado |
| **Média** | 30% | 3 | Couro batido, cota de malha leve |
| **Pesada** | 40% | 4 | Placas, cota completa |
| **Fortificada** | 50% | 5 | Armadura de elite, encantada |

***

### Exemplos Práticos

#### Armadura Pesada (40%, máx 4) — Personagem com 14 PV

| Atacante | Dano Bruto | 40% seria | Teto (4) | Bloqueado | Dano Final | Sobrevive? |
|----------|------------|-----------|----------|-----------|------------|------------|
| Goblin | 2 | 0.8 → **0** | — | 0 | **2** | ✅ 7 golpes |
| Bandido | 4 | 1.6 → **1** | — | 1 | **3** | ✅ 4 golpes |
| Ogro | 7 | 2.8 → **2** | — | 2 | **5** | ✅ 2 golpes |
| Wyvern | 10 | 4 | — | 4 | **6** | ⚠️ 2 golpes |
| Dragão | 14 | 5.6 → **4** | Ativou teto | 4 | **10** | 💀 1 golpe |

> Resultado: Armadura pesada te protege bem contra criaturas tier 1-3. Contra um dragão, **você sobrevive 1 golpe** — tempo suficiente pra fugir ou reagir, mas não pra tankar.

#### Sem armadura — Personagem com 10 PV

| Atacante | Dano Bruto | Dano Final | Sobrevive? |
|----------|------------|------------|------------|
| Goblin | 2 | **2** | ✅ 5 golpes |
| Ogro | 7 | **7** | ⚠️ 1 golpe |
| Dragão | 14 | **14** | 💀 Morte instant |

> Sem armadura, até um ogro quase te mata em um golpe. Armadura faz diferença real.

***

### Interação com Atributos

| Atributo | Efeito na Defesa |
|----------|------------------|
| **Corpo: Tenacidade (+)** | +1 na Absorção Máxima a cada 2 pontos (tanque absorve mais) |
| **Corpo: Destreza (-)** | Chance de esquiva total: valor absoluto × 5% (ex: Destreza -3 = 15% de esquivar) |

Duas fantasias defensivas distintas:

- **Tenacidade +4** com armadura pesada = Absorção Máx. sobe de 4 pra **6**. Tanque clássico.
- **Destreza -4** sem armadura = 20% de chance de **esquivar completamente**. Ágil e arriscado.

***

### Escudo

Escudos concedem um **bônus fixo à Absorção Máxima**, sem alterar a Resistência%:

| Escudo | Bônus Absorção |
|--------|---------------|
| Broquel | +1 |
| Escudo Médio | +2 |
| Escudo Torre | +3 (mas -1 em rolagens de ataque) |

***

### Resumo Rápido de Sobrevivência

Para um personagem iniciante (~12 PV, armadura média):

| Ameaça | Golpes até morrer | Sensação na mesa |
|--------|-------------------|------------------|
| Goblins | ~6 | Tranquilo, mas não descuide |
| Bandidos | ~4 | Combate justo |
| Ogro | ~2 | Perigo real |
| Wyvern | ~1-2 | Fuja ou tenha um plano |
| Dragão | ~1 | Encontro lendário, não combate direto |
