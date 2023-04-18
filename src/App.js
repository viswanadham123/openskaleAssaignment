// import {BrowserRouter, Route, Switch} from 'react-router-dom'

import MainPage from './component/MainPage'

import RegistrationForm from './component/RegistrationForm'

import LoginForm from './component/LoginForm'

import Home from './component/Home'

import Profile from './component/Profile'

import CompanyRegistrationForm from './component/CompanyLoginPage'

import RecruiterHome from './component/RecruiterHomePage'

import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";


import './App.css'
import CompanyRegistration from './component/CompanyLoginPage'
import CompanyProfile from './component/CompanyProfile'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>} />;
      <Route path="/registration" element={<RegistrationForm/>} />;
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/student-home" element={<Home/>} />;
      <Route path="/student-profile" element={<Profile/>} />;
      <Route path="/recruiter-home" element={<RecruiterHome/>} />
      <Route path="/companyprofile" element={<CompanyProfile/>} />
      <Route path="/recruiter-registration" element={<CompanyRegistrationForm/>} />
    </Routes>
  </Router>
)

App()

export default App