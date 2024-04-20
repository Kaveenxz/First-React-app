import img from '../assets/profile.png'
function Info() {
  return (
    <div>
        <img src={img} alt="logo" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <h5>Laurasmith.website</h5>

        <button>Email</button>
        <button>Linkdin</button>

    </div>
  )
}

export default Info