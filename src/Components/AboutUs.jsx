import React from "react";
import AboutUsImg from "../assets/AboutUs.jpg";
import Container from "./Container";
import SecHead from "./SecHead";
import Button from "./Button";
import aIcon1 from "../assets/AboutIcon1.jpg"
import aIcon2 from "../assets/AboutIcon2.jpg"
import aIcon3 from "../assets/AboutIcon3.jpg"

const AboutUs = () => {
  return (
    <>
      <div className="pt-25">
        <Container>
          <div className="flex justify-center items-center ">
            <div>
              <img src={AboutUsImg} alt="" />
            </div>
            <div className="w-182.75 space-y-10.5">
              <SecHead 
              title="About Us" 
              heading="Behind this event" />
              <p className="w-166 text-[16px] text-[#737681]">
                Discover the vision that drives this event—a commitment to
                bringing together innovators, leaders, and changemakers to share
                knowledge, spark inspiration, and create meaningful connections.
              </p>
              <div className=" flex justify-between items-center bg-[#F6F6F7] rounded-[20px] py-2.5">
                <span className="px-17 py-5 font-bold rounded-[10px] hover:bg-white mx-2.5">
                  Our Mission
                </span>
                <span className="px-17 py-5 font-bold rounded-[10px] hover:bg-white">
                  Our Vision
                </span>
                <span className="px-17 py-5 font-bold rounded-[10px] hover:bg-white mx-2.5">
                  Our Goal
                </span>
              </div>
              <p className=" text-[16px] text-[#737681]">
                Our vision is to build a global community where collaboration
                fuels innovation we aim encourage fresh thinking, spark
                inspiring dialogues, and create a space.
              </p>

              <div className="flex justify-between items-center border-b border-gray-300 pb-6">
                <div className="flex justify-center items-center gap-3.75">
                 <img src={aIcon1} alt="" />
                  <span className="text-[#161A2D] font-bold w-56.75">Receive real-time event updates.</span>
                </div>
                <div className="flex justify-center items-center gap-3.75">
                <img src={aIcon2} alt="" />
                  <span className="text-[#161A2D] font-bold w-56.75">Receive real-time event updates.</span>
                </div>
              </div>

              <div className="flex items-center gap-7.5">                
                <Button>Learn More About</Button>


                <div className="flex justify-center items-center gap-3.75">   
                <img src={aIcon3} alt="" />
                <div className="text-[#161A2D] font-bold">                    
                  <span className="block">Call Now!</span>
                  <span>+00 123 456 789</span>
                </div>
                </div>


              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
