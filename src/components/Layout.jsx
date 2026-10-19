import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Preloader from './Preloader.jsx'
import ScrollTop from './ScrollTop.jsx'

export default function Layout({ variant = 'inner', children }) {
  return (
    <>
      <Preloader />
      <Header variant={variant} />
      <main className="main">{children}</main>
      <Footer variant={variant} />
      <ScrollTop />
    </>
  )
}

function Header({ variant }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false)

  useEffect(() => {
    const toggleScrolled = () => setScrolled(window.scrollY > 100)
    toggleScrolled()
    window.addEventListener('scroll', toggleScrolled)
    window.addEventListener('load', toggleScrolled)
    return () => {
      window.removeEventListener('scroll', toggleScrolled)
      window.removeEventListener('load', toggleScrolled)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('scrolled', scrolled)
  }, [scrolled])

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', mobileOpen)
  }, [mobileOpen])

  useEffect(() => {
    if (variant !== 'home') return
    const scrollspy = () => {
      const position = window.scrollY + 200
      let current = null
      for (const item of navItems) {
        const section = document.querySelector(item.hash)
        if (!section) continue
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          current = item.hash
        }
      }
      if (current) setActiveHash(current)
    }
    scrollspy()
    document.addEventListener('scroll', scrollspy)
    return () => document.removeEventListener('scroll', scrollspy)
  }, [variant])

  const closeMobileNav = () => {
    if (mobileOpen) setMobileOpen(false)
  }

  const headerClass =
    variant === 'home'
      ? 'header d-flex align-items-center fixed-top'
      : 'header d-flex align-items-center sticky-top'

  const sitename = variant === 'home' ? 'Tsega' : 'Craftivo'

  return (
    <header id="header" className={headerClass}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">{sitename}</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.hash}>
                <Link
                  to={`/${item.hash}`}
                  className={activeHash === item.hash ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {variant === 'inner' && (
              <li className={`dropdown${dropdownOpen ? ' active' : ''}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setDropdownOpen((open) => !open)
                  }}
                >
                  <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className={dropdownOpen ? 'dropdown-active' : ''}>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className={`dropdown${deepDropdownOpen ? ' active' : ''}`}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setDeepDropdownOpen((open) => !open)
                      }}
                    >
                      <span>Deep Dropdown</span>{' '}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul className={deepDropdownOpen ? 'dropdown-active' : ''}>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
            )}

            <li>
              <Link to="/#contact" onClick={closeMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none ${mobileOpen ? 'bi-x' : 'bi-list'}`}
            onClick={() => setMobileOpen((open) => !open)}
          ></i>
        </nav>

        <Link className="btn-getstarted" to="/#about" onClick={closeMobileNav}>
          Get Started
        </Link>
      </div>
    </header>
  )
}

const navItems = [
  { label: 'Home', hash: '#hero' },
  { label: 'About', hash: '#about' },
  { label: 'Resume', hash: '#resume' },
  { label: 'Services', hash: '#services' },
  { label: 'Projects', hash: '#portfolio' },
]

function Footer({ variant }) {
  if (variant === 'home') {
    return (
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <Link to="/" className="logo d-flex align-items-center">
                <span className="sitename">Tsega</span>
              </Link>
              <p>Tsega Desalegn Melaku junior fullstack developer</p>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Receiving &amp; reviewing cases</a>
                </li>
                <li>
                  <a href="#">Collecting and verifying documents</a>
                </li>
                <li>
                  <a href="#">Teaching</a>
                </li>
                <li>
                  <a href="#">mentoring</a>
                </li>
                <li>
                  <a href="#">web developing</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>Addis Ababa</p>
              <p>Ethiopia</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+251941815846</span>
              </p>
              <p>
                <strong>Email:</strong> <span>tsegadesalegn2123@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Tsega</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> |{' '}
            <a href="https://bootstrapmade.com/tools/">DevTools</a>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link to="/" className="logo d-flex align-items-center">
              <span className="sitename">Craftivo</span>
            </Link>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra
              videa magna derita valies darta donna mare fermentum iaculis eu non diam
              phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+1 5589 55488 55</span>
            </p>
            <p>
              <strong>Email:</strong> <span>info@example.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Craftivo</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> |{' '}
          <a href="https://bootstrapmade.com/tools/">DevTools</a>
        </div>
      </div>
    </footer>
  )
}
