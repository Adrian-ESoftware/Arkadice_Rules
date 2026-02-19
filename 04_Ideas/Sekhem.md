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
| **Aer** | Ar, velocidade, som, leveza | Terra |

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

A segunda palavra define **como** o elemento se manifesta. É a forma física do feitiço. Cada núcleo tem **efeitos base com variabilidade** — nada é fixo, a magia é orgânica.

| Palavra | Forma | Efeito Base | Notas |
|---------|-------|-------------|-------|
| **Sagitta** | Projétil direto | **1d6** dano, alcance 18m | 1 alvo |
| **Murus** | Barreira / muro | HP = **1d6+2**, largura 3m, altura 2m | Dura **1d4** turnos |
| **Orbis** | Esfera / área | **1d4** dano a todos na área, raio 3m | Aliados incluídos |
| **Tactus** | Toque / contato | **1d8** dano, ignora 1 Absorção | Requer adjacência |
| **Vinculum** | Corrente / vínculo | CD 12 para escapar, imobiliza | Dura **1d4** turnos |
| **Nimbus** | Nuvem / área contínua | **1d4** dano/turno, raio 6m | Dura **1d4+1** turnos |
| **Scutum** | Escudo pessoal | +**1d4** Absorção ao conjurador | Dura **1d4** turnos |
| **Telum** | Lâmina / arma conjurada | Arma conjurada, +**1d4** dano elemental | Dura **1d4+2** turnos |

> Os dados nos efeitos base significam que nem toda magia sai perfeita. Um Murus pode ter HP 3 ou HP 6 — depende do momento, da concentração, da sorte. Isso mantém cada conjuração única.

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
| **Velox** | Mais rápido / instantâneo (pode conjurar como ação bônus) | 1 |
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

Todo personagem tem um **Sekhem Máximo** — definido no nascimento e expansível por caminhos narrativos.

### Sekhem Inicial por Raça

O Sekhem Máximo de cada personagem é **rolado aleatoriamente** na criação, dentro da faixa da sua raça. Esse é o valor de nascença — pode ser expandido futuramente.

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
| **Draconato** | 10 | 15 | 1d6+9 | Resistente, com afinidade elemental |

> As faixas são **propositalmente próximas** — a diferença entre o menor (Orc: 8) e o maior (Elfo/Tiefling: 16) é de apenas 8 pontos. Nenhuma raça é mágicamente inútil, nenhuma é absoluta.

### Progressão de Sekhem

O Sekhem Máximo pode crescer ao longo da campanha pelos seguintes caminhos:

| Método | Ganho | Requisito |
|--------|-------|-----------|
| **Arco Narrativo** | +1 Sekhem permanente | Completar ~4-5 sessões de história |
| **Ritual de Expansão** | +1d4 Sekhem permanente | Materiais raros + teste CD 14 + 8h de ritual. Falha gasta os materiais |
| **Artefato Elemental** | +2 a +5 Sekhem (apenas para 1 elemento) | Encontrar e vincular o artefato (quest) |
| **Pacto ou Evento** | Variável | Decisão do narrador, sempre com custo narrativo |
| **Proficiência Narrativa** | +1 Sekhem por marco | Dominar uma escola de magia, completar treinamento com mestre |

#### Cap Natural por Raça

Nenhum personagem pode ultrapassar o Sekhem Máximo da sua raça sem meios extraordinários:

| Raça | Cap Natural | Além do Cap |
|------|------------|-------------|
| **Humano** | 25 | Artefatos, pactos divinos |
| **Elfo** | 30 | Conexão com fontes primordiais |
| **Anão** | 20 | Forjas rúnicas ancestrais |
| **Orc** | 20 | Rituais de guerra elementais |
| **Meio-Elfo** | 27 | Herança élfica desperta |
| **Tiefling** | 28 | Sangue infernal liberado |
| **Halfling** | 22 | Tradições ocultas halfling |
| **Hemovita** | 28 | Ritual de Sangue Eterno |
| **Draconato** | 22 | Despertar dracônico ancestral |

> Feitiços lendários (30+ Sekhem) são reservados para personagens no auge de suas campanhas. Requerem meses de jogo para alcançar.

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

## Fadiga Mágica

Canalizar Sekhem em grandes quantidades é **exaustivo**. O corpo e a mente se desgastam conforme o reservatório se esvazia.

| Sekhem Restante | Efeito |
|-----------------|--------|
| **Acima de 50%** | Nenhum — conjuração normal |
| **50% a 21%** | CDs de conjuração ganham **+2** (mente cansada, foco enfraquecido) |
| **20% ou menos** | CDs ganham **+4** e dano mágico sofre **-1** (corpo trêmulo, Sekhem instável) |

> *A fadiga mágica não impede de conjurar — apenas torna cada feitiço mais arriscado e menos eficaz. Forçar o corpo além do limite tem consequências.*

### Exemplo de Fadiga

> Personagem com Sekhem 12 (Linhagem +2):
>
> | Turno | Ação | Sekhem restante | % | Fadiga |
> |-------|------|----------------|---|--------|
> | 1 | Ignis Sagitta (3) | 9 | 75% | Nenhuma |
> | 2 | Ignis Sagitta Velox (4) | 5 | 42% | **+2 nas CDs** |
> | 3 | Ignis Orbis (3) | 2 | 17% | **+4 nas CDs, -1 dano** |
> | 4 | Último feitiço? | 2 | 17% | CD 5 base vira CD 9 — risco real de falha |

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
| **Corrompida (-)** | Dado de dano sobe **1 tier** (1d4→1d6, 1d6→1d8, 1d8→1d10, 1d10→1d12). Mas backlash em duplo 1 **OU** duplo 2: sofre 1d6 dano ao próprio conjurador |

> **Diferença importante:** Corrompida sobe o *tipo* do dado, não adiciona um dado extra. Um Sagitta (1d6) com Corrompida vira 1d8, não 2d6. Isso é poderoso mas não quebra a escala.
>
> A chance de backlash é **~5.5%** (duplo 1 ou duplo 2 em 2d6), comparado a ~2.8% no sistema anterior. Usar magia corrompida é arriscado — especialmente sob Fadiga Mágica.

***

## Escalamento de Magia

Conforme o personagem se aprofunda na magia (Linhagem aumenta), seus feitiços se tornam mais poderosos naturalmente:

### Escalamento por Linhagem

| Linhagem (absoluto) | Bônus |
|---------------------|-------|
| **±1 a ±2** | Efeitos base normais |
| **±3 a ±4** | Dados base **sobem 1 tier** (1d4→1d6, 1d6→1d8, 1d8→1d10) |
| **±5** | Dados base **sobem 2 tiers** (1d4→1d8, 1d6→1d10, 1d8→1d12) |

> Isso se aplica ao dado base do *Núcleo*. Sagitta com Linhagem ±3 faz 1d8 base ao invés de 1d6. Com Linhagem ±5, faz 1d10.

### Proficiência em Feitiços Dominados

Feitiços que o personagem já **dominou** (testou com sucesso pelo menos uma vez) recebem um desconto:

| Benefício | Efeito |
|-----------|--------|
| **Desconto no 1º modificador** | -1 no custo do 1º mod (mín. 1) |

> Exemplo: Ignis Sagitta Magnus normalmente custa 3+1 = 4. Se dominado, custa 3+0 = **3 Sekhem**. Pequena economia, mas significativa em combates longos.

***

## Teste de Conjuração

Para conjurar um feitiço **pela primeira vez**, o personagem rola:

**2d6 + Linhagem (valor absoluto)** vs. **CD do feitiço**

### Regra da Primeira Conjuração

Cada combinação única de Elemento + Núcleo + Modificadores é um **feitiço distinto**. Na primeira vez que o personagem tenta conjurar essa combinação específica, ele precisa testar.

| Regra | Descrição |
|-------|-----------|
| **Feitiço novo** | Teste obrigatório (2d6 + \|Linhagem\| vs CD) |
| **Sucesso** | Feitiço funciona e é adicionado à lista de "Feitiços Dominados" |
| **Falha** | Sekhem é consumido, feitiço não funciona. Pode tentar novamente (gastando Sekhem de novo) |
| **Dominado** | Após 1 sucesso, nunca mais precisa testar essa combinação |
| **Combinações diferentes** | "Ignis Sagitta" ≠ "Ignis Sagitta Velox" → são feitiços diferentes |

> Cada personagem mantém uma **lista de Feitiços Dominados** na ficha. Quando um feitiço é dominado, o jogador anota a combinação. A partir daí, conjurar aquele feitiço é automático — só gasta Sekhem.

### Tabela de CDs

| Custo do Feitiço | CD |
|-------------------|-----|
| 1-3 Sekhem | CD 5 (automático para a maioria) |
| 4-6 Sekhem | CD 8 |
| 7-10 Sekhem | CD 11 |
| 11-15 Sekhem | CD 14 |
| 16+ Sekhem | CD 17 |

> **Lembre-se:** Fadiga Mágica adiciona +2 ou +4 às CDs quando o Sekhem está baixo!

### Resultados do Teste

| Resultado | Efeito |
|-----------|--------|
| **Sucesso** | Feitiço funciona normalmente. Feitiço é **dominado** |
| **Sucesso Crítico** (duplo 6) | Feitiço potencializado: +1d6 dano ou duração dobrada. Dominado |
| **Falha** | Sekhem é gasto, mas o feitiço falha. Pode tentar novamente |
| **Falha Crítica** (duplo 1) | Sekhem gasto + backlash (efeito reverso no conjurador) |

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
> Efeito: Projétil de fogo, 1d6 dano, alcance 18m. Pode usar 3× com Sekhem 10.
> Com Linhagem ±3+: 1d8 dano. Com Corrompida: 1d8 (ou 1d10 com ±3+).

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
> Efeito: Parede de gelo com HP 1d4+2, largura dobrada (~6m), dura 1d4 turnos.

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
> Efeito: Projétil invisível, conjurado como ação bônus, ignora parte da defesa. 1d8 dano.
> Requer Sekhem 12+. Primeiro teste tem CD 14 (difícil!).

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
> Efeito: Tempestade elétrica massiva, 1d4 dano/turno (1d6 com Linhagem ±3+) a todos na área.
> Requer Sekhem 28+ para manter por 6 turnos. Acessível apenas em campanhas avançadas.

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

### Os 5 Limitadores Naturais

1. **Sekhem é finito** — Iniciante (10 Sekhem): 3 magias básicas ou 1 com 2 mods e acabou.

2. **Custo fatorial** — Cada mod extra custa mais que o anterior. O 3º mod custa 3× o base; o 4º custa 4×.

3. **Elemento oposto é caro** — Base passa de 1 pra 3 Sekhem, e todos os custos se empilham sobre isso.

4. **Backlash** — Feitiços caros têm CD alta. Falha crítica em feitiço de 15+ Sekhem pode ser fatal.

5. **Fadiga Mágica** — Gastar mais de metade do Sekhem torna cada feitiço seguinte mais difícil e menos eficaz.

> *Qualquer um pode imaginar "Ignis Nimbus Vastus Magnus Duplex Perpetuus". Custaria 40+ Sekhem. Quase ninguém sobrevive a isso.*

***

## Manutenção de Feitiços Contínuos

Feitiços com duração (Nimbus, Vinculum, Murus, etc.) exigem **concentração mental** para serem mantidos ativos. Manter vários feitiços ao mesmo tempo é possível, mas cada feitiço adicional dificulta toda conjuração:

### Penalidade por Feitiços Ativos

| Feitiços Contínuos Ativos | Penalidade de CD |
|----------------------------|-----------------|
| **1** | Nenhuma — manter 1 feitiço é natural |
| **2** | +2 em todas as CDs de conjuração |
| **3** | +4 em todas as CDs de conjuração |
| **4+** | +2 adicional por feitiço (e boa sorte) |

> A penalidade se aplica a **todos** os testes de conjuração enquanto os feitiços estiverem ativos — tanto para lançar novos feitiços quanto para manter os atuais.

### Dano e Concentração

Se um conjurador **leva dano** enquanto mantém feitiços contínuos, deve rolar para não perdê-los:

**d20 + |Linhagem|** vs **CD (10 + número de feitiços ativos)**

| Feitiços Ativos | CD do Teste | Com Linhagem ±3 |
|-----------------|-------------|-----------------|
| 1 | CD 11 | Precisa de 8+ no d20 |
| 2 | CD 12 | Precisa de 9+ no d20 |
| 3 | CD 13 | Precisa de 10+ no d20 |

- **Sucesso:** Todos os feitiços se mantêm
- **Falha:** O feitiço **mais recente** se dissipa
- **Falha por 5+:** **Todos** os feitiços contínuos se dissipam

### Regras Adicionais

- Feitiços **instantâneos** (Sagitta, Orbis de dano) **não contam** como contínuos
- Feitiços **Dominados** com duração contam normalmente
- O conjurador pode **encerrar voluntariamente** qualquer feitiço contínuo a qualquer momento (sem custo)
- **Dormir** ou ficar **inconsciente** encerra todos os feitiços contínuos

> *A ideia não é proibir múltiplos feitiços — é tornar cada feitiço ativo uma decisão tática. Um mago com 3 feitos contínuos é poderoso, mas qualquer golpe pode derrubar tudo.*

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
