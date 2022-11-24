import React from "react";
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { A11y, Autoplay } from 'swiper';

const CompaniesSlider = () => {
  const companies = [
    {
      "name": "הראל",
      "url": "https://upload.wikimedia.org/wikipedia/he/thumb/0/0a/Harel_Group_Logo.svg/2560px-Harel_Group_Logo.svg.png"
    },
    {
      "name": "כלל",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D7%9C%D7%95%D7%92%D7%95_%D7%9B%D7%9C%D7%9C_%D7%91%D7%99%D7%98%D7%95%D7%97.svg/800px-%D7%9C%D7%95%D7%92%D7%95_%D7%9B%D7%9C%D7%9C_%D7%91%D7%99%D7%98%D7%95%D7%97.svg.png"
    },
    {
      "name": "מיטב דש",
      "url": "https://www.meitav.co.il/media/116958/logo_on_white151-48.png"
    },
    {
      "name": "איילון",
      "url": "https://upload.wikimedia.org/wikipedia/he/thumb/5/54/AyalonIns.svg/1200px-AyalonIns.svg.png"
    },
    {
      "name": "הפניקס",
      "url": "https://upload.wikimedia.org/wikipedia/he/thumb/1/18/The_Phoenix_Holdings_Logo.svg/1280px-The_Phoenix_Holdings_Logo.svg.png"
    },
    {
      "name": "מגדל",
      "url": "/migdal.png"
    },
    {
      "name": "מנורה מבטחים",
      "url": "https://upload.wikimedia.org/wikipedia/he/thumb/4/43/%D7%9E%D7%A0%D7%95%D7%A8%D7%94_%D7%9E%D7%91%D7%98%D7%97%D7%99%D7%9D_%D7%9C%D7%95%D7%92%D7%95.svg/1280px-%D7%9E%D7%A0%D7%95%D7%A8%D7%94_%D7%9E%D7%91%D7%98%D7%97%D7%99%D7%9D_%D7%9C%D7%95%D7%92%D7%95.svg.png"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, A11y]}
      spaceBetween={15}
      loop={true}
      slidesPerView={4}
      autoplay={{
        delay: 3000
      }}
      breakpoints={{
        360: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4
        }
      }}
    >
      {companies.map((company, index) => (
        <SwiperSlide key={index}>
            <div className="flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 p-4 w-[200px] h-[90px]">
              <Image src={company.url} alt={company.name} width={120} height={60} />
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CompaniesSlider;