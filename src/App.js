import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About' 
import Contact from './Pages/Contact'
import Loadboard from './Pages/Loadboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Router as Route,Router,Routes} from 'react-router-dom';



function App() {
  return (

    <div>

<Header/>
<Router>
    
 {/* <Routes> */}

 <Routes>
  <Route path="/" element={<Home />}/>
</Routes>
    {/* <Route exact path='/About'component={About} />
    <Route exact path='/Contact'component={Contact} />
    <Route path='/Login'component={Login} />
    <Route path='/Signup'component={Signup} />
    <Route path='/Loadboard'component={Loadboard} /> */}
  {/* </Routes> */}
      
   </Router>
    <Header/>
    </div>
    
  );
}

export default App;
