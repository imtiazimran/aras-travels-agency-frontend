

import { WobbleCard } from "../../components/ui/wobble-card";
import Container from "../../utils/Container";

export function Services() {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-screen py-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Work Visa Processing
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            AV Visa Agency specializes in helping individuals and businesses navigate the complexities of work visa applications. We streamline the process to ensure a smooth and efficient experience.
          </p>
          <ul className="mt-2 text-left text-sm text-neutral-200">
            <li>- Fast processing times</li>
            <li>- Assistance with required documents</li>
            <li>- Personalized consultation and advice</li>
            <li>- 24/7 support</li>
          </ul>
        </div>
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/20160630035747-International-Business.jpeg?format=pjeg&auto=webp&width=300&crop=1:1"
          width={500}
          height={500}
          alt="Work Visa Processing"
          className="absolute hidden md:block -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
        <div className="max-w-xs">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Air Ticket Bookings
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Book your international and domestic flights hassle-free with AV Visa Agency. We provide the best deals and the most convenient flight options.
          </p>
          <ul className="my-2  text-left text-sm text-neutral-200">
            <li>- Competitive pricing on flights</li>
            <li>- Flexible booking and rescheduling</li>
            <li>- 24/7 travel support</li>
            <li>- Corporate client discounts</li>
          </ul>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-red-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tourist and Visitor Visa Processing
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            AV Visa Agency simplifies the process of applying for tourist and visitor visas, helping you get your visa quickly so you can focus on your trip.
          </p>
          <ul className="mt-2 text-left text-sm text-neutral-200">
            <li>- Assistance with visa applications</li>
            <li>- Expert advice on documentation</li>
            <li>- Support for single and multiple-entry visas</li>
            <li>- Fast-track services for urgent travel</li>
          </ul>
        </div>
        <img
          src="https://elitevoyage.com/wp-content/uploads/2021/07/Santorini_07-1.jpg"
          width={500}
          height={500}
          alt="Tourist Visa Processing"
          className="absolute hidden md:block -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </Container>
  );
}
