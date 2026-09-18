# Graham Satchwell — Author Website

A React + Vite rebuild of the author website for Graham Satchwell — former British Transport Police detective superintendent and author of true crime, memoir and history titles.

## Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server & build
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, hover interactions, hero entrance animation

## Structure

```
src/
  components/   Header, Hero, Divider, BookCollection, Author, Closing, Footer
  data/books.json   book catalogue (title, cover, description, links)
  hooks/useReveal.js   scroll-triggered reveal animation hook
  index.css     site styles (ported from the original static design, plus detailing)
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content notes

Book covers are loaded from their original publisher / Goodreads image URLs. Catalogue data lives in `src/data/books.json` — edit that file to add, remove, or update a title.
