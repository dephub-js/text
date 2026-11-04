/* eslint-disable security/detect-non-literal-fs-filename */

import { readFile as fsReadFile } from 'node:fs/promises';

/**
 * Reads a file and returns its content as a string.
 *
 * @param path - Path or URL of the file to read.
 * @param encoding - File encoding (default: 'utf-8').
 * @returns A promise that resolves with the file content as a string.
 *
 * @example
 * ```typescript
 * const content = await read('config.json');
 * const data = JSON.parse(content);
 * ```
 */
export async function read(
  path: string | URL,
  encoding: BufferEncoding = 'utf-8',
): Promise<string> {
  return await fsReadFile(path, encoding);
}
