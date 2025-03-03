import bg from '../../assets/Images/BannerBg.png'
import videoVector from '../../assets/Vectors/play.png'
import image from '../../assets/Images/Adobe Express - file.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize:'cover'}} className="w-full ">
            <div className="w-9/12 mx-auto py-20 flex 0  items-end">
            {/* Banner Text */}
                <div>
                    <h1 className="text-7xl tracking-wider leading-20 text-[#333333]">Make an <br />
<span className="font-bold text-[#076CEC]">Appointment</span>
<br /> with your Doctor</h1>
<p className="text-gray-600 mt-6 w-3/4">The Online Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services. </p>

<div className='gap-4 flex mt-16'>
        <button className="btn cl
        btn-ghost  bg-[#E6327C] w-fit px-6 py-7 rounded-md text-lg text-white border-1">Find Doctors</button>
        <button className="flex border-1 btn-ghost btn  border-[#E6327C] w-fit  py-7 hover:border-[#E6327C] rounded-md text-lg text-[#E6327C]"  ><img src={videoVector} alt="" />Tutorial</button>

</div>
                </div>
                {/* Banner Image */}
                <div className='w-7/12'>
                    <img className='' src={image} alt="" />
                </div>

            </div> 
            {/* ACRA Card Section */}
            <div className='bg-[#032D63] rounded-md   relative top-25 w-9/12 mx-auto py-12 px-20'>
            <div className='flex justify-around'>

                {/* Card */}
            <div>
            <h1 className="text-lg text-white border w-fit py-10 px-16 rounded-md">Appointment</h1>
            </div>
                {/* Card */}
            <div>
            <h1 className="text-lg text-white border w-fit py-10 px-16 rounded-md">Consultation</h1>
            </div>
                {/* Card */}
            <div>
            <h1 className="text-lg text-white border w-fit py-10 px-16 rounded-md">Report Check</h1>
            </div>
                {/* Card */}
            <div>
            <h1 className="text-lg text-white border w-fit py-10 px-16 rounded-md"> Ambulance</h1>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;