import React from 'react'
import { countries, experience, happy, industry, live } from '../assets/asset';
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Why_choose_us = () => {

    const data = [
        { img: happy, value: "150+", text: "Happy Customers" },
        { img: experience, value: "18+", text: "Years of Experience" },
        { img: countries, value: "20+", text: "Countries Served" },
        { img: live, value: "55K+", text: "Live Devices" },
        { img: industry, value: "13+", text: "Industry Verticals" },
      ];
    
    const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 60 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <>
    <section id="Why Choose Us" className="w-full bg-snow-white py-20 px-4 md:px-12 overflow-hidden">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-5xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Why Choose <span className="text-red-500">Us?</span>
              </h1>
              <p className="text-slate-gray text-base md:text-lg leading-relaxed">
                With over 18 years of experience in IoT and Cloud Solutions,
                Elint Systems provides quick, cost-effective, and reliable
                solutions for your most challenging IoT needs.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20 max-w-6xl mx-auto">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -top-12 bg-white rounded-2xl p-4 shadow-md border-snow-white"
                    whileHover={{
                      rotate: [0, -6, 6, 0],
                      transition: { duration: 0.6 },
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-14 h-14 object-contain"
                    />
                  </motion.div>

                  {/* Card Box (Fixed Height) */}
                  <div className="border-snow-white bg-white rounded-2xl flex flex-col justify-center items-center px-6 py-14 shadow-sm hover:shadow-lg transition duration-300 w-full h-[280px]">
                    <motion.p
                      className="font-extrabold text-5xl text-gray-900 mb-3"
                      whileHover={{ scale: 1.1, color: "#ef4444" }}
                    >
                      {item.value}
                    </motion.p>
                    <p className="text-slate-gray font-medium text-lg">
                      {item.text}
                    </p>
                    <div className="h-1 w-10 bg-linear-to-r from-red-500 to-orange-400 mt-3 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
    </>
  )
}

export default Why_choose_us
