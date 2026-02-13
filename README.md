# AICaptionStudio

AI-driven pipeline for image captioning and multilingual translation, with a React UI and a Node API. A Python text-to-audio stage is planned for future integration.

## Technical overview
- Frontend: React + Vite, runs the image captioning model in-browser.
- Backend: Node + Express, runs the translation model and exposes a `/translate` API.
- Models: Hugging Face Transformers (image-to-text + NLLB translation).

## Repo structure
- `react/` React UI and captioning logic.
- `node-server/` Node API for translation and Docker setup.

## Requirements
- Node.js 20
- pnpm 10
- Docker (optional, for containerized Node API)

## AI runtime note
The AI models run locally on your machine (browser for captioning, server for translation). Ensure you have enough memory, and expect higher RAM usage on lower-end hardware.

## Quick start (local dev)
1) Start the Node API
```
cd node-server
pnpm install
node index.js
```
2) Start the React app
```
cd react
pnpm install
pnpm dev
```
3) Open http://localhost:5173

## Docker setup (Node API)
From the `node-server/` folder:
```
docker compose up --build
```
- Exposes the API at http://localhost:3000

## Data flow
1) React loads an image URL.
2) Browser runs the image-captioning model.
3) React calls `POST /translate` with the caption text.
4) Node translates EN -> PT-BR and returns the translated text.
5) Python TTS integration planned for a later stage.

## Notes
- CORS is configured to allow http://localhost:5173.
- Update ports or origins in the server if you change the frontend URL.
