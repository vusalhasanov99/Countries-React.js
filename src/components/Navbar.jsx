import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Countries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Haqqinda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Elaqe</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar