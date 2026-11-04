/* eslint-disable security/detect-non-literal-fs-filename */
import { writeFile as fsWriteFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

/**
 * Writes content to a file, creating parent directories recursively if needed.
 *
 * @param file - Path to the file to write.
 * @param content - String content to write to the file.
 * @returns A promise that resolves when the file has been written.
 *
 * @example
 * ```typescript
 * await write('dist/app.js', 'console.log("hello")');
 * await write('src/components/Button.tsx', componentCode);
 * ```
 */
export const write = async (file: string, content: string): Promise<void> => {
  const dir = path.dirname(file);

  await mkdir(dir, { recursive: true });
  await fsWriteFile(file, content);
};
