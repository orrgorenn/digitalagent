import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, A11y, Autoplay } from 'swiper';

import { AiFillStar } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialSlider = () => {
  const testimonials = [
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "פניתי לסוכן הדיגיטלי בנושא קרן הפנסיה וקרן ההשתלמות שלי, לאחר הסבר מקיף על שני המוצרים הללו וכמו כן מעבר על המסלקה שלי, הבנו כי בעצם היותי עובדת מדינה יכלתי להוזיל באופן משמעותי את דמי הניהול שלי. הסוכן הדיגיטלי טיפל בי באופן מקצועי וגם לכך שאוזיל עשרות שקלים בדמי ניהול חודשיים וכמו כן פתח לי קופת גמל עבור הילד שלי."
    },
    {
      "name": "אור ג.",
      "title": "מפתח תוכנה, רעננה",
      "testimonial": "בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה בדיקה "
    }
  ]

  return (
    <Swiper
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={30}
      loop={true}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000
      }}
      breakpoints={{
        360: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {testimonials.map((test, index) => (
        <SwiperSlide key={index}>
            <blockquote className="rounded-lg bg-gray-50 border border-gray-200 dark:bg-slate-800 p-8">
              <div className="flex items-center">
                <img
                  alt="Avatar"
                  src={`https://ui-avatars.com/api/?name=${test.name}&background=random`}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="mr-4">
                  <div className="flex justify-center gap-0.5 text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-white">
                    {test.name}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-500 dark:text-white">
                 {test.testimonial}
              </p>
            </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider;