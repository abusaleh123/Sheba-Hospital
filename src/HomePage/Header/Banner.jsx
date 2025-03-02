import bg from '../../assets/Images/BannerBg.png'
import videoVector from '../../assets/Vectors/play.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize:'cover'}} className="">
            <div className="w-9/12 mx-auto pt-20">
            {/* Banner Text */}
                <div>
                    <h1 className="text-6xl leading-20 text-[#333333]">Make an <br />
<span className="font-bold text-[#076CEC]">Appointment</span>
<br /> with your Doctor</h1>
<p className="text-gray-600 mt-6">The Online Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services. </p>

<div className='gap-4 flex mt-16'>
        <button className="btn cl
        btn-ghost hover:border-none bg-[#E6327C] w-fit px-6 py-6 rounded-md text-lg text-white">Find Doctors</button>
        <button className="hover:border-none border-[#E6327C] w-fit px-6 py-6 rounded-md text-lg text-[#E6327C]"  ><img src={videoVector} alt="" /> Find Doctors</button>

</div>
                </div>

            </div> 
        </div>
    );
};

export default Banner;