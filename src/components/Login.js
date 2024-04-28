import React, { useState } from 'react'

const Login = () => {

   const [username , setUser ] = useState("")

   const[password , setPass] = useState("")

   const [message , setMessage] = useState("")

   const handleUserChange = (e) =>{

       let {name , value } = e.target

       setUser({...username ,[name]:value})
   }

   const handleStateChange = (e) =>{

    let {name , value } = e.target

    setPass({...password ,[name]:value})
   }

  const handleSubmit =(e)=>{
e.preventDefault();

if(username === "User" && password === "Password"){

    setMessage("Welcome, user!");
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
     
              <div className='result'>{message}</div>

        </div>
    </div>
  )
}

export default Login