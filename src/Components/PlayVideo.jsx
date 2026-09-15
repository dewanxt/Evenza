import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import PlayMp4 from '../assets/The Weeknd & Ariana Grande – Save Your Tears (Live on The 2021 iHeart Radio Music Awards).mp4';

const PlayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Thumbnail shown before the video starts
  const thumbnailUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600";

  const handlePlayClick = () => {
    setIsPlaying(true);
    
    // Use a slight timeout to ensure the video element is rendered in the DOM
    // before we try to call .play() on it.
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 10);
  };

  return (
    // Outer wrapper - Full width
    <div className="w-full bg-[#1a1035] py-10">
      
      {/* 
        Video Box - Decreased height using responsive vh units.
        Removed aspect-video to allow custom height control. 
      */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-black">
        
        {/* State 1: Thumbnail & Play Button */}
        {!isPlaying ? (
          <div 
            className="absolute inset-0 w-full h-full cursor-pointer group"
            onClick={handlePlayClick}
          >
            {/* Thumbnail Image - object-cover fills the shorter box nicely */}
            <img 
              src={thumbnailUrl} 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Play Button - Centered Middle of the Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="
                w-20 h-20 md:w-24 md:h-24 
                bg-[#734BDF]/80 backdrop-blur-sm 
                rounded-full flex items-center justify-center 
                border border-white/40 
                shadow-2xl shadow-[#734BDF]/50
                transition-all duration-300 
                group-hover:scale-110 group-hover:bg-[#734BDF] group-hover:border-white/80
              ">
                <Play size={32} className="text-white ml-1 md:w-10 md:h-10" fill="currentColor" />
              </div>
            </div>
          </div>
        ) : (
          
          /* State 2: HTML5 Video Player - object-contain prevents zooming/cropping */
          <video 
            ref={videoRef}
            src={PlayMp4} 
            controls 
            className="absolute inset-0 w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        )}

      </div>
    </div>
  );
};

export default PlayVideo;