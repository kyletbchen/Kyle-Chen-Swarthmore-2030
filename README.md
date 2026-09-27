# Kyle Chen — Engineering Portfolio

A personal engineering portfolio site: plain HTML/CSS/JS, no build step, built to be hosted for free on GitHub Pages.

Live at: `https://YOUR-USERNAME.github.io` (once deployed — see below)

## Structure

```
index.html      Page structure and copy (About, Projects, Contact sections)
styles.css      All styling (blueprint/drafting-table theme)
projects.js     Project data — EDIT THIS to add/change/remove projects
main.js         Renders project cards from projects.js — rarely needs editing
```

## Editing content

- **Projects**: open `projects.js` and edit the `PROJECTS` array. Each entry has
  a `tag`, `title`, `summary`, `tags` (chips), and a `link`/`linkText`. Set
  `placeholder: false` once you've filled in real details — this removes the
  "Draft entry" note from the card.
- **About / bio text**: edit the `<section id="about">` block in `index.html`.
- **Contact links**: in `index.html`, replace `YOUR-USERNAME` and
  `YOUR-LINKEDIN` in the GitHub/LinkedIn links under `<section id="contact">`.
- **Colors/fonts**: edit the CSS variables at the top of `styles.css` (`:root`).

## Adding photos or a project write-up page

Drop images into `assets/` and reference them with `<img src="assets/your-photo.jpg">`
inside a project card, or in a new page (e.g. `projects/radar.html`) that you
link to from that project's `link` field in `projects.js`.

## Deploying to GitHub Pages

1. Push this repo to GitHub. For a personal site, name the repo
   `YOUR-USERNAME.github.io` (replace with your actual GitHub username) —
   GitHub Pages will serve it automatically at `https://YOUR-USERNAME.github.io`
   with no extra configuration.
2. If you instead use a different repo name (e.g. `engineering-portfolio`), go to
   the repo's **Settings → Pages**, set the source to the `main` branch and
   `/ (root)` folder, and save. The site will be live at
   `https://YOUR-USERNAME.github.io/REPO-NAME`.
3. Pages usually takes 1–2 minutes to build after each push.

## Local preview

No build tools required. Just open `index.html` in a browser, or run a quick
local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
