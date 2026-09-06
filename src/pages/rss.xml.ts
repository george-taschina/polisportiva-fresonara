import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllNews } from '../lib/news';

export async function GET(context: APIContext) {
  const posts = await getAllNews();
  return rss({
    title: 'Polisportiva Fresonara — News ed Eventi',
    description: 'Le ultime notizie e i prossimi eventi della Polisportiva Fresonara.',
    site: context.site ?? 'https://polisportivafresonara.it',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/news/${post.id}/`,
    })),
    customData: '<language>it-it</language>',
  });
}
