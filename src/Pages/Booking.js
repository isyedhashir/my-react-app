import React from 'react';

class Booking extends React.Component{
render(){
     return(
      <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="project-info-box">
                <p><b>Pick up Location:</b> Karachi </p>
                <p><b>Date:</b> 14.02.2020</p>
                <p><b>Drop off Location:</b> Lahore</p>
                <p><b>Date:</b> 10/20/2020</p>
                <p className="mb-0"><b>Rate:</b> $$$$</p>
              </div>{/* / project-info-box */}
              <div className="project-info-box mt-0 mb-0">
                <p className="mb-0">
                  <span className="fw-bold mr-10 va-middle hide-mobile"> </span></p><center> <button>Book Load </button></center>
                <p />
              </div>{/* / project-info-box */}
            </div>{/* / column */}
            <div className="col-md-7">
              <div className="project-info-box">
                <p><b>Equipment Type:</b> Dry Van</p>
                <p><b>Weight:</b> 34000, lbs
                </p>
              </div>{/* / project-info-box */}
            </div>{/* / column */}
          </div>
        </div>
    );
     }}
    export default Booking;