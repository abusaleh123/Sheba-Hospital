import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { RiFacebookFill, RiYoutubeLine } from "react-icons/ri";
import { FaInstagram} from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import phone from '../../assets/Vectors/phone.png'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Icons/Group 1000002226.png'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
    return (
        <div className=''>
            {/* Upper part of the navbar ##Blue Part */}
            <div className='bg-[#032D63] '>
            <section className=' py-1  w-9/12 mx-auto'>
                <div className="flex items-center justify-between">
            {/* Left Side Items */}
                    <div className="flex py-6 items-center gap-10 ">
                    <p className="flex gap-2 text-white"><img src={phone} alt="" /> +88 01234567890</p>
                    <p className="flex gap-2 text-white"><MdOutlineMail className="text-white text-2xl" /> infohospital@mail.com</p>
                    <p className="flex gap-1 text-white"><TfiLocationPin className="text-white text-2xl " /> Hospital Location</p>
                    </div>
                    {/* Right Side Items */}
                    <div className="flex items-center gap-12">
                        {/* Socials */}
                        <div className="flex gap-5">
                        <p className="text-white border p-2 rounded-full"><RiFacebookFill className="text-3xl" /></p>
                        <p className="text-white border p-2 rounded-full"><FaInstagram className="text-3xl" /></p>
                        <p className="text-white border p-2 rounded-full"><PiLinkedinLogoBold className="text-3xl" /></p>
                        <p className="text-white border p-2 rounded-full"><RiYoutubeLine className="text-3xl" /></p>
                       
                        </div>
                        {/* Login Button */}
                        <div>
                            <button className="btn btn-ghost border text-xl text-white border border-white rounded-md focus:bg-transparent font-normal">Log In</button>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            {/* Main Navbar Section */}
            <div className="w-9/12 mx-auto">
                <section>
                <div className="flex py-6 bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      
      <NavLink to={'/'} className={'nav text-lg'}>Home</NavLink>
      <NavLink to={'services'} className={'nav text-lg text-gray-800'}>Services</NavLink>
      <NavLink to={'/about'} className={'nav text-lg text-gray-800'}>About</NavLink>
      <NavLink to={'/Contact'} className={'nav text-lg text-gray-800'}>Contact Us</NavLink>
      <NavLink to={'/doctors'} className={'nav text-lg text-gray-800'}>Doctors</NavLink>
      <NavLink to={'/emergency'} className={'nav text-lg text-gray-800'}>Emergency</NavLink>
      <NavLink to={'help'} className={'nav text-lg text-gray-800'}>Help & Support</NavLink>
 
      </ul>
    </div>
   <Link><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-end flex gap-10">
    {/* Nav Items */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
      <NavLink to={'/'} className={'nav text-lg'}>Home</NavLink>
      <NavLink to={'/services'} className={'nav text-lg text-gray-800'}>Services</NavLink>
      <NavLink to={'/about'} className={'nav text-lg text-gray-800'}>About</NavLink>
      <NavLink to={'/Contact'} className={'nav text-lg text-gray-800'}>Contact Us</NavLink>
      <NavLink to={'/doctors'} className={'nav text-lg text-gray-800'}>Doctors</NavLink>
      <NavLink to={'/emergency'} className={'nav text-lg text-gray-800'}>Emergency</NavLink>
      <NavLink to={'/help'} className={'nav text-lg text-gray-800'}>Help & Support</NavLink>
    </ul>
  </div>
  {/* Search Button and others */}
    <div className="flex items-center gap-10">
<p className="bg-[#F2F8FF] rounded-md p-5"><CiSearch className="text-xl"></CiSearch></p>
    <button className="btn btn-ghost bg-[#032D63]  text-lg text-white rounded-md px-12 py-6">Appointment</button>
    </div>
  </div>
</div>
                </section>
            </div>


        </div>
    );
};

export default Navbar;