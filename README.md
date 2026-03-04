# MyCopilotDemo

A small static HTML demo scaffold created by GitHub Copilot. Includes a responsive layout, sticky navbar, smooth scrolling, a demo counter, and a simple contact form.

## Files

- `index.html` — main page
- `css/styles.css` — styles (sticky header, smooth scrolling, shadow)
- `js/main.js` — small interactive behaviors (CTA alert, contact form handling, demo counter)

## Run

No build step required — open `index.html` in a browser.

Optional: serve with a simple HTTP server (requires Python 3):

In PowerShell:

    python -m http.server 5500

Then open http://localhost:5500 in your browser.

Or use the VS Code Live Server extension to preview.

## Features

- Sticky top navigation with subtle shadow
- Site title links to the homepage (no underline)
- Smooth scrolling for anchor links
- "Demo" section with a button that updates a click counter
- Contact form with basic client-side handling

## Notes

This is a minimal starter project — feel free to modify styles, add accessibility improvements, or wire the contact form to a backend.
