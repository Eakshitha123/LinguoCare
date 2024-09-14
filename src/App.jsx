import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='app'>
      <Navbar />
      
      <Footer />
    </div>  
    </>
  );
};

export default App;
