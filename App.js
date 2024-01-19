import '../index.css';
import Editor from './Editor';
import {useState} from 'react'

function App() {
const [html, setHtml]=useState('')
const [css, setCss]=useState('')
const [javascript, setJavascript]=useState('')
  return (
    <div className="App">
    <div className="coding-area">
      <Editor 
        languageName = "html"
        value = {html}
        onChange={setHtml}
        />
      <Editor 
        languageName = "css"
        value = {css}
        onChange={setCss}
        />
      <Editor 
        languageName = "javascript"
        value = {javascript}
        onChange={setJavascript}
        />
      {/* <Editor/>
      <Editor/> */}
    </div>
    <div className="show-board">
      <iframe 
        title='output'
         sandbox='allow-scripts' 
         srcDoc={
          `<html>
            <style>${css}</style>
            <body>
              ${html}
            <script>${javascript}</script>
            </body>
          </html>`
          }
         style= {{
          border: 'none',
          width: '100%',
          height: '100%',
          background: 'gray'
          }}
        />
    </div>
    </div>
  );
}

export default App;
