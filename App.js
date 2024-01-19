import '../index.css';
import Editor from './Editor';
import { useState, useEffect } from 'react'

function App() {
  const [html, setHtml]=useState('')
  const [css, setCss]=useState('')
  const [javascript, setJavascript]=useState('')
  const [ srcDoc, setSrcDoc ]=useState('')

  useEffect(()=>{
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <style>${css}</style>
            <body>
              ${html}
            <script>${javascript}</script>
            </body>
          </html>`        
      )
      
    }, 1000);
    
    return ()=>clearTimeout(timeOut)
  },[html, css, javascript])
  
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
    </div>
    <div className="show-board">
      <iframe 
        title='output'
         sandbox='allow-scripts' 
         srcDoc={srcDoc}
         style= {{
          border: 'none',
          width: '100%',
          height: '100%',
          background: 'white'
          }}
        />
    </div>
  </div>
  );
}

export default App;
