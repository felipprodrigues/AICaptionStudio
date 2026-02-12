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
      "text": captionEng
    })
  }).then(blob => blob.json())
}

export {
  generateCaption,
  translate
};

