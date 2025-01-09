const fs = require('fs-extra');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '..', 'components', 'ui');
const DOCS_DIR = path.resolve(__dirname, '..', 'docs');

const extractProps = (content) => {
    const propsRegex = /interface\s+(\w+Props)\s+{([\s\S]*?)}/g;
    const match = propsRegex.exec(content);

    if (!match) return [];

    const propsBlock = match[2];
    const props = propsBlock
        .trim()
        .split(';')
        .filter(Boolean)
        .map((line) => {
            const [name, type] = line.split(':').map((part) => part.trim());
            return {
                name: name || '',
                type: type || '',
                default: '-',
                description: '-',
            };
        });

    return props;
};

const generateMDXTemplate = (name, description, dependencies, installation, usage, props, examples) => `---
title: ${name}
---

# ${name}

${description}

## Installation
To install dependencies for this component, run:
\`\`\`bash
${installation}
\`\`\`

## Usage
\`\`\`tsx
${usage}
\`\`\`

## Props
| Name      | Type     | Default | Description                 |
|-----------|----------|---------|-----------------------------|
${props.map((prop) => `| ${prop.name} | ${prop.type} | ${prop.default} | ${prop.description} |`).join('\n')}

## Examples
${examples.map(
    (example) => `
### ${example.name}
\`\`\`tsx
${example.code}
\`\`\`
`
).join('\n')}
`;

const generateDocs = async () => {
    const categories = await fs.readdir(COMPONENTS_DIR).catch(() => []);

    for (const category of categories) {
        const categoryPath = path.join(COMPONENTS_DIR, category);
        if (!(await fs.lstat(categoryPath).catch(() => ({}))).isDirectory()) continue;

        const components = await fs.readdir(categoryPath).catch(() => []);

        for (const componentFile of components) {
            const componentPath = path.join(categoryPath, componentFile);
            if (!componentFile.endsWith('.tsx')) continue;

            const componentName = path.parse(componentFile).name;

            const content = await fs.readFile(componentPath, 'utf-8').catch(() => '');
            const descriptionFile = path.join(categoryPath, 'description.txt');
            const description = (await fs.pathExists(descriptionFile))
                ? await fs.readFile(descriptionFile, 'utf-8')
                : 'No description provided.';

            const dependencies = [...content.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((match) => match[1]);
            const uniqueDependencies = [...new Set(dependencies)];
            const installation = uniqueDependencies.length ? `npm install ${uniqueDependencies.join(' ')}` : 'No dependencies required.';
            const usage = `<${componentName} />`;
            const props = extractProps(content);

            const mdxContent = generateMDXTemplate(
                componentName,
                description,
                uniqueDependencies.join(', '),
                installation,
                usage,
                props,
                [{ name: `Basic ${componentName}`, code: usage }]
            );

            const docFilePath = path.join(DOCS_DIR, category, `${componentName}.mdx`);
            await fs.ensureDir(path.join(DOCS_DIR, category));
            await fs.writeFile(docFilePath, mdxContent).catch(console.error);
        }
    }
};


generateDocs().catch((err) => {
    console.error(err);
    process.exit(1);
});
