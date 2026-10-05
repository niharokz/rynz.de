---
title: "rynz 2.0 is out"
description: "A rewrite: plugins, a link checker, feeds and sitemaps, URL styles and a live preview."
date: 2026-10-05
tags: [note]
---

rynz 2.0 is a rewrite of the whole generator. Your 1.x site still builds as it is; run `rynz migrate` when you want the new config names.

## What's new

- **Plugins.** Hooks, generators and template filters. rynz's own feed, sitemap and tag pages are plugins now.
- **`rynz check`.** Broken links, missing anchors, missing titles and images without alt text, before you publish.
- **Live preview.** `rynz serve` rebuilds on every save.
- **Feeds and SEO.** Per-tag feeds, `sitemap.xml`, `robots.txt`, canonical links and social preview tags.
- **URL styles.** Flat, clean or pretty URLs with one config line.
- **Highlighted code** that needs no CSS classes.
- **Deploy files** for GitLab Pages, Cloudflare and rsync.

## Upgrade

```bash
pip install --upgrade rynz
rynz migrate
rynz build --check
```

The full list is in the [changelog](https://gitlab.com/niharokz/rynz/-/blob/master/CHANGELOG.md).
