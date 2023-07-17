import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="my logo"/>
        <span>YemiDev</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icons" />
        <img src="/app.svg" alt="/app" className="icons" />
        <img src="expand.svg" alt="expand" className="icons" />
        <div className="notification">
        <img src="notifications.svg" alt="" className="icons" />
        <span>1</span>
        </div>
        <div className="user">
        <img src="https://images.pexels.com/photos/17459719/pexels-photo-17459719/free-photo-of-fashion-woman-girl-cute.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="icons" />
        <span>Ajoke</span>
        </div>
        <img src="/setting.svg" alt="" className="icons" />
      </div>
    </div>
  )
}

export default Navbar
