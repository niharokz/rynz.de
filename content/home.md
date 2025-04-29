<section class="hero">
    <div class="container">
        <img src="logo144.png" alt="rynz.de logo, a minimalist static site generator" width="144" height="144">
        <h2>RYNZ</h2>
        <p>Really Your Note Zenerator</p>
        <a href="#download" class="cta-button">Try Now</a>
    </div>
</section>

<section class="section" id="about" aria-labelledby="about-heading">
  <div class="container">
      <h2 id="about-heading">✨ About rynz.de</h2>
      <p>🚀 <strong>Rynz</strong> is a lightweight, JavaScript-free static site generator crafted for developers who value <strong>Markdown, speed, and simplicity</strong>. Built with <strong>Python & Jinja2</strong>, it delivers fast, customizable static websites with an intuitive CLI, optimized page generation, and clean, minimal templates.</p>
      <h3>Why Choose Rynz?</h3>
      <ul>
          <li>⚡ <strong>Blazing Fast</strong>: Optimized page generation for rapid site builds.</li>
          <li>🚫 <strong>No JavaScript</strong>: Lightweight, clean HTML output by default.</li>
          <li>🖌️ <strong>Clean Templates</strong>: Streamlined Jinja2 templates for easy customization.</li>
          <li>🐍 <strong>Python-Powered</strong>: Modular, forkable codebase for extensibility.</li>
          <li>📝 <strong>Markdown-First</strong>: Effortless content creation with Markdown.</li>
          <li>🔓 <strong>Open-Source</strong>: Licensed under the <a href="#contact">MIT License</a>.</li>
      </ul>
  </div>
</section>

<section class="section" id="getting-started" aria-labelledby="getting-started-heading">
  <div class="container">
      <h2 id="getting-started-heading">🚀 Getting Started</h2>
      <p>To set up <strong>Rynz</strong>, follow these simple steps:</p>
      <div class="process">
          <div class="process-step">
              <h3>Installation</h3>
              <pre><code>pip install rynz</code></pre>
              <p>Or install the development version:</p>
              <pre><code>pip install git+https://gitlab.com/niharokz/rynz</code></pre>
          </div>
          <div class="process-step">
              <h3>Create a New Project</h3>
              <pre><code>rynz create my-site</code></pre>
              <p>Sets up <code>my-site/</code> with default templates & configuration.</p>
          </div>
          <div class="process-step">
              <h3>Add Content</h3>
              <pre><code>rynz add pageName</code></pre>
              <p>Creates <code>content/note/pageName.md</code> with frontmatter.</p>
          </div>
          <div class="process-step">
              <h3>Build & Deploy</h3>
              <pre><code>rynz deploy</code></pre>
              <p>Converts Markdown into static HTML, stored in <code>public/</code>.</p>
          </div>
          <div class="process-step">
              <h3>Serve Locally</h3>
              <pre><code>rynz serve</code></pre>
              <p>Access your site at <a href="http://localhost:5555">localhost:5555</a>. Use a custom port:</p>
              <pre><code>rynz serve -p 8080</code></pre>
          </div>
      </div>
  </div>
</section>

<section class="section" id="folder-structure" aria-labelledby="folder-structure-heading">
  <div class="container">
      <h2 id="folder-structure-heading">📂 Folder Breakdown</h2>
      <p>Understanding the directory structure helps when managing a Rynz site.</p>
      <ul>
          <li>📜 config.yml – Site-wide settings (title, theme, etc.)</li>
          <li>📄 content/ – Markdown files for pages and notes</li>
          <li>🖼️ resource/ – Static assets (CSS, images, favicon)</li>
          <li>🧱 templates/ – Jinja2 templates for HTML output</li>
          <li>🌐 public/ – Generated static HTML output</li>
      </ul>
      <h3>Example Folder Structure</h3>
      <pre><code>
my-site/
├── public/                  # Generated HTML output
├── config.yml               # Site configuration
├── content/                 # Markdown content
│   ├── header.md
│   ├── footer.md
│   ├── home.md
│   └── note/
│       └── sample.md
├── resource/                # Static assets (CSS, images, etc.)
│   └── style.css
└── templates/               # Jinja2 templates
├── home_template.html
└── note_template.html
      </code></pre>
  </div>
</section>

<section class="section" id="cli-help">
  <div class="container">
    <h2>🕊️ Rynz CLI Help</h2>
    <p>Rynz provides an intuitive CLI for managing your static site.</p>
    
    <pre><code>rynz -h
usage: rynz [-h] [-v] {create,add,deploy,serve,config,test,save} ...

🕊️ Rynz: Really Your Note Zenerator.

positional arguments:
  {create,add,deploy,serve,config,test,save} 
                        Available commands
    🏗️ create              Create a new Rynz project.
    ✏️ add                 Create a new note or blog post.
    📦 deploy              Convert Markdown files into static HTML.
    🌐 serve               Serve your site locally at http://localhost:5555.
    ⚙️ config              View or edit site configuration (config.yml).
    🔍 test                Test your Rynz setup and structure.
    💾 save                Save changes with Git (stage and commit).

options:
  -h, --help            Show this help message and exit.
  -v, --version         Display the program's version number and exit.
    </code></pre>
  </div>
</section>

<section class="section" id="advanced-features" aria-labelledby="advanced-features-heading">
  <div class="container">
      <h2 id="advanced-features-heading">🚀 Advanced Features</h2>
      <h3>Faster Page Generation</h3>
      <p>Rynz v1.0.0 optimizes rendering with streamlined Markdown processing and efficient Jinja2 templating, significantly reducing build times.</p>
      <h3>Cleaner Templates</h3>
      <p>Templates are now more modular and minimal, using simplified Jinja2 syntax for easier customization.</p>
      <h3>Homepage Visibility via Tags</h3>
      <p>Control which pages appear on the homepage using tags.</p>
      <pre><code>
---
tags: [home]
---
      </code></pre>
      <p>Filter in <code>home_template.html</code>:</p>
      <pre><code>
{% for page in pages if 'home' in page.tags %}
<a href="{{ page.url }}">{{ page.title }}</a>
{% endfor %}
      </code></pre>
      <h3>Custom Metadata</h3>
      <p>Inject metadata into specific pages.</p>
      <pre><code>
meta: '<link rel="stylesheet" href="/extra.css">'
      </code></pre>
      <p>Render metadata inside templates:</p>
      <pre><code>
{{ page.meta | safe }}
      </code></pre>
      <h3>Extended Configuration</h3>
      <p>Add custom settings to <code>config.yml</code> for advanced use cases.</p>
      <pre><code>
analytics_id: UA-XXXXX-Y
      </code></pre>
  </div>
</section>

<section class="section" id="showcase" aria-labelledby="showcase-heading">
  <div class="container">
      <h2 id="showcase-heading">📸 Showcase</h2>
      <p>Discover what’s possible with rynz.de:</p>
      <div class="gallery">
          <img src="demo1.png" alt="Sample rynz.de blog" loading="lazy" width="300" height="200">
          <img src="demo2.png" alt="Sample rynz.de portfolio" loading="lazy" width="300" height="200">
      </div>
  </div>
</section>

<section class="section" id="download" aria-labelledby="download-heading">
  <div class="container">
      <h2 id="download-heading">📥 Download</h2>
      <div class="badges">
          <img src="https://img.shields.io/pypi/v/rynz" alt="PyPI Version">
          <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License">
      </div>
      <p>Install <strong>Rynz</strong> via PyPI:</p>
      <pre><code>pip install rynz</code></pre>
      <p>Requires Python 3.8+. No additional dependencies needed.</p>
      <p>Download or clone:</p>
      <ul>
          <li><a href="https://pypi.org/project/rynz/">Install via PyPI</a></li>
          <li><a href="https://gitlab.com/niharokz/rynz">Clone from GitLab</a></li>
      </ul>
  </div>
</section>

<section class="section" id="contact" aria-labelledby="contact-heading">
  <div class="container">
      <h2 id="contact-heading">📞 Contact</h2>
      <p>Reach out via:</p>
      <ul>
          <li>Email: <a href="mailto:support@rynz.de">support@rynz.de</a></li>
          <li>GitLab Issues: <a href="https://gitlab.com/niharokz/rynz/-/issues">Submit an Issue</a></li>
          <li>Subscribe to updates via <a href="/rss.xml">RSS</a>.</li>
      </ul>
      <h3>Roadmap</h3>
      <p>Future plans include:</p>
      <ul>
          <li>Support for custom Jinja filters</li>
          <li>Incremental builds for faster iteration</li>
          <li>Extended template library</li>
      </ul>
      <h3>Project Status</h3>
      <p>rynz.de is actively maintained by nih.ar</p>
  </div>
</section>