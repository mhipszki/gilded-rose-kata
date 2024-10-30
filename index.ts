import { GildedRose } from "./gilded-rose";

const gildedRose = new GildedRose([]);

gildedRose.updateQuality();

console.log(JSON.stringify(gildedRose.items, null, "  "));
