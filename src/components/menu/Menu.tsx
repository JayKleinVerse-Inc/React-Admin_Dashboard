import "./menu.scss"
import { Link } from "react-router-dom"


const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="listItem">
        <img src="/home.svg" />
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="listItem">
        <img src="/profile.svg" alt=""/>
        <span className="listItemTitle">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="listItem">
        <img src="/home.svg" />
        <span className="listItemTitle">HOME</span>
        </Link>
        <Link to="/" className="listItem">
        <img src="/home.svg" />
        <span className="listItemTitle">HOME</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
