import { useState } from 'react';
import './App.css';
import generateCaption from './models/api.js';

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [caption, setCaption] = useState("<Caption>");

  const handleCaption = async () => {
    setCaption("Generating caption...");
    const newCaption = await generateCaption(imgSrc);

    setCaption(newCaption[0]["generated_text"]);
  }

  return (
    <>
      <h1>Caption Generator</h1>

      <div className="wrapper">
        <div className="url-form">
          <input type="text" onChange={e => setImgSrc(e.target.value)} />
          <button onClick={() => handleCaption()}>Generate</button>
        </div>
        <div className="container-image">
          <img height={200} src={imgSrc} />
          <span>{caption}</span>
        </div>
      </div>
    </>
  )
}

export default App
