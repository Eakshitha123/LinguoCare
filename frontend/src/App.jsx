import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar will be displayed on all pages */}
      <Navbar />

      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} /> {/* Home Page */}
          <Route path='/login' element={<Login />} /> {/* Login Page */}
        </Routes>
      </div>

      {/* Footer will be displayed on all pages */}
      <Footer />
    </>
  );
};

export default App;
