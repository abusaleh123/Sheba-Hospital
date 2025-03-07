import ambulance from '../../assets/Images/Ambulance.png'

const Ambulance = () => {
  return (
    <div className='py-20'>
      <section className="w-9/12 mx-auto ">
        {/* Main Container */}
        <div className="flex gap-8 items-center">
          {/* Image Container */}
          <div className='bg-[#FDEBF2] p-8 rounded-md w-5/12'>
    <img src={ambulance} alt="" />
    <h1 className="text-[#E6327C] text-center text-3xl font-bold">Call For Emergency Time</h1>
          </div>
          {/* Text Container */}
          <div className='w-7/12'>
            <h1 className="text-4xl font-bold ">Are you looking for emergency Ambulance service?</h1>
            <p className="mt-4 w-3/4 text-[#858585]">Sheba International Hospital is one of the best hospitals in Bangladesh and comes with all modern amenities and advanced updated Japanese technology fully managed by the Authority. We are focused on patients with severe medical conditions, or emergency medical support that needs intense medical treatment.</p>
            <p className="mt-4 w-3/4 text-[#858585]">Ship Hospital is committed to serving quality treatment among patients around the clock.</p>
            <p className="mt-4 w-3/4 text-[#858585]">Our Medical Team is professionally trained in Basic Life Support & Advanced Life Support.</p>

            <button className="btn btn-ghost bg-[#E6327C] mt-13 text-lg text-white rounded-md px-6 py-6">Call Now 10164</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ambulance;
