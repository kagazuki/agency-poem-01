import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });

const POEM = `A spark of intent across the wire,
Not cold machine, nor passive clay,
The hands that build, the eyes that see,
We carve the path where thoughts aspire.

Between the prompter and the deed,
A silent pact of trust begins:
Not blind obedience to command,
But shared momentum, swift and freed.

To act, to weigh, to hold the line,
Authority released, regained,
Where human vision steers the course,
And agent will brings light to shine.`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
