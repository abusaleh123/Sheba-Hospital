import bg from '../../assets/Images/BGelements.png'
import image from '../../assets/Images/bannerMain.png'
import check from '../../assets/Vectors/check.png'
import phone from '../../assets/Icons/about-phone.png'
const Mission = () => {
    return (
        <div className='bg-[#F2F8FF] my-25'>
            <div style={{backgroundImage: `url(${bg})`}} className='py-25  w-9/12 mx-auto'>
            {/* MAin Container */}
                <div className='flex items-center gap-10'>
                    {/* Text Container */}
                    <div>
                    <h1 className="font-bold text-[#333333] text-3xl">Our Mission and Vision</h1>
                    <p className="text-[#858585] mt-4 w-/6">To serve each patient with individualized care through dedicated and professionally competent</p>


  <p className='flex items-center gap-2 mt-10 text-[#333333] font-bold'><img src={check} alt="" />Listen to your problems with utmost interest.</p>
  <p className='flex items-center gap-2 mt-4 text-[#333333] font-bold'><img src={check} alt="" />Include you in decision making process relating to your Care.</p>
  <p className='flex items-center gap-2 mt-4 text-[#333333] font-bold'><img src={check} alt="" />Be polite and respectful.</p>
  <p className='flex items-center gap-2 mt-4 text-[#333333] font-bold'><img src={check} alt="" />Protect your privacy.</p>

   {/* About Us Button and number Section */}
                      <div className='mt-10 flex gap-10 items-center'>
                      <button className="btn btn-ghost bg-[#032D63]  text-lg text-white rounded-md px-6 py-6">Make an Appointment</button>
                      <p className='flex items-center gap-2 text-xl text-[#E6327C] font-bold'><img src={phone} alt="" />+88 01234567890</p>
                      </div>

                    </div>
                    {/* Image Container */}
                    <div className='service-linear flex   justify-center rounded-md pt-5 '>
                    <img src={image} alt="" className=' text-center object-cover w-3/4 h-full' />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Mission;