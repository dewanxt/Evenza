// FeatureCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div
      className="
        relative p-8 rounded-2xl flex flex-col h-full transition-all duration-300 group cursor-pointer
        bg-[#2d2440]/80 border border-white/5 
        hover:bg-[#734BDF] hover:shadow-xl hover:shadow-[#734BDF]/30 hover:-translate-y-2 hover:border-transparent
      "
    >
      {/* Icon Box */}
      <div className="
        w-12 h-12 rounded-lg flex items-center justify-center mb-20 transition-colors duration-300
        bg-[#734BDF] group-hover:bg-white/20
      ">
        {icon}
      </div>

      {/* Content */}
      <div className="mt-auto">
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        
        {/* Description text changes opacity on hover for better contrast */}
        <p className="
          text-sm mb-8 leading-relaxed transition-colors duration-300
          text-gray-400 group-hover:text-white/90
        ">
          {description}
        </p>
        
        {/* Divider */}
        <div className="
          w-full h-px mb-6 transition-colors duration-300
          bg-white/10 group-hover:bg-white/20
        "></div>

        {/* Read More Link */}
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          Read More 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;