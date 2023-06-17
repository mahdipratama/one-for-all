'use client';

// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SliderElement from './SliderElement';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

const WhiteStrip = () => {
  return (
    <svg
      width="60"
      className="inline"
      height="1"
      viewBox="0 0 60 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="60" y2="0.5" stroke="white" strokeOpacity="0.9" />
    </svg>
  );
};

const Testimonials = () => {
  return (
    <section className="h-full flex flex-col mt-[60px] justify-center items-center gap-8 md:gap-11 md:pt-[30px] bg-secondary ">
      <div className="pt-8 text-center">
        <span className="mb-[14px] text-[16px] inline-flex items-center gap-2 font-semibold	text-white">
          <WhiteStrip />
          Our Testimonials
          <WhiteStrip />
        </span>
        <h2 className="text-[30px] text-white md:text-[39px] font-playFair leading-tight font-bold">
          What People Say
        </h2>
      </div>
      <div className="layout w-full h-[420px] phone:h-max	">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper phone:!pb-[50px]">
          <SwiperSlide>
            <SliderElement
              image="/assets/images/odon.png"
              name="Oodoons Brandalz-Coretz"
              occupation="Founder"
              testimony=" Sea chub demoiselle whalefish zebra lionfish mud cat pelican
              eel. Minnow snoek icefish velvet-belly shark, California
              halibut round stingray northern sea robin. Southern grayling
              trout-perchSharksucker sea toad candiru rocket danio tilefish
              stingray deepwater stingray Sacramento splittail, Canthigaster
              rostrata."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderElement
              image="/assets/images/odon.png"
              name="Oodoons Brandalz-Coretz"
              occupation="Founder"
              testimony=" Sea chub demoiselle whalefish zebra lionfish mud cat pelican
              eel. Minnow snoek icefish velvet-belly shark, California
              halibut round stingray northern sea robin. Southern grayling
              trout-perchSharksucker sea toad candiru rocket danio tilefish
              stingray deepwater stingray Sacramento splittail, Canthigaster
              rostrata."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderElement
              image="/assets/images/odon.png"
              name="Another Name"
              occupation="co-founder"
              testimony="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis minus voluptas enim cupiditate quidem? Nisi accusantium numquam voluptates iure quas sit dolores illo? Nemo qui saepe unde, ducimus hic voluptatibus illo id. Beatae provident totam fuga at. Ab sequi qui accusantium facilis alias ipsum consectetur, neque, aspernatur possimus vero laborum."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
