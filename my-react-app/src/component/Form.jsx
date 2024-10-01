import React, { useState, useEffect } from "react";
import monkey from "../assets/monkey.jpg";

function Form() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const getApi = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      if (data.success) {
        setMemes(data.data.memes);
      } else {
        console.error("Error fetching memes:", data.error_message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const random = () => {
    if (memes.length > 0) {
      const randomIndex = Math.floor(Math.random() * memes.length);
      setSelectedMeme(memes[randomIndex]);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <main className="form">
      <input type="text" placeholder="Input name" />
      <input type="text" placeholder="Hello" />
      <button onClick={random}>Get a new meme image</button>
      {selectedMeme && <img src={selectedMeme.url} alt={selectedMeme.name} />}
    </main>
  );
}

export default Form;
