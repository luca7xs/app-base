import { dirname, importx } from "@discordx/importer";

import { join } from "path";

const commandsDir = join(
  dirname(import.meta.url),
  "..",
  "..",
  "commands",
  "**",
  "*.command.{ts,js}"
);
await importx(commandsDir);
