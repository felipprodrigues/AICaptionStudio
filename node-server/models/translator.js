const { pipeline } = require("@huggingface/transformers");

class Translator {
  static staticTranslator = null;

  static async getTranslator() {
    if (!this.staticTranslator) {
      // const { pipeline } = await import('@huggingface/transformers');

      this.staticTranslator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M",
        { dtype: "q8" }
      );
    }
    return this.staticTranslator;
  }

  static async translator(textEng) {
    const translator = await this.getTranslator();
    return translator(textEng, {
      src_lang: "eng_Latn",
      tgt_lang: "por_Latn"
    });
  }
}

exports.Translator = Translator
