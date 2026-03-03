---
title: Defesa e Sobrevivência
tags: [core, defesa, combate]
status: stable
---

# Sistema de Defesa

Em Arkadice, a defesa opera em **três camadas sequenciais**. Cada camada resolve uma pergunta diferente:

```
1. O GOLPE ACERTA? → Rolagem de Ataque vs CD Base (escudo + cobertura)
2. O DEFENSOR ESQUIVA? → Rolagem de Dodge% (se tiver Destreza)
3. QUANTO DANO PASSA? → Armadura reduz o dano final (Resistência% + Absorção)
```

> **Armadura não faz você mais difícil de acertar** — ela faz o golpe doer menos.
> **Escudo faz você mais difícil de acertar** — ele bloqueia a trajetória do golpe.
> **Dodge é a aposta** — ou esquiva tudo, ou leva o raspão.

---

## Camada 1: CD Base (O Golpe Acerta?)

A dificuldade para acertar é simples e limitada:

```
CD Base = 8 + Escudo + Cobertura
```

| Componente | Bônus |
|------------|-------|
| Base fixa (corpo desprotegido) | 8 |
| Escudo Leve | +1 |
| Escudo Médio | +2 |
| Escudo Torre | +3 |
| Cobertura Parcial (mesa, muro baixo) | +2 |
| **CD Máxima possível** | **13** |

> Sem escudo e sem cobertura, a CD é **8**. Combate em Arkadice é letal por design.

!!! warning "Armadura, Atributos e Habilidades NÃO entram na CD"
    A CD só depende de escudo e cobertura. Não existe "empilhar bônus" para ficar intocável. A defesa real vem da armadura (Camada 3) e da esquiva (Camada 2).

---

## Camada 2: Dodge% (O Evasivo Esquiva?)

Após o ataque acertar (passar da CD Base), personagens com **Destreza (Corpo -)** podem tentar esquivar. É uma **Reação** — o defensor rola d100 contra seu Dodge%.

### Fórmula do Dodge%

```
Dodge% = (Dado de Proficiência × 5%) + (|Destreza| × 5%)
```

| Destreza | Proficiência | Dodge% | Sensação |
|----------|-------------|--------|----------|
| -1 | d4 (Inexperiente) | 10% a 25% | Marginal. Aposta desesperada. |
| -3 | d6 (Praticante) | 20% a 45% | Perigoso mas viável. |
| -5 | d12 (Lendário) | 30% a 60% | Reflexo divino — o teto do sistema. |

### Resultados do Dodge

| Resultado | Efeito |
|-----------|--------|
| **Sucesso** | Esquivou completamente — **dano 0**. |
| **Sucesso Perfeito** (dentro dos 10% superiores) | Esquivou + **Contra-Ataque**: Reação gratuita (ataque de oportunidade ou desengajar). |
| **Falha** | **Raspão**: `Dano Final = Dano Bruto - (Dodge% ÷ 3)`. Não leva tudo, mas dói. |

!!! example "Exemplo de Dodge"
    Evasivo com Dodge% 40%: rola d100 e tira 32.
    
    - 32 ≤ 40 → **Esquivou!** Dano zero.
    - Se tivesse tirado entre 1 e 4 (10% de 40) → **Contra-Ataque**: Reação gratuita.
    - Se tivesse tirado 57 → **Falha**. Raspão reduz 13 pontos (40÷3) do dano.

!!! info "Quem pode usar Dodge?"
    Apenas personagens com **Corpo negativo (Destreza)**. Personagens com Corpo positivo (Tenacidade) dependem da armadura — mas sua armadura é MUITO mais confiável.

---

## Camada 3: Armadura (Quanto Dano Passa?)

Se o golpe acertou (CD) e não foi esquivado (Dodge), a armadura reduz o dano final.

### Os Dois Componentes

- **Resistência (%)**: Percentual do dano que a armadura absorve.
- **Absorção (Cap)**: Máximo de dano que a armadura pode absorver num único golpe.

```
Dano Final = Dano Bruto - min(Dano Bruto × Resistência%, Absorção Máxima)
```

!!! example "Exemplo de Armadura"
    Armadura de Malha: Resistência 30%, Absorção 5.

    - **Goblin causa 4 de dano:** 30% de 4 = 1.2 → absorve 1. Dano final: **3**. (Dentro do cap)
    - **Ogro causa 18 de dano:** 30% de 18 = 5.4 → cap em 5. Dano final: **13**. (Cap atingido — golpes massivos passam)

### Interação com Técnica

Cada ponto de **Técnica** do atacante **ignora 1 ponto de Absorção** da armadura. Um espadachim com Técnica +4 contra a Malha (Absorção 5) faz ela funcionar como Absorção 1.

### Corpo Positivo (Tenacidade): O Tanque

Personagens com **Corpo positivo (Tenacidade +)** reforçam suas armaduras:

| Tenacidade | Bônus |
|-----------|-------|
| +1 a +4 | **+1 Absorção** a cada 2 pontos de Tenacidade |
| +5 (Lendário) | **+3 Absorção** permanentes |

**Escudos** adicionam Absorção extra:

| Escudo | Absorção Extra |
|--------|---------------|
| Leve | +1 |
| Médio | +2 |
| Torre | +3 |

---

## Fluxo Completo de Defesa (Resumo)

```
ATACANTE rola d20 + Técnica (se +) + Proficiência
                    ↓
            vs CD Base do ALVO (8 + Escudo + Cobertura)
                    ↓
        ERROU ←  Resultado  → ACERTOU
        (nada)                    ↓
                    Alvo tem Destreza (Corpo -)?
                    ↓                    ↓
                   SIM                  NÃO
                    ↓                    ↓
             Rola Dodge%          Vai direto pra armadura
                    ↓
        ESQUIVOU ← Resultado → FALHOU (Raspão)
        (dano 0)                    ↓
                         Armadura reduz dano
                         (Resistência% + Absorção)
                                    ↓
                              DANO FINAL
```

---

## Descanso e Regeneração

### Descanso Curto (10 a 30 minutos)

- **PV:** Recupera `1d4` (+1 extra com Tenacidade +3 ou superior).
- **Sekhem:** Recupera `1d4`.
- **Condições:** Condições de Nível 1 se dissipam.

### Descanso Longo (8 horas ininterruptas)

- **PV:** Recuperação total.
- **Sekhem:** Recuperação total.
- **Condições:** Todas as condições e debuffs se dissipam. Fadiga Mágica reseta. Habilidades raciais recarregam.

### Medicina em Combate

| Recurso | Ação | Efeito |
|---------|------|--------|
| Kit de Primeiros Socorros | Ação Principal | Teste Mente CD 8: cura `1d4` PV |
| Poção Básica | Ação Bônus | Cura conforme tipo (ver [Poções](../03_Magia_e_Misticismo/04_Alquimia_e_Pocoes.md)) |
| Magia de Cura (Aqua Sano) | Ação Principal | Custo: 3 Sekhem. Cura escalável por proficiência |

> Sem cura gratuita passiva. Fugir constrói campanhas. Tática garante ouro. Imprudência gasta poções caríssimas.
