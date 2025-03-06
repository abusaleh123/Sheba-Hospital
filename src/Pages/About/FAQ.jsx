import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FAQ = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5db32ea6-1462-41b7-9b69-5e5268df05ce");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };






    return (
        <div className='w-9/12 mx-auto pb-20'>

        <div className='flex gap-10 justify-end'>
{/* Message Sending Form */}

            <div className='p-6 bg-[#F2F8FF] rounded-md w-5/12'>
                <p className="text-[#858585] mb-4">You Deserve The Best Healthcare</p>
                <h1 className="text-[#076CEC] mb-6 font-bold  text-3xl">Let’s Get In Touch</h1>

                <form action="" className='space-y-4' onSubmit={onSubmit}>
             
                <input type="text" name='name' required className="input py-6 w-full bg-white "  placeholder= " Your Full Name" />
                
                <input type="text" name='email' className="input py-6 w-full bg-white "
                 placeholder="Your Email Here " />
                <textarea className='py-6 w-full bg-white px-6 focus:outline-none rounded-md' placeholder='Comment' name="message" id="" cols="15" rows="3"></textarea>
                <button className="btn cl
        btn-ghost  bg-[#E6327C] mt-2 w-full px-6 py-7 rounded-md text-lg text-white border-1">Submit Your Message</button>
              
                </form>
            </div>
  

 {/* Tips Text And Accordion */}
 <div className=' w-7/12 h-full '>
                    <h1 className="text-4xl text-[#333333] font-bold">Frequently Asked <br /> Questions</h1>
                    <p className="w-5/6 text-[#858585] mt-4">Dolorem omnis malesuada, vero ante! Quisquam congue aspernatur ut, platea? Leo tincidunt. Sociis officia class congue, non felis, fringilla error aperiam aut..</p>


                    {/* Accordion */}

<div className='bg-[#B2D1F9]/20 rounded-md mt-10'>
    
<div className="collapse collapse-arrow rounded-md ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title bg-[#032D63] text-white font-semibold">How can I book the appointment date?</div>
  <div className="collapse-content text-sm">Dolorem omnis malesuada, vero ante! Quisquam congue aspernatur ut, platea? Leo tincidunt. Sociis officia class congue, non felis,</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What Happens To My Sample Once I Have Provided It?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email . login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What Will Laboratory Testing Cost Me?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes. "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Using Innovative Technology?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes. "My Account" settings and select "Edit Profile" to make changes</div>
</div>
</div>
                </div>
        </div>
        </div>
    );
};

export default FAQ;