import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';

function AddLoads() {
  const [pickup, setPickup] = useState();
  const [pickupdate, setPickupdate] = useState();
  const [dropoff, setDropoff] = useState();
  const [dropoffdate, setDropoffdate] = useState();
  const [rate, setRate] = useState();
  const [weight, setWeight] = useState();
//   const [equipmenttype, setEquipmenttype] = useState();
  const options = ["Refer", "Dry Van"];
  const [equipmenttype, setEquipmenttype] = useState(options[0]);
  const navigate = useNavigate();
  var jsonData = 
    {
      "pickup":pickup,
      "pickupdate":pickupdate,
      "dropoff":dropoff,
      "dropoffdate":dropoffdate,
      "rate":rate,
      "weight":weight,
      "equipmenttype":equipmenttype
  }

  function RegisterLoad() {
    console.log("button clicked")
    
    // Send data to the backend via POST
    axios.post('http://localhost:5000/loaddetails',jsonData)
    .then(function (response) {
      console.log(response.data)
      if(response.data === 'Load posted successfully')
      {
        toast.success("Load posted successfully",{position: toast.POSITION.TOP_CENTER});
        setTimeout(() => {
          navigate("/")
     }, 3000);
      }
      if(response.data === 'Already Exist'){
        toast.error("Username Already Exist",{position: toast.POSITION.TOP_CENTER});
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
     return(
        
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
        <main id="main">
          <ToastContainer />
        {/* <section className="vh-100" style={{backgroundColor: '#eee'}}> */}
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: '25px'}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Loads</p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control" name='name' value={pickup} onChange={e => setPickup(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example1c" >Pick Up Location</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control" value={pickupdate} onChange={e => setPickupdate(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example1c">Pick Up Date</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" value={dropoff} onChange={e => setDropoff(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example3c" >Drop off Location</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example4c" className="form-control" value={dropoffdate} onChange={e => setDropoffdate(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example4c" >Drop off Date</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example4c" className="form-control" value={weight} onChange={e => setWeight(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example4c" >Weight</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example4c" className="form-control" value={rate} onChange={e => setRate(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example4c" >Rate</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Equipment Type</label>
  </div>
  {/* <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="Refer" onClick={setEquipmenttype("Refer")}>Refer</option>
    <option value="Drive Van" onClick={setEquipmenttype("Drive Van")}>Drive Van</option>
  </select> */}
  <select
        onChange={(e) => setEquipmenttype(e.target.value)}
        defaultValue={equipmenttype}
      >
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
</div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg" onClick={RegisterLoad}>Add Load</button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </section> */}
<br/>
<br/>
      </main>
       
        </div>
     
        )
}

export default AddLoads
