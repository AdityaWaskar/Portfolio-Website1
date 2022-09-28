import './topbar.css'
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Topbar = (param) => {
  return (
    <div className={"topbar " + (param.menuOpen ? "active":"")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>.genius</a>
          <div className="itemContainer">
            <BsFillPersonFill className='icon' />
            <span>+91 9082375004</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail className='icon'/>
            <span>adityawaskar03@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humburger" onClick={() => param.setMenuOpen(!param.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar