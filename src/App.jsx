import React from 'react'
import useRandomColor from './useRandomColor'
import { rgb2hex } from './utils'

function App() {
  const [color, randomizeColor] = useRandomColor()

  return (
    <div className="App" style={{ background: color }} onClick={randomizeColor}>
      <h1 className="colorCode" onClick={e => e.stopPropagation()}>
        {rgb2hex(color)}
      </h1>
    </div>
  )
}

export default App
