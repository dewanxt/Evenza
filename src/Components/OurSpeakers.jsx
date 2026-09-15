import { Share2 } from 'lucide-react';
import Img1 from '../assets/Sophia.png';
import Img2 from '../assets/Jacob.png';
import Img3 from '../assets/Ariene.png';
import SecHead from './SecHead'; // Ensure the path is correct based on your folder structure

// Displays speaker profiles and their conference roles in a responsive grid.
const OurSpeakers = () => {
  const speakersData = [
    {
      id: 1,
      name: "Sophia Rodrigues",
      role: "Global Marketing Director",
      image: Img1,
    },
    {
      id: 2,
      name: "Jacob Jones",
      role: "Lead AI Research Scientist",
      image: Img2,
    },
    {
      id: 3,
      name: "Arlene McCoy",
      role: "Innovation Strategy Expert",
      image: Img3,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* --- Header Section --- */}
        <SecHead
          title="Our Speakers"
          heading="Introducing the expert speakers"
          className="text-center flex flex-col items-center justify-center mb-16 text-[#1a1035]"
        />

        {/* --- Speakers Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakersData.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-[#f8f9fa] rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden mb-6 aspect-4/5">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section */}
              <div className="flex items-center justify-between px-2 pb-2">
                <div>
                  <h3 className="text-lg font-bold text-[#1a1035] mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {speaker.role}
                  </p>
                </div>

                {/* Share Icon Button */}
                <button className="w-10 h-10 rounded-full bg-[#734BDF] flex items-center justify-center text-white hover:bg-[#5a36c0] transition-colors duration-300">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurSpeakers;