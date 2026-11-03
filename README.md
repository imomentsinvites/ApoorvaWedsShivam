# Apoorva & Shivam — Wedding Invitation

A Vite + React wedding invitation website with the original opening video and music retained.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Replace event artwork

Add your five vertical 9:16 event images to `public/assets/events/` using these exact names:

- `satsang.jpg`
- `mehendi.jpg`
- `haldi.jpg`
- `sangeet.jpg`
- `wedding.jpg`

The gallery displays them in that order. Text should be embedded in the artwork; the website intentionally adds no event captions. If an image has not been added yet, its softly styled rounded placeholder remains visible.

## Existing media retained

- `public/assets/opening.mp4`
- `public/assets/opening-poster.jpg`
- `public/assets/background.mp4`
- `public/music/track1.mp3`

## Personalisation

Wedding names, dates, venue links, RSVP number and family details are configured in `src/constants/weddingData.js`.
