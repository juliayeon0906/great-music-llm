import aboutImage from "../assets/about.jpg?w=800&webp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-back text-white py-20 px-4 md:px-20">
      <img
        src={aboutImage}
        alt="Close-up of cello"
        loading="lazy"
        className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-8 md:mb-0 md:mr-10"
      />
      <div className="md:w-1/2">
        <motion.h2
          className="text-4xl text-shadow-lg mb-4 font-playfair-sc"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          About Great Music
        </motion.h2>
        <motion.p
          className="mb-8 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure.
        </motion.p>
        <motion.a
          href="#"
          className="px-6 py-3 cursor-pointer bg-gold text-shadow-md font-semibold shadow-md rounded-full hover:shadow-xl hover:bg-gold-hover duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}
