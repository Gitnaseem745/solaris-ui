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
        "components",
        "ui",
        `${componentName}.tsx`
    );

    try {
        const source = await fs.readFile(filePath, "utf8");
        return NextResponse.json({ source }, { status: 200 });
    } catch (error: unknown) {
        console.error(`Error reading ${componentName} file ${filePath}:`, error);

        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
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
