import React, { useEffect, useState } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(input);
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      {/* <div className="container">
          <div><textarea id='editor' onInput={handleInput}>{input}</textarea></div>
          <div><textarea id='preview'></textarea></div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col"><textarea id='editor' onInput={handleInput}>{input}</textarea></div>
          <div className="col"><div id='preview'></div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
