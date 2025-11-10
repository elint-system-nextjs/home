import React from 'react'
import { map } from '../assets/asset';

const Our_solutions = () => {

    const countryNames = [
    "AFGHANISTAN",
    "CONGO",
    "COSTA RICA",
    "D.R. OF THE CONGO",
    "GHANA",
    "INDIA",
    "INDONESIA",
    "IRAN",
    "KENYA",
    "KUWAIT",
    "MALAYSIA",
    "MYANMAR",
    "NEPAL",
    "NIGERIA",
    "QATAR",
    "SAUDI ARABIA",
    "SOUTH AFRICA",
    "SRILANKA",
    "TANZANIA",
    "ZIMBABWE",
  ];

  return (
    <>
        <section id="Our Solutions Deployed in 20+ Countries">
                    <div className="text-center bg-snow-white">
                      <h2 className="text-3xl font-bold mb-4 p-3">
                        Our Solutions Deployed in 20+ Countries
                      </h2>
        
                      <div className="flex justify-center">
                        <img
                          src={map}
                          width={1100}
                          height={700}
                          alt="World map with deployment countries"
                          className="p-3"
                        />
                      </div>
        
                      <div className="overflow-hidden whitespace-nowrap mt-6 bg-linear-to-r from-electric-lime to-cyan-400 py-3">
                        <div className="inline-block animate-marquee">
                          {countryNames.map((country, index) => (
                            <span
                              key={index}
                              className=" font-semibold text-lg mx-6  text-snow-white px-3 py-1 rounded"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}

export default Our_solutions
