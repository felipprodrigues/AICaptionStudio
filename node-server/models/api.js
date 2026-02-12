const { Translator } = require("./translator")

function translate(textEng){
  return Translator.translator(textEng)
}

exports.translate = translate
