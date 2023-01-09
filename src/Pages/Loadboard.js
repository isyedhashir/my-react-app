import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Loadboard (){
    const [loads, setLoads] = useState([]);
    const navigate = useNavigate();

        // Send data to the backend via POST
        const RegisterAccount = () => {
        axios.get('http://localhost:5000/loaddetails')
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
      function handleProceed(id){
        console.log(id)
        // console.log(id, "home");
        navigate(`/Booking/${id}`);
      };
     return(
        
<div className="section-title">
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Load ID</th>
              <th scope="col">Pick Up Location</th>
              <th scope="col">Pick Up Date</th>
              <th scope="col">Dropoff Location</th>
              <th scope="col">Dropoff Date</th>
              <th scope="col">Equipment Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {loads.map((option) => (
           <tr>
                  <td scope="row">{option.loadid}</td>
                  <td>{option.pickup}</td>
                  <td>{formatDate(option.pickupdate)}</td>
                  <td>{option.dropoff}</td>
                  <td>{formatDate(option.dropoffdate)}</td>
                  <td>{option.equipmenttype}</td>
                  <td><button onClick={(e)=>handleProceed(option.loadid)} className='btn btn-warning' >View Details</button></td>
              </tr>
        ))}
          </tbody>
        </table>
      </div>
      <br/>
      <br/>
      <br/>
      </div>
     )
    }
export default Loadboard
 
