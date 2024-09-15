import React from 'react'
import  './Home.css'
import Faq from '../../Components/Faq/Faq'
import ContactUs from '../../Components/Contact/Contact'
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import Team from '../../Components/Team/Team'

const Home = () => {
  return (
   <div>
    <Header/>
    <Services/>
    <Faq/>
    <Team/>
    <ContactUs/>
   </div>
  )
}

export default Home