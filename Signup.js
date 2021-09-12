import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useHistory } from 'react-router-dom'
import signup from '../images/signup.jpg'


const Signup = () => {
   const history = useHistory();

  const[user,setuser] = useState({
    name:"" ,email:"",number:"",work:"",pass:"",cpass:""
  })

  let name,value;

  const handleInputs =(e) =>{
    console.log(e);
    name = e.target.name
    value = e.target.value
    setuser({...user,[name]:value})
  }

  const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,number,work,pass,cpass} = user;
    const res = await fetch("/register",{
      method: "POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
        name,email,number,work,pass,cpass
      })

    });
    const data= await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert(" Registration Successful");
      console.log(" Registration Successful");
      history.push("/login");
    }

  }
    return (
       <>
       <section className="signup">
           <div className ="container mt-5">
             <div className="signup-content  ">
               <div className="signup-form ml-14">
                 <h2>Sign up </h2>
                  <form method="POST" className="register-form " id="register-form">
                    <div className="form-group ">
                      <label htmlFor ="name">
                        <i className="zmdi zmdi-account-box-o"> </i>
                        <input type ="text" name="name" id="name" autoComplete="off" placeholder="Your Name" value={user.name} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor ="email">
                        <i className="zmdi zmdi-email"> </i>
                        <input type ="text" name="email" id="email" autoComplete="off" placeholder="Your Email" value={user.email} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor ="phone">
                        <i className="zmdi zmdi-phone"> </i>
                        <input type ="number" name="number" id="number" autoComplete="off" placeholder="Your Phone" value={user.number} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor ="work">
                        <i className="zmdi zmdi-laptop-mac"> </i>
                        <input type ="text" name="work" id="work" autoComplete="off" placeholder="Your Profession" value={user.work} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor ="pass">
                        <i className="zmdi zmdi-lock"> </i>
                        <input type ="password" name="pass" id="pass" autoComplete="off" placeholder="Your Password" value={user.pass} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor ="cpass">
                        <i className="zmdi zmdi-lock"> </i>
                        <input type ="password" name="cpass" id="cpass" autoComplete="off" placeholder="Confirm Your Password" value={user.cpass} onChange={handleInputs}/>
                      </label>
                    </div>
                    <div className="form-group form-button">
                      <input type="submit" name="submit" id="submit" className="form-submit" value="register" onClick={PostData}/>

                    </div>

                  </form>
                </div>
             </div>
                  <div className="signup-images ml-4">
                    <figure>
                        <img src ={signup} alt="signup" height="350px" width="350px"></img>
                    </figure>
                     <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
                  </div>

        </div>
        
         </section>
       </> 
    )
}

export default Signup
