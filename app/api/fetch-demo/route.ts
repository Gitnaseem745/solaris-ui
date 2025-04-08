import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const componentName = searchParams.get("componentName");

    if (!componentName) {
        return NextResponse.json(
            { error: `Component name is missing.` },
            { status: 400 }
        );
    }

    const filePath = path.join(
        process.cwd(),
        "demos",
        `${componentName}.tsx`
    );

    try {
        const source = await fs.readFile(filePath, "utf8");
        // console.log(`Successfully read ${componentName} at file ${filePath}`);
        return NextResponse.json({ source }, { status: 200 });
    } catch (error: unknown) {
        console.error(`Error reading ${componentName} file ${filePath}:`, error);

        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }

        // Check if the file exists
        try {
            await fs.access(filePath);
            console.log(`File ${filePath} exists but could not be read`);
        } catch {
            console.log(`File ${filePath} does not exist`);
        }

        // List directory contents
        try {
            const dir = path.dirname(filePath);
            const files = await fs.readdir(dir);
            console.log(`Contents of ${dir}:`, files);
        } catch (e) {
            console.log(`Could not read directory ${path.dirname(filePath)}:`, e);
        }

        return NextResponse.json(
            {
                error: `Failed to read ${componentName} file`,
                details: errorMessage,
                path: filePath,
                cwd: process.cwd()
            },
            { status: 500 }
        );
    }
}
