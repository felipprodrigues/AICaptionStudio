const express = require("express");
const cors = require("cors");
const { translate } = require("./models/api");
const { Translator } = require("./models/translator");

const app = express();
const port = 3000

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173"
}))

app.get("/", (req, res) => {
  res.send("Hello")
})

app.post("/translate", async (req, res) => {
  const textEng = req.body["text"]

  const textPTBR = await translate(textEng)

  res.send(textPTBR)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})

