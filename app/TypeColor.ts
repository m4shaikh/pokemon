export interface TypeColorInfo {
    name: string
    hex: string
}

export const pokemonTypeColors: Record<string, TypeColorInfo>= {
  // Base 18 Types
  normal: { name: "Taupe / Muted Gray-Brown", hex: "#A8A77A" },
  fire: { name: "Vibrant Orange / Red-Orange", hex: "#EE8130" },
  water: { name: "Ocean Blue", hex: "#6390F0" },
  electric: { name: "Bright Yellow / Gold", hex: "#F7D02C" },
  grass: { name: "Leaf Green", hex: "#7AC74C" },
  ice: { name: "Pale Cyan / Ice Blue", hex: "#96D9D6" },
  fighting: { name: "Crimson Red / Brick Red", hex: "#C22E28" },
  poison: { name: "Deep Purple / Plum", hex: "#A33EA1" },
  ground: { name: "Sandy Gold / Ochre", hex: "#E2BF65" },
  flying: { name: "Soft Periwinkle / Light Lavender-Blue", hex: "#A98FF3" },
  psychic: { name: "Magenta / Hot Pink", hex: "#F95587" },
  bug: { name: "Lime / Olive Green", hex: "#A6B91A" },
  rock: { name: "Dull Gold / Sandstone Brown", hex: "#B6A136" },
  ghost: { name: "Dark Purple / Indigo", hex: "#735797" },
  dragon: { name: "Royal Indigo / Deep Violet", hex: "#6F35FC" },
  dark: { name: "Slate Brown / Charcoal", hex: "#705746" },
  steel: { name: "Metallic Silver / Slate Gray", hex: "#B7B7CE" },
  fairy: { name: "Pastel Pink", hex: "#D685AD" },
  stellar: { name: "Prismatic Cyan-Gold", hex: "#4DB39E" }, // Tera Type (Gen 9)
  unknown: { name: "Interrogation Gray", hex: "#559999" }, // ??? Type (Gen 2-4)
  shadow: { name: "Shadow Obsidian", hex: "#4A3B5C" },      // Colosseum / XD
};