import './App.css'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests'

function App() {

  return (
    <div className='card'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
