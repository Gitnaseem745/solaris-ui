import { toCapitalCase } from "@/utils/capital-case";
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

  const resolvedDirectory = toCapitalCase(directoryName.toLowerCase());
  const filePath = path.join(
    process.cwd(),
    "components",
    "ui",
    resolvedDirectory,
    `${componentName.toLowerCase()}.tsx`
  );

  try {
    const source = await fs.readFile(filePath, "utf8");
    console.log(filePath);
    console.log(filePath);
    console.log(filePath);
    console.log(filePath);
    return new Response(JSON.stringify({ source }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Error reading ${componentName} file ${filePath}:`, error);
    return new Response(
      JSON.stringify({ error: `Failed to read ${componentName} file.` }),
      { status: 500 }
    );
  }
}
