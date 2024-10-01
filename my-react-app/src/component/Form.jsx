import React from "react";
import monkey from "../assets/monkey.jpg";

function Form() {
  return (
    <main className="form">
      <input type="text" placeholder="input name" />
      <input type="text" placeholder="hello" />
      <button>Get a new meme image</button>
      <img src={monkey} alt="monkey" />
    </main>
  );
}

export default Form;
