export const spellCosts = {
    "elements": {
        "base_cost": 1,
        "description": "Qualquer manifestação de elemento (Palavra de Poder) custa 1 Sekhem."
    },
    "nucleos": [
        { "name": "Sagitta", "cost": 1, "category": "Combate" },
        { "name": "Tactus", "cost": 1, "category": "Combate" },
        { "name": "Orbis", "cost": 1, "category": "Combate" },
        { "name": "Telum", "cost": 1, "category": "Combate" },
        { "name": "Vinculum", "cost": 1, "category": "Controle" },
        { "name": "Nimbus", "cost": 1, "category": "Controle" },
        { "name": "Murus", "cost": 1, "category": "Defensivo" },
        { "name": "Scutum", "cost": 1, "category": "Defensivo" },
        { "name": "Augeo", "cost": 2, "category": "Suporte" },
        { "name": "Sano", "cost": 2, "category": "Suporte" },
        { "name": "Lumen", "cost": 1, "category": "Suporte" },
        { "name": "Morpho", "cost": 2, "category": "Suporte" },
        { "name": "Anima", "cost": 2, "category": "Suporte" }
    ],
    "modificadores": [
        { "name": "Magnus", "cost": 1 },
        { "name": "Parvus", "cost": 1 },
        { "name": "Velox", "cost": 1 },
        { "name": "Lentus", "cost": 1 },
        { "name": "Serpens", "cost": 1 },
        { "name": "Duplex", "cost": 2 },
        { "name": "Occultus", "cost": 2 },
        { "name": "Acutus", "cost": 2 },
        { "name": "Vastus", "cost": 2 },
        { "name": "Perpetuus", "cost": 3 }
    ],
    "calculation_rules": {
        "modifier_scaling": "Fatorial (1º mod = x1, 2º = x2, 3º = x3, ...)",
        "example": "Elemento (1) + Núcleo (1) + 1º Mod (1) = 3"
    }
};
