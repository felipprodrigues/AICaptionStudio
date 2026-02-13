# Node Server

Express API that translates English captions to Portuguese (PT-BR) using a Hugging Face NLLB model.

## Responsibilities
- Exposes translation endpoint: `POST /translate`
- Loads the NLLB translation pipeline once and reuses it
- Serves as the backend integration point for future Python TTS

## API
### `POST /translate`
Request body:
```
{ "text": "A dog running on the beach." }
```
Response (Hugging Face output):
```
[{ "translation_text": "Um cachorro correndo na praia." }]
```

## Local setup
```
pnpm install
node index.js
```
- Server runs at http://localhost:3000
- CORS allows http://localhost:5173

## Docker setup
```
docker compose up --build
```
- Uses `compose.yaml` and `Dockerfile`
- Exposes port 3000

## File map
- `index.js` Express app + routes
- `models/translator.js` NLLB pipeline and translation logic
- `models/api.js` thin wrapper for translation

## Integration notes
- The React app calls `POST /translate` with the caption text.
- Keep the response format as a list so the frontend can read `translation_text`.

## AI runtime note
The translation model runs locally in the Node process. Plan for higher RAM usage and avoid running on low-memory machines.
