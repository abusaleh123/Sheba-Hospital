import image from '../../assets/Images/Service-Faq-Image.png'
import tweentyFour from '../../assets/Vectors/24.png'

const Health_Tips = () => {
    return (
        <div className='pt-25'>
            <div className='w-9/12 mx-auto flex gap-10'>
                {/* Image  */}
                <div>
<img src={image} alt="" />
<p className='text-[#FFFFFF] flex justify-center items-center text-2xl gap-4 rounded-b-md font-semibold bg-[#076CEC] py-5 px-4 '><img src={tweentyFour} alt="" />Emergency Services</p>
                </div>
                {/* Tips Text And Accordion */}
                <div>
                    <h1 className="text-3xl text-[#333333] font-bold">Health Tips & Info</h1>
                    <p className="w-5/6 text-[#858585] mt-4">Medicate is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>


                    {/* Accordion */}

<div className='bg-[#B2D1F9]/20 rounded-md mt-10'>
    
<div className="collapse collapse-arrow rounded-md ">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title bg-[#032D63] text-white font-semibold">Where Can I Go To Provide A Sample For Testing?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What Happens To My Sample Once I Have Provided It?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What Will Laboratory Testing Cost Me?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
<div className="collapse collapse-arrow rounded-none border-t border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">Using Innovative Technology?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Health_Tips;