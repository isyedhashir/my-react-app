import './App.css';
import React from 'react';
import { useState } from 'react';
import Home from './Pages/Home';
// import About from './Pages/About' 
// import Contact from './Pages/Contact'
// import Loadboard from './Pages/Loadboard'
import Booking from './Pages/Booking'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Header from './Components/Header';
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

  <Route path="/Login" element={<Login/>}/>
  <Route path="/Loadboard" element={<Loadboard/>}/>
    {/* <Route exact path='/About'component={About} /> */}
    {/* <Route exact path='/Contact'component={Contact} /> */}
    {/* {<Route path='/Login'component={Login} />} */}
    {/* {/* <Route path='/Signup'component={Signup} />} */}
    {/* {<Route path='/Loadboard'component={Loadboard} /> } */}
    <Route path="/Booking/:id" element={<Booking />}/>
    <Route path="/AddLoad" element={<AddLoads />}/>
    
      
   </Routes>
<Footer/>
    </div>



  );
}

export default App;
