# Sekhem — Sistema de Magia de Arkadice

## O Que é Sekhem

Sekhem é a energia primordial que permeia o mundo. Todo ser vivo carrega uma quantidade limitada de Sekhem dentro de si — como um reservatório que define o potencial mágico bruto do indivíduo. Magia não é aprendida de livros; é **falada em voz alta**, moldada por palavras de poder que canalizam o Sekhem em efeitos reais.

> *Magia é linguagem. Cada feitiço é uma frase. Cada palavra tem peso.*

***

## Os 6 Elementos Primordiais

Todo Sekhem se manifesta através de um dos 6 elementos primordiais. São as forças fundamentais que compõem a realidade:

| Elemento | Domínio | Oposto |
|----------|---------|--------|
| **Ignis** | Fogo, calor, energia, destruição | Aqua |
| **Aqua** | Água, frio, fluxo, cura | Ignis |
| **Terra** | Terra, gravidade, solidez, proteção | Aer |
| **Aer** | Ar, velocidade, som, leveza | Terra |~

Elementos puro e corrompido:

| Elemento | Domínio | Oposto |
|----------|---------|--------|
| **Ordo** | Ordem, luz, estabilidade, criação | Perditio |
| **Perditio** | Entropia, trevas, caos, dissolução | Ordo |

### Elemento de Nascença

Todo personagem nasce com **1 elemento principal**. Este é seu Sekhem natural — o tipo de magia que flui mais fácil. Casos extremamente raros (decisão do narrador) nascem com **2 elementos**.

- Usar seu elemento natural: **custo normal** de Sekhem
- Usar elemento neutro (não oposto): **custo ×1.5** (arredondado pra cima)
- Usar elemento oposto: **custo ×2**
- Usar elemento oposto a linhagem: **custo ×3**
- **Não existe proibição** — apenas custo. Qualquer um pode tentar qualquer elemento.

***

## Anatomia de um Feitiço

Todo feitiço é construído por **3 componentes falados em sequência**:

```
[ELEMENTO] + [NÚCLEO] + [MODIFICADORES...]
```

O conjurador **fala** as palavras em voz alta. A ordem importa. Mais palavras = mais Sekhem gasto.

***

### 1. Elemento (Palavra Base)

A primeira palavra define **de que é feito** o feitiço. É uma das 6 palavras primordiais.

| Palavra | Elemento | O que gera |
|---------|----------|------------|
| **Ignis** | Fogo | Chamas, calor, explosões |
| **Aqua** | Água | Gelo, vapor, correnteza, cura |
| **Terra** | Terra | Rocha, metal, gravidade, barreiras |
| **Aer** | Ar | Vento, som, relâmpago, velocidade |
| **Ordo** | Ordem | Luz, escudos, purificação, vínculo |
| **Perditio** | Entropia | Sombras, decadência, veneno, dispersão |

***

### 2. Núcleo (Forma do Feitiço)

A segunda palavra define **como** o elemento se manifesta. É a forma física do feitiço.

| Palavra | Forma | Exemplo com Ignis |
|---------|-------|-------------------|
| **Sagitta** | Projétil direto | Flecha de fogo |
| **Murus** | Barreira / muro | Parede de chamas |
| **Orbis** | Esfera / área | Explosão de fogo ao redor |
| **Tactus** | Toque / contato | Mãos incandescentes |
| **Vinculum** | Corrente / vínculo | Correntes de fogo que amarram |
| **Nimbus** | Nuvem / área contínua | Névoa de calor sufocante |
| **Scutum** | Escudo pessoal | Aura de chama protetora |
| **Telum** | Lâmina / arma conjurada | Espada de fogo temporária |

***

### 3. Modificadores (Palavras Extras)

Modificadores alteram **escala, duração, intensidade ou comportamento** do feitiço. O custo dos modificadores **escala fatorialmente**: quanto mais modificadores empilhados, mais caro cada um fica.

#### Regra de Custo Fatorial

> **Custo real de um modificador = Custo Base × Posição na cadeia**
>
> - não é permitido empilhar modificadores do mesmo tipo
> - 1º modificador: custo base × **1**
> - 2º modificador: custo base × **2**
> - 3º modificador: custo base × **3**
> - E assim por diante...

#### Tabela de Modificadores

| Palavra | Efeito | Custo Base |
|---------|--------|------------|
| **Magnus** | Aumenta tamanho / área | 1 |
| **Parvus** | Reduz tamanho (mais preciso) | 1 |
| **Velox** | Mais rápido / instantâneo | 1 |
| **Lentus** | Mais lento / persistente (dura mais turnos) | 1 |
| **Serpens** | Curva / persegue o alvo | 1 |
| **Duplex** | Duplica o efeito (2 projéteis, etc.) | 2 |
| **Occultus** | Silencioso / invisível | 2 |
| **Acutus** | Perfurante (ignora parte da defesa) | 2 |
| **Vastus** | Massivo (dobra a área) | 2 |
| **Perpetuus** | Dura até cancelar (drena 2 Sekhem/turno) | 3 |

> **Não há limite de modificadores.** Mas o custo fatorial torna cada palavra extra brutalmente mais cara.

#### Exemplo de Escalada Fatorial

Empilhando 4 modificadores de custo base 1 (ex: Magnus, Velox, Serpens, Lentus):

| Posição | Modificador | Base | ×Posição | Custo Real |
|---------|-------------|------|----------|------------|
| 1º | Magnus | 1 | ×1 | **1** |
| 2º | Velox | 1 | ×2 | **2** |
| 3º | Serpens | 1 | ×3 | **3** |
| 4º | Lentus | 1 | ×4 | **4** |
| | | | **Total mods:** | **10** |

> Feitiço base (3) + 4 mods (10) = **13 Sekhem**. Um iniciante (10 Sekhem) não consegue fazer isso.

***

## Reservatório de Sekhem

Todo personagem tem um **Sekhem Máximo** — definido no nascimento e alterável entre sessões (treino, rituais, eventos narrativos).

### Sekhem Inicial por Raça

O Sekhem Máximo de cada personagem é **rolado aleatoriamente** na criação, dentro da faixa da sua raça. Esse é o valor de nascença — pode ser expandido futuramente (artefatos, rituais, pactos, eventos narrativos).

| Raça | Sekhem Mín. | Sekhem Máx. | Dado | Tendência |
|------|-------------|-------------|------|-----------|
| **Humano** | 10 | 15 | 1d6+9 | Equilibrado, versátil |
| **Elfo** | 12 | 16 | 1d5+11 | Afinidade mágica natural |
| **Anão** | 8 | 13 | 1d6+7 | Menos mágico, mais resistente |
| **Orc** | 8 | 12 | 1d5+7 | Força bruta, pouco Sekhem |
| **Meio-Elfo** | 11 | 15 | 1d5+10 | Herança élfica parcial |
| **Tiefling** | 10 | 16 | 1d7+9 | Instável, faixa mais ampla |
| **Halfling** | 9 | 13 | 1d5+8 | Modesto mas eficiente |
| **Hemovita** | 11 | 16 | 1d6+10 | Sekhem vampírico, alimentado por vitae |

> As faixas são **propositalmente próximas** — a diferença entre o menor (Orc: 8) e o maior (Elfo/Tiefling: 16) é de apenas 8 pontos. Nenhuma raça é mágicamente inútil, nenhuma é absoluta.

### O Que Dá Pra Fazer com Cada Faixa?

Um feitiço básico custa **3 Sekhem** (1 elemento + 2 núcleo).

| Sekhem | Magias básicas | Com 1 mod (+1~2) | Com 2 mods (+3~6) |
|--------|---------------|------------------|-------------------|
| 8 | 2 magias | 1 básica + 1 com mod | Só 1 magia e acabou |
| 10 | 3 magias | 2 + 1 com mod | 1 com 2 mods + 1 básica |
| 13 | 4 magias | 3 + 1 com mod | 2 com mods |
| 15 | 5 magias | 3 + 2 com mods | 2 com mods + 1 básica |
| 16 | 5 magias | 4 + 1 com mod | 2 com mods + 1-2 básicas |

> O combate é **apertado de propósito**. Cada feitiço é uma decisão importante.

### Recuperação

| Método | Sekhem Recuperado |
|--------|-------------------|
| Descanso curto (10 min) | 1d4 |
| Descanso longo (8h) | Total |
| Poção de Sekhem | 1d6+2 |
| Meditação (1h, fora de combate) | Metade do máximo |

***

## Custo de Conjuração

| Componente | Custo |
|------------|-------|
| Elemento (natural) | 1 |
| Elemento (neutro) | 2 |
| Elemento (oposto) | 3 |
| Núcleo | 2 |
| Modificadores | Custo Base × Posição (ver acima) |

**Custo total = Elemento + Núcleo + Σ(Custo Base × Posição)**

### Linhagem Pura vs. Corrompida

| Linhagem | Efeito na Conjuração |
|----------|---------------------|
| **Pura (+)** | -1 no custo total (mín. 1). Feitiços estáveis, sem risco |
| **Corrompida (-)** | +1 dado de dano nos feitiços ofensivos. Mas em falha crítica (duplo 1), sofre backlash: 1d6 dano ao próprio conjurador |

***

## Construindo Feitiços — Exemplos

### Feitiço simples: Flecha de Fogo (sem mod)

> **Palavras:** *"Ignis Sagitta"*
>
> | Componente | Custo |
> |------------|-------|
> | Ignis (natural) | 1 |
> | Sagitta (projétil) | 2 |
> | **Total** | **3 Sekhem** |
>
> Efeito: Projétil de fogo, 1d6 dano. Pode usar 3× com Sekhem 10.

### Feitiço médio: Muro de Gelo Grande (1 mod)

> **Palavras:** *"Aqua Murus Magnus"*
>
> | Componente | Base | ×Posição | Custo |
> |------------|------|----------|-------|
> | Aqua (natural) | — | — | 1 |
> | Murus (barreira) | — | — | 2 |
> | Magnus (1º mod) | 1 | ×1 | 1 |
> | **Total** | | | **4 Sekhem** |
>
> Efeito: Parede de gelo grande, bloqueia passagem e projéteis por 2 turnos.

### Feitiço pesado: Duas Flechas Perseguidoras (2 mods)

> **Palavras:** *"Ignis Sagitta Duplex Serpens"*
>
> | Componente | Base | ×Posição | Custo |
> |------------|------|----------|-------|
> | Ignis (natural) | — | — | 1 |
> | Sagitta (projétil) | — | — | 2 |
> | Duplex (1º mod) | 2 | ×1 | 2 |
> | Serpens (2º mod) | 1 | ×2 | 2 |
> | **Total** | | | **7 Sekhem** |
>
> Efeito: 2 flechas de fogo que perseguem o alvo. 1d6 dano cada.
> Com Sekhem 10: sobra 3 para mais 1 magia básica.

### Feitiço avançado: Sombra Perfurante Invisível Rápida (3 mods)

> **Palavras:** *"Perditio Sagitta Acutus Occultus Velox"*
>
> | Componente | Base | ×Posição | Custo |
> |------------|------|----------|-------|
> | Perditio (natural) | — | — | 1 |
> | Sagitta | — | — | 2 |
> | Acutus (1º mod) | 2 | ×1 | 2 |
> | Occultus (2º mod) | 2 | ×2 | 4 |
> | Velox (3º mod) | 1 | ×3 | 3 |
> | **Total** | | | **12 Sekhem** |
>
> Efeito: Projétil invisível, instantâneo, que ignora parte da defesa. 1d8 dano.
> Requer Linhagem ±2+ (Sekhem 20). Impossível para iniciantes.

### Feitiço lendário: Tempestade Massiva Persistente (3 mods pesados)

> **Palavras:** *"Aer Nimbus Vastus Magnus Perpetuus"*
>
> | Componente | Base | ×Posição | Custo |
> |------------|------|----------|-------|
> | Aer (natural) | — | — | 1 |
> | Nimbus (nuvem) | — | — | 2 |
> | Vastus (1º mod) | 2 | ×1 | 2 |
> | Magnus (2º mod) | 1 | ×2 | 2 |
> | Perpetuus (3º mod) | 3 | ×3 | 9 |
> | **Total** | | | **16 Sekhem + 2/turno** |
>
> Efeito: Tempestade elétrica massiva, 2d6 dano/turno a todos na área.
> Requer Linhagem ±3+ (Sekhem 28). Pode manter 6 turnos antes de esvaziar.

***

## Por Que o Sistema se Autolimita

O sistema parece aberto ("adicione quantos modificadores quiser"), mas o **custo fatorial** o limita naturalmente:

| Mods empilhados | Custo só dos mods (base 2 cada) | + Base (3) | Total |
|-----------------|--------------------------------|------------|-------|
| 0 | 0 | 3 | **3** |
| 1 | 2 | 3 | **5** |
| 2 | 2+4 = 6 | 3 | **9** |
| 3 | 2+4+6 = 12 | 3 | **15** |
| 4 | 2+4+6+8 = 20 | 3 | **23** |
| 5 | 2+4+6+8+10 = 30 | 3 | **33** |

> O 5º modificador sozinho custa **10 Sekhem** — o reservatório inteiro de um iniciante.

### Os 4 Limitadores Naturais

1. **Sekhem é finito** — Iniciante (10 Sekhem): 3 magias básicas ou 1 com 2 mods e acabou.

2. **Custo fatorial** — Cada mod extra custa mais que o anterior. O 3º mod custa 3× o base; o 4º custa 4×.

3. **Elemento oposto é caro** — Base passa de 1 pra 3 Sekhem, e todos os custos se empilham sobre isso.

4. **Backlash** — Feitiços caros têm CD alta. Falha crítica em feitiço de 15+ Sekhem pode ser fatal.

> *Qualquer um pode imaginar "Ignis Nimbus Vastus Magnus Duplex Perpetuus". Custaria 40+ Sekhem. Quase ninguém sobrevive a isso.*

***

## Combinação de Elementos (Avançado)

Personagens com **2 elementos de nascença** (ou que pagam custo extra) podem combinar elementos no mesmo feitiço usando a palavra **Misceo** entre os dois elementos. Isso custa **+3 Sekhem** adicional.

### Exemplos de Combinação

| Combinação | Palavra | Resultado |
|------------|---------|-----------|
| Ignis + Aer | *"Ignis Misceo Aer"* | Relâmpago flamejante |
| Aqua + Terra | *"Aqua Misceo Terra"* | Lama / pântano / gelo sísmico |
| Ordo + Ignis | *"Ordo Misceo Ignis"* | Luz purificadora ardente |
| Perditio + Aqua | *"Perditio Misceo Aqua"* | Veneno líquido / ácido |
| Aer + Terra | *"Aer Misceo Terra"* | Tempestade de areia / rocha voadora |
| Ordo + Perditio | *"Ordo Misceo Perditio"* | Paradoxo (extremamente instável e poderoso) |

> Combinar Ordo + Perditio é considerado proibido pela maioria das ordens mágicas. O custo é **×3** ao invés de +3, e a falha crítica pode causar efeitos narrativos permanentes.

***

## Teste de Conjuração

Para conjurar um feitiço, o personagem rola:

**2d6 + Linhagem (valor absoluto)** vs. **CD do feitiço**

**Apenas na primeira vez do fentiço unico**

| Custo do Feitiço | CD |
|-------------------|-----|
| 1-3 Sekhem | CD 5 (automático para a maioria) |
| 4-6 Sekhem | CD 8 |
| 7-10 Sekhem | CD 11 |
| 11-15 Sekhem | CD 14 |
| 16+ Sekhem | CD 17 |

| Resultado | Efeito |
|-----------|--------|
| **Sucesso** | Feitiço funciona normalmente |
| **Sucesso Crítico** (duplo 6) | Feitiço potencializado: +1d6 dano ou duração dobrada |
| **Falha** | Sekhem é gasto, mas o feitiço falha |
| **Falha Crítica** (duplo 1) | Sekhem gasto + backlash (efeito reverso no conjurador) |
