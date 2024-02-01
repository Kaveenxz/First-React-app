import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Hello I'm Kaveen</h1>
    <Slider title="Bread" description="Good bread" img={reactLogo}></Slider>
    <Slider title="Rice" description="Good rice" img={viteLogo}></Slider>
   </div>
  )
}

export default App
