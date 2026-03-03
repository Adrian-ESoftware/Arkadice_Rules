---
title: Combate Tático
---

# Estrutura do Combate

O combate em Arkadice RPG é brutal, tático e rápido. Heróis e oponentes dividem turnos estruturados e tomam decisões cruciais sobre o posicionamento e os recursos alocados para ataque ou esquiva/bloqueio.

## Iniciativa

No início do embate, a ordem de quem age primeiro determina o tom do desfecho. Cada participante roda **d20 `+` |Mente|**.

- **Razão (+)** soma o valor para a reflexão estratégica do ambiente (prever a tática inimiga).
- **Instinto (-)** soma o valor absoluto pela sua fúria animal (o reflexo no instante do perigo).

> Lados com a mente vazia ou com mente negativa lutam da mesma forma para dominar a cena de início de combate — Razão ganha tempo na análise; Instinto corta a demora pela velocidade bruta.

---

## O Fluxo do Turno

O jogador possui **4 Recursos de Ação** gerenciáveis na rodada em qualquer ordem lógica:

### Ações Disponíveis

| Tipo de Ação | Frequência | Exemplos |
|------|------|----------|
| **Ação Principal** | Uma por Turno | Atacar um oponente, conjurar feitiço complexo, usar itens grandes/enredar uma armadilha, *Dash* (Dobrar movimento tático) ou *Esconder-se*. |
| **Ação de Movimento** | Uma por Turno | Mover a raça até seu valor passivo base (normal: 6 metros). Engatar metade deste poder se houver entulho ou gelo no solo *(Terreno Difícil)*. |
| **Ação Bônus** | Uma por Turno | Usar manobras extras menores (golpe esquerdo para uso de duas armas leves *"Dual Wield"*), Ativar postura de Esquiva imediata, ou Conjuração Rápida de selos. |
| **Reação** | Uma Gasta a cada Rodada (retorna na sua iniciativa dita) | Bloqueio com Escudos no impacto, Golpes de Oportunidade, ou Interrupções de encanamentos mágicos pagando o preço. |

### Detalhes Importantes de Manobra

- **Esquiva Contínua**: Gastar ação bônus para a postular a Esquiva garante diretamente +5% na taxa vital de reflexo defensivo em todas as roladas até a volta de sua rodada.
- **Desengajar**: Um respiro que consome sua ação principal — O recuo controlado impede monstros de cortarem brutalmente os flancos quando o personagem resolve abandonar o espaço imediato do mapa.
- **Ajudar**: Prover cobertura e flanquear para o narrador ditar uma chance de Vantagem sobre sua investida aliada se sua ação principal for convertida no puro sacrifício do próximo ataque dele até ele interagir de volta.
- **Preparar**: Sentar a principal em uma janela *"Se X mover esse braço, Eu executo o gatilho Y"*.
- **Dual Wield (Duas Armas)**: Personagens segurando duas lâminas curtas atrelam o combate sem dano primário na Ação Bônus extra. Não espere somatórios de bônus destrutivos — a faca a mais traz volume de acertos limpos. (Ocupa o slot que lhe salvaria evadindo o golpe mortal num bloqueio bônus).

---

## Resolução de Ataque

Todo ataque em Arkadice é resolvido contra uma **CD Base** simples do alvo.

### CD Base de Defesa

A dificuldade para acertar um alvo depende apenas de cobertura e escudo — **armadura NÃO entra na CD** (ela reduz dano depois, ver [Defesa e Sobrevivência](04_Defesa_e_Sobrevivencia.md)).

```
CD Base = 8 + Bônus de Escudo + Bônus de Cobertura
```

| Componente | Valor |
|------------|-------|
| Base fixa | 8 |
| Escudo Leve | +1 |
| Escudo Médio | +2 |
| Escudo Torre | +3 |
| Cobertura Parcial | +2 |
| Cobertura Total | Imune a ataques diretos |
| **CD Máxima possível** | **13** (8 + 3 + 2) |

> **Sem escudo e sem cobertura, a CD é 8.** Todo golpe é perigoso em Arkadice.

### Corpo a Corpo

- **Fórmula:** `d20 + Técnica (se +) + Proficiência vs CD Base`
- **Técnica (+):** Soma no d20. Além disso, cada ponto ignora 1 de Absorção da armadura.
- **Brutalidade (-):** NÃO soma no d20. Soma o valor absoluto diretamente no **Dano**.

### Ataque à Distância

- **Fórmula:** `d20 + |Mente| + Proficiência vs CD Base`
- Arcos e dardos usam Mente (Razão para mira calculada, Instinto para tiro reflexo).
- Armas de arremesso pesadas podem usar |Físico| a critério do Mestre.

### Sorte & Desastres

- **20 Natural (Crítico):** Dano da arma é **dobrado** antes da redução de armadura.
- **1 Natural (Falha Extrema):** A critério do Mestre — arma presa, corda arrebenta, poção cai.

---

## O Tabuleiro Perigoso: Efeitos do Palco

Eventos externos punem e ajudam aventureiros durante combates vivos.

| Regra | Efeito Mecânico |
|-------|-----------------|
| **Cobertura Parcial** | +2 CD de Defesa. |
| **Cobertura Total** | Alvo impossível de atingir por ataques diretos até ser contornado. Fogo Arcano de grande raio pode contornar. |
| **Invisibilidade** | Vantagem no primeiro ataque (que encerra a invisibilidade). |
| **Derrubado (Prone)** | Vantagem em corpo a corpo contra ele. Desvantagem à distância. |
| **Agarrado (Grappled)** | Vantagem contra o alvo. Velocidade 0. |
| **Terreno Difícil** | Velocidade reduzida pela metade. Terrenos perigosos (ácido, lava, espinhos) causam 1d4 por turno. |
| **Queda** | 1d4 de dano por cada 3m de queda. Teste de Destreza CD 12 pode reduzir o dano em 50%. Máximo: 10d4 (30m). |
| **Flanquear** | 2 aliados em lados opostos: **+2 no acerto**. 3+ aliados cercando: **+3 no acerto** (teto máximo). |

!!! warning "Cap de Flanquear"
    O bônus máximo de flanquear é **+3**, independente do número de atacantes. Mais aliados = mais ataques, mas não mais precisão individual.
