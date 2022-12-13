import './App.css';
import Home from './Pgaes/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BroweserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (

    <div>
<route>
    <Header/>
<switch>

    <Route exact path='/'component={Home} />
    <Route path='/About'component={About} />
    <Route path='/Contact'component={Contact} />
    <Route path='/Login'component={Login} />
    <Route path='/Signup'component={Signup} />
    <Route path='/Loadboard'component={Loadboard} />
    </switch>
    <Footer/>  
    </route>
    </div>
    
  );
}

export default App;
