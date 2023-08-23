import React, { useState } from 'react'
import ema from "./image/email.png"
import password from "./image/pass.png"
import profile from "./image/p.png"
import google from './image/6.PNG'

const Login = (props) => {
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }


    return (<div className='auth-form-container'>

      <h2>Login </h2>
      <form className="login-form"onSubmit={handleSubmit}>
      <img src={google}alt="email" className="email"/>

      <input  type='email' placeholder='sign in with Google'id='email'className='name'/>
      <lable>*** or sign in with your email***</lable>
        <label htmlFor="email" >email</label>
        <img src={ema}alt="email" className="email"/>

        
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com'id='email'className='name'/>
        
        <label htmlFor="password" >Password</label>
        <img src={password}alt="email" className="email"/>

        <input value={pass} onChange={(e)=>setPass(e.target.value)} type='password' placeholder='********'id='password'className='name'/>

     
        <button className='sub' type='submit'>SignIn</button>
      </form> 
      <div className=''> <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">keep me signed in </label> <a href="http://">Forgot password</a></div> 
    <button className='link-btn' onClick={()=>props.onFormSwitch('Register')}>Don't have an account?Signup here</button>
    </div>
    );
    
}

export default Login;