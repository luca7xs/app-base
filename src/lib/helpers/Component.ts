import { dirname, importx } from "@discordx/importer";

import { join } from "path";

const componentsDir = join(
  dirname(import.meta.url),
  "..",
  "..",
  "components",
  "**",
  "*.comp.{ts,js}"
);
await importx(componentsDir);
