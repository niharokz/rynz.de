"""Build the home page once per theme in data/themes.yml.

Every copy has the same HTML; only the stylesheet changes. The theme tabs at the
top of the page are plain links between these copies, so switching themes needs
no JavaScript. Each copy's canonical URL stays "/", so search engines see one page.
"""


def register(rynz):
    home = {}

    @rynz.hook("context")
    def remember_home(context, page, site):
        if page.slug == "index":
            home.clear()
            home.update(context)

    @rynz.generator
    def themed_homes(site, render):
        themes = site.data.get("themes") or []
        context = {k: v for k, v in home.items() if k not in ("site", "config", "theme")}
        for theme in themes[1:]:
            yield theme["page"], render("home.html", theme=theme, **context)
