import Footer from "../components/Footer";
import { FAQ } from "../pages/Home/FAQ";
import { Hero } from "../pages/Home/Hero";
import { Services } from "../pages/Home/Services";
import Testimonials from "../pages/Home/Testimonials";
import { WhoWeAre } from "../pages/Home/WhoWeAre";
import { WhyChooseUs } from "../pages/Home/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Hero/>
            <WhoWeAre/>
            <Services/>
            <WhyChooseUs/>
            <Testimonials/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;
