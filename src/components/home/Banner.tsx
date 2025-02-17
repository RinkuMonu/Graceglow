import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import sl3 from "../../assest/sl-3.png";
// import sl4 from "../../assest/sl-4.png";
// import sl5 from "../../assest/sl-5.png";
// import { MoveRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assest/banner1.webp";
import banner2 from "../../assest/banner2.webp";
import banner3 from "../../assest/banner3.webp";
import banner4 from "../../assest/banner4.webp";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar Menu */}
        <div className="col-span-3 hidden xl:block">
          <div className="bg-white shadow-md rounded-lg p-4">
            <ul className="space-y-2">
              {[
                "Face Mask",
                "Hair Oil",
                "Soap",
                "Gel",
                "Serum",
                "Face Wash",
              ].map((name, index) => (
                <li key={index} className="cursor-pointer hover:text-green-500">
                  <Link
                    to={`/category/${name.toLowerCase()}`}
                    className="text-gray-700 hover:text-green-500 "
                  >
                    {name}
                  </Link>
                  <div className="h-[1px] w-64 bg-gray-200"></div>
                </li>
              ))}
              {/* <li
                className="relative"
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                <a className="text-gray-700 hover:text-green-500">Creams</a>
                {showSubMenu && (
                  <ul className="absolute left-full top-0 bg-white shadow-md rounded-lg p-2">
                    {["Moisturizing Cream", "Fairness Cream"].map((name, index) => (
                      <li key={index}>
                        <a className="block text-gray-700 hover:text-green-500">{name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li> */}
              <li className="text-center mt-3">
                <a className="text-green-500 hover:underline cursor-pointer">
                  View all
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Banner */}
        <div className="col-span-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="w-full"
            >
              {[banner1, banner2].map((image, index) => (
                <SwiperSlide key={index}>
                  <a className="block">
                    <img
                      className="w-full rounded-lg"
                      loading="lazy"
                      alt={`Banner ${index + 1}`}
                      src={image}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {[banner3, banner4].map((image, index) => (
              <div key={index}>
                <a className="block">
                  <img
                    className="rounded-lg w-full"
                    loading="lazy"
                    alt={`Banner ${index + 3}`}
                    src={image}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 hidden sm:block">
          
            <img
              className="rounded-lg w-full shadow-md"
              alt=""
              src="https://graceglow.in/storage/app/public/banner/2024-11-19-673c689679606.webp"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
