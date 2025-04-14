import type { MetadataRoute } from "next";
import { components } from "@/docs/components";
import { siteConfig } from "@/config/site";
import { animations } from "@/animations/animations";
import { getHooksMeta } from "@/lib/getHooksMeta";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/components/installation-guide`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hooks`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/animations`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Component routes
  const componentRoutes: MetadataRoute.Sitemap = components.map((component) => ({
    url: `${baseUrl}/components/${component.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Hook routes
  const hooks = getHooksMeta();
  const hookRoutes: MetadataRoute.Sitemap = hooks.map((hook) => ({
    url: `${baseUrl}/hooks/${hook.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Animation routes
  const animationRoutes: MetadataRoute.Sitemap = animations.map((animation) => ({
    url: `${baseUrl}/animations#${animation.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...componentRoutes, ...hookRoutes, ...animationRoutes];
}
