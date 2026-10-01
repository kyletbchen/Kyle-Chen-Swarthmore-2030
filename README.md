# Kyle Chen — Engineering Portfolio

A personal engineering portfolio site: plain HTML/CSS/JS, no build step, built to be hosted for free on GitHub Pages.

Live at: `https://kyletbchen.github.io/Kyle-Chen-Swarthmore-2030` (once deployed — see below)

## Structure

```
index.html      Page structure and copy (About, Experience, Projects, Contact)
styles.css      All styling (blueprint/drafting-table theme)
experience.js   Work/internship data — EDIT THIS to add/change/remove a role
projects.js     Project data — EDIT THIS to add/change/remove projects
main.js         Renders cards from experience.js/projects.js — rarely needs editing
lightbox.js     Click-to-enlarge photo viewer used on every detail page — rarely needs editing
experience/     One detail page per role (photos, video, docs, full write-up)
projects/       One detail page per project (photos, video, docs, full write-up)
```

## Editing content

- **Experience**: open `experience.js` and edit the `EXPERIENCE` array. Each
  entry has `company`, `role`, `period`, `location`, `summary`, `tags`, and a
  `link`/`linkText`. Set `placeholder: false` once filled in.
- **Projects**: open `projects.js` and edit the `PROJECTS` array. Each entry has
  a `tag`, `title`, `summary`, `tags` (chips), and a `link`/`linkText`. Set
  `placeholder: false` once you've filled in real details — this removes the
  "Draft entry" note from the card.
- **About / bio text**: edit the `<section id="about">` block in `index.html`.
- **Contact links**: GitHub is already set to `kyletbchen`. Replace
  `YOUR-LINKEDIN` in `index.html` (under `<section id="contact">`) with your
  LinkedIn handle, or remove that link if you don't want it.
- **Colors/fonts**: edit the CSS variables at the top of `styles.css` (`:root`).

## Detail pages (projects and experience)

Each project or experience card's "View full write-up" button navigates
(same tab) to a dedicated page in `projects/` or `experience/` with room for
a longer description, a photo gallery, a video embed, and a documentation
list. There's already one page per entry:

```
projects/esp32-fruit-ripener.html
projects/green-hydrogen-cargo-ships.html
projects/eagle-scout-trail-arches.html
projects/halloween-hand-launcher.html
projects/ultrasonic-scanning-radar.html
projects/plasma-water-generator.html
experience/garnet-racing.html
experience/moijey-fine-jewelry.html
```

Every detail page has a "← Back to Experience & Projects" link at the top
that returns to the homepage right at the Experience section — Projects
sits immediately below it, so from there it's easy to jump into any other
entry.

To fill one in, open its file and edit directly — it's plain HTML, no build
step:

- **Overview**: replace the `<em>...</em>` placeholder paragraph with the
  real story.
- **Photos**: drop image files into `assets/`, then replace a
  `<div class="gallery-placeholder">...</div>` block with
  `<img src="../assets/your-photo.jpg" alt="...">`. Every photo in a
  `.gallery-grid` automatically opens in a full-size lightbox when clicked
  (with Prev/Next, arrow-key navigation, and Esc to close) — that's handled
  by `lightbox.js`, which every detail page already loads, so you don't
  need to do anything extra when you add a photo.
- **Video**: replace the `<div class="video-placeholder">...</div>` block with
  the embed snippet shown inside it (works for a YouTube/Vimeo embed URL).
- **Documentation**: swap the `href="#"` links under **Documentation** for
  real links (a GitHub repo, a PDF report, CAD files, LinkedIn, etc).

To add a detail page for a new project or role, copy one of the existing
files in `projects/` or `experience/`, edit its content, and point that
entry's `link` field in `projects.js` / `experience.js` at the new filename
(e.g. `"projects/my-new-project.html"`). Nothing in `index.html` or
`main.js` needs to change.

## Deploying to GitHub Pages

This repo is `Kyle-Chen-Swarthmore-2030`, so it deploys as a project site
(subpath), not a `username.github.io` root site:

1. Push this repo to `github.com/kyletbchen/Kyle-Chen-Swarthmore-2030`.
2. In the repo, go to **Settings → Pages**, set the source to the `main`
   branch and `/ (root)` folder, and save.
3. The site will be live at
   `https://kyletbchen.github.io/Kyle-Chen-Swarthmore-2030`. Pages usually
   takes 1–2 minutes to build after each push.

All asset paths in this project (`styles.css`, `projects.js`, `main.js`) are
relative, so the site works correctly at a subpath without any changes.

## Local preview

No build tools required. Just open `index.html` in a browser, or run a quick
local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
