<section markdown="1">

Markdown in. Plain HTML out.

rynz 2.0 turns a folder of Markdown files into a fast website. No JavaScript, no tracking, no build chain: install it, run three commands, and upload the HTML anywhere.

```bash
pip install rynz
rynz new my-site
cd my-site && rynz serve
```

[Start a site](#start-a-site-in-a-minute) [Read the source](https://gitlab.com/niharokz/rynz)

</section>

<section markdown="1">

## Features

- **Markdown that just works.** Tables, footnotes, task lists, strikethrough, heading anchors and a table of contents.
- **Highlighted code.** Pygments colours code with inline styles, so it works with stylesheets that have no classes.
- **Zero JavaScript.** Not on your pages, not even in the preview server. Markdown's CSS classes are stripped too.
- **Live preview.** `rynz serve` rebuilds the site every time you save a file.
- **Drafts.** New posts stay out of the build until you remove `draft: true`.
- **Feeds and SEO.** An RSS feed with per-tag feeds, `sitemap.xml`, `robots.txt`, canonical links and social preview tags.
- **Extra pages when you want them.** Tag pages, a yearly archive, redirects for old URLs, an OPML blogroll and a Gemini capsule.
- **Your URL style.** `/about.html`, `/about` or `/about/`, set with one line.
- **A built-in link checker.** `rynz check` finds broken links, missing anchors, missing titles and images without alt text.
- **Fast rebuilds.** Incremental builds skip pages that haven't changed.
- **Plugins.** Hooks, file generators and template filters, in plain Python.
- **Templates you own.** Override any single template, or bring a whole theme.
- **Data files.** Every YAML file in `data/` is available to your templates.
- **One-command deploys.** Ready-made files for GitLab Pages, Cloudflare and rsync.

</section>

<section markdown="1">

## Start a site in a minute

1. Install rynz. It needs Python 3.10 or newer.

    ```bash
    pip install rynz
    ```

2. Create a site. You get a config file, a home page, an about page and a sample post.

    ```bash
    rynz new my-site --title "My site" --url https://example.com
    ```

3. Preview it at `http://127.0.0.1:5555`. Save a file and refresh to see the change.

    ```bash
    cd my-site
    rynz serve
    ```

4. Build it. The finished site is in `public/`, ready to upload.

    ```bash
    rynz build
    ```

</section>

<section markdown="1">

## Write a post

```bash
rynz add "Why I self-host"
```

This creates `content/note/why-i-self-host.md`. The lines between the `---` markers are the frontmatter: settings for this page. Everything below them is your post.

```markdown
---
title: "Why I self-host"
description: "One box, no subscriptions."
date: 2026-10-05
tags: [note, homelab]
draft: true
---

Start writing here.
```

A file tagged `note` is a **post**: it is listed on the home page and in the feed. A file without that tag is a **page**, like an About page. Only `title` is required.

| Field | What it does |
| --- | --- |
| `date`, `updated` | When it was published and last changed |
| `tags` | Tags; `note` makes it a post |
| `draft` | Leave it out of `rynz build` |
| `slug` | Change the file name in the URL |
| `template` | Use a different template for this page |
| `image` | Picture for social previews |
| `aliases` | Old URLs that should redirect here |
| `toc` | Show a table of contents |
| `noindex`, `nofeed` | Hide it from search engines or from the feed |

</section>

<section markdown="1">

## Commands

| Command | What it does |
| --- | --- |
| `rynz new my-site` | Start a new site in `my-site/` |
| `rynz add "Title"` | Create a new post as a draft |
| `rynz serve` | Preview at `127.0.0.1:5555`, rebuilding on save. `-p 8080` picks another port |
| `rynz build` | Build into `public/`. Add `--drafts`, `--incremental` or `--check` |
| `rynz check` | Find broken links, missing titles and images without alt text |
| `rynz config` | Print every setting with its default, and check for mistakes |
| `rynz migrate` | Upgrade a rynz 1.x `config.yml`, keeping your comments |
| `rynz init-ci gitlab` | Write a deploy file for `gitlab`, `cloudflare` or `rsync` |

</section>

<section markdown="1">

## Configuration

A site needs two lines of `config.yml`. Everything else has a sensible default.

```yaml
title: My site
url: https://example.com
```

When you want more, it reads like a sentence:

```yaml
menu:
  - name: about
    url: /about.html
urls: clean          # /about.html is linked as /about
tags: true           # a page per tag
archive: true        # posts grouped by year
markdown:
  highlight:
    style: monokai   # any Pygments style
```

| `urls:` | File written | Link |
| --- | --- | --- |
| `flat` (default) | `about.html` | `/about.html` |
| `clean` | `about.html` | `/about` |
| `pretty` | `about/index.html` | `/about/` |

</section>

<section markdown="1">

## Templates and themes

rynz looks for each template in three places, in order:

1. your `template/` folder
2. the theme named in `config.yml`
3. rynz's built-in templates

To change one thing, copy just that template into `template/` and edit it. Templates are Jinja2 and can use `page.title`, `page.html`, `page.toc`, `page.reading_time`, `site.posts`, `site.tags`, `site.data` and everything in `config`.

The tabs at the top of this page are a working example. The same HTML is built five times, and each copy links a different stylesheet.

</section>

<section markdown="1">

## Plugins

A plugin is a Python file with a `register` function. List it under `plugins:` in `config.yml`.

```python
def register(rynz):
    @rynz.generator
    def humans(site, render):
        yield "humans.txt", f"Written by {site.config['author']}\n"

    @rynz.hook("html")
    def mark_todos(html, page, site):
        return html.replace("TODO", "<mark>TODO</mark>")
```

| Hook | Runs |
| --- | --- |
| `config` | after `config.yml` is read |
| `page` | after a page's frontmatter is read |
| `html` | after Markdown becomes HTML |
| `site` | after posts and tags are collected |
| `context` | before a page's template renders |
| `done` | after every file is written |

rynz's own feed, sitemap, tag pages, archive, redirects, blogroll and Gemini output are built with this same API. So are this site's theme tabs: [plugins/themes.py](https://gitlab.com/niharokz/rynz.de/-/blob/main/plugins/themes.py) is about 20 lines.

</section>

<section markdown="1">

## Check before you publish

`rynz check` reads the built site the way a visitor would and reports what's wrong. `rynz build --check` does both in one step, so a broken link fails your deploy instead of reaching readers.

```text
$ rynz check
warning: note/hello.html: image without alt text: /img/desk.jpg
error: about.html: broken link: /contact.html
error: note/hello.html: anchor #setup not found on this page
error: checked 14 pages: 2 errors, 1 warnings
```

</section>

<section markdown="1">

## Deploy anywhere

`rynz init-ci` writes a ready-made deploy file. Each one runs `rynz build --check` first.

| Where | Command |
| --- | --- |
| GitLab Pages | `rynz init-ci gitlab` |
| Cloudflare Workers | `rynz init-ci cloudflare` |
| Your own server | `rynz init-ci rsync` |

Or skip them all: `public/` is plain files, so any web host works.

</section>

<section markdown="1">

## Upgrading from 1.x

Your 1.x site builds with 2.0 as it is. rynz prints a list of the old config keys it found. When you're ready, run `rynz migrate`: it renames them, keeps your comments and saves a backup.

- `create`, `deploy` and `test` are now `new`, `build` and `check`. The old names still work.
- `rynz save` is gone. Use git directly.
- Markdown tables, fenced code and lists under a bold line now render properly.
- Headings get anchors, and `sitemap.xml` and `robots.txt` are added.

</section>

<section markdown="1">

## Built with rynz

- [nih.ar](https://nih.ar): a personal site that has been online since 2011
- [rynz.de](https://gitlab.com/niharokz/rynz.de): this page, in five themes

Built something with rynz? [Open an issue](https://gitlab.com/niharokz/rynz/-/issues) and it can be listed here.

</section>
