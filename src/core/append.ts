import { read } from './read.js';
import { write } from './write.js';

/**
 * Appends content to a file, creating the file and parent directories if needed.
 * Adds a newline separator when the existing content does not end with one.
 *
 * @param path - Path to the file to append content to.
 * @param data - String content or readable stream to append.
 * @returns A promise that resolves when the content has been appended.
 *
 * @example
 * ```typescript
 * await append('logs/app.log', 'Application started');
 * ```
 */
export const append = async (
  path: string,
  data: ReadableStream<string> | string,
): Promise<void> => {
  let content = '';

  try {
    content = await read(path);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }

  const appendedData =
    typeof data === 'string' ? data : await new Response(data).text();

  const separator = content && !content.endsWith('\n') ? '\n' : '';

  await write(path, `${content}${separator}${appendedData}`);
};
