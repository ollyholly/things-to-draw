// import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:3000/api/generate/prompt";

function App() {
  const [word, setWord] = useState(null);

  const getNewWord = () => {
    axios.get(baseURL).then((response) => {
      setWord(response.data.randomPrompt);
    });
  };

  useEffect(() => {
    getNewWord();
  }, []);

  if (!word) return null;

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
        <h1>{word}</h1>
      </header>
      <button onClick={getNewWord}>Get word</button>
    </div>
  );
}

export default App;
