
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ilmandwi24.github.io/",
      lastModified: new Date(),
      priority: 1,
    }
   
  ];
}