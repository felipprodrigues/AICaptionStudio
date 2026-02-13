const { Translator } = require("./translator")

async function translate(textEng){
  return Translator.translator(textEng)
}

exports.translate = translate
