import { Outlet, Link, NavLink } from "react-router-dom"
import "./layout.scss";
import logo from "../assets/images/LOGO.png";
import logoW from "../assets/images/LOGOWHITE.png";

export default function Layout() {
  return (
    <div className="Layout">
      <header className="layout-header">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo Kasa" className="logo KASA" />
          </div>
          <br />
          <div className="links">

            <NavLink 
                to="/" 
                end
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Accueil
            </NavLink>{" "}

            <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                À propos
            </NavLink> 

          </div>
        </nav>
      </header>

      <main className="layout-content">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <img src={logoW} alt="Logo Kasa" className="logo KASA" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  )
}