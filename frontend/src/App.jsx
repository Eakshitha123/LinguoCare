import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} /> {/* Correct path */}
        </Routes>
        <Footer />
      </div>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer />
    </div>  
    </>
  );
};

export default App;
