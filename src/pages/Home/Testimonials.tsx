import { BackgroundGradient } from "../../components/ui/background-gradient";
import Container from "../../utils/Container";
import Reveal from "../../utils/Reveal";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Imran Hossain",
      feedback:
        "AV Visa Agency made the entire visa process smooth and worry-free. I received my working visa without any hassle!",
      photo:
        "https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/448556621_3780386138915486_1139324796197900194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGpipwmoCLIWLo0GecWgjFJfgXiMsQP8it-BeIyxA_yK6YshTyey7bK1n7m-ImiFPMGgUS7Lt52MnPGlmAZ7p04&_nc_ohc=bX0dxjAcawAQ7kNvgGMnVb_&_nc_ht=scontent.fcgp17-1.fna&oh=00_AYC-FFuF0G6_jxAcR2GjRjG7RiONj_2M-sTsRryAmKAVGA&oe=66E367CA",
    },
    {
      name: "Ayesha Akter",
      feedback:
        "The team at AV Visa Agency was so helpful and professional. I recommend them to anyone looking for visa services!",
      photo:
        "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
    },
    {
      name: "Rakibul Islam",
      feedback:
        "Fast and efficient service! Thanks to AV Visa Agency, I got my visa quickly and stress-free. I highly recommend them!",
      photo:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="bg-zinc-900 py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 ">
        <Reveal width="fit-content">
          <h1 className="text-3xl  md:text-5xl font-bold text-center z-50 text-white my-10">
            Testimonials
          </h1>
        </Reveal>
      </div>
      <Container className="relative h-auto w-full flex justify-center items-center bg-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="object-cover w-full h-48 md:h-80 rounded-2xl"
              />
              <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                {item.name}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.feedback}
              </p>
            </BackgroundGradient>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
