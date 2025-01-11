// import fs from 'fs';
// import path from 'path';

// const DOCS_DIR = path.join(process.cwd(), 'docs');

// export default async function getComponentData(category: string, component: string) {
//   const categoryPath = path.join(DOCS_DIR, category);
//   const componentPath = path.join(categoryPath, `${component}.mdx`);

//   if (!fs.existsSync(componentPath)) {
//     return null;
//   }

//   const fileContent = fs.readFileSync(componentPath, 'utf-8');

//   try {
//     const metadataRegex = /^---\n([\s\S]*?)\n---/;
//     const metadataMatch = fileContent.match(metadataRegex);

//     const frontmatter = metadataMatch
//       ? Object.fromEntries(
//           metadataMatch[1]
//             .split('\n')
//             .filter((line) => line.trim())
//             .map((line) => line.split(':').map((str) => str.trim()))
//         )
//       : {};

//     const content = metadataMatch
//       ? fileContent.replace(metadataRegex, '').trim()
//       : fileContent;

//     return {
//       name: frontmatter.title || component || '',
//       description: frontmatter.description || '',
//       dependencies: frontmatter.dependencies || '',
//       installation: frontmatter.installation || '',
//       usage: frontmatter.usage || '',
//       props: frontmatter.props || [],
//       examples: frontmatter.examples || [],
//       content,
//     };
//   } catch (error) {
//     console.error(`Error processing MDX file at ${componentPath}:`, error);
//     return null;
//   }
// }
