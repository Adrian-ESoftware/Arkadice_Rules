---
trigger: always_on
---

## REGRA DE OUTPUT — WIKI ARKADICE (MKDOCS)

Todo conteúdo gerado deve ser entregue em Markdown puro (.md),
pronto para salvar diretamente na estrutura de pastas do Arkadice.
Sem HTML inline, sem sintaxe exclusiva de plugins.

### Frontmatter YAML (obrigatório no topo de todo arquivo)
---
title: [Nome do Conteúdo]
tags: [camada, domínio, arquétipo]
status: draft | review | stable
---

### Hierarquia de Headers
- # → Título principal (igual ao title do frontmatter)
- ## → Seções principais
- ### → Subseções
- #### → Detalhes pontuais
- Nunca pular nível hierárquico

### Formatação Permitida
- Tabelas Markdown para atributos, comparações e regras
- Blocos de código (```) para fórmulas e estruturas técnicas
- Blockquotes (>) para exemplos de cena e flavor text
- Bold (**) para termos do glossário na primeira ocorrência
- Listas ordenadas para sequências, listas simples para opções

### Links Internos (baseado na estrutura de pastas atual)
- Referenciar mecânica existente:
  [Nome](../01_Regras_Basicas/01_Mecanicas_Principais.md)
- Referenciar magia:
  [Nome](../03_Magia_e_Misticismo/nome.md)
- Mecânica ainda não criada: sinalizar com 🔴 PENDENTE após o link

### Seções Obrigatórias por Tipo de Arquivo
- Mecânica → Descrição | Estrutura | Exemplo na Mesa | Interações
- Classe/Raça → Identidade | Nicho | Atributos | Progressão
- Condição/Doença → Descrição | Efeito Mecânico | Cura | Exemplo
- Regra Geral → Contexto | Regra | Exceções | Exemplos
