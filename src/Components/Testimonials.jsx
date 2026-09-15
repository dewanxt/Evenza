import { Star, Quote, Zap, Layers, Triangle, Circle, Hexagon } from 'lucide-react';
import BgImg from '../assets/Background.png';
import SecHead from './SecHead';

// Presents attendee feedback, ratings, and supporting brand marks.
const Testimonials = () => {
  return (
    <div className="relative w-full py-24 px-4 font-sans text-white overflow-hidden bg-[#1a1035]">

      {/* --- Background Image & Overlay --- */}
      <img
        src={BgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark overlay to ensure text readability and match the purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1035]/90 to-[#120b26]/95 z-0"></div>

      {/* Decorative Dots (Top Right) */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* --- Header Section --- */}
        <SecHead
          title="Testimonials"
          heading="What our customers say about their experience"
          className="text-center flex flex-col items-center justify-center mb-16"
        />

        {/* --- Testimonial Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* Card 1: Client Experience Speak */}
          {/* Changed to dark base styling. Hover applies the purple background. */}
          <div className="
            bg-[#2d2440]/80 border border-white/5 rounded-2xl p-8 flex flex-col justify-between 
            transition-all duration-300 
            hover:bg-[#734BDF] hover:border-transparent hover:-translate-y-2 hover:shadow-xl hover:shadow-[#734BDF]/30
            group cursor-pointer
          ">
            <div>
              {/* Avatar Group */}
              <div className="flex -space-x-3 mb-6">
                <img className="w-10 h-10 rounded-full border-2 border-[#2d2440] group-hover:border-[#734BDF] object-cover transition-colors duration-300" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="User 1" />
                <img className="w-10 h-10 rounded-full border-2 border-[#2d2440] group-hover:border-[#734BDF] object-cover transition-colors duration-300" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" alt="User 2" />
                <img className="w-10 h-10 rounded-full border-2 border-[#2d2440] group-hover:border-[#734BDF] object-cover transition-colors duration-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="User 3" />
                <div className="w-10 h-10 rounded-full border-2 border-[#2d2440] group-hover:border-[#734BDF] bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-[10px] font-bold transition-colors duration-300">
                  +
                </div>
              </div>

              <p className="text-gray-300 group-hover:text-white/90 text-sm font-medium mb-12 transition-colors duration-300">
                Over 15,000+ Attendees<br />Connected Worldwide
              </p>

              <h3 className="text-xl font-bold leading-tight mb-6 text-white">
                Client Experience Speak<br />For Themselves
              </h3>
            </div>

            {/* Button changes to white on hover */}
            <button className="
              bg-white/10 text-white group-hover:bg-white group-hover:text-[#1a1035] 
              font-semibold text-sm py-3 px-6 rounded-full w-max transition-colors duration-300
            ">
              View All Reviews
            </button>
          </div>

          {/* Card 2: Dark Card */}
          <div className="
            bg-[#2d2440]/80 border border-white/5 rounded-2xl p-8 flex flex-col justify-between 
            transition-all duration-300 
            hover:bg-[#734BDF] hover:border-transparent hover:-translate-y-2 hover:shadow-xl hover:shadow-[#734BDF]/30
            group cursor-pointer
          ">
            <div>
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6 text-[#734BDF] group-hover:text-white transition-colors duration-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 group-hover:text-white/90 text-sm leading-relaxed mb-10 transition-colors duration-300">
                "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."
              </p>
            </div>

            {/* Author Section */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
                  alt="Ralph Edwards"
                />
                <div>
                  <h4 className="font-bold text-sm">Ralph Edwards</h4>
                  <p className="text-xs text-gray-400 group-hover:text-white/80 transition-colors duration-300">Global Marketing Director</p>
                </div>
              </div>
              {/* Quote Icon changes to white on hover */}
              <Quote size={24} className="text-[#734BDF] group-hover:text-white opacity-80 transition-colors duration-300" fill="currentColor" />
            </div>
          </div>

          {/* Card 3: Dark Card */}
          <div className="
            bg-[#2d2440]/80 border border-white/5 rounded-2xl p-8 flex flex-col justify-between 
            transition-all duration-300 
            hover:bg-[#734BDF] hover:border-transparent hover:-translate-y-2 hover:shadow-xl hover:shadow-[#734BDF]/30
            group cursor-pointer
          ">
            <div>
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6 text-[#734BDF] group-hover:text-white transition-colors duration-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 group-hover:text-white/90 text-sm leading-relaxed mb-10 transition-colors duration-300">
                "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."
              </p>
            </div>

            {/* Author Section */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
                  alt="Kristin Watson"
                />
                <div>
                  <h4 className="font-bold text-sm">Kristin Watson</h4>
                  <p className="text-xs text-gray-400 group-hover:text-white/80 transition-colors duration-300">Global Marketing Director</p>
                </div>
              </div>
              {/* Quote Icon changes to white on hover */}
              <Quote size={24} className="text-[#734BDF] group-hover:text-white opacity-80 transition-colors duration-300" fill="currentColor" />
            </div>
          </div>

        </div>

        {/* --- Pagination Dots --- */}
        <div className="flex justify-center gap-2 mb-16">
          <div className="w-6 h-1.5 bg-[#734BDF] rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* --- Brands Section --- */}
        <div className="text-center">
          <p className="text-gray-300 text-sm font-medium mb-10">
            Supported by Brands That Inspire Innovation
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-80">
            {/* Logo 1 */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#734BDF] flex items-center justify-center">
                <Zap size={16} className="text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-lg">Logoipsum</span>
            </div>

            {/* Logo 2 */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#734BDF] flex items-center justify-center">
                <Layers size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg">Logoipsum</span>
            </div>

            {/* Logo 3 */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center">
                <Triangle size={24} className="text-[#734BDF]" fill="currentColor" />
              </div>
              <span className="font-bold text-lg">Logoipsum</span>
            </div>

            {/* Logo 4 */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#734BDF] flex items-center justify-center">
                <Circle size={16} className="text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-lg">Logoipsum</span>
            </div>

            {/* Logo 5 */}
            <div className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#734BDF] flex items-center justify-center">
                <Hexagon size={16} className="text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-lg">Logoipsum</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;