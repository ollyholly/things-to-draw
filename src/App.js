import './App.css';
import axios from 'axios';
import React from 'react';

const baseURL = 'http://localhost:3000/api/generate/prompt';

function App() {
  const [word, setWord] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setWord(response.data);
    });
  }, []);

  if (!word) return null;

  console.log(word);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
        <h1>{word.randomPrompt}</h1>
      </header>
      <button onClick={setWord}>Create Post</button>
    </div>
  );
}

export default App;
