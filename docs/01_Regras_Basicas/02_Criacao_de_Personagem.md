---
title: Criação de Personagem
---

# Criação de Personagem — Passo a Passo

O sistema de Arkadice não se baseia em rolar dados aleatórios de classe. Tudo é moldado a partir das suas escolhas narrativas de crescimento.

Para materializar o seu combatente, siga o passo a passo a seguir:

### 1. Escolher Raça

Consulte a aba Raças *(Sistemas Avançados -> Raças)*. Cada raça define as estacas do corpo do seu personagem, provendo:

- PV Base (Pontos de Vida da anatomia da espécie)
- Sekhem Base (rolagem do dado de magia)
- Velocidade Base
- 1 Bônus (escolha entre 2 opções fixas)
- 1 Debuff (escolha entre 2 opções para contrabalancear)

### 2. Definir Elemento de Nascença

Escolha **1 dos 6 elementos puros** estruturantes do mundo (*Ignis, Aqua, Terra, Aer, Ordo, Perditio*).
Este será seu poço de Sekhem natural. Magias atreladas intimamente a esse elemento custam a quantidade normal de rituais. Feitiços que fujam ou oponham este escopo cobram taxas adicionais por sobrecarregarem o conjurador.

### 3. Distribuir Atributos

Use o formato de **Point Buy Narrativo** introduzido por Arkadice.

- Todos os 5 Atributos Principais começam na marca Zero (`0`): Presença, Físico, Mente, Corpo, Linhagem.
- Distribua uma carga total de **7 pontos de intensidade** livremente pela balança de Pura ou Corrompida (positivo ou negativo) desses eixos.
- O Máximo de um atributo na fase de concepção é **±3**.
- A soma dos valores absolutos (ignorando o sinal da carga) não pode ser superior a 7 nesta etapa.

### 4. Calcular PV (Pontos de Vida)

**`Fórmula de Geração = PV Base Racial + Bônus de Corpo`**

- A porta da `Tenacidade +X` provê `+2 PV por ponto investido`.
- A porta da `Destreza -X` provê `+1 PV por ponto` investido no valor absoluto da habilidade (ex: Destreza -3 cede +3 PV).

### 5. Rolar Sekhem

Execute a rolagem do dado nativo de magia que sua raça comporta (ex: Elfos jogam d8, Anões d4).
O resultado fixo formará o teto do seu Sekhem Máximo. Lembre-se, Sekhem não cresce como PV com os golpes recebidos em combate.

### 6. Anotar Proficiências Iniciais

- Proficiências concedidas pela etnia/raça.
- Todas as outras habilidades operativas do mundo começam no Tier 0 orgânico (**Não Treinado**).

### 7. Obter Equipamento Inicial

O Narrador possui total autoridade em vetar ou conceder recursos nos dias iniciais de jogo para encaixar o contexto da largada narrativa, a sugestão oficial é:

| Perfil Tático | Equipamento |
|--------|-------------|
| **Guerreiro (Corpo/Físico)** | Arma materializada em ferro, blindagem de malha (média), kit de fechar feridas (primeiros socorros) com 20 `ΔP` (Dracmas de Prata). |
| **Explorador (Corpo/Mente)** | Arco raso, proteção de couro trançado (leve), corda têxtil de 15m, kit de socorros ligeiro, mantendo 15 `ΔP`. |
| **Místico (Linhagem/Mente)** | Foco arcano ou cajado polido, manto protetor sem fivelas, dois recipientes com Extrato de Sekhem para emergências além de 10 `ΔP`. |
| **Diplomata / Rosto (Presença)** | Objeto cortante discreto (adaga), túnica cerimonial valiosa, kit de socorro estético contendo 30 `ΔP`. |

### 8. Finalizar Defesas e Evasão

- **CD de Defesa Blindada (Couraça e Pesado)** = 10 `+ bônus de armadura` `+ escudo` + (Apenas o ganho de Destreza absoluto partido pela metade).
- **Dodge% (Aposta e Agilidade Pura)** = `(Apenas o Dado de proficiência em Dodge` × `5%)` + `(A escala absoluta de Destreza` × `5%)`.
- **Eficácia% (Barreira Absorção)** = Estacionada atrelada aos Status de `Equipment.md`.

---

## Entendendo a Geração de Atributos

Na criação clássica, Atributos começam estacados em Zero. Ter um atributo com sinal de "-" (negativo) em Arkadice **NÃO** significa fraqueza, inabilidade ou penalidade mecânica.

Negativo é a outra porta, o outro lado orgânico do mesmo eixo evolutivo. O Físico da `Brutalidade` ao invés da Físico pela `Técnica`. O `Instinto` pulsando nas veias da Mente contra a `Razão` metódica.

!!! note "O teto da criação é ±3"
    Você define sua personalidade pelos seus picos de desvios da média zero.

### Exemplos Práticos de Templates

**Kael da Guarda Dourada** — Sentinela Treinado.

| Atributo | Marco de Valor | Narrativa Motivacional do Personagem |
|----------|-------|---------------|
| Presença | **0** | Um homem recluso, que segue ordens neutramente. |
| Físico | **+3** (Técnica) | Esgrima e posturas táticas moldaram sua ascensão. |
| Mente | **-1** (Instinto) | Age pelo pulso da sobrevivência antes de escutar a racionalidade de comandantes em lutas de sangue. |
| Corpo | **+2** (Tenacidade) | O escudo do reino, com ossos calevejados. |
| Linhagem | **+1** (Pura) | Resquícios do sangue de famílias magis na veia materna. |

**Sombra Cinzenta** — Feitora Escarlate (Hemovita).

| Atributo | Marco de Valor | Narrativa Motivacional do Personagem |
|----------|-------|---------------|
| Presença | **-2** (Tirania) | Cínica, cortando o emocional social com manipulação e medo. |
| Físico | **+1** (Técnica) | Execução tática letal simples para garantir a extorsão. |
| Mente | **-2** (Instinto) | Paranoia aguçada a impede de ser sobrepujada por surpresas. |
| Corpo | **-2** (Destreza) | Esquiva relâmpago ditada por um corpo dependente de absorção de essência. |
| Linhagem | **0** | Foco unicamente pragmático no real. |

---

## O Crescimento do HP (Cálculo Finito)

O modelo virtual de ganhar um balde ilimitado de "D6's" no nível 20 é quebrado em Arkadice. A letalidade natural do jogo não some apenas pelo passar das páginas de papel, se manter vivo vai depender de como sua casca corporal ganha dureza ao lidar com a dor em excesso, sofrendo mutações para estender os limites de corte e trauma físico sem tombar de joelhos.

As armaduras são os pilares reais de quebra de fuzilamentos corporais. Os PV provam o quão você resiste em agonia sem sangrar ao óbito quando a malha de aço se desfazer.

### 1. PV de Base Etária E Biótipo

| Raça | PV Base | Motivo Morfológico |
|------|---------|---------------|
| **Humano** | 10 | Estima média orgânica de complexidade. |
| **Elfo / Harpia / Hemovita / Velthari** | 8 | Pássaros esguios, magia consumindo medula e ossos de rápida quebra biológica. |
| **Anão / Orc / Vroot** | 12 | Rocha, madeira vitalícia e músculos atados de massa brutal aguentam cortes brutais. |

### 2. A Evolução Crítica da Dor (O Ganho Vitalício)

Heróis e Protagonistas não vivem sob barreiras imutáveis de `8` à `18` PV eternamente esperando as espadas de inimigos tier alto finalizá-los em um estalar de ossos, mas não existem marcos genéricos numerais ditando esses saltos em uma "Level Up Chart".

| Causa Reativante Física | Resultado Residual Permanente | Condicional |
|---------------------|-------------|-----------------|
| **Sobreviver à Combates Traumais Letrais** | `+1d4` de PV permanente para a Vida Total. | Aplicável apenas se o combate finalizar com a criatura portando ≤25% da carga total da sua vida na prancha de perigo. |
| **Pausas na Jornada (Condicionamento Downtime)** | `+1` Ponto fixo cimentado. | Máximo um benefício desse por arco rotativo de aventuras caso o tempo livre off-screen seja utilizado moldando resistência do corpo. |
| **O Atributo Corporativo Subir** | `Recálculo da diferença atual` | Se no meio da narrativa o corpo sofrer as mudanças que o levem a subir de +2 a Tenacidade +3, os PV retroativos da diferença explodem positivamente. |
| **Alteração Enzimática Grave (Poções Lendárias e Vitae Absoluta)** | Entre `+1d4` a `+1d6` permanentemente nas carnes. | Ao consumir a recompensa. |

### 3. A Curva Teórica no Ciclo do Fim de Jogo (Lendários)

A margem embutida que a mesa pode aguardar para seus cenários avançados ditam a complexidade do encontro:

- **Um Místico / Ladino Lendário** estará batendo à margem dos `40` a `50` PVs suportáveis.
- **Um Tank ou Bruto Lendário** no cume do seu desenvolvimento corporal lidará à casa de `60` ou `75+` PVs sustentáveis no arco bélico.

!!! info "Letalidade vs Investimento"
    O lutador que sempre se esquiva sem nunca manchar a terra com o sangue de suas veias, falhará em calejar a sua dor. PV e Vida se compram com risco constante frente a lâmina inimiga. Até a carapaça de deuses desmorona sob dois sopros massivos de chamas ardentes sem a mecânica de absorção ativa de escudos. O jogo recompensa cicatrizes duradouras sobre a pele.

---

## A Economia Moetária do Continente

Os Dracmas `(Δ)` separam-se na base metálica das esferas de troca universal entre reinos e guildas mercantis.

- Um **Dracma de Cobre (ΔC)** engloba transações plebeias e refeições.
- O **Dracma de Prata (ΔP)** equivale estruturalmente a 10 cobres fundidos, rodando as mãos ativas dos mercenários por espadas, rações de guilda e reparações leves de ferragens.
- O **Dracma de Ouro (ΔO)** escala a relação de 100 cobres contidos sob sua chancela da realeza e patrocínio mercantil nobre, ditando negociações colossais com guildas e mantos mágicos puros.

> A economia obedece à trama, sem virar planilha administrativa maçante. Se você ajuda dobras nos fornos fundidores do leste, seu minério em placa é cedido livre da tarifa do armeiro. Se você esvazia o antro de um dragão jovem, carregar sacas infinitas da tumba vai pesar perante sua força de transporte local. Preços orbitam contextos.
