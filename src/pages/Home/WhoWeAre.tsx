import { motion } from "framer-motion";
import bg from "../../assets/img/whoWeAreBg.jpg";
import Reveal from "../../utils/Reveal";

const WhoWeAre = () => {
  // Define animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center bg-cover bg-center min-h-screen py-16 px-6 sm:px-10 lg:px-20"
      style={{
        backgroundImage: `url(${bg})`,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Reveal>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
            About AV Visa Agency
          </h1>
        </Reveal>
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
          At AV Visa Agency, we are dedicated to helping individuals and
          businesses navigate the complex process of visa applications with ease
          and confidence. With years of experience, we specialize in processing
          working visas and soon will expand our services to include air ticket
          bookings and other types of visas. Our team of experts is committed to
          providing fast, reliable, and transparent services tailored to meet
          your unique travel or immigration needs. Whether you're seeking to
          work abroad or planning a trip, AV Visa Agency is here to guide you
          every step of the way. We believe in making the visa process simple,
          so you can focus on your journey.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhoWeAre;
