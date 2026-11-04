# @dephub/text [📄]

> Tiny helpers for reading, writing, appending, and streaming text files.

[![NPM version](https://img.shields.io/npm/v/@dephub/text.svg?style=flat)](https://npmjs.org/package/@dephub/text)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- [📄] File appending with newline handling
- [⚡] Line-by-line streaming
- [📁] Directory creation on-the-fly
- [🔧] Error handling for missing files

---

## Installation 📦

- npm: `npm install @dephub/text`
- pnpm: `pnpm add @dephub/text`
- yarn: `yarn add @dephub/text`
- bun: `bun add @dephub/text`

---

## Usage 🎯

### File Operations

```ts
import { append, stream, read, write } from '@dephub/text';

// Append content to a file
await append('logs/app.log', 'Application started');

// Read and stream file content
for await (const line of stream('config.json')) {
  console.log(line);
}

// Write content with directory creation
await write('dist/report.pdf', 'Annual report data');

### API

// Read content with error handling
await read('data.txt', 'utf-8');

// Write content with directory handling
await write('src/app.ts', 'export class App { }');
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
