import React from 'react';

class Footer extends React.Component{


    render(){
        return(

<div>  

<footer id="footer">
                 <div className="footer-top">
                     <div className="container">
                         <div className="row">

                             <div className="col-lg-3 col-md-6">
                                 <div className="footer-info">
                                     <h3>Ready To Load <span>.</span></h3>
                                     <p>
                                         XYZ  <br />
                                         KY,Sd Pakistan <br /><br />
                                         <strong>Phone:</strong> +92 5589 55488<br />
                                         <strong>Email:</strong> info@example.com<br />
                                     </p>
                                     <div className="social-links mt-3">
                                         <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                         <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                         <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                         <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                                         <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                     </div>
                                 </div>
                             </div>



                         </div>
                     </div>
                 </div>

                 <div className="container">
                     <div className="copyright">
                         &copy; Copyright <strong><span>Ready To Load </span></strong>. All Rights Reserved
                     </div>
                 </div>
             
             </footer>
</div>


        )
    }




}
export default Footer