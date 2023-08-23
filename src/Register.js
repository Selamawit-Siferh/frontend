import React, { useState } from 'react'
import ema from "./image/email.png"
import password from "./image/pass.png"
import profile from "./image/p.png"
import google from './image/6.PNG'
const Register = (props) => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setname]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }


    return (
    <div className='auth-form-container'>
      <h2>Signup </h2>

        <form className="register-form" onSubmit={handleSubmit}>
        <img src={google}alt="email" className="email"/>

        <input  type='email' placeholder='signup with Google'id='email'className='name'/>
      <p>*** or signup with your email***</p>   
        <label htmlFor="name">Full name</label>
        <img src={profile}alt="email" className="email"/>

        <input value={name}  type='name' placeholder='full name'id='name'className='name'/>


          <label htmlFor="email">email</label>
        <img src={ema}alt="email" className="email"/>

          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com'id='email'className='name'/>
          <label htmlFor="password">Password</label>
        <img src={password}alt="email" className="email"/>

          <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='********'id='password'className='name'/>
        <div className=''> <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">I agreed terms and conditions</label></div>
          <button className='sub' type='submit'>SignUp</button>
        </form>
       
        <button  className='link-btn'  onClick={()=>props.onFormSwitch('Login')}>Already have an account?Signin here</button>
       

      </div>  
    );
}

export default Register;