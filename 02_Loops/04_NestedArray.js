let heroes = [
  ["thor", "spiderMan", "ironMan"],
  ["flash", "superMan", "hulk"],
];

// Nested loop => har inner element ko print karega


for (let i = 0; i < heroes.length; i++) {
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]); // har hero ka naam
  }
}
