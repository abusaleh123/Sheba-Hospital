import logo1 from '../../assets/Icons/profile.png'
import logo2 from '../../assets/Icons/consulting.png'
import logo3 from '../../assets/Icons/recive.png'
import logo4 from '../../assets/Icons/solution.png'
const Treatment = () => {
    return (
        <div className="w-9/12 mx-auto pb-20">
         <section className="text-center">
            <div>
                {/* Text Container */}
                <div className="flex flex-col items-center">
                    <h1 className="text-[#333333] text-4xl font-bold">Easy Step and Get the World Best Treatment</h1>
                    <p className="text-[#858585] mt-4 w-2/4 mb-20">The Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services and specialists</p>
                </div>
                
                {/* Card Container */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-start">

                    
                    {/* Card */}
                    <div className='border p-8 border-gray-300 rounded-md'>
                    <img className='bg-[#F2F8FF] p-3 rounded-md mb-6' src={logo1} alt="" />
                    <h1 className="text-[#333333] text-xl font-semibold mb-4">Check Doctor Profile</h1>
                    <p className="text-[#858585] text-sm">Turpis sollicitudin odio ipsum eget et ullamcorper penatibus luctus eget sem pharetra.</p>
                    </div>


                    {/* Card */}
                    <div className='border p-8 border-gray-300 rounded-md'>
                    <img className='bg-[#F2F8FF] p-3 rounded-md mb-6' src={logo2} alt="" />
                    <h1 className="text-[#333333] text-xl font-semibold mb-4">Request Consulting</h1>
                    <p className="text-[#858585] text-sm">Turpis sollicitudin odio ipsum eget et ullamcorper penatibus luctus eget sem pharetra.</p>
                    </div>


                    {/* Card */}
                    <div className='border p-8 border-gray-300 rounded-md'>
                    <img className='bg-[#F2F8FF] p-3 rounded-md mb-6' src={logo3} alt="" />
                    <h1 className="text-[#333333] text-xl font-semibold mb-4">Receive Consulting</h1>
                    <p className="text-[#858585] text-sm">Turpis sollicitudin odio ipsum eget et ullamcorper penatibus luctus eget sem pharetra.</p>
                    </div>


                    {/* Card */}
                    <div className='border p-8 border-gray-300 rounded-md'>
                    <img className='bg-[#F2F8FF] p-3 rounded-md mb-6' src={logo4} alt="" />
                    <h1 className="text-[#333333] text-xl font-semibold mb-4">Get Your Solution</h1>
                    <p className="text-[#858585] text-sm">Turpis sollicitudin odio ipsum eget et ullamcorper penatibus luctus eget sem pharetra.</p>
                    </div>
                </div>
            </div>
            </section>   
        </div>
    );
};

export default Treatment;