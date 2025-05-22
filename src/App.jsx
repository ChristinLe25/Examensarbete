import { useState } from 'react'
import reactLogo from './assets/listina-loga.svg'
import viteLogo from './assets/blueshappe.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
          <img src={viteLogo} className="logo" alt="Vite logo" />
        
        
          <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>
      <h1>Examensarbete💪✨🎉</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          litte till
        </p>
      </div>
      <p>
        litte täxt och sådant
      </p>
    </>
  )
}

export default App
