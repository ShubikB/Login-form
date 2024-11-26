import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import MyComponent from "./normalfunction"
import GreetUser from "./greetUser"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <GreetUser username='Shubik' />
      {/*  Imported a normal function  */}
      {/* methood 1 */}
      <MyComponent objective='Fill in the Details' lastUpdate='Milk Replaced' />
      {/* methood 2 */}
      {/* {MyComponent()} */}

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>click count: {count}</button>
      </div>
    </>
  )
}

export default App
