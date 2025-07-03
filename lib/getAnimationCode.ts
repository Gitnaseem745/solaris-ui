import { promises as fs } from 'fs';
import path from 'path';

// Function to get source code for animations
export async function getSourceCode(id: string, type: 'demo' | 'preset') {
  try {
    const filePath = path.join(
      process.cwd(),
      'animations',
      type === 'demo' ? 'demos' : 'presets',
      `${id}.${type === 'demo' ? 'tsx' : 'ts'}`
    );
    const source = await fs.readFile(filePath, 'utf8');
    return source;
  } catch (error) {
    console.error(`Error reading ${type} file for ${id}:`, error);
    return null;
  }
}
