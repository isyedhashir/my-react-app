import React from 'react';

// class Booking extends React.Component{
// render(){
//      return(


//          <><><body>
//              <header id="header" class="fixed-top " style="background-color: black;" />
//              <div class="container d-flex align-items-center justify-content-lg-between" />

//              <h1 class="logo me-auto me-lg-0" /><a href="index.html" />Ready To Load <span>.</span></a></><nav id="navbar" class="navbar order-last order-lg-0" /><ul>
//                  <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
//                  <li><a class="nav-link scrollto" href="#about">About</a></li>

//                  {/* </li> */}
//                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>

//                  <li class="dropdown"><a href="#"><span>Get Started</span> <i class="bi bi-chevron-down"></i></a>
//                      <ul>
//                          <li class="dropdown"><a href="#"><span>Carrier</span> <i class="bi bi-chevron-right"></i></a>
//                              <ul>
//                                  <li><a href="signup.html">Sign Up</a></li>
//                                  <li><a href="signup.html">Login</a></li>
//                              </ul>
//                          </li>
//                          <li class="dropdown"><a href="#"><span>Shipper</span> <i class="bi bi-chevron-right"></i></a>
//                              <ul>
//                                  <li><a href="signup.html">Sign Up</a></li>
//                                  <li><a href="signup.html">Login</a></li>
//                              </ul>
//                          </li>
//                      </ul>
//                  </li>

//              </ul><i class="bi bi-list mobile-nav-toggle" /></></i>
     
           
//           </nav>
//     </>
   
    
//         </div> 
//       </header> 
 
//   <><br>
//               <br>
//                   <br>
//                       <br>
//                           <div class="container">
//                               <table class="table table-striped">
//                                   <thead>
//                                       <tr>
//                                           <th scope="col">LOAD ID</th>
//                                           <th scope="col">ORIGIN</th>
//                                           <th scope="col">DESTINATION</th>
//                                           <th scope="col">PRICE</th>
//                                       </tr>
//                                   </thead>
//                                   <tbody>
//                                       <tr>
//                                           <th scope="row">1</th>
//                                           <td>Location A </td>
//                                           <td>Location B</td>
//                                           <td>@$$$$</td>
//                                       </tr>
//                                       <tr>
//                                           <th scope="row">2</th>
//                                           <td>Location C</td>
//                                           <td>Location D</td>
//                                           <td>$$$$$</td>
//                                       </tr>
//                                       <tr>
//                                           <th scope="row">3</th>
//                                           <td>Location E</td>
//                                           <td>Location F</td>
//                                           <td>$$$$</td>
//                                       </tr>
//                                       <tr>
//                                           <th scope="row">4</th>
//                                           <td>Location G</td>
//                                           <td>Location H</td>
//                                           <td>$$$$</td>
//                                       </tr>
//                                       <tr>
//                                           <th scope="row">5</th>
//                                           <td>Location I</td>
//                                           <td>Location J</td>
//                                           <td>$$$$</td>
//                                       </tr>

//                                   </tbody>
//                               </table>
//                           </div>
//                       </br>
//                   </br>
//               </br>
//           </br>
//           <body/>

// )
// }
//  }       

class Booking extends React.Component{
    render () {
      return (
        <div>
          <header id="header" className="fixed-top " style={{backgroundColor: 'black'}}>
            <div className="container d-flex align-items-center justify-content-lg-between">
              <h1 className="logo me-auto me-lg-0"><a href="index.html">Ready To Load <span>.</span></a></h1>
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                  <li className="dropdown"><a href="#"><span>Get Started</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li className="dropdown"><a href="#"><span>Carrier</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="signup.html">Sign Up</a></li>
                          <li><a href="signup.html">Login</a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a href="#"><span>Shipper</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="signup.html">Sign Up</a></li>
                          <li><a href="signup.html">Login</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>
            </div> 
          </header> 
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="project-info-box mt-0">
                  <h5>PROJECT DETAILS</h5>
                  <p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
                </div>{/* / project-info-box */}
                <div className="project-info-box">
                  <p><b>Client:</b> CUPCAKE CO</p>
                  <p><b>Date:</b> 14.02.2020</p>
                  <p><b>Designer:</b> James Doe</p>
                  <p><b>Tools:</b> Illustrator</p>
                  <p className="mb-0"><b>Budget:</b> $500</p>
                </div>{/* / project-info-box */}
                <div className="project-info-box mt-0 mb-0">
                  <p className="mb-0">
                    <span className="fw-bold mr-10 va-middle hide-mobile">Share:</span>
                    <a href="#x" className="btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0"><i className="fab fa-facebook-f" /></a>
                    <a href="#x" className="btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0"><i className="fab fa-twitter" /></a>
                    <a href="#x" className="btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0"><i className="fab fa-pinterest" /></a>
                    <a href="#x" className="btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0"><i className="fab fa-linkedin-in" /></a>
                  </p>
                </div>{/* / project-info-box */}
              </div>{/* / column */}
              <div className="col-md-7">
                {/* <img src="https://via.placeholder.com/400x300/FFB6C1/000000" alt="project-image" class="rounded"> */}
                <div className="project-info-box">
                  <p><b>Categories:</b> Design, Illustration</p>
                  <p><b>Skills:</b> Illustrator</p>
                </div>{/* / project-info-box */}
              </div>{/* / column */}
            </div>
          </div>
        </div>
      );
    }
  }

  export default Booking;

