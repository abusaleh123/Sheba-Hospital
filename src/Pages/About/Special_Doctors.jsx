import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ✅ Include Navigation
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Import navigation styles

const Special_Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const categories = [...new Set(doctors.map((doctor) => doctor.job))];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(doctors.filter((doctor) => doctor.job === category));
    }
  };

 



  return (
    <div className="w-9/12 mx-auto py-10">
      {/* Title Part */}
<div className="text-center mb-10">
<h1 className="text-4xl text-[#032D63]">Specialist <span className='font-extrabold'>Doctors</span></h1>
<p className="text-[#858585] mt-4">The Online Seba Hospital has all the characteristics</p>
</div>

      <div className="text-center mb-20">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 mx-2 btn btn-ghost border-none hover:border-none outline-none focus:border-none rounded-md ${
            activeCategory === "all" ? "bg-[#032D63] text-white" : "bg-[#F2F8FF]"
          }`}
        >
          All
        </button>
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 mx-2 btn btn-ghost border-none hover:border-none  outline-none focus:border-none rounded-md ${
              activeCategory === category
                ? "bg-[#032D63] text-white"
                : "bg-[#F2F8FF]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Pagination, Navigation]} // ✅ Include Navigation
          navigation // ✅ Enable default navigation buttons
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mySwiper"
        >
          {filteredDoctors.map((doctor, index) => (
            <SwiperSlide key={index} className="pb-4  rounded-lg">
              <img
                src={doctor.image}
                alt={doctor.name}
                className=" object-cover rounded-md h-52 w-96 object-center mx-auto"
              />
              <p className=" text-[#333333] font-bold mt-6">{doctor.designation}</p>
              <h1 className="text-2xl font-semibold  mt-4 mb-2">
                {doctor.name}
              </h1>
              <p className=" text-[#858585] font-medium mt-2">
                {doctor.hospital}
              </p>
              <button className="mt-8 border-2 hover:bg-[#032D63] text-[#032D63] border-[#032D63] hover:text-white px-4 py-2  rounded-md ">
                {doctor.button}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
     
    </div>
  );
};

export default Special_Doctors;
