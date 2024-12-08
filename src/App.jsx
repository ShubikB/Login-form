import { useState } from "react"
import "./App.css"
import Form from "./Components/Form.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>click count: {count}</button>
      </div>
    </>
  )
}

export default App
