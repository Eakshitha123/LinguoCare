import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import User from './Pages/User/User';

import FindTherapist from './Pages/FindTherapist/FindTherapist';
import MessageTherapist from './Pages/MessageTherapist/MessageTherapist';
import ViewProgress from './Pages/ViewProgress/ViewProgress';
import ViewSessions from './Pages/ViewSessions/ViewSessions';
import CreatePlanPage from './Pages/CreatePlanPage/CreatePlanPage';
import AssignedCasesPage from './Pages/AssignedCasesPage/AssignedCasesPage';
import MessageSPage from './Pages/MessageSPage/MessageSPage';
import SessionReportPage from './Pages/SessionReportPage/SessionReportPage';
import Therapist from './Pages/Therapist/Therapist';
import Supervisor from './Pages/Supervisor/Supervisor';

// Import Supervisor-specific Pages
import ManageTherapistPage from './Pages/ManageTherapistPage/ManageTherapistPage';
import EvaluateSessionsPage from './Pages/EvaluateSessionsPage/EvaluateSessionsPage';
import ReviewPlanPage from './Pages/ReviewPlanPage/ReviewPlanPage';
import MessageTPage from './Pages/MessageTPage/MessageTPage';
import ProfileUser from './Pages/ProfileUser/ProfileUser';
import ProfileTherapist from './Pages/ProfileTherapist/ProfileTherapist';
import ProfileSupervisor from './Pages/ProfileSupervisor/ProfileSupervisor';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Routes>
          {/* Home and Login Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* User Pages */}
          <Route path="/user" element={<User />} />
          <Route path="/find-therapist" element={<FindTherapist />} />
          <Route path="/message-therapist" element={<MessageTherapist />} />
          <Route path="/view-progress" element={<ViewProgress />} />
          <Route path="/view-sessions" element={<ViewSessions />} />

          {/* Therapist Pages */}
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/create-plan-page" element={<CreatePlanPage />} />
          <Route path="/assigned-cases-page" element={<AssignedCasesPage />} />
          <Route path="/message-s-page" element={<MessageSPage />} />
          <Route path="/session-report-page" element={<SessionReportPage />} />

          {/* Supervisor Pages */}
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/manage-therapist" element={<ManageTherapistPage />} />
          <Route path="/evaluate-sessions" element={<EvaluateSessionsPage />} />
          <Route path="/review-plan" element={<ReviewPlanPage />} />
          <Route path="/message-t-page" element={<MessageTPage />} />

          
          <Route path='/user-profile' element={<ProfileUser />} />
          <Route path='/therapist-profile' element={<ProfileTherapist/>}/>
          <Route path='/supervisor-profile' element={<ProfileSupervisor/>} />


        </Routes>
      </div>
    </>
  );
};

export default App;
