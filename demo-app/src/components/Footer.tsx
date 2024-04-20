import fbIcon from '../assets/Facebook Icon.png'
import twitterIcon from '../assets/Twitter Icon.png'
import instrIcon from '../assets/Instagram Icon.png'
import gitIcon from '../assets/GitHub Icon.png'


function Footer() {
  return (
    <div className='footer'>
        <img src={twitterIcon} alt="twitter" />
        <img src={fbIcon} alt="fb" />
        <img src={instrIcon} alt="inster" />
        <img src={gitIcon} alt="git" />
    </div>
  )
}

export default Footer