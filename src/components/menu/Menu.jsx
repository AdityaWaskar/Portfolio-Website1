import './menu.css'

const Menu = (param) => {
  return (
    <div className={"menu " + (param.menuOpen ? "active":"")}>
        <ul>
            <li onClick={() => param.setMenuOpen(false)}><a href="#intro">Home</a></li>
            <li onClick={() => param.setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={() => param.setMenuOpen(false)}><a href="#works">Works</a></li>
            <li onClick={() => param.setMenuOpen(false)}><a href="#feedback">Reviews</a></li>
            <li onClick={() => param.setMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>    
    </div>
  )
}

export default Menu