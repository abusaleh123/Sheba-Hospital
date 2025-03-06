import AboutUs from "../../HomePage/AboutUs/AboutUs";
import About_Banner from "./About_Banner";
import Mission from "./Mission";

const About = () => {
    return (
        <div>
        <About_Banner></About_Banner>
        <AboutUs></AboutUs>
        {/* TODO : All Doctors Section */}
        <Mission></Mission>
        </div>
    );
};

export default About;