import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foot text-gray-300 py-12 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left — Branding & Contact */}
        <div className="text-center md:text-left">
          <h2 className="font-playfair-sc text-3xl text-white mb-2">
            Great Music
          </h2>
          <p className="text-gray-400 mb-4">
            Experience the beauty of symphonic sound.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Mail className="w-5 h-5 text-gold" />
            <a
              href="mailto:info@greatmusic.com"
              className="hover:text-gold transition"
            >
              info@greatmusic.com
            </a>
          </div>
        </div>

        {/* Center — Social Links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-gold transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gold transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gold transition">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-8"></div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Great Music. All rights reserved.
      </p>
    </footer>
  );
}
