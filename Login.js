import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import signin from '../images/signin.jpg'

const Login = (props) => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();
      const res = await fetch('/login',{
        method :"POST",
        headers : {
          "Content-Type" :"application/json"
        },
        body:JSON.stringify({
          email,pass
        })
    });

    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Creditionals");
    }else{
      window.alert("Login Successful");
      history.push("/");
    }

  }
    return (
        <>
         <section className="signin">
           <div className ="container mt-5">
             <div className="signin-content  ">
               <div className="signin-form ml-14">
                 <h2>Login in </h2>
                  <form method ="POST" className="register-form " id="register-form">
                    
                    <div className="form-group">
                      <label htmlFor ="email">
                        <i className="zmdi zmdi-email"> </i>
                        <input type ="text" name="email" id="email" autoComplete="off" value ={email} onChange = {(e)=> setEmail(e.target.value)} placeholder="Your Email"/>
                      </label>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor ="pass">
                        <i className="zmdi zmdi-lock"> </i>
                        <input type ="password" name="pass" id="pass" autoComplete="off" value ={pass} onChange = {(e)=> setPass(e.target.value)} placeholder="Your Password"/>
                      </label>
                    </div>

                    <div className="form-group form-button">
                      <input type="submit" name="submit" id="submit" className="form-submit" value="Login" onClick ={loginUser}/>

                    </div>

                  </form>
             </div>
             </div>
                  <div className="signin-images ml-4">
                    <figure>
                        <img src ={signin} alt="signin" height="350px" width="350px"></img>
                    </figure>
                     <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                  </div>

        </div>
        
         </section>

        </>
    )
}

export default Login;
