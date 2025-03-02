import bg from '../../assets/Images/BannerBg.png'
import videoVector from '../../assets/Vectors/play.png'
import image from '../../assets/Images/BannerImage.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundPosition:'center', backgroundSize:'cover'}} className="">
            <div className="w-9/12 mx-auto py-20 flex 0 items-end">
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
                <div>
                    <img className='w-full' src={image} alt="" />
                </div>

            </div> 
        </div>
    );
};

export default Banner;