import logo from "../../src/assets/Icons/Group 1000002227.png";
import bg from "../../src/assets/Images/Mask group.png";
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { RiFacebookFill, RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import phone from "../../src/assets/Vectors/phone.png";
const Footer = () => {
  return (
    <div className="relative bg-[#020508]">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-[#032D63] opacity-80"></div>

        {/* Main Footer Sections */}
        <footer className="relative   footer sm:footer-horizontal w-9/12 mx-auto text-[#ffffff] p-10 py-20">
          <div className="flex footer ">
            <div className=" w-3/12">
              <img className="mb-4" src={logo} alt="" />
              <p className="text-[#EBEBEB] mb-9">
                The Online Seba Hospital has all the characteristics of a
                world-class hospital, including a wide range of services and
                specialists.
              </p>

              {/* Socials */}
              <div className="flex gap-5">
                <p className="text-white border p-2 rounded-full">
                  <RiFacebookFill className="text-xl" />
                </p>
                <p className="text-white border p-2 rounded-full">
                  <FaInstagram className="text-xl" />
                </p>
                <p className="text-white border p-2 rounded-full">
                  <PiLinkedinLogoBold className="text-xl" />
                </p>
                <p className="text-white border p-2 rounded-full">
                  <RiYoutubeLine className="text-xl" />
                </p>
              </div>
            </div>
            <div className=" w-3/12 text-[#EBEBEB]">
              <h6 className=" font-bold text-2xl text-[#FFFFFF]">
                Departments
              </h6>
              <a className="link link-hover">Cardiology</a>
              <a className="link link-hover">Neurology</a>
              <a className="link link-hover">Orthopedics</a>
              <a className="link link-hover">Medicine</a>
              <a className="link link-hover">Ent</a>
              <a className="link link-hover">Skin</a>
            </div>
            <div className=" w-3/12">
              <h6 className="font-bold text-2xl text-[#FFFFFF]">Quick Links</h6>
              <a className="link link-hover"> Home</a>
              <a className="link link-hover">About</a>
              <a className="link link-hover">Services</a>
              <a className="link link-hover">Doctors</a>
              <a className="link link-hover">Emergency</a>
              <a className="link link-hover">Help & Support</a>
            </div>
            <div className=" w-3/12 space-y-2">
              <h6 className="font-bold text-2xl text-[#FFFFFF]">Contact Us</h6>

              <p className="flex gap-2 text-white">
                <img src={phone} alt="" /> +88 01234567890
              </p>
              <p className="flex gap-2 text-white">
                <MdOutlineMail className="text-white text-2xl" />{" "}
                infohospital@mail.com
              </p>
              <p className="flex gap-1 text-white">
                <TfiLocationPin className="text-white text-2xl " />{" "}
                infohospital@mail.com
              </p>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-[#054DA8] text-base-content py-8">
        <aside>
          <p className="text-[#FFFFFF] text-md">
            © Seba Hospital 2025. All rights reserved by Md Abu Saleh Noor & Md
            Imran Sorkar
          </p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
