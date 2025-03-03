import image from '../../assets/Images/Banner.jpg'
import check from '../../assets/Icons/about-check.png'
import phone from '../../assets/Icons/about-phone.png'


const AboutUs = () => {
    return (
        <div className="bg-[#F2F8FF] mt-25">
           <div className="w-9/12 mx-auto py-28">
            {/* Main Section */}
           <div className='flex gap-10 items-center '>

           {/* About Image */}
                <div className='flex-1'>
                <img className='rounded-md object-cover w-5/6' src={image} alt="" />
                </div>
                {/* About Section's Text */}
                <div className='flex-1'>
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="text-[#858585] mt-4">The Online Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services and specialists</p>

                    {/* About Us Key Features Sections */}
                    <div className='mt-10 space-y-4'>
                        <p className='flex items-center gap-2 text-[#333333] font-bold'><img src={check} alt="" />Maintain highest professional standards.</p>
                        <p className='flex items-center gap-2 text-[#333333] font-bold'><img src={check} alt="" />Religiously follow the “Safe Practice” protocol.</p>
                        <p className='flex items-center gap-2 text-[#333333] font-bold'><img src={check} alt="" />Be polite and respectful.</p>
                    </div>

                    {/* About Us Button and number Section */}
                    <div className='mt-24 flex gap-10 items-center'>
                    <button className="btn btn-ghost bg-[#032D63]  text-lg text-white rounded-md px-6 py-6">Make an Appointment</button>
                    <p className='flex items-center gap-2 text-xl text-[#E6327C] font-bold'><img src={phone} alt="" />+88 01234567890</p>
                    </div>
                </div>
           </div>
           </div>
        </div>
    );
};

export default AboutUs;