import React from 'react'
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { administrativetools, hardware, iot, mobileWeb, support } from '../assets/asset';

const What_we_do = () => {

    const whatwedo = [
        {
          img: hardware,
          title: "Tailored Embedded Hardware & Software",
          description:
            "Custom-built solutions designed to meet unique industry requirements.",
        },
        {
          img: administrativetools,
          title: "Advanced Data Analytics",
          description:
            "Leveraging AI and ML to turn complex data into actionable insights.",
        },
        {
          img: support,
          title: "Comprehensive Support & Maintenance",
          description:
            "Ensuring long-term performance and optimization with continuous support.",
        },
        {
          img: mobileWeb,
          title: "Mobile & Web Dashboards",
          description:
            "Seamless, real-time monitoring, control, and data visualization on any device.",
        },
        {
          img: iot,
          title: "White-Label IoT Platforms",
          description:
            "Fully customizable, scalable platforms that adapt to your brand and operational needs.",
        },
      ];

  return (
    <>
        <section className="w-full bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-6 md:px-12">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                What We Do
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                At Elint Systems, we ensure that all your Concept to Solutions
                needs are met under a single roof. Our Expertise on IoT ( IT &
                OT)
              </p>
            </div>

            {/* Swiper Section */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              effect="coverflow"
              loop={true}
              speed={1200} // 🔹 Smooth transition speed
              autoplay={{
                delay: 3500, // smooth timing between slides
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Pagination, Autoplay, EffectCoverflow]}
              className="max-w-7xl mx-auto"
            >
              {whatwedo.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-[#16213e]/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-8 flex flex-col justify-center items-center text-center hover:scale-[1.05] transition-all duration-500 min-h-[360px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon or Image */}
                    <motion.div
                      className="flex items-center justify-center mb-6"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 },
                      }}
                    >
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-contain rounded-2xl"
                        />
                      ) : (
                        <span className="text-gray-400 font-semibold">IoT</span>
                      )}
                    </motion.div>

                    {/* Text */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-base max-w-md">
                      {item.description}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
    </>
  )
}

export default What_we_do
