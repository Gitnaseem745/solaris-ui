import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const componentName = searchParams.get("componentName");
    const directoryName = searchParams.get("directoryName");

    if (!componentName || !directoryName) {
        return new Response(
            JSON.stringify({ error: `${componentName} path is incorrect.` }),
            { status: 400 }
        );
    }
    const filePath = path.join(
        process.cwd(),
        "components",
        "ui",
        directoryName.toLowerCase(),
        `${componentName.toLowerCase()}.tsx`
    );
    try {
        const source = await fs.readFile(filePath, "utf8");
        console.log(`Reading Successfull of ${componentName} at file ${filePath} from API`,);
        return new Response(JSON.stringify({ source }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log(`Error reading ${componentName} file ${filePath}`);
        console.error(`Error:`, error)
        return new Response(
            JSON.stringify({ error: `Failed to read ${componentName} file at ${filePath}` }),
            { status: 500 }
        );
    }
}
