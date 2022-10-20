import React from 'react'
import './signUp.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function SignUp() {

  const navigate=useNavigate();


  function dosignup (e){

    e.preventDefault();
     
   let signupData={
      
     fullName:document.getElementById('fullName').value ,
     email:document.getElementById('email').value ,
     password:document.getElementById('password').value
  
  }
  axios.post('http://localhost:7000/signup',signupData)
       .then((response)=> {
         console.log("test")
         alert(response.data.message)
         navigate('/loginPage')
       })
  
  }

  
  return (
    <div>
    <div class="log-form">
      
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  
  <div className="wrapper fadeInDown">
  <div><h2>Signup </h2></div>
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
     
      {/* Login Form */}
      <form onSubmit={(e) => dosignup(e)} >
        <input
          type="text"
          id="fullName"
          className="fadeIn second"
          name="fullName"
          placeholder="name"
         required
        />

        <input
          type="email"
          id="email"
          className="fadeIn third"
          name="Email"
          placeholder="Email"
          required
        />
        
        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
          required
        />





        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        
      </div>
    </div>
  </div>
</div>


    </div>

  )
}






export default 
SignUp