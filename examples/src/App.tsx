import { useMemo, useState } from 'react'
import { alphaBlend } from "@napolab/alpha-blend"

function App() {
  const [color1, setColor1] = useState("#ff0000")
  const [color2, setColor2] = useState("#00ff00")
  const color = useMemo(() => alphaBlend(color1, "#00000005"), [color1, color2])

  return (
    <div>
      <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
      <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />

      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
    </div>
  )
}

export default App
