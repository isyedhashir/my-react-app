import React from 'react';

function MainPage (){
    return(
    <div>
        <section id="hero" className="d-flex align-items-center justify-content-center">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
              <div className="col-xl-6 col-lg-8">
                <h1>SIMPLIFY FREIGHT AND SAVE TIME.<span>.</span></h1>
                <h2>Reimagine the future of logistics with an advanced platform for both shippers and carriers.</h2>
              </div>
            </div>

          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay={100}>
                  <h3>Our Mission </h3>
                  <p className="fst-italic">
                    To be the leading digital freight platform for fresh produce.
                  </p>
                  Founded in 2018 by former Walmart technocrats, Ready To Load is reimagining the future supply chain for the fresh produce industry. Hwy Haul is building a next-generation digital freight platform that connects shippers directly with truckers by eliminating intermediary friction, introducing end-to-end digital applications, and building advanced cold chain compliance. As produce spends 50 percent of its life on trucks, Ready To Load is creating a business-class shipping experience for a farm-to-fork taste. Our goal is to be the leading digital freight platform for produce by delivering freshness at your doorstep, reducing wastage during transportation, and creating a future for sustainable growth.
                  {/* <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul> */}
                  {/* <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p> */}
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients">
            <div className="container" data-aos="zoom-in">
              {/* <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src="assets/img/clients/client-1.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-2.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-3.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-4.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-5.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-6.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt=""></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div> */}
            </div></section>{/* End Clients Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <center><h1> Industries we serve</h1></center>
              <div className="row">
                {/* <div class="image col-lg-6" style='background-image: url("assets/img/features.jpg");' data-aos="fade-right"></div> */}
                <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
                  <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay={150}>
                    <i className="bx bx-receipt" />
                    <h4>Fresh Produce</h4>
                    {/* <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p> */}
                  </div>
                  <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                    <i className="bx bx-cube-alt" />
                    <h4>Consumer Goods</h4>
                    {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p> */}
                  </div>
                  <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                    <i className="bx bx-images" />
                    <h4>Manufacturing</h4>
                    {/* <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p> */}
                  </div>
                  <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay={150}>
                    <i className="bx bx-shield" />
                    <h4>Agriculture</h4>
                    {/* <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Features Section */}
          {/* ======= Services Section ======= */}
          <section id="services" className="services">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>Book a load in seconds.</p>
                <p>
                  On-demand truckload shipping for your business. 
                  No need to wait. 
                  Get an instant quote now.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                    <h4><a href>Refer</a></h4>
                    <p> Perishable freight that needs to be transported in temperature controlled vehicles</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-file" /></div>
                    <h4><a href>Dry Van</a></h4>
                    <p>Dry van shipping is one of the most popular and widely trusted freight transportation methods available</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer" /></div>
                    <h4><a href>Flat bed </a></h4>
                    <p>Flatbeds can accommodate cargo capacities up to about 48,000 pounds and load heights up to 8.5 feet high.</p>
                  </div>
                </div>
                
              </div>
            </div></section>{/* End Services Section */}
          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="text-center">
                <h3>In our business, predictability is success.</h3>
                <p> With reliable capacity, touchless load booking, real-time visibility, actionable data insights and dedicated support, Hwy Haul has you covered.</p>
                <a className="cta-btn" href="#">Learn More </a>
              </div>
            </div>
          </section>{/* End Cta Section */}
          {/* ======= Portfolio Section ======= */}
          
          --&gt;
          
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
              <div>
                <iframe style={{border: 0, width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
              </div>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
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
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        <div />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
)
 }

 export default MainPage
