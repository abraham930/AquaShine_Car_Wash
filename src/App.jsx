import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProductsPage from './pages/AllProductsPage'
import AllServicesPage from './pages/AllServicesPage'

/*
  pages: 'home' | 'all-products' | 'all-services'
*/

function HomePage({ onNavigate }) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <Services onViewAll={() => onNavigate('all-services')} />
        <Products onViewAll={() => onNavigate('all-products')} />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  )
}

function App() {
  const [page, setPage] = useState('home')

  /* Central navigation handler */
  const handleNavigate = (dest) => {
    if (dest === 'home') {
      setPage('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (dest === 'all-products') {
      setPage('all-products')
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    if (dest === 'all-services') {
      setPage('all-services')
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    /* Hash-based scroll targets like '#about', '#contact' */
    if (dest.startsWith('#')) {
      if (page !== 'home') {
        setPage('home')
        /* Wait for home page to render, then scroll */
        setTimeout(() => {
          document.querySelector(dest)?.scrollIntoView({ behavior: 'smooth' })
        }, 80)
      } else {
        document.querySelector(dest)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  /* Handle "Get One" / "Book Now" events dispatched from sub-pages */
  useEffect(() => {
    const handler = () => handleNavigate('#contact')
    window.addEventListener('navigate-home-contact', handler)
    return () => window.removeEventListener('navigate-home-contact', handler)
  }, [page])

  if (page === 'all-products') {
    return (
      <>
        <Navbar onNavigate={handleNavigate} />
        <AllProductsPage onBack={() => handleNavigate('home')} />
        <Footer onNavigate={handleNavigate} />
      </>
    )
  }

  if (page === 'all-services') {
    return (
      <>
        <Navbar onNavigate={handleNavigate} />
        <AllServicesPage onBack={() => handleNavigate('home')} />
        <Footer onNavigate={handleNavigate} />
      </>
    )
  }

  return <HomePage onNavigate={handleNavigate} />
}

export default App
