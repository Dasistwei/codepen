import React from 'react'
import { Controlled as EditorArea } from 'react-codemirror2';
import 'codemirror/lib/codemirror'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'


export default function Editor({languageName, value, onChange}) {
  return (
  <div className="editor-container">
    <div className="editor-header">
      {languageName}
      <button className="editor-collapes">O/C</button>
    </div>

    <EditorArea
      onBeforeChange={(editor, data, value)=>{
        onChange(value)
        }}
        value={value}
      options={{
        lineNumbers: true,
        theme: "material-palenight",
        styleActiveLine: true,
        mode: "xml",
        lineWrapping: true,
        lint: true,
      }}
    />
    </div>
  )
}
