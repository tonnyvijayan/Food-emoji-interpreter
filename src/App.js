import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setmeaning] = useState("");
  

  var emojiDictionary = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry"
  };

  var emojisweknow = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = "This is not present in our database";
    }
    setmeaning(meaning);
  }
  function emojiclickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji Interpreter</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Paste your emoji"
      ></input>
      <div>{meaning}</div>
      <h3>Emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickhandler(emoji)}
            style={{ fontSize: "1.2rem", padding: "0.7rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
