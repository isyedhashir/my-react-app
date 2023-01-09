import React from 'react';

class Contact extends React.Component{


    render(){
        return(
        
         
            <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
              <div>
                <iframe style={{border: 0, width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462117.0529596769!2d66.8258186887212!3d25.193458569113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sbg!4v1673283333889!5m2!1sen!2sbg" frameBorder={0} allowFullScreen />
              </div>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>KY, SD, Pakistan</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55s</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>




        )        


    }

}
export default Contact
