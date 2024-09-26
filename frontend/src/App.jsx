import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';
import FindTherapist from './Pages/FindTherapist/FindTherapist';
import MessageTherapist from './Pages/MessageTherapist/MessageTherapist';
import ViewProgress from './Pages/ViewProgress/ViewProgress';
import ViewSessions from './Pages/ViewSessions/ViewSessions';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='app'>
        <Routes>
          {/* Home and Login Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          
          {/* User Pages */}
          <Route path='/user' element={<User />} />
          <Route path='/find-therapist' element={<FindTherapist />} />
          <Route path='/message-therapist' element={<MessageTherapist />} />
          <Route path='/view-progress' element={<ViewProgress />} />
          <Route path='/view-sessions' element={<ViewSessions />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
