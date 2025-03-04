import image from '../../assets/Images/Service-Professinal.jpg'

const Professionals = () => {
    return (
        <div className="pt-25 ">
            <div className="flex   center w-9/12 mx-auto items-center">
                {/* professional Text */}
                <div className=' '>
                    <h1 className="text-5xl leading-18">Professional <br />
                    <span className="font-bold text-6xl text-[#076CEC]">Medical Service</span></h1>
                    <p className="text-[#858585] w-8/12 mt-6">The Seba Hospital has all the characteristics of world class hospital, including a wide range of services and specialists, equipment and technology, and service quality. </p>
                    <button className="btn cl
        btn-ghost  bg-[#E6327C] mt-10 w-fit px-6 py-7 rounded-md text-lg text-white border-1">Call Now 10164</button>
                </div>
                {/* Professional Image */}
                <div className='w-8/12 border-2  px-2 rounded-md'>
                    <img className='rounded-md relative top-2' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Professionals;