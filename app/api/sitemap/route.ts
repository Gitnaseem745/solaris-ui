import { components } from "@/docs/components";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://solarisui.com";

  const staticUrls = [
    { loc: `${baseUrl}/`, changefreq: "daily", priority: 1.0 },
    { loc: `${baseUrl}/components`, changefreq: "weekly", priority: 0.8 },
  ];

  const dynamicUrls = Object.keys(components).flatMap((category) =>
    components[category].map((component) => ({
      loc: `${baseUrl}/components/${category}/${component.id}`,
      changefreq: "monthly",
      priority: 0.7,
    }))
  );

  const urls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
