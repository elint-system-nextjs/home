import React from 'react'
import { home } from '../assets/asset'
import AOS from "aos";
import "aos/dist/aos.css";

const Our_expertise = () => {
  return (
    <>
        <section id="Our Expertise On Solutions Offerings">
                    <div className="py-10 px-[10%] ">
                      <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="text-center text-white rounded-3xl shadow-lg p-5 bg-gradient-to-r from-[#0a0c25] via-[#0f1b5a] to-[#181b81]"
                      >
                        <h1
                          className="text-2xl md:text-3xl font-bold"
                          data-aos="zoom-in"
                        >
                          Our Expertise On Solutions Offerings
                        </h1>
                        <p
                          className="py-2 text-justify mx-auto w-full md:w-[70%] lg:w-[60%]"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        >
                          Elint Systems is a top-tier provider of IoT, ML, and AI
                          solutions designed to monitor, process, and control assets
                          across various industries. Our team excels in delivering
                          customized solutions for
                        </p>
                        <div className="py-2 flex justify-center">
                          <img
                            src={home}
                            alt="Home-Solution"
                            width={700}
                            height={700}
                            data-aos="zoom-in-up"
                            data-aos-delay="100"
                            className="hover:scale-95 transition-transform duration-1000 w-full max-w-[700px]"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}

export default Our_expertise
