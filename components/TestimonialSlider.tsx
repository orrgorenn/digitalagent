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
      "name": "משה כ.",
      "title": "בודק תוכנה, בת ים",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "אור ג.",
      "title": "מפתח תוכנה, רעננה",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
    {
      "name": "ספיר ג.",
      "title": "ראש צוות IT, תל אביב",
      "testimonial": "אבירם עזר לי מאד, הוזיל לי את עלויות דמי הניהול גם בפנסיה וגם בקרן ההשתלמות שלי."
    },
  ]

  return (
    <Swiper
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={52}
      loop={true}
      slidesPerView={4}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000
      }}
    >
      {testimonials.map((test, index) => (
        <SwiperSlide key={test.name} virtualIndex={index}>
            <blockquote className="rounded-lg text-colorbg-white dark:bg-slate-800 p-8">
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