import { FaChevronRight } from "react-icons/fa";
import bg from "../../assets/Images/pattern 2.png";
const Emer_Banner = () => {
    return (
          <div className="relative bg-[#054DA8] service-linear">
              {/* Background Image with Opacity */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bg})`,
                  opacity: 0.2,
                }}
              ></div>
        
              {/* Content */}
              <div className="relative w-9/12 mx-auto text-center flex flex-col items-center py-32">
                <h1 className="text-6xl font-semibold text-white">Emergency 24/7 Support</h1>
                <p className="mt-7 w-3/6 text-[#FFFFFF]/80 text-center">
                  We offer advanced medical services, ensuring precise diagnostics,
                  effective treatments, and continuous care, focusing on patient
                  well-being and recovery.
                </p>
                <p className="flex items-center gap-2 text-white mt-10">
                  Home <FaChevronRight /> Emergency
                </p>
              </div>
            </div>
    );
};

export default Emer_Banner;