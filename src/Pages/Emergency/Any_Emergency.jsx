import bg1 from '../../assets/Images/Service-sdf.png'
import bg2 from '../../assets/Images/Service-statiscope.png'

const Any_Emergency = () => {
    return (
        <div className='bg-[#076CEC] mt-25 mb-25'>
                  {/* Main Container */}
                <div    style={{
            backgroundImage: `url(${bg1}), url(${bg2})`,
            backgroundPosition: 'left center, right center', // Positions the images to left and right
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50% 100%', // Ensure each image takes half width and full height
          }} className='bg-no-repeat h-96 flex w-9/12 mx-auto justify-between items-center'>
            {/* Text Container */}
                <div>
                    <p className='mb-6 text-[#FFFFFF]'>24 hours available support</p>
          <h1 className="text-4xl font-bold text-white">Are you Looking for a Doctors?</h1>
          <p className="mt-6 text-[#FFFFFF]/80 w-3/4">The Seba Hospital has all the characteristics of a world-class hospital, including a wide range of services </p>
                </div>
                {/* Button Container */}
                <div>
                <button className="btn btn-ghost bg-[#032D63]  text-lg text-white rounded-md px-6 py-6">Make an Appointment</button>
                </div>
                </div>
              </div>
    );
};

export default Any_Emergency;