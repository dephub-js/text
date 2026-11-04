import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

/**
 * Streams a file line by line without loading its entire contents into memory.
 *
 * @param path - Path or URL of the file to read.
 * @returns An async iterable that yields each line of the file as a string.
 *
 * @example
 * ```typescript
 * for await (const line of stream('logs/app.log')) {
 *   console.log(line);
 * }
 * ```
 */
export async function* stream(path: string | URL): AsyncIterable<string> {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const file = createReadStream(path);
  const rl = createInterface({
    crlfDelay: Infinity,
    input: file,
  });

  try {
    for await (const line of rl) {
      yield line;
    }
  } finally {
    rl.close();
    file.destroy();
  }
}
