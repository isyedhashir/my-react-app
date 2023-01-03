import React from 'react';

class Header extends React.Component{


render(){

    return(


<div>

<header id="header" className="fixed-top " style={{backgroundColor: 'black'}}>
             <div className="container d-flex align-items-center justify-content-lg-between">

                 <h1 className="logo me-auto me-lg-0"><a href="index.html">Ready To Load <span>.</span></a></h1>
                 <nav id="navbar" className="navbar order-last order-lg-0">
                     <ul>
                         <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
                         <li><a className="nav-link scrollto" href="/About">About</a></li>
                         <li><a className="nav-link scrollto" href="/Contact"> Contact</a></li>
                         <li><a className="nav-link scrollto" href="/Loadboard">Loadboard</a></li>
                         <li><a className="nav-link scrollto" href="/Login">Login</a></li>
                         <li><a className="nav-link scrollto" href="/Signup">Signup</a></li>

                     </ul>
                     <i className="bi bi-list mobile-nav-toggle"></i>


                 </nav>
             </div>
         </header>


</div>


    )


}





} 
export default Header
