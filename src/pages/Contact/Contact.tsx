import ParticleRing from "../../components/ui/ParticleRing";
import Container from "../../utils/Container";

const Contact = () => {
  return (
    <div className="">
      <ParticleRing>
        <Container className="flex flex-col md:flex-row">
        <div className="w-full max-w-3xl md:p-8 p-2 bg-black/60 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

          <div className="space-y-6">
            {/* Address Section */}
            <div>
              <h2 className="text-xl font-bold">Our Address</h2>
              <p className="mt-2 text-neutral-400">
              Level 03, Office No 303, House# 64/Ga, Configure Bepari Shopping Complex, Link Road, Dhaka 1212
              </p>
            </div>

            {/* Email Section */}
            <div>
              <h2 className="text-xl font-bold">Email</h2>
              <p className="mt-2 text-neutral-400">amranhossain080@gmail.com</p>
            </div>

            {/* Phone Section */}
            <div>
              <h2 className="text-xl font-bold">Phone Number</h2>
              <p className="mt-2 text-neutral-400">+8801877-444369</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1729.1244270815514!2d90.42485814410644!3d23.777685682641927!2m3!1f307.1729957805912!2f9.267261150591214!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3755c7d48b7b2fb7%3A0xd2416ea99ddf4811!2sARA%20Visa%20Agency!5e1!3m2!1sen!2sbd!4v1725988740439!5m2!1sen!2sbd"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        </Container>
      </ParticleRing>
    </div>
  );
};

export default Contact;
