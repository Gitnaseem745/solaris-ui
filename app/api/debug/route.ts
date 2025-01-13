import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from 'next/server';

export async function GET() {
    const baseDir = process.cwd();
    const componentsDir = path.join(baseDir, 'components', 'ui');

    try {
        const directories = await fs.readdir(componentsDir);
        const directoryContents = await Promise.all(
            directories.map(async (dir) => {
                const fullPath = path.join(componentsDir, dir);
                const stats = await fs.stat(fullPath);
                if (stats.isDirectory()) {
                    const files = await fs.readdir(fullPath);
                    return { [dir]: files };
                }
                return null;
            })
        );

        return NextResponse.json({
            cwd: baseDir,
            componentsPath: componentsDir,
            structure: directoryContents.filter(Boolean),
            env: process.env.NODE_ENV
        });
    } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }

        return NextResponse.json({
            error: 'Failed to read directory structure',
            details: errorMessage,
            cwd: baseDir,
            componentsPath: componentsDir,
            env: process.env.NODE_ENV
        }, { status: 500 });
    }
}
