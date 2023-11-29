import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HEADER_LOGO } from '../utils/constants';
import TopBanner from './TopBanner';

export default function Header() {

  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={HEADER_LOGO} alt="..." height="36"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/shopall" ? "active" : ""}`} to="/shopall">Shop All</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/makeup" ? "active" : ""}`} to="/makeup">Makeup</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/skincare" ? "active" : ""}`} to="/skincare">Skin Care</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/haircare" ? "active" : ""}`} to="/haircare">Hair Care</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                  <i className="fa fa-shopping-cart"></i> <span className='badge badge-warning' id='lblCartCount'> 0 </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      { location.pathname !== "/" ? <TopBanner location={location.pathname} /> : '' }

    </>
    
  )
}
