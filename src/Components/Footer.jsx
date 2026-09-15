import { FiSend, FiLayers } from 'react-icons/fi';
import { FaDribbble, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa'; // Font Awesome for brands
import BgImg from '../assets/Background.png';
import FooterLogo from '../assets/Logo.png';

// Renders newsletter signup, site navigation, contact details, and social links.
const Footer = () => {
  return (
    <footer className="relative w-full bg-[#120b26] text-white font-sans overflow-hidden">

      {/* --- Background Image & Overlay --- */}
      <img
        src={BgImg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark gradient overlay to ensure perfect text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1035]/95 to-[#120b26]/98 z-0"></div>

      {/* --- Main Content Wrapper --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-10">

        {/* ==================== TOP SECTION: Newsletter ==================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">

          {/* Left Side: Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight w-200">
            Join our newsletter for event important announcement
          </h2>

          {/* Right Side: Form */}
          <div className="w-full max-w-md">
            {/* Info Text */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiLayers size={14} className="text-white" />
              </div>
              <p className="text-sm text-gray-300 leading-snug">
                Stay informed with instant updates delivered straight to your inbox.
              </p>
            </div>

            {/* Input Field */}
            <div className="relative flex items-center bg-[#2d2440]/80 border border-white/10 rounded-xl p-1.5 focus-within:border-[#734BDF] transition-colors duration-300">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-[#734BDF] hover:bg-[#5a36c0] p-3 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <FiSend size={18} className="text-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ==================== DIVIDER ==================== */}
        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* ==================== MIDDLE SECTION: Links ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div>
              <img src={FooterLogo} alt="" />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Experience a world-class conference designed to inspire innovation, empower professionals, and connect leaders from around the globe.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#734BDF] hover:border-[#734BDF] transition-colors duration-300">
                <FaDribbble size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#734BDF] hover:border-[#734BDF] transition-colors duration-300">
                <FaGithub size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#734BDF] hover:border-[#734BDF] transition-colors duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#734BDF] hover:border-[#734BDF] transition-colors duration-300">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Speakers</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Events</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Schedules */}
          <div>
            <h3 className="text-lg font-bold mb-6">Schedules</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Event Management</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Live Streaming</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Virtual Event Setup</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Keynote Sessions</a></li>
              <li><a href="#" className="hover:text-[#734BDF] transition-colors duration-300">Networking Programs</a></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="tel:+00123456789" className="hover:text-[#734BDF] transition-colors duration-300">+00 123 456 789</a></li>
              <li><a href="mailto:support@domainname.com" className="hover:text-[#734BDF] transition-colors duration-300">support@domainname.com</a></li>
            </ul>

            {/* Divider before address */}
            <div className="w-full h-px bg-white/10 my-5"></div>

            <p className="text-sm text-gray-400 leading-relaxed">
              45/2 Central Business Innovation<br />
              Near International Trade Tower
            </p>
          </div>

        </div>

        {/* ==================== DIVIDER ==================== */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* ==================== BOTTOM SECTION: Copyright ==================== */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;