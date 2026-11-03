# Apoorva & Shivam — Wedding Invitation

A React + Vite wedding invitation website, styled in rose pink and champagne gold. The original opening video, poster, background video and music are retained.

## Run locally

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deploy to GitHub Pages

1. Upload the **contents of this project folder** to the root of your GitHub repository (so `package.json`, `index.html`, `src/`, `public/` and `.github/` are at repository root).
2. Make sure the default branch is `main`.
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Push the project to `main`, or manually run the workflow from the **Actions** tab.
5. The workflow installs dependencies, builds the Vite site into `dist/`, and deploys that build folder to GitHub Pages.

The Vite configuration automatically uses the repository subpath for GitHub Pages project sites and `/` for `username.github.io` sites. Do not manually hardcode the repository name in `vite.config.js`.

## Replace event artwork

Add your five vertical 9:16 event images to `public/assets/events/` using these exact names:

- `satsang.jpg`
- `mehendi.jpg`
- `haldi.jpg`
- `sangeet.jpg`
- `wedding.jpg`

The gallery displays them in that order, in rounded rectangular frames. Text should be embedded in the artwork; the website intentionally adds no event captions. If an image has not been added yet, its softly styled rounded placeholder remains visible.

## Existing media retained

- `public/assets/opening.mp4`
- `public/assets/opening-poster.jpg`
- `public/assets/background.mp4`
- `public/music/track1.mp3`

## Personalisation

Wedding names, dates, venue links, RSVP number and family details are configured in `src/constants/weddingData.js`.
