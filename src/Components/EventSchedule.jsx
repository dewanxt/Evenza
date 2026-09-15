import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import BgImg from '../assets/EventBg.png'; 
import SecHead from './SecHead'; 

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState('Day 02'); 

  const days = ['Day 01', 'Day 02', 'Day 03'];

  // --- Day 01 Schedule (Different Data) ---
  const day1Schedule = [
    {
      id: 1,
      time: "08:00 AM - 09:30 AM",
      date: "21 March 2025",
      title: "Registration & Morning Coffee",
      description: "Pick up your badge, grab a coffee, and network with fellow attendees before the opening keynote begins.",
      location: "Main Lobby\nSector 1, Ipsum City",
    },
    {
      id: 2,
      time: "10:00 AM - 12:00 PM",
      date: "21 March 2025",
      title: "Opening Keynote: The Future of Tech",
      description: "Join our CEO as he outlines the vision for the upcoming year and introduces the major themes of the conference.",
      location: "Grand Ballroom\nSector 2, Ipsum City",
    },
    {
      id: 3,
      time: "01:00 PM - 03:00 PM",
      date: "21 March 2025",
      title: "Panel: AI in Modern Business",
      description: "A deep dive into how artificial intelligence is reshaping industries, featuring experts from leading tech companies.",
      location: "Hall A\nSector 3, Ipsum City",
    },
    {
      id: 4,
      time: "04:00 PM - 06:00 PM",
      date: "21 March 2025",
      title: "Welcome Reception",
      description: "Wind down the first day with drinks, appetizers, and live music. A perfect opportunity to make new connections.",
      location: "Rooftop Terrace\nSector 4, Ipsum City",
    },
  ];

  // --- Day 02 Schedule (Matching your image) ---
  const day2Schedule = [
    {
      id: 1,
      time: "9:00 AM - 5:30 PM",
      date: "22 March 2025",
      title: "Professional Skills Development Workshop",
      description: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12\nSector 4, Ipsum City",
    },
    {
      id: 2,
      time: "10:00 AM - 4:00 PM",
      date: "05 May 2025",
      title: "Leadership & Growth Conference",
      description: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12\nSector 4, Ipsum City",
    },
    {
      id: 3,
      time: "8:30 AM - 6:00 PM",
      date: "20 June 2025",
      title: "Digital Marketing Masterclass",
      description: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12\nSector 4, Ipsum City",
    },
    {
      id: 4,
      time: "11:00 AM - 3:00 PM",
      date: "10 April 2025",
      title: "Annual Innovation Summit 2025",
      description: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12\nSector 4, Ipsum City",
    },
  ];

  // --- Day 03 Schedule (Different Data) ---
  const day3Schedule = [
    {
      id: 1,
      time: "09:00 AM - 11:00 AM",
      date: "23 March 2025",
      title: "Advanced Coding Bootcamp",
      description: "Hands-on workshop covering the latest frameworks and best practices in modern software development.",
      location: "Tech Lab 1\nSector 5, Ipsum City",
    },
    {
      id: 2,
      time: "11:30 AM - 01:00 PM",
      date: "23 March 2025",
      title: "Startup Pitch Competition",
      description: "Watch emerging startups pitch their ideas to a panel of venture capitalists and industry leaders.",
      location: "Innovation Hub\nSector 6, Ipsum City",
    },
    {
      id: 3,
      time: "02:00 PM - 04:00 PM",
      date: "23 March 2025",
      title: "UX/UI Design Trends",
      description: "Explore the latest trends in user experience and interface design that are driving user engagement.",
      location: "Design Studio\nSector 7, Ipsum City",
    },
    {
      id: 4,
      time: "05:00 PM - 08:00 PM",
      date: "23 March 2025",
      title: "Closing Ceremony & Awards",
      description: "Celebrate the successes of the event, recognize outstanding contributions, and enjoy a final farewell dinner.",
      location: "Grand Ballroom\nSector 2, Ipsum City",
    },
  ];

  // Helper function to get the correct schedule based on active tab
  const getActiveSchedule = () => {
    if (activeDay === 'Day 01') return day1Schedule;
    if (activeDay === 'Day 03') return day3Schedule;
    return day2Schedule; // Default to Day 02
  };

  return (
    <div className="relative min-h-screen py-20 font-sans text-white overflow-hidden bg-[#1a1035]">
      
      {/* --- Imported Background Image --- */}
      <img 
        src={BgImg} 
        alt="Event Background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* --- Header Section --- */}
        <SecHead 
          title="Our Event Schedule"
          heading="Explore the complete schedule for our event"
          className="text-center flex flex-col items-center justify-center mb-12"
        />

        {/* --- Day Tabs --- */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`
                  px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300
                  ${activeDay === day 
                    ? 'bg-white text-[#1a1035] shadow-lg' 
                    : 'text-white hover:bg-white/10'}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* --- Schedule List --- */}
        <div className="flex flex-col">
          {getActiveSchedule().map((item, index) => (
            <div 
              key={item.id} 
              className={`
                grid grid-cols-1 md:grid-cols-12 gap-6 py-8 items-center
                ${index !== getActiveSchedule().length - 1 ? 'border-b border-white/10' : ''}
              `}
            >
              {/* Column 1: Time & Date (with placeholder for thumbnail) */}
              <div className="md:col-span-3 flex items-center gap-6">
                {/* Placeholder thumbnail */}
                <div className="w-16 h-16 rounded-full bg-white/10 flex-shrink-0 border border-white/20"></div> 
                <div>
                  <h4 className="font-bold text-lg text-white">{item.time}</h4>
                  <p className="text-gray-300 text-sm">{item.date}</p>
                </div>
              </div>

              {/* Column 2: Event Details */}
              <div className="md:col-span-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {/* Column 3: Location */}
              <div className="md:col-span-3 flex items-center gap-4 md:justify-end">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <p className="text-gray-300 text-sm whitespace-pre-line">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EventSchedule;