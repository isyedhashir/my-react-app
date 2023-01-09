import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  var jsonData = 
    {
      "fullname":name,
      "username":email,
      "password":password,
      "companyname":company
  }

  function RegisterAccount() {
    console.log("button clicked")
    
    // Send data to the backend via POST
    axios.post('http://localhost:5000/signup',jsonData)
    .then(function (response) {
      console.log(response.data)
      if(response.data === 'Sucess')
      {
        toast.success("Successfully Registered!",{position: toast.POSITION.TOP_CENTER});
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
        <main id="main">
          <ToastContainer />
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: '25px'}}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control" name='name' value={name} onChange={e => setName(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control" value={company} onChange={e => setCompany(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example1c">Company Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example3c" >Your Email</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <input type="password" id="form3Example4c" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                              <label className="form-label" htmlFor="form3Example4c" >Password</label>
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg" onClick={RegisterAccount}>Register</button>
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
        </section>
      </main>
     
     
        )
}

export default Signup
