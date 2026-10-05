# rynz.de

The website for [rynz](https://gitlab.com/niharokz/rynz), the static site generator that turns Markdown into plain HTML. The site is built with rynz itself and follows the same rules: no CSS classes, no JavaScript and no tracking.

## Build it

You need Python 3.10 or newer.

```bash
pip install rynz
rynz serve          # preview at http://127.0.0.1:5555
rynz build --check  # build into public/ and check every link
```

## How the theme tabs work

The tabs at the top of the home page switch between five stylesheets with no JavaScript. rynz builds the home page once per theme. Every copy has the same HTML and links a different CSS file, and the tabs are plain links between the copies.

| Tab | Page | Stylesheet |
| --- | --- | --- |
| nss | `index.html` | `static/themes/nss.min.css` + `nss-site.css` |
| future | `future.html` | `static/themes/future.css` |
| 1997 | `1997.html` | `static/themes/1997.css` |
| brutalist | `brutalist.html` | `static/themes/brutalist.css` |
| terminal | `terminal.html` | `static/themes/terminal.css` |

- `data/themes.yml` lists the themes. The first one is the default.
- `plugins/themes.py` is a rynz plugin of about 20 lines that renders the extra copies.
- Every copy's canonical link points to `/`, so search engines see a single page.

**To add a theme**, write a stylesheet in `static/themes/` and add an entry to `data/themes.yml`.

**To update nss**, copy `dist/nss.min.css` from the [nss repository](https://gitlab.com/niharokz/nss) over `static/themes/nss.min.css`. The rynz.de tweaks live separately in `nss-site.css`.

## Layout

```text
config.yml            site settings (rynz 2.0)
content/home.md       the home page, in Markdown grouped into <section>s
content/note/         news posts (listed on the home page and in rss.xml)
data/themes.yml       the theme tabs
plugins/themes.py     builds one home page per theme
template/             base, home, head, nav and footer templates
static/themes/        the stylesheets and self-hosted fonts
```

## Credits

The fonts are self-hosted from [Fontsource](https://fontsource.org) under the SIL Open Font License: Orbitron, Space Grotesk, VT323, IBM Plex Mono and Archivo Black. No font is loaded from a third-party server.

MIT licensed. Made by [Nihar](https://nih.ar).
