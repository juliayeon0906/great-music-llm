import heroImage from "../assets/hero.jpg";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative h-screen">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Orchestra performance"
        className="absolute w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <header className="absolute top-0 left-0 w-full z-20">
        <div className="flex justify-between items-center px-8 py-4">
          {/* logo */}
          <h1 className="text-xl text-shadow-md font-bold font-playfair-sc tracking-wide">
            Great Music
          </h1>

          {/* icons */}
          <div className="flex items-center space-x-6">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="w-6 h-6 cursor-pointer hover:text-gold transition" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 cursor-pointer hover:text-gold transition" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-white/30 mx-4"></div>

        {/* Search bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="px-8 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search events, artists..."
                  className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg placeholder-white/60 focus:outline-none focus:ring-1 transition-all"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white/30 backdrop-blur-lg shadow-2xl z-40 border-l border-white/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="p-8">
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-6 right-6"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 hover:text-gold transition" />
                </motion.button>

                {/* Menu Title */}
                <motion.h2
                  className="text-2xl font-playfair-sc mb-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Menu
                </motion.h2>

                {/* Menu Items */}
                <motion.nav
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {["Home", "Events", "Artists", "About", "Contact"].map(
                    (item, idx) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block text-lg hover:text-gold transition-colors py-2 border-b border-white/10"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ),
                  )}
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Banner Text / Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center ">
        <motion.h1
          className="text-5xl text-shadow-lg md:text-6xl font-playfair-sc mb-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Experience the Beautiful and Power
        </motion.h1>
        <motion.a
          href="#"
          className="px-6 py-3 text-shadow-md cursor-pointer bg-gold font-semibold shadow-md rounded-full hover:inset-shadow-sm hover:bg-gold-hover duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
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
