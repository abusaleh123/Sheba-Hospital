import AboutUs from "../../HomePage/AboutUs/AboutUs";
import About_Banner from "./About_Banner";
import FAQ from "./FAQ";
import Mission from "./Mission";
import Special_Doctors from "./Special_Doctors";

const About = () => {
    return (
        <div>
        <About_Banner></About_Banner>
        <AboutUs></AboutUs>
        <Special_Doctors></Special_Doctors>
        <Mission></Mission>
        <FAQ></FAQ>
        </div>
    );
};

export default About;