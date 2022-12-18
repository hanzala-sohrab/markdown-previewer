import React, { useEffect, useState } from 'react';
import './App.css';
import { marked } from 'marked';
import highlightjs from "highlight.js";
import { h1, h2, link, list, code, blockQuote, image, text } from './sampleMarkdown';

function App() {
  const val = `${h1}\n${h2}\n${link}\n${blockQuote}\n${text}\n${list}\n${code}\n${image}`;
  const [input, setInput] = useState(val);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(input, {
      langPrefix: "hljs language-",
      highlight: function (code) {
        return highlightjs.highlightAuto(code, ["html", "javascript", "c", "cpp", "java", "python"]).value;
      },
      breaks: true
    });
  }, [input]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <textarea id='editor' onInput={handleInput} placeholder="Editor">{input}</textarea>
          </div>
          <div className="col">
            <div id='preview'>Preview</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
