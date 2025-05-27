import { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import './App.css'

function App() {
  const [code, setCode] = useState('// Start typing your code here...')

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
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
