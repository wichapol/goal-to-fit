import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityReport from '../Pages/ActivityReport';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ActivityCreate from '../Pages/ActivityCreate';
import UserForm from '../Pages/UserForm';
import './App.css';
import 'animate.css';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<UserForm />} />
        <Route path="/activity-report" element={<ActivityReport />} />       
        <Route path="/ativity-create" element={<ActivityCreate />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
