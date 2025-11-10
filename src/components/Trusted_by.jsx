import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { airtel, at, bsnl, etisalat, gail, ge, hcl, igcar, indus, isro, lt, mtn, peax, riyadh, roshan, safaricom, saudi, ssn } from '../assets/asset';

const Trusted_by = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
      const row1 = [isro, ge, lt, hcl, gail, igcar];
      const row2 = [indus, safaricom, etisalat, roshan, airtel, at];
      const row3 = [mtn, bsnl, ssn, saudi, peax, riyadh];

  return (
    <>
        <section id="Trusted By" className="bg-gradient-to-br from-[#1e293b] to-tech-blue px-6 pt-20 md:px-12 lg:px-20 pb-16 text-center overflow-hidden">
            <h1
              className="text-3xl md:text-4xl font-bold text-snow-white mb-10"
              data-aos="fade-up"
            >
              Trusted By
            </h1>

            <p
              className="text-snow-white text-lg mb-12 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We’re proud to collaborate with global brands, startups, and
              forward-thinking companies that trust our IoT, AI, and ML
              expertise to drive innovation and efficiency.
            </p>

            {/* Common settings */}
            {(() => {
              const swiperSettings = {
                modules: [Autoplay],
                spaceBetween: 30,
                slidesPerView: 6,
                loop: true,
                speed: 4000, // smooth scroll speed
                freeMode: true,
                freeModeMomentum: false,
                autoplay: {
                  delay: 0, // continuous motion
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                },
                allowTouchMove: false,
                grabCursor: false,
                breakpoints: {
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  640: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 6, spaceBetween: 30 },
                },
              };

              return (
                <>
                  {/* Row 1 - Right to Left */}
                  <Swiper {...swiperSettings} className="py-6">
                    {[...row1, ...row1].map((logo, i) => (
                      <SwiperSlide
                        key={`r1-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Row 2 - Left to Right */}
                  <Swiper
                    {...{
                      ...swiperSettings,
                      autoplay: {
                        ...swiperSettings.autoplay,
                        reverseDirection: true,
                      },
                    }}
                    className="py-6"
                  >
                    {[...row2, ...row2].map((logo, i) => (
                      <SwiperSlide
                        key={`r2-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Row 3 - Right to Left */}
                  <Swiper {...swiperSettings} className="py-6">
                    {[...row3, ...row3].map((logo, i) => (
                      <SwiperSlide
                        key={`r3-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              );
            })()}
          </section>
    </>
  )
}

export default Trusted_by
