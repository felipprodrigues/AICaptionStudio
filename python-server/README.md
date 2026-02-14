# Python Server

Flask API that converts text to speech using a Hugging Face Bark model and serves the generated WAV files.

## Responsibilities
- Exposes text-to-audio endpoint: `POST /text-to-audio`
- Loads the Bark model and generates audio from text
- Saves WAV files to `audio/` and serves them via `GET /audio/<file>`

## API
### `POST /text-to-audio`
Request body:

{ "text": "Ola mundo!" }

Response:
[{ "url": "/audio/<uuid>.wav" }]


### `GET /audio/<file>`
Returns a WAV file stored in `audio/`.

## Local setup
python main.py

- Server runs at http://localhost:5001
- Requires Python 3.11 and the dependencies used in the code (Flask, transformers, scipy, torch).

## Docker setup
docker compose up --build

- Uses `compose.yaml` and `Dockerfile`
- Exposes port 5001

## Flow
1) Client posts text to `/text-to-audio`.
2) `convert_text_to_audio()` runs the Bark pipeline.
3) Audio is saved to `audio/<uuid>.wav`.
4) API returns the URL to fetch the WAV.

## File map
- `main.py` Flask app + routes
- `models/api.py` thin wrapper for text-to-audio
- `models/text_to_audio.py` Bark pipeline and model loading
- `models/utils/__init__.py` WAV file saving
- `audio/` generated files

## Integration notes
- Response format is a list so clients can read `url`.
- The model uses `suno/bark-small` with voice preset `v2/pt_speaker_8`.

## AI runtime note
The Bark model loads on demand and can be heavy on RAM and CPU.
