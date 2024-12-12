import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const componentName = searchParams.get("componentName");

  if (!componentName) {
    return new Response(
      JSON.stringify({ error: "Component name is required." }),
      { status: 400 }
    );
  }

  const filePath = path.join(
    process.cwd(),
    "components",
    componentName,
    `${componentName}.tsx`
  );

  try {
    const source = await fs.readFile(filePath, "utf8");
    return new Response(JSON.stringify({ source }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return new Response(
      JSON.stringify({ error: "Failed to read file." }),
      { status: 500 }
    );
  }
}
