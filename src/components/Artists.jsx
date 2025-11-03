import { motion } from "framer-motion";
import artist1 from "../assets/artist1.jpeg"
import artist2 from "../assets/artist2.jpeg"
import artist3 from "../assets/artist3.jpeg"
import artist4 from "../assets/artist4.jpeg"
import artist5 from "../assets/artist5.jpeg"
import artist6 from "../assets/artist6.jpeg"

const artists = [
  {
    image: artist1,
    name: "Alexander Whitmore",
    role: "Conductor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque faucibus."
  },
  {
    image: artist2,
    name: "Isabella Chen",
    role: "Violinist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae."
  },
  {
    image: artist3,
    name: "Marcus Thompson",
    role: "Cellist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
  },
  {
    image: artist4,
    name: "Sophie Laurent",
    role: "Pianist",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  {
    image: artist5,
    name: "James O'Connor",
    role: "French Horn",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi."
  },
  {
    image: artist6,
    name: "Elena Petrova",
    role: "Soprano",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem."
  }
];

export default function Artists() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="bg-back py-20 px-4 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair-sc mb-4">Our Artists</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-playfair italic">
            Meet the exceptional musicians who bring our performances to life
          </p>
        </motion.div>
      </div>

      {/* Artists Grid */}
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {artists.map((artist, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            {/* Artist Image */}
            <div className="relative h-80 overflow-hidden">
              <motion.img
                src={artist.image}
                alt={artist.name}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              {/* Role Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gold/90 backdrop-blur-sm rounded-full text-xs font-semibold text-black">
                {artist.role}
              </div>

              {/* Name on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-playfair-sc mb-1">
                  {artist.name}
                </h3>
              </div>
            </div>

            {/* Artist Info */}
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-gray-300 leading-relaxed text-sm mb-4">
                {artist.description}
              </p>

              {/* View Profile Link */}
              <motion.a
                href="#"
                className="inline-flex items-center text-gold hover:text-mist font-semibold text-sm transition-colors"
                whileHover={{ x: 5 }}
              >
                View Profile →
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}