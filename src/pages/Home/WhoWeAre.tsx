import { BackgroundBeams } from "../../components/ui/background-beams";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Reveal from "../../utils/Reveal";
import bgImg from '../../assets/img/whoWeAreBg.jpg'

export function WhoWeAre() {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center antialiased bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`, // Replace with your image path
      }}>
      <div className="absolute inset-0 bg-black opacity-90"></div> {/* Overlay */}
      
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <Reveal>
          <h1 className="text-2xl sm:text-3xl text-center lg:text-4xl text-white font-bold mb-4">
            About AV Visa Agency
          </h1>
        </Reveal>
        <p className="text-neutral-500 max-w-lg mx-auto text-sm text-center">
          <TextGenerateEffect duration={0} className="text-white"
            words="At AV Visa Agency, we are dedicated to helping individuals and
            businesses navigate the complex process of visa applications with ease
            and confidence. With years of experience, we specialize in processing
            working visas and soon will expand our services to include air ticket
            bookings and other types of visas. Our team of experts is committed to
            providing fast, reliable, and transparent services tailored to meet
            your unique travel or immigration needs. Whether you're seeking to
            work abroad or planning a trip, AV Visa Agency is here to guide you
            every step of the way. We believe in making the visa process simple,
            so you can focus on your journey."
          />
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
