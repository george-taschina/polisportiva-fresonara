import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;

const byDateDesc = (a: NewsEntry, b: NewsEntry) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export async function getAllNews(): Promise<NewsEntry[]> {
  return (await getCollection('news')).sort(byDateDesc);
}

export async function getLatestNews(limit = 3): Promise<NewsEntry[]> {
  return (await getAllNews()).slice(0, limit);
}

export async function getUpcomingEvents(limit = 3): Promise<NewsEntry[]> {
  const now = Date.now();
  return (await getCollection('news'))
    .filter(
      (e) => e.data.category === 'evento' && (e.data.eventDate?.valueOf() ?? 0) >= now,
    )
    .sort(
      (a, b) =>
        (a.data.eventDate?.valueOf() ?? 0) - (b.data.eventDate?.valueOf() ?? 0),
    )
    .slice(0, limit);
}

export async function getNewsByCategory(
  category: NewsEntry['data']['category'],
  limit?: number,
): Promise<NewsEntry[]> {
  const list = (await getAllNews()).filter((e) => e.data.category === category);
  return limit ? list.slice(0, limit) : list;
}
