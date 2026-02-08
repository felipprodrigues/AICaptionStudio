import ImageCaptioner from "./imageCaptioner";

export default async function generateCaption(imgSrc) {
  await ImageCaptioner.getCaptioner(); // initializes the captioner if it hasn't been already
  return ImageCaptioner.generateCaption(imgSrc);
}
