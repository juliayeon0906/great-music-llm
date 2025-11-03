import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const events = [
  {
    image: event1,
    title: "Lorem ipsum dolor sit amet.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    image: event2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque faucibus.",
  },
  {
    image: event3,
    title: "Lorem ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

export default function Events() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="bg-back py-20 px-4 md:px-20">
      <motion.h2
        className="text-4xl font-playfair-sc text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Events
      </motion.h2>

      {/* Event Cards */}
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="bg-mist/20 rounded-lg overflow-hidden shadow-lg flex flex-col group"
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-300 flex-grow">{event.description}</p>
              <div className="mt-4 flex gap-2">
                <a
                  href="#"
                  className="px-3 py-1 bg-gold text-gold-hover text-shadow-sm shadow-md font-semibold rounded hover:shadow-xl hover:text-mist hover:bg-gold-hover hover:border-gold transition"
                >
                  Book Tickets
                </a>
                <a
                  href="#"
                  className="px-3 py-1 border border-gold text-shadow-md rounded hover:bg-[#2f2f2f] transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* More Events Button */}
      <motion.div
        className="flex justify-end my-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="#"
          className="px-1 flex items-center text-sm font-semibold py-1 hover:text-gold hover:shadow-xl transition duration-300"
        >
          More Events
          <ChevronRight className="py-1"/>
        </a>        
      </motion.div>
    </section>
  );
}
