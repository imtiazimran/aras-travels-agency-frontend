import { CardSpotlight } from "../../components/ui/card-spotlight";
import Container from "../../utils/Container";
import Reveal from "../../utils/Reveal";

const whyChooseUsData = [
  {
    title: "Expertise You Can Trust",
    description:
      "With over a decade of experience in visa processing, our team has the knowledge and expertise to handle even the most complex applications. We are committed to guiding you through every step of the visa process.",
  },
  {
    title: "Fast and Efficient Service",
    description:
      "We ensure quick and smooth visa processing, minimizing delays and helping you get your visa approved as quickly as possible. Time is of the essence, and we prioritize efficiency without compromising on accuracy.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We offer clear and competitive pricing, so you know exactly what to expect from the start. Our commitment to transparency ensures that you are always informed.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to answer your questions and provide assistance whenever you need it. We believe in being available whenever our clients need us.",
  },
  {
    title: "Personalized Consultation",
    description:
      "We understand that every case is unique, which is why we offer personalized consultations tailored to your specific needs. Our experts are here to guide you and ensure the best possible outcome for your visa application.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="h-auto w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Container>
          <div className="max-w-96 mx-auto my-10">
            <Reveal width="fit-content">
              <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
                Why Choose Us
              </h1>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, index) => (
              <CardSpotlight
                key={index}
                className="text-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p>{item.description}</p>
              </CardSpotlight>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
