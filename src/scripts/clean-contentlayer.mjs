import fs from "node:fs";

try {
  fs.rmSync(".contentlayer", { recursive: true, force: true });
} catch {
  // ignore
}

try {
  fs.rmSync(".next", { recursive: true, force: true });
} catch {
  // ignore
}

