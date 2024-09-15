import React from 'react'
import  './Home.css'
import Faq from '../../Components/Faq/Faq'
import ContactUs from '../../Components/Contact/Contact'
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import About from '../../Components/About/About'

const Home = () => {
  return (
   <div>
    <Header/>
    <Services/>
    <About/>
    <Faq/>
    <ContactUs/>
   </div>
  )
}

export default Home