---
title: Exemplos de Combate
tags: [core, combate, tutorial]
status: stable
---

# 📖 Exemplos de Combate

> Esta página existe para tirar dúvidas. Cada exemplo simula um turno real de mesa, mostrando exatamente os dados rolados, as fórmulas aplicadas e o resultado final.

---

## Exemplo 1 — O Básico (Guerreiro vs Bandido)

**Cenário:** Kael, guerreiro humano com Técnica +3, Proficiência Praticante (+1), empunhando uma espada longa (1d8 dano), ataca um bandido sem escudo e sem cobertura.

### Passo 1: CD Base do Bandido

```
CD Base = 8 + Escudo (0) + Cobertura (0) = 8
```

### Passo 2: Rolagem de Ataque

```
Kael rola: d20 + Técnica (+3) + Proficiência (+1) = d20 + 4
Resultado: rola 7 → 7 + 4 = 11
11 ≥ 8 (CD Base) → ACERTOU!
```

### Passo 3: O Bandido Tem Dodge?

O bandido tem Corpo +1 (Tenacidade). **Sem Destreza negativa = sem Dodge.** Vai direto pra armadura.

### Passo 4: Dano e Armadura

O bandido veste couro leve: **Resistência 15%, Absorção 2**.

```
Kael rola dano: 1d8 → 5
Redução da armadura: min(5 × 15%, 2) = min(0.75, 2) = 0 (arredondado para baixo)
MAS: Técnica +3 ignora 3 de Absorção → Absorção efetiva = max(2-3, 0) = 0
Dano Final: 5 - 0 = 5 PV de dano
```

> 💬 *"A lâmina de Kael desliza por baixo da tira de couro, abrindo um corte limpo no flanco do bandido. Cinco pontos de vida a menos."*

---

## Exemplo 2 — Brutalidade (Orc vs Cavaleiro Blindado)

**Cenário:** Grukk, orc com Brutalidade -4, Proficiência Adepto (+2), empunhando um martelo de guerra (1d10 dano), ataca um cavaleiro com escudo médio e armadura de placas.

### Passo 1: CD Base do Cavaleiro

```
CD Base = 8 + Escudo Médio (+2) = 10
```

### Passo 2: Rolagem de Ataque

Brutalidade **NÃO soma no d20**. Grukk rola apenas com Proficiência:

```
Grukk rola: d20 + Proficiência (+2) = d20 + 2
Resultado: rola 12 → 12 + 2 = 14
14 ≥ 10 (CD Base) → ACERTOU!
```

### Passo 3: Dano e Armadura

Cavaleiro veste placas: **Resistência 40%, Absorção 6**. Escudo Médio dá +2 Absorção extra → **Absorção Total: 8**.

```
Grukk rola dano: 1d10 → 7
Brutalidade -4 adiciona +4 ao dano: 7 + 4 = 11 de dano bruto
Redução: min(11 × 40%, 8) = min(4.4, 8) = 4
Dano Final: 11 - 4 = 7 PV de dano
```

> 💬 *"O martelo de Grukk não buscou frestas — ele simplesmente NÃO SE IMPORTOU com as placas. O cavaleiro cambaleia, o peito da armadura afundado como uma lata."*

!!! tip "Comparação: E se Grukk tivesse Técnica +4 em vez de Brutalidade?"
    ```
    Ataque: d20 + 4 + 2 = d20 + 6 (acertaria com mais facilidade)
    Dano: 1d10 → 7 (sem bônus de dano)
    Técnica ignora 4 de Absorção → Absorção efetiva: 8 - 4 = 4
    Redução: min(7 × 40%, 4) = min(2.8, 4) = 2
    Dano Final: 7 - 2 = 5 PV
    ```
    **Técnica causou 5 dano. Brutalidade causou 7.** Contra armaduras pesadas com Absorção alta, a Brutalidade leva vantagem em dano bruto.

---

## Exemplo 3 — Evasivo com Dodge (Ladina vs Assassino)

**Cenário:** Liara, meio-elfa com Destreza -3, Proficiência Praticante em Dodge (d6), é atacada por um assassino.

### Ataque do Assassino

```
Assassino: d20 + Técnica (+2) + Proficiência (+2) = d20 + 4
Rola: 15 → 15 + 4 = 19
Liara não tem escudo. CD Base = 8.
19 ≥ 8 → ACERTOU!
```

### Dodge de Liara (Reação)

```
Dodge% = (d6 × 5%) + (|-3| × 5%) = (d6 × 5%) + 15%
Liara rola o d6 de proficiência: 4 → 4 × 5% = 20%
Dodge% total: 20% + 15% = 35%

Liara rola d100: 28
28 ≤ 35 → ESQUIVOU! Dano = 0
```

> 💬 *"A adaga corta o ar onde Liara estava meio segundo antes. Ela girou o quadril e a lâmina passou raspando o cabelo."*

### E se tivesse falhado?

```
Se Liara tivesse rolado 52 no d100:
52 > 35 → FALHOU! Raspão.
Redução do Raspão: 35% ÷ 3 = 11 pontos reduzidos
Assassino causaria 1d6+2 = 7 de dano
Dano Final: 7 - 11 = 0 (mínimo 1)... Na verdade: max(7 - 11, 1) = 1
```

!!! info "Raspão nunca mata"
    Mesmo falhando no Dodge, o Raspão reduz o dano significativamente. Evasivos raramente sofrem golpes letais de um único ataque — eles morrem por acumulação.

---

## Exemplo 4 — Contra-Ataque (Dodge Perfeito)

**Cenário:** Mesmo combate, mas dessa vez Liara tem Dodge% de 40% e rola **3** no d100.

```
10% de 40 = 4
Resultado 3 ≤ 4 → DODGE PERFEITO!
```

Liara ganha uma **Reação gratuita**. Ela escolhe atacar:

```
Liara ataca o assassino: d20 + Técnica (+2) + Proficiência (+1)
Rola: 14 → 14 + 3 = 17
17 ≥ 8 (CD Base) → ACERTOU!
Dano: 1d6 adaga → 4 + Técnica ignora 2 Absorção
```

> 💬 *"Liara não apenas desvia — ela lê o arco da adaga antes que o assassino termine o golpe. No exato instante em que ele estende o braço, ela desliza por baixo e crava a lâmina nas costas dele."*

---

## Exemplo 5 — Magia em Combate (Mago vs Grupo)

**Cenário:** Theron, elfo mago com Linhagem Pura +3, Proficiência Adepto em Magia (+2), conjura uma bola de fogo (Ignis Globus — Área 3m, custo 4 Sekhem).

### Conjuração

```
CD Mágica de Theron = 8 + |Linhagem| (+3) + Proficiência (+2) = 13
Inimigos no raio fazem Save: d20 + |Mente| vs CD 13
```

### Três bandidos fazem o Save

```
Bandido 1: d20 + 1 = rola 8 → 9. 9 < 13 → FALHOU. Dano total.
Bandido 2: d20 + 2 = rola 14 → 16. 16 ≥ 13 → PASSOU. Dano pela metade.
Bandido 3: d20 + 0 = rola 5 → 5. 5 < 13 → FALHOU. Dano total.
```

### Dano

```
Ignis Globus: 2d6 dano de fogo → 3 + 5 = 8
Bandido 1: 8 de dano (falhou save)
Bandido 2: 4 de dano (passou save — metade)
Bandido 3: 8 de dano (falhou save)

Sekhem de Theron: 22 - 4 = 18 restantes (ainda acima de 33% — sem fadiga)
```

> 💬 *"Theron ergue a mão e murmura a Palavra de Poder. O ar crepita, e uma esfera incandescente explode entre os bandidos. Dois caem gritando. O terceiro rolou para trás a tempo de escapar do pior."*

---

## Exemplo 6 — Flanquear (Combate em Grupo)

**Cenário:** Kael (Técnica +3) e Grukk (Brutalidade -4) cercam um ogro. Liara se junta pela retaguarda.

### Bônus de Flanquear

```
2 aliados em lados opostos → +2 no acerto
3 aliados cercando → +3 no acerto (CAP MÁXIMO)
```

### Turno de Kael (com 3 aliados flanqueando)

```
d20 + Técnica (+3) + Proficiência (+1) + Flanquear (+3) = d20 + 7
Rola: 4 → 4 + 7 = 11
Ogro sem escudo. CD Base = 8.
11 ≥ 8 → ACERTOU!
```

> Mesmo um rolar baixo (4) acerta quando a equipe trabalha junta.

### Turno de Grukk (mesmo flanquear)

```
d20 + Proficiência (+2) + Flanquear (+3) = d20 + 5
(Brutalidade NÃO soma no d20, mas o flanquear sim)
Rola: 6 → 6 + 5 = 11
11 ≥ 8 → ACERTOU!
Dano: 1d10 + 4 (Brutalidade) = potencialmente devastador
```

> 💬 *"O ogro gira para bloquear o martelo de Grukk, mas Kael já cortou o tendão do joelho. Liara crava uma adaga nas costas. A criatura não sabe para onde olhar."*

---

## Exemplo 7 — Velthari Flanqueando (Instinto de Bando)

**Cenário:** Mesmo cenário, mas Kael é um Velthari. Sua mecânica racial dá **+1 EXTRA** no flanquear.

```
2 aliados flanqueando com Velthari: +2 normal + 1 racial = +3 (já no cap)
Com Velthari, 2 aliados alcançam o cap que normalmente exige 3!
```

> 💬 *"O Velthari não cerca — ele caça. Seus aliados sentem o instinto e seguem o movimento sem falar. A presa não tem chance."*

---

## Resumo Rápido de Fórmulas

| Etapa | Fórmula |
|-------|---------|
| **Ataque Corpo a Corpo** | `d20 + Técnica (se +) + Proficiência + Flanquear vs CD Base` |
| **Ataque à Distância** | `d20 + |Mente| + Proficiência vs CD Base` |
| **CD Base** | `8 + Escudo + Cobertura` (máx 13) |
| **Dodge%** | `(Dado Prof × 5%) + (|Destreza| × 5%)` |
| **Raspão (Dodge falho)** | `Dano - (Dodge% ÷ 3)` |
| **Armadura** | `Dano - min(Dano × Resistência%, Absorção - Técnica do atacante)` |
| **Dano de Brutalidade** | `Dano da Arma + |Brutalidade|` |
| **CD Mágica** | `8 + |Linhagem| + Proficiência em Magia` |
| **Crítico (20 Natural)** | Dano da arma dobrado antes da armadura |
