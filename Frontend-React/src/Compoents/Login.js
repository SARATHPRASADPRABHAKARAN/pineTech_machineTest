import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function logins(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    axios
      .post("http://localhost:7000/login", request)
      .then((resp) => {
        console.log(resp)
        localStorage.setItem("token",JSON.stringify(resp.data.token))
  
        alert(resp.data.message);
  
        navigate("/dashboard");
      
      })
      .catch((err) => {
        console.log(err)
        
       alert(err.response.data.message);
      });
  }
  



  return (
    <div class="log-form">
      <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
 
  <div className="wrapper fadeInDown">
  <div> <h2>Login</h2></div>
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
     
      {/* Login Form */}
      <form onSubmit={(e) => logins(e)}>
        <input
          type="email"
          id="email"
          className="fadeIn second"
          name="email"
          placeholder="email"
          required
        />
        <input
        required
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
        />
        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        
      </div>
    </div>
  </div>
</>


    </div>
  )
}




export default Login
