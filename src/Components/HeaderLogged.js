import React from 'react';
import { ReactSession } from 'react-client-session';
import { useState } from 'react';

function HeaderLogged() {
return(
<div>

{/* <header id="header" className="fixed-top " style={{backgroundColor: 'black'}}>
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
         </header> */}
 <header id="header" className="fixed-top " style={{backgroundColor: 'black'}}>
          <div className="container d-flex align-items-center justify-content-lg-between">
            <h1 className="logo me-auto me-lg-0"><a href="/">Ready To Load <span>.</span></a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><a className="nav-link scrollto active" href="/home">Home</a></li>
                <li><a className="nav-link scrollto" href="/about">About</a></li>
                {/* <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a>  </li> */}
                {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a> */}
                {/* <ul>
              <li><a href="#">Drop Down 1</a></li>    
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul> */}
                <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                <li className="dropdown"><a href="#"><span>Get Started</span> <i className="bi bi-chevron-down" /></a>
                  <ul>
                    <li className="dropdown"><a href="#"><span>Carrier</span> <i className="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="/Signup">Sign Up</a></li>
                        <li><a href="/Login">Login</a></li>
                      </ul>
                    </li>
                    {/* <li className="dropdown"><a href="#"><span>Shipper</span> <i className="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="signup.html">Login</a></li>
                      </ul>
                    </li> */}
                  </ul>
                </li>
                <li><a className="nav-link scrollto" href="/Loadboard">Dashboard</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}      
            {/* <li class="dropdown"><a href="#about" class="get-started-btn scrollto">Get Started</a> */}
          </div> 
        </header>

</div>


    )


} 
export default HeaderLogged
