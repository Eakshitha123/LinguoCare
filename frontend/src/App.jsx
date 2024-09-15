import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Therapist from './Pages/Therapist/Therapist'; // Therapist page
import Supervisor from './Pages/Supervisor/Supervisor'; // Import the Supervisor page

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
          <Route path='/therapist' element={<Therapist />} /> {/* Therapist Page */}
          <Route path='/supervisor' element={<Supervisor />} /> {/* Supervisor Page */}
        </Routes>
      </div>
    </>
  );
};

export default App;
