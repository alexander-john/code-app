import { useState, useEffect } from 'react'
import MonacoEditor from '@monaco-editor/react'
import './App.css'

function App() {
  const [code, setCode] = useState('// Start typing your code here...')
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/title')
      .then(res => res.json())
      .then(data => setTitle(data.title))
      .catch(() => setTitle('Code App'))
  }, [])

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1>{title}</h1>
      <MonacoEditor
        height="90vh"
        defaultLanguage="javascript"
        value={code}
        onChange={setCode}
        options={{ fontSize: 16, minimap: { enabled: false } }}
      />
    </div>
  )
}

export default App
