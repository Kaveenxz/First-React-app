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
          <Slider title="Bread" img={reactLogo}>Good bread</Slider>
        </div>
        <div className="col-6">
          <Slider title="Rice" img={viteLogo}>Good rice</Slider>

        </div>
      </div>

    </div>
  )
}

export default App
