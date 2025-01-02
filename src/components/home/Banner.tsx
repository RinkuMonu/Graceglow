import React from 'react';
import { ArrowRight } from 'lucide-react';
import main_banner from "../../assest/main_banner.png";

export default function Banner() {
  return (
    <div
      className="relative h-[450px] sm:h-[500px] md:h-[600px] "
      style={{ backgroundColor: "rgb(82, 82, 162)" }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Discover the Latest
            <br />
            Tech Innovations
          </h1>
          <p className="text-lg sm:text-xl text-white px-4 md:px-0">
            Shop the most advanced gadgets and electronics at unbeatable prices
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center space-x-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 hover:text-white transition">
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center h-full w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={main_banner}
            alt="Latest Technology"
            className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
