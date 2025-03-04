import { FaChevronRight } from "react-icons/fa";
import bg from '../../assets/Images/pattern 2.png'
const S_Banner = () => {
    return (
        <div className="bg-[#054DA8] service-linear">
            <div style={{backgroundImage: `url(${bg})`,  backgroundSize:'contain' , }} className="">
            <div className="w-9/12 mx-auto text-center flex flex-col items-center py-30">

                <h1 className="text-6xl font-semibold text-white">Medical Service</h1>
                <p className="mt-7 w-3/6 text-[#FFFFFF]/80   text-center">We offer advanced medical services, ensuring precise diagnostics, effective treatments, and continuous care, focusing on patient well-being and recovery. </p>
                <p className="flex items-center gap-2 text-white mt-10">Home <FaChevronRight /> Medical Service</p>
            </div>
            </div>
        </div>
    );
};

export default S_Banner;