import { Component } from "react";
import "./NavbarStyles.css"
import { Link } from "react-router-dom";


class Navbar extends Component {
  render(){
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"> CodeRunner  </h1>

        <ul className="nav-menu">
          <li>
            <a href="/">
            <i className="fa-light fa-house-user"></i>
            
              Home
       
            
            </a>
          </li>


        </ul>
        

      </nav>
      
    )
  }
}
export default Navbar;