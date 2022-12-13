import React from 'react';

class Header extends React.Component{


render(){

    return(


<div>

<header id="header" className="fixed-top ">
             <div className="container d-flex align-items-center justify-content-lg-between">

                 <h1 className="logo me-auto me-lg-0"><a href="index.html">Ready To Load <span>.</span></a></h1>
                 <nav id="navbar" className="navbar order-last order-lg-0">
                     <ul>
                         <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
                         <li><a className="nav-link scrollto" href="/about">Goals</a></li>
                         <li><a className="nav-link scrollto" href="Persona.html"> Personas</a></li>
                         <li><a className="nav-link scrollto" href="sketches.html">Sketches</a></li>
                         <li><a className="nav-link scrollto" href="Critique.html">Critique</a></li>
                         <li><a className="nav-link scrollto" href="framework.html">Technologies/Framework</a></li>

                     </ul>
                     <i className="bi bi-list mobile-nav-toggle"></i>


                 </nav>
             </div>
         </header>


</div>


    )


}





} 
export default Header