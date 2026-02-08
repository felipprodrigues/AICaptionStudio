import { pipeline } from '@huggingface/transformers';

export default class ImageCaptioner {
  static captioner = null;

  static async getCaptioner() {
    // skips the need to be calling pipeline() every time we want to generate a caption
    if(this.captioner === null) {
      this.captioner = await pipeline(
        "image-to-text",
        "Xenova/vit-gpt2-image-captioning",
        { dtype: "q8"}
      )
    }
    return this.captioner;
  }

  static generateCaption(imgSrc) {

    console.log(imgSrc, "imgSrc na funcat")
    return this.getCaptioner().then((captioner) => {
      return captioner(
        imgSrc, {
        do_sample: true,
      });
    })
  }
}
