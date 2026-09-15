import { useState } from 'react';
import { CirclePlus, CircleMinus } from 'lucide-react';
import FaqImg from '../assets/Figure → faqs-image.jpg.png';
import SecHead from './SecHead';

// Renders the FAQ image and manages the expandable question-and-answer list.
const FAQs = () => {
  // Default open to item 3 as shown in the image
  const [openIndex, setOpenIndex] = useState(3);

  const faqData = [
    {
      id: 1,
      question: "How does the complete event register process actually work?",
      answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
    },
    {
      id: 2,
      question: "Where is the main event venue located precisely?",
      answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
    },
    {
      id: 3,
      question: "Can attendees freely switch between sessions and tracks?",
      answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
    },
    {
      id: 4,
      question: "Does the event provide virtual participation options online?",
      answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
    },
    {
      id: 5,
      question: "What is the event refund and cancellation policy?",
      answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-white py-24 px-4 font-sans text-[#1a1035]">
      <div className="max-w-6xl mx-auto">

        {/* Changed grid ratio to 4:6 and reduced gap */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-8 lg:gap-10 items-center">

          {/* --- Left Column: Image --- */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">

            {/* Main Image */}
            <div className="rounded-4xl overflow-hidden">
              <img
                src={FaqImg}
                alt="Customer Experience"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

          {/* --- Right Column: Header & Accordion --- */}
          <div className="flex flex-col pt-10 lg:pt-0">

            {/* Header using SecHead */}
            <SecHead
              title="FAQ's"
              heading="What our customers say about their experience"
              className="text-left flex flex-col items-start justify-start mb-10 w-full"
            />

            {/* Accordion List */}
            <div className="flex flex-col gap-4 w-full">
              {faqData.map((item) => {
                const isOpen = openIndex === item.id;

                return (
                  <div
                    key={item.id}
                    className="bg-[#f4f5f7] rounded-xl overflow-hidden transition-all duration-300"
                  >
                    {/* Accordion Header (Clickable) */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <span className="font-semibold text-[0.95rem] text-[#1a1035] pr-4">
                        {item.id}. {item.question}
                      </span>

                      {/* Icon indicator (Circle Plus / Circle Minus) */}
                      <div className="shrink-0 text-primary">
                        {isOpen ? <CircleMinus size={22} /> : <CirclePlus size={22} />}
                      </div>
                    </button>

                    {/* Accordion Body (Animated) */}
                    <div
                      className={`
                        transition-all duration-300 ease-in-out px-5 overflow-hidden
                        ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      {/* Thin Divider Line */}
                      <div className="w-full h-px bg-gray-300 mb-4"></div>

                      <p className="text-[0.85rem] text-gray-500 leading-relaxed pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQs;