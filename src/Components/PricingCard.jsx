// PricingCard.jsx
import { Check } from 'lucide-react';

// Renders one reusable ticket option, including its features and optional badge.
const PricingCard = ({ icon, title, subtitle, price, features, isPopular }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* --- Popular Ribbon --- */}
      {isPopular && (
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-10">
          <div className="absolute top-[18px] right-[-35px] w-[140px] bg-[#734BDF] text-white text-[10px] font-bold tracking-widest uppercase text-center py-1.5 rotate-45 shadow-md">
            Popular
          </div>
        </div>
      )}

      {/* --- Top Section (Gray Background) --- */}
      <div className="bg-[#f4f5f7] p-8 pb-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#734BDF] flex items-center justify-center text-white flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1a1035]">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-end gap-1">
          <span className="text-4xl font-extrabold text-[#1a1035]">${price}</span>
          <span className="text-sm text-gray-500 mb-1">/One-Time</span>
        </div>
      </div>

      {/* --- Bottom Section (White Background) --- */}
      <div className="p-8 pt-6 flex flex-col flex-grow">
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#1a1035] mb-1">What's Included:</h4>
          <p className="text-xs text-gray-500">It could relate to a subscription</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Feature List */}
        <ul className="flex flex-col gap-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
              <Check size={16} className="text-[#734BDF] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="w-full py-3.5 bg-[#734BDF] text-white text-sm font-semibold rounded-full hover:bg-[#5a36c0] transition-colors duration-300">
          Get Standard Pass
        </button>
      </div>

    </div>
  );
};

export default PricingCard;