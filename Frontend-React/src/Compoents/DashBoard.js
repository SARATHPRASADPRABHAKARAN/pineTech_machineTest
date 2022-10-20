import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  useEffect(() => {
    console.log("subru");
    getData();
  }, []);

  const [data, setUserData] = useState("");
  const navigate=useNavigate();

  function getData() {
    axios
      .get("http://localhost:7000/getUsers", {
        headers: { token: JSON.parse(localStorage.getItem("token")) },
      })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        navigate('/loginPage')
      });
  }

  const logout=()=>{
    localStorage.removeItem("token")
    navigate('/loginPage')
  }

  return (
    
        <div class="container">
          <div class="table">
            <div className="d-flex" style={{justifyContent:"end"}}>
            <button type="button" class="btn btn-danger"  onClick={()=>{logout()}}>logout</button>
            </div>
     <div style={{textAlign:"center"}}>   <h3>Users</h3></div> 
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">FullName</th>
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 &&
                  data.map((item) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{item.email}</th>
                          <td>{item.fullName}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
    
  );
}

export default Dashbord;
