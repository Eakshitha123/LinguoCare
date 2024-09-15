// /src/Home.jsx

import React, { useRef } from 'react';
import './Home.css';
import Faq from '../../Components/Faq/Faq';
import ContactUs from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import Services from '../../Components/Services/Services';
import About from '../../Components/About/About';
import Team from '../../Components/Team/Team';
import Navbar from '../../Components/Navbar/Navbar'; // Make sure the path is correct

const Home = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar scrollToRef={scrollToRef} refs={{
        about: aboutRef,
        contact: contactRef,
        faq: faqRef,
        header: headerRef,
        services: servicesRef,
        team: teamRef
      }} />
      <Header ref={headerRef} />
      <Services ref={servicesRef} />
      <About ref={aboutRef} />
      <Faq ref={faqRef} />
      <Team ref={teamRef} />
      <ContactUs ref={contactRef} />
    </div>
  );
};

export default Home;
