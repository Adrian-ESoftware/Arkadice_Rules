# Prompt para Criação de Schema Graphiti (Arkadice RPG)

Copie e cole o texto abaixo para a IA que está configurando seu n8n/Graphiti.

***

## Contexto do Sistema

Estou criando um banco de dados em grafos (Neo4j/Graphiti) para um mundo de RPG chamado **Arkadice**.
O sistema possui mecânicas únicas que precisam ser refletidas no schema.
Aqui estão as regras fundamentais que o banco de dados deve respeitar:

### 1. Entidades Principais (Nodes)

- **Character:** Representa tanto Jogadores (PJs) quanto NPCs.
- **Race:** (Humano, Elfo, Orc, Goblin, etc.)
- **Element:** (Ignis, Aqua, Terra, Aer, Ordo, Perditio)
- **Attribute:** Os 5 atributos duais (Presença, Físico, Mente, Corpo, Linhagem).
- **Spell:** Feitiços ou combinações de palavras de poder.
- **Item:** Equipamentos, armas, artefatos.
- **Location:** Lugares no mundo.
- **Faction:** Grupos e guildas.

### 2. Propriedades Críticas (Properties)

Para o Node `Character`, inclua:

- `name` (String)
- `tier` (Integer 0-4): Nível de poder narrativo (0=Cidadão, 4=Lenda).
- `sekhem_current` (Integer): Pontos de vida/mana atuais.
- `sekhem_max` (Integer): Capacidade máxima.
- `attributes` (Map/JSON):
  - `presence`: -5 a +5
  - `physique`: -5 a +5
  - `mind`: -5 a +5
  - `body`: -5 a +5
  - `lineage`: -5 a +5

### 3. Relacionamentos (Edges)

Defina as seguintes conexões:

- `(Character)-[:IS_RACE]->(Race)`
- `(Character)-[:BORN_ELEMENT]->(Element)`: Todo personagem nasce com 1 elemento natural.
- `(Character)-[:KNOWS_SPELL {mastery: Boolean, tier: Integer}]->(Spell)`: Personagens podem saber feitiços. A propriedade `mastery=true` indica "Feitiço Dominado".
- `(Character)-[:EQUIPPED_WITH {slot: String}]->(Item)`: Slot pode ser "Mão 1", "Corpo", etc.
- `(Character)-[:LOCATED_IN]->(Location)`
- `(Character)-[:MEMBER_OF {rank: String}]->(Faction)`

### 4. Lógica de Mundo (Constraints)

- **Vitalidade Mágica:** `Sekhem` é tanto mana quanto "stamina mágica". Se chegar a 0, o personagem risca a morte.
- **Polaridade:** Atributos negativos não são ruins, são **opostos**.
  - Ex: `Mind +3` = Razão (Lógica). `Mind -3` = Instinto (Percepção).
  - O schema deve permitir valores negativos.

### Objetivo do Schema

Crie um schema JSON ou Cypher queries que inicializem essa estrutura, permitindo que eu insira NPCs simples (Tier 0-1) apenas com Nome, Raça e Profissão, mas também PJs complexos (Tier 2-3) com todos os atributos e feitiços detalhados.
