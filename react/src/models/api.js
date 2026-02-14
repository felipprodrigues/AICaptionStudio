import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imgSrc) {
  await ImageCaptioner.getCaptioner(); // initializes the captioner if it hasn't been already
  return ImageCaptioner.generateCaption(imgSrc);
}

async function translate(captionEng) {
  return fetch("http://localhost:3000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "text": captionEng[0]["generated_text"]
    })
  }).then(blob => blob.json())
}

async function convertToAudio(captionPTBR) {
  return fetch("http://localhost:5001/text-to-audio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "text": captionPTBR[0]["translation_text"]
    })
  }).then(blob => blob.json())
}

export {
  convertToAudio,
  generateCaption,
  translate
};

