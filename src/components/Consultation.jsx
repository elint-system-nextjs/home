import React from 'react'
import { motion } from "framer-motion";
import { consultation } from '../assets/asset'
import { Calendar } from "lucide-react";

const Consultation = () => {
  return (
    <>
      <section
        id="Consultation"
        className="w-full py-16 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative"
      >
        {/* === Background Gradient Layers === */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0b1f2a] to-[#001f3f] -z-10 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-electric-lime/10 rounded-full filter blur-3xl"
          />
        </div>

        {/* === Left Section === */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue to-[#052e53] drop-shadow-lg">
            Speak with an IoT Expert Today!
          </h2>
          <p className="text-base sm:text-lg text-cyan leading-relaxed max-w-lg mx-auto lg:mx-0">
            Our specialists are ready to discuss your specific needs and
            demonstrate how our IoT Solutions can revolutionize your
            operations, improving business performance and operational
            efficiency.
          </p>

          {/* === CTA Button === */}
          <motion.a
            whileHover={{
              scale: 1.1,
              y: -3,
              boxShadow:
                "0 0 30px rgba(37,99,235,0.7), 0 0 60px rgba(6,182,212,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="inline-flex items-center gap-3 text-tech-blue text-lg sm:text-xl font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl border-2 border-tech-blue shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 bg-gradient-to-r from-tech-blue/30 to-cyan-500/20 backdrop-blur-sm"
          >
            Schedule a free consultation <Calendar size={22} />
          </motion.a>
        </div>

        {/* === Right Section: Image Card === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center relative z-10"
        >
          <div
            className="group relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative"
            >
              {/* Layered Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-tech-blue to-electric-lime rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>

              <img
                src={consultation}
                alt="IoT Expert"
                className="relative w-full h-auto object-cover rounded-3xl"
              />

              {/* Overlay info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 text-white text-center w-11/12"
              >
                Connect with our experts & elevate your IoT solutions!
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Consultation