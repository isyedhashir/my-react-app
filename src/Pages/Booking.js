import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking (){
  const { id } = useParams();
  const [loads, setLoads] = useState([]);
  const [dropoffdate, setDropoffdate] = useState();
  const navigate = useNavigate();
  var jsonData = 
  {
    "loadid":id,
  }
  console.log(id)
  const RegisterAccount = () => {
    axios.post('http://localhost:5000/loaddetailsbyid',jsonData)
    .then(function (response) {
        setLoads(response.data)
      console.log(response.data)
    })
    
    .catch(function (error) {
      console.log(error);
  });
}

useEffect(()=> {
    RegisterAccount()
},[])
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric"}
  return new Date(dateString).toLocaleDateString(undefined, options)
}
function handleProceed(){
  axios.post('http://localhost:5000/loaddetailsbook',jsonData)
    .then(function (response) {
      toast.success("Booking Successful Check your email",{position: toast.POSITION.TOP_CENTER});
      setTimeout(() => {
        navigate("/")
   }, 3000);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
  });
};
     return(
      <div>
      <br />
      <br />
      <br />
      <br />
      <ToastContainer />
      {loads.map((option, idx) => (
          <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="project-info-box mt-0">
                <h5>PROJECT DETAILS</h5>
                <p className="mb-0">Journy will start from <span>{option.pickup}</span> felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
              </div>{/* / project-info-box */}
              <div className="project-info-box">
                <p><b>Pick Up Location:</b>{option.pickup}</p>
                <p><b>Pick Up Date:</b>{formatDate(option.pickupdate)}</p>
                <p><b>Dropoff Location:</b>{option.dropoff}</p>
                <p><b>Dropoff Date:</b>{formatDate(option.dropoffdate)}</p>
                <p><b>Equipment Type:</b>{option.equipmenttype}</p>
                <p className="mb-0"><b>Rate:</b>{option.rate}</p>
                <p className="mb-0"><b>Weight</b>{option.weight}</p>
              </div>{/* / project-info-box */}
            </div>{/* / column */}
            <div className="col-md-7">
              {/* <img src="https://via.placeholder.com/400x300/FFB6C1/000000" alt="project-image" class="rounded"> */}
              <div className="project-info-box">
                <p><button onClick={handleProceed} className='btn btn-warning' >Book Load</button></p>
              </div>{/* / project-info-box */}
            </div>{/* / column */}
          </div>
        </div>
        ))}
      
      <br />
      <br />
    </div>
    
    );
}
    export default Booking;
