import phone from '../../assets/Vectors/phone.png'
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
const Feel_Free = () => {
    return (
        <div className="w-8/12 pb-5 mx-auto">
                    {/* Text Container */}
                <div className="text-center flex flex-col items-center">
                    <h1 className="text-4xl font-bold">Feel free to contact directly</h1>
                    <p className="text-[#858585] mt-4 mb-15 w-2/4 text-center">The Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services and specialists</p>

                </div>

                {/* Card Container */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    <div className='bg-[#032D63] flex flex-col items-center p-8 rounded-md'>
                        <p className="flex gap-2 text-white p-4 border w-fit rounded-full"><img src={phone} alt="" /></p>
                        <p className="text-white mt-5 mb-4">Phone Number</p>
                        <p className="font-semibold text-xl text-white">+880 1234567890</p>
                    </div>

                    {/* Card */}
                    <div className='bg-[#032D63] flex flex-col items-center p-8 rounded-md'>
                    <p className="flex gap-2  text-white p-4 border w-fit rounded-full"><MdOutlineMail className="text-white text-2xl" /> </p>
                        <p className="text-white mt-5 mb-4">Email</p>
                        <p className="font-semibold text-xl text-white">infohospital@mail.com</p>
                    </div>

                    {/* Card */}
                    <div className='bg-[#032D63] flex flex-col items-center p-8 rounded-md'>
                    <p className="flex gap-1 text-white p-4 border w-fit rounded-full"><TfiLocationPin className="text-white text-2xl " /> </p>
                        <p className="text-white mt-5 mb-4">Location</p>
                        <p className="font-semibold text-xl text-white">Hospital Location</p>
                    </div>

                </div>
        </div>
    );
};

export default Feel_Free;