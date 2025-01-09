import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function getMDXContent(filePath: string) {
    const source = await fs.readFile(filePath, 'utf-8');
    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    return { frontmatter: data, mdxSource };
}
