import React, { useState } from 'react'

const Login = () => {

   const [username , setUser ] = useState("")

   const[password , setPass] = useState("")

   const [message , setMessage] = useState("")

   const handleUserChange = (e) =>{

    

       setUser(e.target.value)
   }

   const handleStateChange = (e) =>{

    

    setPass(e.target.value)
   }

  const handleSubmit =(e)=>{
e.preventDefault();

if(username === "user" && password === "password"){

    setMessage(<p>{"Welcome, user"}</p>);
}
  else{

     setMessage("Invalid username or password");
  }     
  }

  return (
    <div>
        <div className="login">
            <h1>Login Page</h1>
        </div>
        <div className="Login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Username">Username</label>
                    <input type="text" value={username} name ="Username"  onChange={handleUserChange} required/>

                    <label htmlFor="Password">Password</label>
                    <input type="password" value={password} name="Password"  onChange={handleStateChange} required />
                </div>

                <button type="submit">Submit</button>
                
            </form>
     
              

        </div>

        <div className='result'>{message}</div>
    </div>
  )
}

export default Login