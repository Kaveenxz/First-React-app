import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Hello I'm Kaveen</h1>

      <div className="row">
        <div className="col-6">
          <Slider title="Bread" description="Good bread" img={reactLogo}></Slider>
        </div>
        <div className="col-6">
          <Slider title="Rice" description="Good rice" img={viteLogo}></Slider>

        </div>
      </div>

    </div>
  )
}

export default App
