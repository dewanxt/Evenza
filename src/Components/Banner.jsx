import React from "react";
import Container from "./Container";
import Button from "./Button";
import play from "../assets/BannerPlayBtn.png";
import Img3 from "../assets/Bnr3Img.png";
import CountDown from "./CountDown";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";

const Banner = () => {
  return (
    <>
      <div className=" text-white text-center pt-30 bg-[url(./assets/Banner.png)] bg-cover bg-center bg-no-repeat ">
        <Container>
          <div className="py-25">
            <div className="flex justify-center items-center gap-2 backdrop-blur bg-white/10 w-65 mx-auto p-3 rounded-full">
              <img src={Img3} alt="" />
              <span>Ideas that spark change.</span>
            </div>
            <h1 className="font-extrabold text-[76px]">
              Connecting Minds to Shape Tomorrow's Big Ideas
            </h1>
            <p className="text-[16px] w-184.5 mx-auto">
              Experience a powerful gathering of visionaries, creators, and
              industry experts united by one goal— exchanging ideas that spark
              growth, innovation, and meaningful change.
            </p>
            <div className="flex justify-center items-center gap-10 pt-13.25">
              <Button>Explore Schedule</Button>
              <div className="flex justify-center items-center gap-5">
                <img src={play} alt="" />
                <span>Watch Video</span>
              </div>
            </div>
            <p className="pt-15">Upcoming Speaker Reveal - Don't Miss Out</p>
            <div>
              <CountDown />
            </div>
          </div>
        </Container>

          <ScrollVelocity
          texts={["Latest Updates * New Announcements * Workshop Alerts * Live Notices * Event Countdown * Workshop Alerts *"]}
          velocity={200}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
        />

      </div>
    </>
  );
};

export default Banner;
