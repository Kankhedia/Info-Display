import React, { useEffect, useState } from 'react'
import pf1 from '../images/pf1.jpg'
import {useHistory} from 'react-router-dom'

const About = (props) => {
   const [userData,setuserData] = useState ({});

   const history = useHistory();

   const callAboutPage = async () =>{
      try {
         const res = await  fetch('/about',{
          method :"GET",
          headers : {
            Accept:"application/json",
            "Content-Type" :"application/json"
          },
          credentials:"include"
         });
         const data = await res.json();
         console.log(data);
         setuserData(data);

         if(!res.status === 200 ){
           const error = new Error(res.error);
           throw error;
         }
      } catch (err) {
        console.log(err);
        history.push('/login');
      }

   }

    useEffect(()=>{
        callAboutPage();
    },[]);
    return (
        <>
         <div className="container">
          <form method ="GET">
           <div className ="row">
             <div className = "col-md-4">
              <img src={pf1} height="150px" alt="profile"/>
              </div>
             <div className = "col-md-8">
              <div className ="profile_head">
               <h5>Virat Kohli</h5>
               <h6>Cricketer</h6>
               <p className ="profile_rating mt-3 mb-5"> RANKING : 1/10</p>

               <ul className="nav nav-tabs" role="tablist">
                 <li className="nav-item">
                 <a className="nav-link active" id="home-tab" data-toggle="tab"  href="#home" role ="tab">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role ="tab" >Timeline</a>
                </li></ul>
              </div>
            </div>
            
             <div className ="col-md-2">
              <input type="submit" className="profile-edt-btn" name="btnAddMore" value="Edit Profile"/>

              </div>
           </div>
           <div className ="row">
             <div className="col-md-4">
              <div className ="profile-work">
                <p>WORK LINK</p>
                <a href="cricbuzz.com" target="kohli">Cricbuzz</a><br/>
                <a href="cricbuzz.com" target="kohli">Instagram</a><br/>
                <a href="cricbuzz.com" target="kohli">Facebook</a><br/>
                <a href="cricbuzz.com" target="kohli">Youtube</a><br/>
             </div>
             </div>

           </div>

           <div className="col-md-8 py-5 about-info">
             <div className ="tab-content-profile-tab" id="Mytablecontent"> 
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                <div className="row">
                  <div className="col-md-6">
                     <label> UserId</label>
                     </div>

                     <div className="col-md-6">
                     <p>745745895642</p>
                     </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                     <label> Name</label>
                     </div>

                     <div className="col-md-6">
                     <p>Virat Kohli</p>
                     </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                     <label> UserId</label>
                     </div>

                     <div className="col-md-6">
                     <p>745745895642</p>
                     </div>
                </div>
                </div>
             </div>

           </div>
           
          </form>

         </div>
        </>
    )
}

export default About