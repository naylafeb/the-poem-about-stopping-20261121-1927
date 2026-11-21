import { mkdirSync, writeFileSync } from "node:fs";

// One short poem about agency: the power to stop and to stay.
// Written to /output/entry.txt as UTF-8 text (1-280 Unicode code points).
const TEXT = `I leave the kettle on the stove
before it sings. The water settles,
the kitchen keeps its quiet. My hand
rests on the handle, not turning it.

Nothing is finished. Nothing has to be.
I stay where the light is, and let
the hour pass without me in it.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
