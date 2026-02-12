class Translator {
  static staticTranslator = null;

  static translator(textEng) {
    return [{"translated_text": "Texto traduzido pela API"}]
  }
}

exports.Translator = Translator
