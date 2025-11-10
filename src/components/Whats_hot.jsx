import React from 'react'
import { hotbg1, hotbg2, hotbg3, ultraleveldisplay, ultralevelmax, ultralevelpro } from '../assets/asset';

const Whats_hot = () => {

    const products = [
        {
          product_name: "Ultralevel Max",
          img: ultralevelmax,
          specification: "Solar + Battery Powered Radar Level Sensor",
          description: [
            "Edge Level Sensor | 60Ghz Radar",
            "BLE 5.3 up to +20 dBm | CAT M1 | LoRaWAN",
          ],
          backgroundImage: hotbg1,
        },
        {
          product_name: "Ultralevel Pro",
          img: ultralevelpro,
          specification: "Industrial Radar Level Sensor",
          description: [
            "Edge Level Sensor | 60Ghz Radar",
            "BLE 5.3 up to +8 dBm | ISO RS485 | ",
            "0-4V Analog",
            "Reed Relay for Low and High Level NO/NC",
          ],
          backgroundImage: hotbg2,
        },
        {
          product_name: "Ultralevel Display",
          img: ultraleveldisplay,
          specification: "Industrial Wireless Display",
          description: [
            "WiFi6 Cloud Connector | LoRaWAN",
            "BLE 5.3 up to +20 dBm Node Connector | 2.8” TFT Display",
            "ISO RS485 | RTC | Navigation Key",
          ],
          backgroundImage: hotbg3,
        },
      ];

  return (
    <>
    <section id="What's HOT">
                <div className="relative overflow-hidden py-20 bg-linear-to-br from-[#090e1a] via-[#0c111a] to-[#0f172a] backdrop-blur-lg">
                  <div className="absolute inset-0 bg-linear-to-b from-blue-800 via-tech-blue to-blue-500 opacity-70 blur-3xl"></div>
    
                  <div className="relative z-10">
                    <h1 className="text-center font-bold text-4xl text-white mb-12 drop-shadow-lg">
                      What's HOT
                    </h1>
    
                    <div className="flex flex-wrap justify-center gap-10 px-10">
                      {products.map((product, index) => (
                        <div
                          key={index}
                          data-aos="fade-up"
                          data-aos-delay={index * 200}
                          className="bg-white/95 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_40px_rgba(59,130,246,0.9)] hover:scale-105 transition-all duration-500 w-[320px] text-center"
                        >
                          <div
                            className="relative h-40 flex items-center justify-center bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${product.backgroundImage})`,
                            }}
                          >
                            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px]"></div>
                            <img
                              src={product.img}
                              alt={product.product_name}
                              className="absolute -bottom-12 w-24 h-24 object-contain bg-white rounded-full p-2 border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]"
                            />
                          </div>
    
                          <div className="pt-16 pb-8 px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">
                              {product.product_name}
                            </h2>
                            <p className="text-blue-600 font-semibold mb-4">
                              {product.specification}
                            </p>
                            <div className="text-gray-600 text-base  space-y-1">
                              {product.description.map((line, i) => (
                                <p key={i}>{line}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Whats_hot
