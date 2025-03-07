import appointment from '../../assets/Vectors/appointment.png'
import Consultation from '../../assets/Vectors/Consultation.png'
import Checkup from '../../assets/Vectors/checkup.png'
import Diagnostic from '../../assets/Vectors/Diagnostictest.png'
import BloodBank from '../../assets/Vectors/BlodBank.png'
import Ambulance from '../../assets/Vectors/Ambulance.png'

const OurServices = () => {
    return (
        <div className='pt-52'>
            
            <section className='w-9/12 mx-auto'>
                <div className="text-center">
                {/* Title Part */}
                    <h1 className="text-4xl text-[#032D63]">Our <span className='font-extrabold'>Services</span></h1>
                    <p className="text-[#858585] mt-4">The Online Seba Hospital has all the characteristics</p>
                    {/*Service Card Section */}
                    <div className="mt-20 grid grid-cols-3 gap-8">

                        
                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full p-10 rounded-md text-start">
                            <img src={appointment} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Appointment</h1>
                            <p className="text-[#858585] mt-4">The Online Seba Hospital offers easy and quick appointment booking for hassle-free healthcare access anytime.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>


                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full p-10 rounded-md text-start">
                            <img src={Consultation} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Consultation</h1>
                            <p className="text-[#858585] mt-4"> The Online Seba Hospital offers expert medical consultations with qualified doctors for personalized healthcare guidance.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>


                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full p-10 rounded-md text-start">
                            <img src={Checkup} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Checkup</h1>
                            <p className="text-[#858585] mt-4">We provide thorough health checkups to detect medical conditions early and ensure overall well-being.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>


                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full p-10 rounded-md text-start">
                            <img src={Diagnostic} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Diagnostic Tests</h1>
                            <p className="text-[#858585] mt-4">We offer precise diagnostic tests using advanced technology to support accurate and timely medical treatment.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>


                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full  p-10 rounded-md text-start">
                            <img src={BloodBank} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Blood Bank</h1>
                            <p className="text-[#858585] mt-4">Our well-equipped blood bank ensures a safe, screened, and readily available blood supply for emergencies.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>


                        {/* Card */}
                        <div className="hover:bg-[#F2F8FF] border border-gray-300 hover:border-none w-full h-full p-10 rounded-md text-start">
                            <img src={Ambulance} alt="" />
                            <h1 className="text-2xl mt-6 text-[#333333] font-bold">Ambulance Support</h1>
                            <p className="text-[#858585] mt-4">Our 24/7 ambulance service ensures rapid emergency response with trained professionals and life-saving equipment.</p>
                            <button className="btn mt-8 btn-ghost border text-[#032D63] hover:text-white  border-[#032D63] hover:bg-[#032D63]  text-lg  rounded-md px-6 py-6">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;