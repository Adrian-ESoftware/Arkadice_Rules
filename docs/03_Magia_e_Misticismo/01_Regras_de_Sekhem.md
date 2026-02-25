# Sekhem — Sistema de Magia de Arkadice

## O Que é Sekhem

Sekhem é a energia primordial que permeia o mundo. Todo ser vivo carrega uma quantidade limitada de Sekhem dentro de si — como um reservatório que define o potencial mágico bruto do indivíduo. Magia não é aprendida de livros; é **falada em voz alta**, moldada por palavras de poder que canalizam o Sekhem em efeitos reais.

> *Magia é linguagem. Cada feitiço é uma frase. Cada palavra tem peso.*

***

## Os 6 Elementos Primordiais

Todo Sekhem se manifesta através de um dos 6 elementos primordiais. São as forças fundamentais que compõem a realidade:

| Elemento | Domínio | Oposto |
|----------|---------|--------|
| ![Ignis](../icons/ignis.svg){ width="20" .element-icon } **Ignis** | Fogo, calor, energia, destruição | Aqua |
| ![Aqua](../icons/aqua.svg){ width="20" .element-icon } **Aqua** | Água, frio, fluxo, cura | Ignis |
| ![Terra](../icons/terra.svg){ width="20" .element-icon } **Terra** | Terra, gravidade, solidez, proteção | Aer |
| ![Aer](../icons/aer.svg){ width="20" .element-icon } **Aer** | Ar, velocidade, som, leveza | Terra |

Elementos puro e corrompido:

| Elemento | Domínio | Oposto |
|----------|---------|--------|
| ![Ordo](../icons/ordo.svg){ width="20" .element-icon } **Ordo** | Ordem, luz, estabilidade, criação | Perditio |
| ![Perditio](../icons/perditio.svg){ width="20" .element-icon .element-icon-perditio } **Perditio** | Entropia, trevas, caos, dissolução | Ordo |

> Ordo e Perditio são **elementos raros** — conjuradores que chegam ao nível Arcano os escolhem como especialização, não como ponto de partida.

### Elemento de Domínio

Cada conjurador possui **um único elemento de domínio**, escolhido na criação do personagem. Esse elemento define a identidade mágica do personagem para sempre.

### A Lei do Domínio

> **Feitiços do elemento de domínio** custam o valor normal de Sekhem.
> **Feitiços fora do domínio** (qualquer outro, exceto oposto) custam o **dobro de Sekhem**.
> **Feitiços do elemento oposto ao seu domínio** custam o **quádruplo de Sekhem**.

- **Não existe proibição** — apenas custo. Qualquer um pode tentar qualquer elemento.
- O custo extra se aplica ao custo base da **Forma**. Modificadores somam normalmente em cima.

> *Exemplo: Um mago de Ignis lançando Aqua Sano (Aqua é oposto de Ignis) paga 4× o custo da Forma. Aqua Murus (também oposto) custa 4 Sekhem em vez de 1.*

### Linhagem Elemental

Ao atingir o nível **Conjurador**, o personagem desenvolve afinidade com o seu **Elemento de Linhagem** (ligado à sua origem/raça/história), cujos feitiços passam a custar apenas **+1 Sekhem fixo** em vez do dobro.

No nível **Mestre**, o personagem pode escolher um terceiro elemento (que não seja seu oposto) com o mesmo custo de +1 fixo.

***

## Anatomia de um Feitiço

Todo feitiço é construído por **2 a 5 componentes falados em sequência**:

```
[ELEMENTO] + [FORMA] + [MODIFICADORES opcionais...]
```

O conjurador **fala** as palavras em voz alta. A ordem importa. Mais palavras = mais Sekhem gasto.

Além dos componentes mecânicos, o jogador pode adicionar uma **Palavra de Poder** — uma palavra narrativa que descreve como o feitiço se manifesta visualmente, sem custo adicional e sem alterar a mecânica.

> *Exemplo: "Ignis Sagitta" (mecânico) + "Favilla" (palavra de poder) = uma flecha de cinzas abrasivas.*

***

### 1. Elemento (O Quê)

A primeira palavra define **de que é feito** o feitiço. É uma das 6 palavras primordiais.

| Palavra | Elemento | O que gera | Tag Ofensiva | Tag Utilitária |
|---------|----------|------------|-------------|----------------|
| ![Ignis](../icons/ignis.svg){ width="20" .element-icon } **Ignis** | Fogo | Chamas, calor, explosões | `Queimadura` (dano persistente) | `Calor` (derreter, iluminar, cauterizar) |
| ![Aqua](../icons/aqua.svg){ width="20" .element-icon } **Aqua** | Água | Gelo, vapor, correnteza, cura | `Congelamento` (imobilização leve) | `Fluidez` (curar, lavar, pressão) |
| ![Terra](../icons/terra.svg){ width="20" .element-icon } **Terra** | Terra | Rocha, metal, gravidade, barreiras | `Impacto` (empurrar, Prone) | `Permanência` (criar, endurecer) |
| ![Aer](../icons/aer.svg){ width="20" .element-icon } **Aer** | Ar | Vento, som, relâmpago, velocidade | `Estática` (sem reação) | `Velocidade` (mover, alcançar, som) |
| ![Ordo](../icons/ordo.svg){ width="20" .element-icon } **Ordo** | Ordem | Luz, escudos, purificação, vínculo | `Radiante` (+dano vs corrompidos) | `Clareza` (revelar, purificar, proteger) |
| ![Perditio](../icons/perditio.svg){ width="20" .element-icon .element-icon-perditio } **Perditio** | Entropia | Sombras, decadência, veneno, dispersão | `Dreno` (roubar recurso) | `Sombra` (esconder, corromper, iludir) |

As **tags** se aplicam automaticamente a qualquer combinação. A tag ofensiva dispara ao acertar um alvo (save CD 12 para resistir). A tag utilitária define usos criativos e bônus passivos por Forma.

Para as **Palavras de Poder** de cada elemento (manifestações narrativas sem custo), consulte `02_Escolhas_e_Combinacoes.md`.

***

### 2. Forma (Como o Feitiço Age)

A segunda palavra define **como** o elemento se manifesta. A Forma determina a mecânica base e o comportamento espacial do feitiço. O efeito secundário específico vem automaticamente das **tags do elemento**.

O **dado de dano** escala conforme a proficiência do conjurador naquela Forma — mas **somente para o elemento de domínio**. Fora do domínio, o dado fica sempre no valor base.

| Palavra | Forma | Efeito Base | Custo (dom.) | Custo (fora) | Notas |
|---------|-------|-------------|-------------|-------------|-------|
| **Sagitta** | Projétil direto | **1d6** dano, alcance 18m | 1 | 2 | 1 alvo |
| **Tactus** | Toque / contato | **1d8** dano, ignora 1 Absorção | 1 | 2 | Requer adjacência |
| **Telum** | Arma conjurada | +**1d4** dano elemental/ataque | 1 | 2 | Dura **1d4+2** turnos. Contínuo |
| **Orbis** | Esfera / área | **1d4** dano a todos na área, raio 3m | 1 | 2 | Aliados incluídos |
| **Vinculum** | Corrente / vínculo | CD 12 para escapar, imobiliza | 1 | 2 | Dura **1d4** turnos |
| **Nimbus** | Nuvem / área contínua | **1d4** dano/turno, raio 6m | 1 | 2 | Dura **1d4+1** turnos. Contínuo |
| **Murus** | Barreira / muro | HP = **1d6+2**, largura 3m, altura 2m | 1 | 2 | Dura **1d4** turnos |
| **Scutum** | Escudo pessoal | +**1d4** Absorção ao conjurador | 1 | 2 | Dura **1d4** turnos. Contínuo |
| **Augeo** | Amplificar / buff | +2 a 1 atributo (varia por elemento) | 2 | 3 | Dura **1d4+2** turnos. Contínuo |
| **Sano** | Curar / restaurar | Cura 1d6+2 PV ou remove condição | 2 | 3 | Efeito instantâneo |
| **Lumen** | Revelar / sentir | Detecta algo em raio 9m | 1 | 2 | Concentração (1 turno de foco) |
| **Morpho** | Transformar | Muda 1 propriedade física | 2 | 3 | Dura **1d4** turnos |
| **Anima** | Animar | Dá movimento e 1 comando a objeto | 2 | 3 | Dura **1d4+1** turnos. Contínuo |

> **Formas Pessoais** (Scutum, Augeo, Sano, Lumen, Morpho, Anima): custo fora do domínio é sempre **+1 Sekhem fixo**, não dobra.

> Para efeitos detalhados de **cada combinação Elemento × Forma** e os bônus específicos por elemento, consulte `02_Escolhas_e_Combinacoes.md`.

### Escalonamento do Dado por Proficiência

O dado cresce conforme o conjurador avança de nível, mas **apenas para o elemento de domínio**:

| Nível | Dado (domínio) | Dado (fora do domínio) |
|-------|---------------|----------------------|
| Iniciante | Base da Forma | Sempre base |
| Aprendiz | +1 grau (d4→d6 / d6→d8) | Sempre base |
| Conjurador | +1 grau (d6→d8 / d8→d10) | Sempre base |
| Arcano | +1 grau (d8→d10 / d10→d12) | Sempre base |
| Mestre | Dado máximo da Forma | Sempre base |

***

### 3. Modificadores (A Escala)

Modificadores alteram **escala, velocidade, comportamento ou alcance** do feitiço. São divididos em dois tipos.

> **Custo acumulativo:** 1º modificador = +1 Sekhem. 2º modificador = +2 Sekhem. 3º modificador = +3 Sekhem.
>
> O custo de modificadores **não dobra** pelo efeito do Domínio. O dobro foi aplicado no custo base da Forma; modificadores somam normalmente em cima.
>
> **Não é permitido empilhar modificadores do mesmo tipo.**

#### Modificadores de Execução (+1 Sekhem cada)

Alteram **como** o feitiço é lançado ou se comporta no espaço.

| Palavra | Efeito |
|---------|--------|
| **Velox** | Lança como **ação bônus** em vez de ação principal |
| **Lentus** | Duração +1d4 turnos (Murus pode tornar-se permanente até ser destruído) |
| **Serpens** | Projéteis ignoram cobertura parcial e perseguem o alvo; áreas reposicionam 1× como reação; Vínculos +3m de alcance |

#### Modificadores de Penetração (+2 Sekhem cada)

Alteram **o que** o feitiço supera ou atinge.

| Palavra | Efeito |
|---------|--------|
| **Acutus** | Ignora **2 pontos de Absorção** (Tactus ignora toda a Absorção) |
| **Duplex** | Afeta **2 alvos** simultâneos (não se aplica a formas de área) |
| **Occultus** | Silencioso e sem manifestação visual — ninguém percebe a conjuração |

#### Perpetuus — Modificador Especial (+3 Sekhem)

Feitiços contínuos duram **até serem cancelados**, mas drenam **2 Sekhem por turno** de manutenção. Para Murus, a barreira torna-se estrutura permanente sem drenar Sekhem.

> Perpetuus só está disponível a partir do nível **Mestre**.

#### Tabela Rápida de Modificadores

| Palavra | Tipo | Custo | Efeito |
|---------|------|-------|--------|
| **Velox** | Execução | +1 | Ação bônus |
| **Lentus** | Execução | +1 | +1d4 turnos de duração |
| **Serpens** | Execução | +1 | Persegue / contorna cobertura |
| **Acutus** | Penetração | +2 | Ignora 2 Absorção |
| **Duplex** | Penetração | +2 | 2 alvos simultâneos |
| **Occultus** | Penetração | +2 | Sem som nem visual |
| **Perpetuus** | Especial | +3 | Permanente (drena 2 Sek/turno) |

> **Não há limite de modificadores por nível Mestre.** Nos outros níveis, o número máximo de modificadores por feitiço é definido pela progressão (ver seção Progressão Mágica).

***

## Reservatório de Sekhem

Todo personagem tem um **Sekhem Máximo** — definido pelo nível e expansível por caminhos narrativos.

### Sekhem por Nível de Progressão

| Nível | Sekhem Máximo | Modificadores por Feitiço |
|-------|---------------|--------------------------|
| **Iniciante** | 6 | 1 |
| **Aprendiz** | 9 | 2 |
| **Conjurador** | 12 | 3 |
| **Arcano** | 16 | 4 |
| **Mestre** | 20 | Sem limite |

> O Sekhem de raça (ver abaixo) define o **teto máximo possível** dentro de cada faixa de nível. O valor inicial na criação é rolado.

### Sekhem Inicial por Raça

O Sekhem Máximo de cada personagem é **rolado aleatoriamente** na criação, dentro da faixa da sua raça. Esse é o valor de nascença — pode ser expandido futuramente.

| Raça | Sekhem Mín. | Sekhem Máx. | Dado | Tendência |
|------|-------------|-------------|------|-----------|
| **Humano** | 10 | 15 | 1d6+9 | Equilibrado, versátil |
| **Elfo** | 11 | 16 | 1d6+10 | Afinidade mágica natural |
| **Anão** | 8 | 13 | 1d6+7 | Menos mágico, mais resistente |
| **Orc** | 7 | 12 | 1d6+6 | Força bruta, pouco Sekhem |
| **Meio-Elfo** | 10 | 15 | 1d6+9 | Herança élfica parcial |
| **Tiefling** | 9 | 16 | 1d8+8 | Instável, faixa mais ampla |
| **Goblin** | 8 | 13 | 1d6+7 | Modesto, compensa com esperteza |
| **Hemovita** | 11 | 16 | 1d6+10 | Sekhem vampírico, alimentado por vitae |
| **Accipitres** | 9 | 14 | 1d6+8 | Parte do Sekhem vai para o vôo |
| **Vroots** | 9 | 14 | 1d6+8 | Sekhem solar, estável |
| **Cinéreo** | 11 | 16 | 1d6+10 | Alta afinidade mágica destrutiva |
| **Velthari** | 9 | 14 | 1d6+8 | Predador, Sekhem focado em instinto |

> As faixas são **propositalmente próximas** — a diferença entre o menor (Orc: 8) e o maior (Elfo/Tiefling: 16) é de apenas 8 pontos. Nenhuma raça é magicamente inútil, nenhuma é absoluta.

### Cap Natural por Raça

Nenhum personagem pode ultrapassar o Sekhem Máximo da sua raça sem meios extraordinários:

| Raça | Cap Natural | Além do Cap |
|------|------------|-------------|
| **Humano** | 25 | Artefatos, pactos divinos |
| **Elfo** | 30 | Conexão com fontes primordiais |
| **Anão** | 20 | Forjas rúnicas ancestrais |
| **Orc** | 20 | Rituais de guerra elementais |
| **Meio-Elfo** | 27 | Herança élfica desperta |
| **Tiefling** | 28 | Sangue infernal liberado |
| **Goblin** | 22 | Engenhocas arcanas, pactos ínfimos |
| **Hemovita** | 28 | Ritual de Sangue Eterno |
| **Accipitres** | 24 | Rituais do Lex Caeli, ventos primordiais |
| **Vroots** | 24 | Enraizar em fonte de Sekhem milenar |
| **Cinéreo** | 28 | Mergulho no magma primordial |
| **Velthari** | 22 | Pactos com bestas ancestrais |

### Progressão de Sekhem

O Sekhem Máximo pode crescer ao longo da campanha pelos seguintes caminhos:

| Método | Ganho | Requisito |
|--------|-------|-----------|
| **Arco Narrativo** | +1 Sekhem permanente | Completar ~4-5 sessões de história |
| **Ritual de Expansão** | +1d4 Sekhem permanente | Materiais raros + teste CD 14 + 8h de ritual. Falha gasta os materiais |
| **Artefato Elemental** | +2 a +5 Sekhem (apenas para 1 elemento) | Encontrar e vincular o artefato (quest) |
| **Pacto ou Evento** | Variável | Decisão do narrador, sempre com custo narrativo |
| **Proficiência Narrativa** | +1 Sekhem por marco | Dominar uma escola de magia, completar treinamento com mestre |

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

> *A fadiga mágica não impede de conjurar — apenas torna cada feitiço mais arriscado e menos eficaz.*

***

## Custo de Conjuração

**Custo total = Elemento + Forma + Σ(Custo do modificador pela posição)**

| Componente | Custo (domínio) | Custo (fora do domínio) |
|------------|----------------|------------------------|
| Elemento | — | — (o custo do elemento está na Forma) |
| Forma (custo simples: Sagitta, Orbis, etc.) | 1 | 2 |
| Forma (custo duplo: Augeo, Sano, Morpho, Anima) | 2 | 3 |
| Forma Pessoal (fora do domínio) | — | +1 fixo |
| 1º modificador (base 1) | +1 | +1 |
| 2º modificador (base 1) | +2 | +2 |
| 3º modificador (base 1) | +3 | +3 |
| Modificadores de penetração (base 2) | +2/+4/+6... | +2/+4/+6... |

### Exemplos de Custo

| Feitiço | Cálculo | Total |
|---------|---------|-------|
| Ignis Sagitta (domínio) | 1 | **1 Sekhem** |
| Ignis Sagitta (fora do domínio) | 2 | **2 Sekhem** |
| Ignis Sagitta Velox | 1+1 | **2 Sekhem** |
| Aqua Murus Magnus | 1+1 | **2 Sekhem** (Aqua domínio, Magnus 1º mod) |
| Ignis Sagitta Duplex Serpens | 1+2+2 | **5 Sekhem** (Duplex 1º=+2, Serpens 2º=+2) |
| Perditio Sagitta Acutus Occultus Velox (domínio) | 1+2+4+3 | **10 Sekhem** |

> **Nota:** O elemento em si não tem custo separado — ele determina se a Forma custa 1 ou 2 (domínio/fora). O custo "do elemento" está embutido no custo da Forma.

***

## Progressão Mágica

O crescimento mágico se dá em três eixos simultâneos: potência do dado, capacidade de Sekhem e acesso a Formas e elementos.

### Eixo 1 — Potência (Dado por Forma)

O dado escala conforme a proficiência do conjurador em cada Forma individualmente. Um especialista em Sagitta e um especialista em Anima têm progressões completamente diferentes. O dado maior **só funciona no elemento de domínio**.

### Eixo 2 — Capacidade (Sekhem e Complexidade)

Ver tabela **Sekhem por Nível de Progressão** acima.

> A sensação de crescimento mais marcante vem da **frase do feitiço ficando mais longa e mais poderosa:**
>
> - *Nível baixo:* "Ignis Sagitta" — 1d6, 1 Sekhem
> - *Nível médio:* "Ignis Sagitta Duplex" — 1d8 × 2 alvos, 3 Sekhem
> - *Nível alto:* "Ignis Sagitta Duplex Velox Occultus" — 1d10 × 2, invisível, ação bônus, 6 Sekhem

### Eixo 3 — Profundidade (Acesso a Formas e Elementos)

| Nível | Elementos Disponíveis | Formas Desbloqueadas |
|-------|----------------------|----------------------|
| **Iniciante** | Domínio (custo normal) + outros (custo dobrado) | Sagitta, Orbis, Scutum, Sano |
| **Aprendiz** | Domínio (custo normal) + outros (custo dobrado) | + Vinculum, Nimbus, Lumen |
| **Conjurador** | + Afinidade com Elemento da Linhagem (+1 fixo) | + Morpho, Anima, Augeo |
| **Arcano** | + Afinidade do Domínio (Custo 0) | + Tactus, Telum |
| **Mestre** | + Afinidade com Elemento a escolha (+1 fixo) | + Perpetuus desbloqueado |

> Elemento a Escolha no Mestre **não pode** ser seu elemento oposto.

***

## Teste de Conjuração

Para conjurar um feitiço **pela primeira vez**, o personagem rola:

**2d6 + nível de Proficiência na Forma** vs. **CD do feitiço**

### Regra da Primeira Conjuração

Cada combinação única de Elemento + Forma + Modificadores é um **feitiço distinto**. Na primeira vez que o personagem tenta conjurar essa combinação específica, ele precisa testar.

| Regra | Descrição |
|-------|-----------|
| **Feitiço novo** | Teste obrigatório |
| **Sucesso** | Feitiço funciona e é adicionado à lista de "Feitiços Dominados" |
| **Falha** | Sekhem é consumido, feitiço não funciona. Pode tentar novamente |
| **Dominado** | Após 1 sucesso, nunca mais precisa testar essa combinação |
| **Combinações diferentes** | "Ignis Sagitta" ≠ "Ignis Sagitta Velox" → são feitiços diferentes |

> Cada personagem mantém uma **lista de Feitiços Dominados** na ficha.

### Tabela de CDs

| Custo do Feitiço | CD |
|------------------|-----|
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

## Manutenção de Feitiços Contínuos

Feitiços com duração (Nimbus, Vinculum, Murus, etc.) exigem **concentração mental** para serem mantidos ativos.

### Penalidade por Feitiços Ativos

| Feitiços Contínuos Ativos | Penalidade de CD |
|----------------------------|-----------------| 
| **1** | Nenhuma |
| **2** | +2 em todas as CDs de conjuração |
| **3** | +4 em todas as CDs de conjuração |
| **4+** | +2 adicional por feitiço |

### Dano e Concentração

Se um conjurador **leva dano** enquanto mantém feitiços contínuos, deve rolar:

**d20 + Proficiência na Forma** vs. **CD (10 + número de feitiços ativos)**

- **Sucesso:** Todos os feitiços se mantêm
- **Falha:** O feitiço **mais recente** se dissipa
- **Falha por 5+:** **Todos** os feitiços contínuos se dissipam

### Regras Adicionais

- Feitiços **instantâneos** (Sagitta, Orbis de dano) **não contam** como contínuos
- O conjurador pode **encerrar voluntariamente** qualquer feitiço contínuo a qualquer momento (sem custo)
- **Dormir** ou ficar **inconsciente** encerra todos os feitiços contínuos

***

## Combinação de Elementos — Misceo (Avançado)

Personagens no nível **Arcano ou superior** podem combinar elementos no mesmo feitiço usando a palavra **Misceo** entre os dois elementos.

### Estrutura do Feitiço Misceo

```
[ELEMENTO] + Misceo + [ELEMENTO] + [FORMA]
```

### Regras de Misceo

| Regra | Descrição |
|-------|-----------|
| **Custo extra** | **+8 Sekhem** adicional ao custo da Forma |
| **Sem modificadores** | Feitiços Misceo **não permitem modificadores** |
| **Poder Devastador** | O efeito do núcleo (dano, cura, HP) é **TRIPLICADO** (ex: Sagitta: 1d6 → 3d6) |
| **Criatividade** | O efeito exato depende da combinação + Forma + descrição do jogador. O Narrador decide |

> A proibição de modificadores em Misceo é absoluta: a fusão consome toda a concentração do mago. Em troca, o poder bruto é equivalente a uma magia de alto nível.

### Exemplos de Combinação

| Combinação | Frase | Resultado Narrativo |
|------------|---------|--------------------|
| Ignis + Aer | *"Ignis Misceo Aer Sagitta"* | Raio flamejante — relâmpago envolto em fogo (3d6) |
| Aqua + Terra | *"Aqua Misceo Terra Vinculum"* | Lama que prende — pântano instantâneo |
| Ordo + Ignis | *"Ordo Misceo Ignis Orbis"* | Explosão de luz purificadora ardente |
| Perditio + Aqua | *"Perditio Misceo Aqua Nimbus"* | Nuvem de ácido corrosivo persistente |
| Aer + Terra | *"Aer Misceo Terra Murus"* | Parede de areia comprimida (muito densa) |
| Ignis + Aqua | *"Ignis Misceo Aqua Scutum"* | Escudo de vapor escaldante |
| Ordo + Perditio | *"Ordo Misceo Perditio Tactus"* | Toque do Paradoxo — extremamente instável |

> ⚠️ Combinar **Ordo + Perditio** (O Paradoxo) é proibido e letal. O custo é **+24 Sekhem** (+8 × 3) e falha crítica resulta em obliteração narrativa ou morte.

### O Efeito da Singularidade (Sucesso no Paradoxo)

> **Nota para os Jogadores:** O resultado de um sucesso no Paradoxo é imprevisível, lendário e determinado inteiramente pelo Narrador em segredo. Prepare-se para algo que mudará o mundo — e o seu personagem — para sempre. O sucesso nunca vem sem um custo para a realidade.

***

## Por Que o Sistema se Autolimita

O sistema parece aberto ("adicione quantos modificadores quiser"), mas o **custo acumulativo** o limita naturalmente:

| Mods empilhados | Custo só dos mods (base 1 cada) | + Forma (1) | Total |
|-----------------|--------------------------------|-------------|-------|
| 0 | 0 | 1 | **1** |
| 1 | 1 | 1 | **2** |
| 2 | 1+2 = 3 | 1 | **4** |
| 3 | 1+2+3 = 6 | 1 | **7** |
| 4 | 1+2+3+4 = 10 | 1 | **11** |

### Os 5 Limitadores Naturais

1. **Sekhem é finito** — Iniciante (6 Sekhem): apenas 1-2 feitiços por combate.
2. **Custo acumulativo** — Cada mod extra custa mais que o anterior.
3. **Elemento fora do domínio é caro** — Custo da Forma dobra (ou quadruplica para o oposto).
4. **Backlash** — Feitiços caros têm CD alta. Falha crítica pode ser fatal.
5. **Fadiga Mágica** — Gastar mais de metade do Sekhem torna cada feitiço seguinte mais difícil e menos eficaz.

***

## Lei da Integridade Biológica (Anti-Instant Kill)

> **"Todo ser vivo possui uma Aura (Sekhem natural) que instintivamente rejeita magia invasiva direta."**

1. **Sem Instant-Kill:** Não é possível criar ou manipular elementos *dentro* de um corpo saudável para matar instantaneamente. A aura da vítima "empurra" a magia para fora.
2. **Dano, não Morte:** Tentar "ferver o sangue" de alguém é mecanicamente um **Ignis Tactus (1d8 dano)** com save de Constituição. Se falhar, fica *Aturdido* por 1 turno — nunca morte instantânea.
3. **Sangue (Vitae):** A palavra de poder **Vitae** controla sangue **exposto** (feridas, poças) ou cura o próprio corpo. Controlar o sangue *dentro* de outro ser exige vencer a Resistência dele e causa dano ou condições — nunca morte súbita.

> **Regra de Ouro:** Se a criatividade do jogador permitiria matar o vilão final com 1 feitiço de nível 1, a magia falha ou é resistida. O HP representa a capacidade heroica de resistir a essas violações.