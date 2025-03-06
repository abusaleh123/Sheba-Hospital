import bg from '../../assets/Images/pattern 2.png'
import Doctor from '../../assets/Images/DoctorsSectionDoctor.png'

const Looking_Doctors = () => {
    return (
        <div className="bg-[#076CEC]">
            {/* Background Image Sections */}
            <div style={{backgroundImage: `url(${bg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                {/* Main Content Section */}
<div className="w-9/12 mx-auto flex gap-4 justify-end items-center ">
{/* Text Section */}
            <div className=''>
                <h1 className="text-5xl leading-16 text-[#FFFFFF] font-bold">Are you Looking for <br />
                a Doctors?</h1>
                <p className="text-[#FFFFFFCC]/80 mt-6 w-3/4 mb-12">The Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services </p>
                <button className="btn btn-ghost bg-[#E6327C]  text-lg text-white rounded-md px-6 py-6">Make an Appointment</button>
            </div>
            {/* Image Section */}

            <div>
            <img src={Doctor} alt="" />
            </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Looking_Doctors;