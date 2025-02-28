import React from "react";
import Youtube from "./assets/youtube";
import Facebook from "./assets/facebook";
import Twitter from "./assets/twitter";
import Insta from "./assets/Insta";
import LinkedIn from "./assets/linkedin";
import Button1 from "./Button1";
import BUtton2 from "./Button2";
import Group45, { Group46, Group47, Group48, Group49 } from "./assets/group";
import elenaImage from "./assets/elena.png";
import JohnImage from "./assets/john.png";
import angrImage from "./assets/angr.png";
import Arrow, { ArrowLeft } from "./assets/Arrow";

const TrakorLandingPage = () => {
  return (
    <div className="bg-[#0f172a]  text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="container max-w-[1440px] mx-auto py-6 px-20 min-h-[96px] flex justify-between items-center">
        <div className="max-w-[231px] max-h-[35px]">
          <div className="font-sans font-bold text-[32px] leading-[35.2px] tracking-[0]">
            trakor
          </div>
        </div>

        <div className="max-h-[48px] max-w-[414px] hidden md:flex space-x-4">
          <a
            href="#"
            className="font-medium text-[16px] leading-[24px] tracking-[0.5px] px-2 py-3"
          >
            Product
          </a>
          <a
            href="#"
            className=" font-medium text-[16px] leading-[24px] tracking-[0.5px] px-2 py-3"
          >
            Solutions
          </a>
          <a
            href="#"
            className="font-medium text-[16px] leading-[24px] tracking-[0.5px] px-2 py-3"
          >
            Documentation
          </a>
          <a
            href="#"
            className="font-medium text-[16px] leading-[24px] tracking-[0.5px] px-2 py-3"
          >
            Pricing
          </a>
        </div>
        <div className="flex min-h-[48px] space-x-4">
          <button className="text-white px-2 py-3  rounded-lg">Log in</button>
          <button className="bg-[#334155] text-white p-3 ml-5 rounded-lg border border-[#475569]">
            Request more info
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-[1440px] mx-auto min-h-[811px] text-center p-20">
        <p className="font-medium text-xl leading-[22px] tracking-[0] text-center text-[#818CF8]">
          Team Progress Tracking Tool
        </p>
        <h1 className="text-7xl font-extrabold  leading-[79px] mb-8">
          Track your team progress
        </h1>
        <p className="max-w-[640px] h-[58px] mx-auto text-[18px] mb-8 leading-[28px]  text-[#CBD5E1] text-center">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <p></p>
        <div className="flex  flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#4F46E5] text-white p-4 w-[256px] rounded-lg border border-[#6366F1]">
            Start for free
          </button>
          <button className="bg-[#334155] w-[256px] border border-[#475569] text-white p-4 rounded-lg">
            Request more info
          </button>
        </div>

        {/* Graphic Element */}
        <div className="flex justify-center mt-24">
          <div className="relative h-[24px] w-[284px] ">
            <div className="absolute w-64 h-64 border-5 border-[#4F46E5] rotate-0 origin-center"></div>
            <div className="absolute top-3 left-3 w-[232px] h-[232px] border-5 border-[#4F46E5] rotate-75 origin-center"></div>
            <div className="absolute top-6 left-6 w-[208px] h-[208px] border-5 border-[#4F46E5] rotate-60 transform-gpu"></div>
            <div className="absolute top-9 left-9 w-[184px] h-[184px] border-5 border-[#4F46E5] rotate-45 transform-gpu"></div>
            <div className="absolute top-12 left-12 w-[160px] h-[160px]   bg-[#312E81] rotate-15 transform-gpu"></div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="container h-[298px] mx-auto text-center py-6 px-4 ">
        <h2 className="text-2xl leading-[26px] font-bold mb-20 mt-7">
          Trusted by teams from leading companies
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center">
            <Group46 />
            <span className="font-bold text-2xl leading-[26px] ml-2">
              SmartFinder
            </span>
          </div>
          <div className="flex items-center">
            <Group47 />
            <span className="font-bold text-2xl leading-[26px] ml-2">
              Zoomerr
            </span>
          </div>
          <div className="flex items-center">
            <Group48 />
            <span className="font-bold text-2xl leading-[26px] ml-2">
              SHELLS
            </span>
          </div>
          <div className="flex items-center">
            <Group49 />
            <span className="font-bold text-2xl leading-[26px] ml-2">
              WAVES
            </span>
          </div>
          <div className="flex items-center">
            <Group45 />

            <span className="font-bold text-2xl leading-[26px] ml-2">
              ArtVenue
            </span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className=" text-center py-14 px-4">
        <h2 className="text-[56px]  leading-[61px] font-extrabold mb-2 text-center">
          Our partners. Our Friends.
        </h2>
        <p className="text-[56px]  leading-[61px] font-extrabold text-[#818CF8] mb-6">
          They love us.
        </p>
        <p className="mx-auto mb-20 font-normal leading-[28px] text-[18px] text-center text-[#CBD5E1]">
          Sem malesuada sed lectus id nunc mattis est eget tincidunt.
        </p>

        {/* Testimonial Carousel */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6  mx-auto ">
            {/* Testimonial 0 */}
            <div className="bg-[#334155] border max-h-fit my-5 max-w-[384px] border-[#475569] p-8 rounded-[20px] text-left flex-shrink-0">
              {" "}
              {/* Added flex-shrink-0 to prevent resizing */}
              <div className="flex items-center mb-4">
                <Group46 className="text-[#94A3B8]" />
                <span className="font-bold text-2xl leading-[26px] ml-2 py-4 text-[#94A3B8]">
                  Kontrastr
                </span>
              </div>
              <p className="mb-6 font-normal text-2xl leading-[38px]">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </p>
              <div className="flex items-center pt-4">
                <img
                  src={angrImage}
                  alt="David Oshodi"
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">Ralph Edwards</p>
                  <p className="text-[16px] font-normal text-[#94A3B8]">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 1 */}
            <div className="bg-[#334155] border max-h-fit my-9 max-w-[384px] border-[#475569] p-8 rounded-[20px] text-left flex-shrink-0">
              {" "}
              {/* Added flex-shrink-0 */}
              <div className="flex items-center mb-4">
                <Group47 className="text-[#94A3B8]" />
                <span className="font-bold text-2xl leading-[26px] ml-2 py-4 text-[#94A3B8]">
                  Zoomerr
                </span>
              </div>
              <p className="mb-6 font-normal text-2xl leading-[38px]">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id porttitor fdajk ahhidia.
              </p>
              <div className="flex items-center pt-4">
                <img
                  src={JohnImage}
                  alt="Helen Jimmy"
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">Helen Jimmy</p>
                  <p className="text-[16px] font-normal text-[#94A3B8]">
                    Team Lead
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#334155] border max-w-[384px] border-[#475569] p-8 rounded-[20px] text-left flex-shrink-0">
              {" "}
              {/* Added flex-shrink-0 */}
              <div className="flex items-center mb-4 ">
                <Group48 className="text-[#94A3B8]" />
                <span className="font-bold text-2xl leading-[26px] ml-2 py-4 text-[#94A3B8]">
                  SHELLS
                </span>
              </div>
              <p className="mb-6 font-normal text-2xl leading-[38px]">
                Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                amet enim. Sit purus venenatis velit semper lectus sed ornare
                quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet
                a vitae.
              </p>
              <div className="flex items-center pt-4">
                <img
                  src={elenaImage}
                  alt="Helena John"
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">Helena John</p>
                  <p className="text-[16px] font-normal text-[#94A3B8]">
                    Co-founder
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-[#334155] border max-h-fit my-5 max-w-[384px] border-[#475569] p-8 rounded-[20px] text-left flex-shrink-0">
              {" "}
              {/* Added flex-shrink-0 */}
              <div className="flex items-center mb-4">
                <Group45 className="text-[#94A3B8]" />
                <span className="font-bold text-2xl leading-[26px] ml-2 py-4 text-[#94A3B8]">
                  ArtVenue
                </span>
              </div>
              <p className="mb-6 font-normal text-2xl leading-[38px]">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </p>
              <div className="flex items-center pt-4">
                <img
                  src={angrImage}
                  alt="David Oshodi"
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">David Oshodi</p>
                  <p className="text-[16px] font-normal text-[#94A3B8]">
                    Manager
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-[#334155] border max-h-fit my-9 max-w-[384px] border-[#475569] p-8 rounded-[20px] text-left flex-shrink-0">
              {" "}
              {/* Added flex-shrink-0 */}
              <div className="flex items-center mb-4">
                <Group49 className="text-[#94A3B8]" />
                <span className="font-bold text-2xl leading-[26px] ml-2 py-4 text-[#94A3B8]">
                  Waves
                </span>
              </div>
              <p className="mb-6 font-normal text-2xl leading-[38px]">
                Magna egstas aliquet ut interger non,Sed diam enim nibh
                sit.Aliquoom laoret aenan metus nebuh scleerquise thish skfaiojfioeda kfa.
              </p>
              <div className="flex items-center pt-4">
                <img
                  src={angrImage}
                  alt="David Oshodi"
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">Charollete Halin</p>
                  <p className="text-[16px] font-normal text-[#94A3B8]">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center mt-20 mb-6 space-x-4">
          <button className="flex py-3 px-2 items-center">
            <ArrowLeft />
            <span className="px-4 font-medium text-[16px] leading-[24px] tracking-[0.5px]">
              Prev
            </span>
          </button>
          <button className=" flex py-3 px-2 items-center">
            <span className="px-4 font-medium text-[16px] leading-[24px] tracking-[0.5px]">
              Next
            </span>
            <Arrow />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="  bg-[#334155]  px-20">
        <div className="container">
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12  w-[1280px] border-b border-b-[#334155] py-12">
            {/* Categories */}
            <div>
              <h3 className="text-[16px] leading-[17.6px] font-medium uppercase py-3 pb-5">
                Categories
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    User Interface
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    User Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Digital Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-[16px] leading-[17.6px] font-medium uppercase py-3 pb-5">
                Product
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Browse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Accessibility{" "}
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-[#E0E7FF] rounded-sm p-1 text-[#3730A3]">
                      BETA
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-[16px] leading-[17.6px] font-medium uppercase py-3 pb-5">
                Solutions
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Brainstorming
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Ideation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Wireframing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[16px] leading-[17.6px] font-medium uppercase py-3 pb-5">
                Resources
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[16px] leading-[17.6px] font-medium uppercase py-3 pb-5">
                Company
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#E2E8F0] py-3 flex items-center">
                    Request Demo
                    <svg
                      className="ml-1 w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className=" border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center py-8 md:space-x-8 mb-4 md:mb-0">
              <p className="text-[16px] text-[#E2E8F0] font-normal leading-[22.4px]">
                Trakor © 2023
              </p>
              <a
                href="#"
                className="text-[16px] text-[#E2E8F0] font-normal leading-[22.4px]"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-[16px] text-[#E2E8F0] font-normal leading-[22.4px]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[16px] text-[#E2E8F0] font-normal leading-[22.4px]"
              >
                Manage Cookies
              </a>
            </div>
            <div className="flex">
              <div className=" flex items-center space-x-4 mr-4">
                <a href="#" className="text-[#E2E8F0]">
                  <Youtube />
                </a>
                <a href="#" className="text-[#E2E8F0]">
                  <Facebook />
                </a>
                <a href="#" className="text-[#E2E8F0]">
                  <Twitter />
                </a>
                <a href="#" className="text-[#E2E8F0]">
                  <Insta />
                </a>
                <a href="#" className="text-[#E2E8F0]">
                  <LinkedIn />
                </a>
              </div>
              <div className="flex justify-center md:justify-end  space-x-[10px] py-6 ml-2">
                <a href="#">
                  <Button1 />
                </a>
                <a href="#">
                  <BUtton2 />
                </a>
              </div>
            </div>
          </div>

          {/* App Store Links */}
        </div>
      </footer>
    </div>
  );
};

export default TrakorLandingPage;
