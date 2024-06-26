import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import WhyChoose from './sections/WhyChoose'
import Pricing from './sections/Pricing'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <WhyChoose/>
    <Pricing/>
    <Services/>
    <Gallery/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
