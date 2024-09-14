import React from 'react'

import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'

const App= ()=> 
  {
  const [count, setCount] = useState(0)
  return (
      <>
    <div className='app'>
      <Navbar/>
     
     <Services/>
     <Footer/>
     </>
  );
  
}

export default App;