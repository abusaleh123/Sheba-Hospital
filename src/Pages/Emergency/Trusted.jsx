import phone from '../../assets/Icons/Vector (Stroke).png'

const Trusted = () => {
    return (
        <div className='bg-[#3989F0] py-15'>
            <div className='w-9/12 mx-auto'>
                <div className="flex justify-between items-center">
                    {/* Left Side Content */}
                    <div>
                        <h1 className=" text-3xl font-bold text-white">Trusted Healthcare For Family</h1>
                        <p className='mt-4 text-[#FFFFFF] font-light'>Contact us for all questions and thinks those. We will proud to you</p>
                    </div>
                    {/* Right Side Content */}
                    <div className='flex items-center gap-6'>
                        <img src={phone} alt="" />
                        <div>
                <h2 className='text-2xl text-white font-semibold'>Looking For Consultation?</h2>
                <p className='mt-4 text-[#FFFFFF] font-light'>+88 01234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;