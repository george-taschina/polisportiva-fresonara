# Polisportiva Fresonara — Sito web

Sito istituzionale della **Polisportiva Fresonara**, società sportiva dilettantistica di Fresonara (AL) attiva dal 1970: calcio, sport, cultura, solidarietà e comunità. Include anche la sezione dedicata alla **Casa del Giovane Giorgio Deiana**.

Costruito con [Astro](https://astro.build) (sito statico, contenuti in italiano).

## Struttura del progetto

```text
/
├── public/                  # favicon, og-default.svg
├── src/
│   ├── components/          # Header, Hero, NewsCard, EventCard, Footer, ecc.
│   ├── content/news/        # news, eventi e post Casa del Giovane (Markdown)
│   ├── data/                # JSON: site, impianti, attività, sponsor, consiglio
│   ├── layouts/BaseLayout.astro
│   ├── lib/news.ts          # helper per la collection news (date, eventi futuri)
│   ├── pages/               # index, news/, chi-siamo, impianti, casa-del-giovane,
│   │                        # contatti, 404, rss.xml, robots.txt
│   ├── styles/global.css    # design tokens, griglie, badge, utility
│   └── content.config.ts    # schema della collection `news`
└── astro.config.mjs         # sitemap integrata
```

## Contenuti: news ed eventi

News, eventi e post della Casa del Giovane sono file Markdown in `src/content/news/`.
Il nome del file diventa lo slug: `torneo-calcio-giovanile.md` → `/news/torneo-calcio-giovanile/`.

Frontmatter:

```yaml
---
title: "Titolo della notizia"
description: "Riassunto in 1-2 frasi."
pubDate: 2026-09-05           # ordina la lista; la più recente diventa la hero di /news/
category: news                # news | evento | casa-del-giovane
eventDate: 2026-09-20         # solo eventi
location: "Campi sportivi"    # solo eventi
tags: ["calcio"]              # opzionale
---
```

- Un `evento` con `eventDate` futura appare automaticamente nella card "Prossimo evento" in homepage.
- La news con `pubDate` più recente diventa automaticamente la hero della pagina `/news/`.

Maggiori dettagli in `AGENTS.md`.

## Comandi

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installa le dipendenze                       |
| `npm run dev`     | Avvia il dev server su `localhost:4321`      |
| `npm run build`   | Compila il sito di produzione in `./dist/`   |
| `npm run preview` | Anteprima locale della build                 |

Richiede Node.js >= 22.12.

## SEO e feed

- Sitemap generata automaticamente (`@astrojs/sitemap`)
- Feed RSS delle news su `/rss.xml`
- Meta Open Graph/Twitter gestiti da `src/components/Seo.astro` (default `public/og-default.svg`)
