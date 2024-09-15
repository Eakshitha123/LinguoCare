import React from 'react'
import  './Home.css'
import Faq from '../../Components/Faq/Faq'
import ContactUs from '../../Components/Contact/Contact'
import Header from '../../Components/Header/Header'

const Home = () => {
  return (
   <div>
    <Services/>
    <Header/>
    <Faq/>
    <ContactUs/>
   </div>
  )
}

export default Home