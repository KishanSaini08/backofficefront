import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login.jsx";
import Home from './components/home.jsx';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
         
       
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        
          
        </Routes>
      </Router>
    </>
  )
}
export default App