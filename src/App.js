import './App.css';
import React from 'react';
import Home from './Pages/Home';
// import About from './Pages/About' 
// import Contact from './Pages/Contact'
// import Loadboard from './Pages/Loadboard'
import Booking from './Pages/Booking'
import Login from './Pages/Login'
// import Signup from './Pages/Signup'
import Header from './Components/Header';
import Footer from './Components/Footer';

import {Route,Routes} from 'react-router-dom';



function App() {
  return (

    <div>

<Header/>

    
 {/* {<Routes>}

 <Routes> */}
 <Routes>
  <Route path="/" element={<Home />}/>

    {/* <Route exact path='/About'component={About} /> */}
    {/* <Route exact path='/Contact'component={Contact} /> */}
    {<Route path='/Login'component={Login} />}
    {/* {/* <Route path='/Signup'component={Signup} />} */}
    {/* {<Route path='/Loadboard'component={Loadboard} /> } */}
    {<Route path='/Booking'component={Booking} /> }

      
   </Routes>
    <Header/>
<Footer/>
    </div>
    
  );
}

export default App;
