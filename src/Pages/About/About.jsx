import AboutUs from "../../HomePage/AboutUs/AboutUs";
import About_Banner from "./About_Banner";
import FAQ from "./FAQ";
import Mission from "./Mission";

const About = () => {
    return (
        <div>
        <About_Banner></About_Banner>
        <AboutUs></AboutUs>
        {/* TODO : All Doctors Section */}
        <Mission></Mission>
        <FAQ></FAQ>
        </div>
    );
};

export default About;