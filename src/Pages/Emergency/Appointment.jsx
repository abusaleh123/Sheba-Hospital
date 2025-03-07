import image from '../../assets/Images/Emergency.png'

const Appointment = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto pb-20  flex justify-center'>
                <div className='flex items-center gap-10   '>

                    {/* Form Container */}
                    <div className=' h-full'>
                        {/*  Form */}

            <div className='p-6 bg-[#032D63] rounded-md object-cover '>
    
                <h1 className="text-[#FFFFFF] mb-6 font-bold  text-3xl">Make Appointment</h1>

                <form action="" className='space-y-4' >
             
                <input type="text" name='name' required className="input rounded-md py-6 w-full bg-white "  placeholder= " Your Full Name" />
                
                <input type="number" name='number' className="input rounded-md py-6 w-full bg-white "
                 placeholder="Phone Number " />
                <input type="email" name='email' className="input rounded-md py-6 w-full bg-white "
                 placeholder="Your Email" />
                 <div className='flex gap-8 items-center'>
                    <select className='rounded-md py-4 text-[#076CEC] px-2 w-full bg-white' name="" id="">
                        <option value="Department">Department</option>
                        <option value="Department">Department</option>
                        <option value="Department">Department</option>
                        <option value="Department">Department</option>
                        <option value="Department">Department</option>
                    </select>
                    <select className='rounded-md py-4  text-[#076CEC]  px-2 w-full bg-white' name="" id="">
                        <option value="Doctors">Doctors</option>
                        <option value="Doctors">Doctors</option>
                        <option value="Doctors">Ayesha</option>
                        <option value="Doctors">Doctors</option>
                    </select>
                 </div>
                 <input type="text" name='datetime' className="input rounded-md py-6 w-full bg-white "
                 placeholder="Date & Time" />
                <button className="btn cl
        btn-ghost  bg-[#E6327C] mt-4 w-full px-6 py-7 rounded-md text-lg text-white border-1">Book Appointment</button>
              
                </form>
            </div>
                    </div>
                    {/* Image Container */}
                    <div className='  '>
                        <img className='object-cover lg:w-[492px]' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;