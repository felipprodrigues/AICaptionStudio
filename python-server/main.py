from flask import Flask, request, send_from_directory

from flask_cors import cross_origin
from models.api import convert_text_to_audio
from models.utils import save_audio
import uuid

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/text-to-audio", methods=["POST"])
@cross_origin()
def text_to_audio():
    text = request.json["text"]

    # Call model to synthesize audio
    audio, sample_rate = convert_text_to_audio(text)

    # Generate URL
    file_id = uuid.uuid4()

    #save audio to file
    save_audio(audio, sample_rate, file_id)

    return [{"url": f"/audio/{file_id}.wav"}]



@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    # Return file that is in audio_file
    return send_from_directory("audio", audio_file)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)



