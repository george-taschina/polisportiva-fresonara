# Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

# Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

# Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

# Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Creating news and events

News, events and Casa del Giovane posts are Markdown files in `src/content/news/`.
The filename (without `.md`) becomes the slug: `torneo-calcio-giovanile.md` → `/news/torneo-calcio-giovanile/`.
Use lowercase, hyphenated, descriptive filenames. Write all content in Italian.

Frontmatter (validated by `src/content.config.ts`):

```yaml
---
title: "Titolo della notizia"          # required
description: "Riassunto in 1-2 frasi." # required, shown in cards/hero and meta description
pubDate: 2026-09-05                    # required, YYYY-MM-DD — orders the list; the newest becomes the /news/ hero
category: news                         # required: news | evento | casa-del-giovane
eventDate: 2026-09-20                  # evento only: date of the event
location: "Campi sportivi di Fresonara" # evento only: where it takes place
tags: ["calcio", "torneo"]             # optional
---
```

Body: Markdown with `##` subheadings. Keep the tone of existing entries (community, plain Italian).

Behavior to keep in mind:

- `category: evento` with a future `eventDate` automatically appears in the homepage "Prossimo evento" card and in "Prossimi eventi" sections — no other file changes needed.
- The entry with the newest `pubDate` automatically becomes the hero of `/news/`; the rest render as cards below.
- `image` and `featured` exist in the schema but are not rendered anywhere yet — don't use them.

After creating a file, verify with `astro build` (must complete without errors) and, if the dev server is running, check the page at `http://localhost:4321/news/<slug>/`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
