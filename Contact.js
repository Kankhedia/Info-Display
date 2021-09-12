import React from 'react'

const Contact = (props) => {
    return (
      <>
      <div className ="contact_info">
        <div className="container-fluid">
         <div className ="row">
           <div className ="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className ="contact_info_items d-flex justify-content-start align-item-center">
              <img src="https://img.icons8.com/nolan/64/iphone.png" alt ="phone"/>
                <div className="contact_info_contents ">
                  <div className="contact_info_title">
                  Phone
                  </div>
                  <div className="contact_info_text">
                  +91 123 635 8789
                  </div>
                </div>
                 
                 
            </div>
            <div className ="contact_info_items d-flex justify-content-start align-item-center">
            <img src="https://img.icons8.com/nolan/64/email.png" alt ="phone"/>
                <div className="contact_info_contents ">
                  <div className="contact_info_title">
                  Email
                  </div>
                  <div className="contact_info_text">
                  vijay@gmail.com
                  </div>
                </div>
                 
                 
            </div>
            <div className ="contact_info_items d-flex justify-content-start align-item-center">
            <img src="https://img.icons8.com/nolan/64/address.png" alt ="phone"/>
                <div className="contact_info_contents ">
                  <div className="contact_info_title">
                   Address
                  </div>
                  <div className="contact_info_text">
                  Calgary
                  </div>
                </div>
                 
                 
            </div>

           </div>

         </div>

        </div>

      </div>

      <div className="contact_form">
        <div className ="container">
          <div className="row">
             <div className ="col-lg-10 offset-lg-1">
               <div className="contact_container py-5">
                 <div className="contact_form_title">
                   <h2>Get in Touch</h2>
                    <form id="contact_form">
                        <div className="contact_form_name d-flex justify-content-between align-items-betweem">
                        <input type="text" id="contact_form_name" placeholder="Your Name" required="true"/>

                        
                        <input type="text" id="contact_form_email" placeholder="Your Email" required="true"/>

                        
                        <input type="number" id="contact_form_phone" placeholder="Your Phone Number" required="true"/>

                        </div>
                        <div className ="contact_form_message mt-5">
                          <textarea className="text_field" placeholder="Message" cols="50" rows="10"></textarea>

                        </div>
                        <div className="contact_form_button">
                           <button type = "submit" className ="submit">Send Message</button>

                        </div>
                    </form>
                 </div>

               </div>

             </div>
          </div>
        

       </div>

      </div>
      </>
    )
}

export default Contact