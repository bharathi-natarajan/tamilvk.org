import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { navLinks } from '../data'
import './CompNavbar.css'
import { useState } from 'react'

const CompNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const handleToggle = () => setExpanded((prev) => !prev)
  const closeMenu = () => {
    setExpanded(false)
    const collapseEl = document.getElementById('nav-collapse')
    if (collapseEl?.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(collapseEl, {
        toggle: false,
      })
      bsCollapse.hide()
    }
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light py-2">
      <div className="container-fluid mx-5">
        <div className="d-flex align-items-center me-auto">
          <a className="navbar-brand p-0 me-2" href="/">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="logo-img logo-responsive"
            />
          </a>
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <h4 className="mb-0 font-responsive">தமிழ் வளர்ச்சிக் கழகம்</h4>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-collapse"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="nav-collapse"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navLinks.map(({ id, href, text, subLinks }) => {
              if (subLinks?.length > 0) {
                return (
                  <li key={id} className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle menu-item-font"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      onClick={closeMenu}
                    >
                      {text}
                    </Link>
                    <ul className="dropdown-menu">
                      {subLinks.map((sub) => (
                        <li className="dropdown-item" key={sub.id}>
                          <NavLink
                            className="dropdown-item menu-item-font"
                            to={sub.href}
                            onClick={closeMenu}
                          >
                            {sub.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              } else {
                return (
                  <li key={id} className="nav-item">
                    <NavLink
                      className="nav-link menu-item-font"
                      to={href}
                      onClick={closeMenu}
                    >
                      {text}
                    </NavLink>
                  </li>
                )
              }
            })}
          </ul>
        </div>

        <div className="d-none d-lg-flex gap-2">
          <a
            href="https://facebook.com/tamilvalarchi"
            target="_blank"
            rel="noreferrer"
            className="social-icon facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/tamil_valarchi"
            target="_blank"
            rel="noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon youtube"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default CompNavbar
