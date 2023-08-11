import { Outlet, Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">

      <div className="navbar-left">
            <Link to="/">Home</Link>
      </div>

      <div className="navbar-right">
            <Link to="/timeline">Timeline</Link>
      </div>

      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;