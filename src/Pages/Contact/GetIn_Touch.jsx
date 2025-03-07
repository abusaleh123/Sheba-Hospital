import bg_image from '../../assets/Images/cdfdsf.png'
import image from '../../assets/Images/Adobe Express - file.png'
import { useState } from 'react';
import Swal from 'sweetalert2';


const GetIn_Touch = () => {


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
        <div className=' my-20'>
                <div className='flex gap-10 items-center mx-auto w-9/12 service-linear rounded-md'>
                    {/* Image Container */}
                    <div className=' w-8/12' style={{backgroundImage:`url(${bg_image})`, backgroundRepeat: 'no-repeat'}}>
                        <img className='' src={image} alt="" />
                    </div>
                    {/* Text Container */}
                    <div className='pr-8 w-8/12'>
                                
{/* Message Sending Form */}

            
                <p className="text-[#858585] mb-4">You Deserve The Best Healthcare</p>
                <h1 className="text-[#076CEC] mb-6 font-bold  text-3xl">Let’s Get In Touch</h1>

                <form action="" className='space-y-4' onSubmit={onSubmit}>
             
                <input type="text" name='name' required className="input py-6 w-full bg-white rounded-md"  placeholder= " Your Full Name" />
                
                <input type="email" name='email' className="input py-6 w-full bg-white rounded-md"
                 placeholder="Your Email Here " />
                <textarea className='py-6 w-full bg-white px-6 focus:outline-none rounded-md' placeholder='Comment' name="message" id="" cols="15" rows="3"></textarea>
                <button className="btn cl
        btn-ghost  bg-[#E6327C] mt-2 w-full px-6 py-7 rounded-md text-lg text-white border-1">Submit Your Message</button>
              
                </form>
           
                    </div>
                </div>
        </div>
    );
};

export default GetIn_Touch;