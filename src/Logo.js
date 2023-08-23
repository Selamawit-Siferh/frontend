import React from 'react'
import selam from "./image/1.PNG" 
import selom from "./image/5.PNG" 

const Logo = () => {
    return (
        <div className='Logo'>
            <div>
            <img src={selom}alt="pro" className="prof"width={30}height={30}/>
<span className='span'><b>Eduvi</b></span>
        </div>
        

    
<h2>
Welcome to </h2>

<h2>Eduvi Online</h2>

<h2>Learning Platform</h2>


    <div>
    <img src={selam}alt="profile" className="profi"width={300}height={300}/>
    </div>

    
            
            </div>
            
            
    );
}

export default Logo;