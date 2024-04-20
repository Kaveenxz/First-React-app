import img from '../assets/profile.png'
import '../App.css'
import email from '../assets/Mail.png'
import linkdin from '../assets/linkedin.png'

function Info() {
  return (
    <div className='info'>
        <img src={img} alt="logo" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <h5>Laurasmith.website</h5>

        <div className="btns">
        <button className='btn-mail'><img src={email} alt="" />Email</button> 
        <span className='space'></span>
        <button className='btn-linkdin'><img src={linkdin} alt="" />Linkdin</button>
        </div>
    </div>
  )
}

export default Info