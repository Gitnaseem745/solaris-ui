import { promises as fs } from "fs";
import path from "path";

/**
 * Read component source code at build time
 * @param componentName - Name of the component
 * @returns Promise<string> - Source code content
 */
export async function getComponentSourceCode(componentName: string): Promise<string | null> {
    try {
        const filePath = path.join(process.cwd(), "components", "ui", `${componentName}.tsx`);
        const source = await fs.readFile(filePath, "utf8");
        return source;
    } catch (error) {
        console.warn(`Failed to read component source for ${componentName}:`, error);
        return null;
    }
}

/**
 * Read demo source code at build time
 * @param componentName - Name of the component demo
 * @returns Promise<string> - Demo source code content
 */
export async function getDemoSourceCode(componentName: string): Promise<string | null> {
    try {
        const filePath = path.join(process.cwd(), "demos", `${componentName}.tsx`);
        const source = await fs.readFile(filePath, "utf8");
        return source;
    } catch (error) {
        console.warn(`Failed to read demo source for ${componentName}:`, error);
        return null;
    }
}

/**
 * Get both component and demo source code
 * @param componentName - Name of the component
 * @returns Promise with both source codes
 */
export async function getAllSourceCode(componentName: string) {
    const [componentSource, demoSource] = await Promise.all([
        getComponentSourceCode(componentName),
        getDemoSourceCode(componentName)
    ]);
    
    return {
        componentSource,
        demoSource
    };
}
