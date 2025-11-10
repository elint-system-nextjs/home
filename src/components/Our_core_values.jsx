import React from 'react'
import { chart, team } from '../assets/asset';
import {
  FaLightbulb,
  FaHandshake,
  FaUserFriends,
  FaStar,
  FaUsers,
  FaLeaf,
  FaBolt,
} from "react-icons/fa";

const Our_core_values = () => {

    const coreData = [
        {
          icon: FaLightbulb,
          title: "Innovation",
          description:
            "Pioneering innovation to solve complex challenges and empower clients.",
          color: "#ec4899",
          aos: "fade-down",
        },
        {
          icon: FaHandshake,
          title: "Integrity",
          description:
            "Built on integrity, we uphold honesty, transparency and trust.",
          color: "#38bdf8",
          aos: "fade-right",
        },
        {
          icon: FaUserFriends,
          title: "Customer Focus",
          description:
            "Prioritizing client needs and delivering personalized solutions.",
          color: "#facc15",
          aos: "fade-up-right",
        },
        {
          icon: FaStar,
          title: "Excellence",
          description:
            "Striving for excellence across all aspects, ensuring top quality.",
          color: "#0a4cff",
          aos: "fade-up",
        },
        {
          icon: FaUsers,
          title: "Collaboration",
          description:
            "Fostering teamwork and leveraging diverse perspectives to achieve goals.",
          color: "#22c55e",
          aos: "fade-up-left",
        },
        {
          icon: FaLeaf,
          title: "Responsibility",
          description:
            "Committed to sustainability and positive community contribution.",
          color: "#fb923c",
          aos: "fade-left",
        },
        {
          icon: FaBolt,
          title: "Agility",
          description:
            "Adapting quickly to new challenges and opportunities in a fast world.",
          color: "#ef4444",
          aos: "fade-up",
        },
      ];
    
      // Split into two groups: first 4 (left) and last 3 (right)
      const leftValues = coreData.slice(0, 4);
      const rightValues = coreData.slice(4);

  return (
    <>
        <section>
                    <div className="bg-gray-50 py-16 px-6 overflow-hidden">
              <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        
              {/* -------- FIRST SECTION (4 left + image right) -------- */}
              <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mb-16">
                {/* Left side - first 4 values */}
                <div className="flex-1 space-y-6">
                  {leftValues.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        data-aos={item.aos}
                        className="bg-white rounded-2xl shadow-md flex items-center gap-5 p-6 transition-all hover:shadow-lg"
                      >
                        {/* Icon Container */}
                        <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer">
                          {/* Animated Background */}
                          <div
                            className="absolute inset-0 clip-arrow transform -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-0"
                            style={{ background: item.color, clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)"}}
                          ></div>
        
                          {/* Icon (turns white on hover) */}
                          <div
                            className="relative text-2xl z-10 transition-all duration-700"
                            style={{ color: item.color }}
                          >
                            <Icon className="group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                          </div>
                        </div>
        
                        {/* Text Content */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
        
                {/* Right side image */}
                <div data-aos="fade-left" className="flex-1 flex justify-center">
                  <img
                    src={chart}
                    alt="Team Collaboration"
                    className="rounded-xl shadow-lg w-[75%] h-[600px] object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
        
              {/* -------- SECOND SECTION (image left + 3 right) -------- */}
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-10">
                {/* Left side image */}
                <div data-aos="fade-right" className="flex-1 flex justify-center">
                  <img
                    src={team}
                    alt="Business Growth"
                    className="rounded-xl shadow-lg w-[75%] h-[460px] object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
        
                {/* Right side - last 3 values */}
                <div className="flex-1 space-y-6">
                  {rightValues.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        data-aos={item.aos}
                        className="bg-white rounded-2xl shadow-md flex items-center gap-5 p-6 transition-all hover:shadow-lg"
                      >
                        {/* Icon Container */}
                            <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer">
                          {/* Animated Background */}
                          <div
                            className="absolute inset-0 clip-arrow transform -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-0"
                            style={{ background: item.color, clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)" }}
                          ></div>
        
                          {/* Icon (turns white on hover) */}
                          <div
                            className="relative text-2xl z-10 transition-all duration-700"
                            style={{ color: item.color }}
                          >
                            <Icon className="group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                          </div>
                        </div>
        
                        {/* Text Content */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
                  </section>
    </>
  )
}

export default Our_core_values
