import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import PortfolioDetails from './pages/PortfolioDetails.jsx'
import ServiceDetails from './pages/ServiceDetails.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import StarterPage from './pages/StarterPage.jsx'

const bodyClasses = {
  '/': 'index-page',
  '/portfolio-details': 'portfolio-details-page',
  '/service-details': 'service-details-page',
  '/privacy': 'privacy-page',
  '/terms': 'terms-page',
  '/starter-page': 'starter-page-page',
  '/404': 'page-404',
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    document.body.className = bodyClasses[location.pathname] || ''

    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
    AOS.refreshHard()

    if (location.hash) {
      const section = document.querySelector(location.hash)
      if (section) {
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop
        window.setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop || '0', 10),
            behavior: 'smooth',
          })
        }, 100)
        return
      }
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <Layout variant={isHome ? 'home' : 'inner'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/starter-page" element={<StarterPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
