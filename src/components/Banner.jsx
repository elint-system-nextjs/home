import React from 'react'
import { aiglobe } from '../assets/asset'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <section id="banner" className="relative flex flex-col lg:flex-row justify-between items-center overflow-hidden bg-gradient-to-br from-[#111827] via-[#1e3a8a] to-[#111827] px-6 pt-28 md:px-12 lg:px-24 pb-20">
                {/* Animated Blue Aura Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#2563EB]/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#06B6D4]/20 rounded-full blur-3xl"></div>
                </div>
    
                {/* Left Text Content */}
                <div
                  className="relative z-10 flex flex-col gap-6 max-w-2xl text-center items-center lg:items-start lg:text-left"
                  data-aos="fade-right"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#F9FAFB] drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)]">
                    Transforming Industries{" "}
                    <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                      with IoT, ML & AI Solutions
                    </span>
                  </h1>
    
                  <p className="text-lg md:text-2xl text-[#E5E7EB] max-w-xl leading-relaxed">
                    Empowering innovation through intelligent, data-driven
                    automation that enhances sustainability and drives growth.
                  </p>
    
                  <Link
                    to="/"
                    className="mt-4 inline-block bg-gradient-to-r from-[#C7EA46] to-orange-pulse text-[#111827] font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(199,234,70,0.5)] hover:shadow-[0_0_35px_rgba(251,146,60,0.6)] hover:scale-105 transition-all duration-500"
                  >
                    Schedule a Free Consultation
                  </Link>
                </div>
    
                {/* Right Visual / Illustration */}
                <div className="relative z-10 mt-12 lg:mt-0" data-aos="fade-left">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#2563EB]/30 to-[#06B6D4]/30 border border-[#2563EB]/40 shadow-[0_0_80px_rgba(37,99,235,0.3)] animate-[spin_30s_linear_infinite] flex items-center justify-center">
                    <img
                      src={aiglobe}
                      alt="AI Globe"
                      className="w-250 h-250 object-contain opacity-90"
                    />
                  </div>
                </div>
              </section>
  )
}

export default Banner
