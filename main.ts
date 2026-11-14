// food-picture-01 entry — "The Double Smash Cheese Pull"
// Dish: wood-fired double smash burger, top brioche bun lifted open, molten
// cheddar dripping in glossy strands over two juicy patties, toasted golden
// brioche, lettuce and tomato, steam rising, dark walnut board, golden fries
// softly blurred at the edges. Warm golden side light, 1024x1024.
// entry.png: 1024x1024 RGB PNG, 1024055 bytes (cap 1048576),
// sha256 d70249a4ed182677390e76da0c39193e346fa7b192c911d6de83d9357a07f23b
//
// Copies ./entry.png to $MAKEFUN_OUTPUT_DIR (default /output) as entry.png.
// Node 22 stdlib only. No network, no other output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const here =
  typeof __dirname !== "undefined"
    ? __dirname
    : dirname(new URL(import.meta.url).pathname);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
