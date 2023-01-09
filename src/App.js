import './App.css';
import React from 'react';
import { useState } from 'react';
import About from './Pages/About' 
import Booking from './Pages/Booking'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Footer from './Components/Footer';

import {Route,Routes} from 'react-router-dom';
import Contact from './Pages/Contact';
import MainPage from './Pages/MainPage';
import { ReactSession } from 'react-client-session';
import HeaderLogged from './Components/HeaderLogged';
import Loadboard from './Pages/Loadboard';
import AddLoads from './Pages/AddLoads';

function App() {
  ReactSession.setStoreType("localStorage");
  console.log(ReactSession.get("logged"))
  return (

    <div>
{<HeaderLogged/>
}
    
 {/* {<Routes>}

 <Routes> */}
 <Routes>
  <Route path="/" element={<MainPage />}/>
  <Route path="/Contact" element={<Contact />}/>
  <Route path="/Signup" element={<Signup />}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Loadboard" element={<Loadboard/>}/>
    <Route path="/Booking/:id" element={<Booking />}/>
    <Route path="/AddLoad" element={<AddLoads />}/>
    
      
   </Routes>
<Footer/>
    </div>



  );
}

export default App;
