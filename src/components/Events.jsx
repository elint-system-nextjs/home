import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from 'react'
import {
  img1msme, img1rei, img1solar,
  img2msme, img2rei, img2solar,
  img3msme, img3rei,
  img4msme, img4rei,
  img5msme, img6msme,
  logo1msme, logo2rei, logo3solar
} from '../assets/asset';

const Events = () => {

  const events = [
    {
      title: "INTERNATIONAL MSME B2B MEET 27-28 JUNE 2023 | MALAYSIA",
      description:
        "Global MSME collaboration fostering trade, partnerships, and growth opportunities in Malaysia.",
      images: [img1msme, img2msme, img3msme, img4msme, img5msme, img6msme],
      logo: logo1msme,
    },
    {
      title: "REI 2018, ASIA'S LARGEST EVENT IN REI DOMAIN",
      description:
        "Asia’s largest Renewable Energy India Expo showcasing sustainable and innovative clean energy solutions.",
      images: [img1rei, img2rei, img3rei, img4rei],
      logo: logo2rei,
    },
    {
      title: "SOLAR MEET - JAN 2018 @ DELHI",
      description:
        "A leading solar industry conference discussing innovation, efficiency, and green energy transformation.",
      images: [img1solar, img2solar],
      logo: logo3solar,
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const controls = useAnimation();

  // Auto-slide events every 10s
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [paused, events.length]);

  // Continuous auto-slide with Z-axis parallax (desktop only)
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      rotateY: [0, 10, -10, 0],
      z: [0, 40, 20, 0],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
        rotateY: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
        z: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
      },
    });
  }, [index, controls]);

  const current = events[index];

  return (
    <section
      id="Events"
      className="relative py-16 sm:py-24 flex flex-col items-center justify-center 
      bg-gradient-to-br from-[#0B1220] via-[#13254A] to-[#0B1220] text-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 sm:mb-16 px-4"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r from-[#2563EB] to-[#06B6D4] drop-shadow-lg tracking-wide">
          Events & Highlights
        </h2>
        <p className="text-[#E5E7EB] mt-3 sm:mt-4 text-sm sm:text-lg">
          Showcasing our global impact and participation
        </p>
      </motion.div>

      {/* Event Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[95%] max-w-[1100px] 
        bg-[#1E293B]/40 backdrop-blur-2xl border border-[#2563EB]/30 rounded-3xl 
        shadow-[0_0_25px_rgba(37,99,235,0.3)] overflow-hidden flex flex-col md:flex-row-reverse 
        transition-all duration-700 hover:scale-[1.01]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Right: Logos Auto-Slide */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex justify-center md:justify-start 
        overflow-x-auto md:overflow-hidden perspective-distant">
          <motion.div animate={controls} className="flex gap-4 md:gap-6 whitespace-nowrap">
            {[...current.images, ...current.images].map((img, i) => (
              <motion.div
                key={i}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden 
                bg-gradient-to-r from-[#2563EB] to-[#06B6D4] border border-white/10 shadow-lg shrink-0"
                whileHover={{ scale: 1.05, rotateY: 20, z: 30 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img} alt="event" className="w-full h-full object-cover rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Left: Event Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center 
        px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <img
                src={current.logo}
                alt="logo"
                className="mb-4 sm:mb-6 w-24 sm:w-28 h-auto drop-shadow-[0_0_20px_#06B6D4]"
              />
              <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 
              bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-[#C7EA46]">
                {current.title}
              </h3>
              <p className="text-[#E5E7EB] text-xs sm:text-sm md:text-base leading-relaxed 
              max-w-xs sm:max-w-md line-clamp-4">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {events.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: i === index ? 1.3 : 1,
              opacity: i === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              i === index
                ? "bg-gradient-to-r from-[#06B6D4] to-[#C7EA46] shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                : "bg-[#374151]"
            }`}
          ></motion.div>
        ))}
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] 
      bg-[#2563EB]/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] 
      bg-[#06B6D4]/30 blur-[140px] rounded-full"></div>
    </section>
  )
}

export default Events