# React App

Frontend UI that lets users enter an image URL, generate a caption in English, and request a Portuguese translation from the Node API.

## Responsibilities
- Runs the image-to-text model in-browser
- Displays the generated caption and translation
- Calls the Node API at `POST /translate`

## Local setup
```

pnpm dev
```
- App runs at http://localhost:5173
- Expects the Node API at http://localhost:3000

## Flow
1) User pastes an image URL.
2) `ImageCaptioner` loads the model and generates a caption.
3) `translate()` posts the caption text to the Node API.
4) UI renders the translated caption.

## File map
- `src/App.tsx` UI and flow orchestration
- `src/models/imageCaptioner.js` image-to-text pipeline
- `src/models/api.js` caption + translation helpers

## Integration notes
- If the API host or port changes, update `src/models/api.js`.
- The translation API expects a body like `{ "text": "..." }`.

## AI runtime note
The captioning model runs locally in the browser. This can consume significant memory depending on the device and tab limits.

