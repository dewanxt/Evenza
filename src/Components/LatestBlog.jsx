import { User, ArrowRight } from 'lucide-react';
import BlogImg1 from '../assets/BlogImg1.png';
import BlogImg2 from '../assets/BlogImg2.png';
import BlogImg3 from '../assets/BlogImg3.png';
import SecHead from './SecHead';

// Presents the latest event-related articles in featured and compact card layouts.
const LatestBlog = () => {
  return (
    <div className="bg-white py-24 px-4 font-sans text-[#1a1035]">
      <div className="max-w-7xl mx-auto">

        {/* --- Header Section --- */}
        <SecHead
          title="Latest Blog"
          heading="Explore our latest insights stories and updates"
          className="text-center flex flex-col items-center justify-center mb-16"
        />

        {/* --- Blog Grid Layout --- */}
        {/* On desktop: 2 columns. On mobile: 1 column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* --- Left Column: Large Featured Card --- */}
          <div className="bg-[#f8f9fa] rounded-3xl p-5 flex flex-col transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Large Image */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-4/3">
              <img
                src={BlogImg1}
                alt="Mastering Public Speaking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col grow px-2">
              {/* Author */}
              <div className="flex items-center gap-2 text-[#734BDF] text-sm font-semibold mb-4">
                <User size={16} />
                <span>Esther Howard</span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1035] mb-4 leading-tight">
                Mastering Public Speaking: Expert Tips for Confident Presentations
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                Improve your communication skills with proven techniques used by world-class speakers to captivate and inspire audiences.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-6"></div>

              {/* Read More Link */}
              <a href="#" className="inline-flex items-center gap-2 text-[#734BDF] font-semibold text-sm hover:gap-3 transition-all duration-300 w-max">
                Read More
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* --- Right Column: Stacked Cards --- */}
          <div className="flex flex-col gap-8">

            {/* Top Right Card */}
            <div className="bg-[#f8f9fa] rounded-3xl p-4 flex flex-col sm:flex-row gap-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 grow">
              {/* Image (Left side of horizontal card) */}
              <div className="rounded-2xl overflow-hidden sm:w-2/5 shrink-0 aspect-square sm:aspect-auto">
                <img
                  src={BlogImg2}
                  alt="Simple Self-Defense Skills"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content (Right side of horizontal card) */}
              <div className="flex flex-col grow py-2 sm:py-4 pr-2">
                {/* Author */}
                <div className="flex items-center gap-2 text-[#734BDF] text-xs font-semibold mb-3">
                  <User size={14} />
                  <span>Esther Howard</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1a1035] mb-4 leading-snug w-80">
                  Simple Self-Defense Skills Everyone Should Learn for Safety
                </h3>

                <div className="mt-auto">
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-300 mb-4"></div>

                  {/* Read More Link */}
                  <a href="#" className="inline-flex items-center gap-2 text-[#734BDF] font-semibold text-sm hover:gap-3 transition-all duration-300 w-max">
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-[#f8f9fa] rounded-3xl p-4 flex flex-col sm:flex-row gap-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex-grow">
              {/* Image (Left side of horizontal card) */}
              <div className="rounded-2xl overflow-hidden sm:w-2/5 shrink-0 aspect-square sm:aspect-auto">
                <img
                  src={BlogImg3}
                  alt="The Power of Networking"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content (Right side of horizontal card) */}
              <div className="flex flex-col flex-grow py-2 sm:py-4 pr-2">
                {/* Author */}
                <div className="flex items-center gap-2 text-[#734BDF] text-xs font-semibold mb-3">
                  <User size={14} />
                  <span>Esther Howard</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#1a1035] mb-4 leading-snug">
                  The Power of Networking: Building Connections That Last
                </h3>

                <div className="mt-auto">
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-300 mb-4"></div>

                  {/* Read More Link */}
                  <a href="#" className="inline-flex items-center gap-2 text-[#734BDF] font-semibold text-sm hover:gap-3 transition-all duration-300 w-max">
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LatestBlog;