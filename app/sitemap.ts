// sitemap.ts
import { posts } from "#site/content";
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ageofneil.com';
  const baseEntries = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
  ];

  const blogEntries = posts.map(post => {
    const postDate = new Date(post.date);
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
    };
  });

  return [
    ...baseEntries,
    ...blogEntries
  ];
}
