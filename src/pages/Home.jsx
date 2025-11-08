import React, { useEffect } from "react";
import Nav from "../Nav";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  airtel,
  at,
  bsnl,
  etisalat,
  gail,
  ge,
  hcl,
  igcar,
  indus,
  isro,
  lt,
  mtn,
  peax,
  riyadh,
  roshan,
  safaricom,
  saudi,
  ssn,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  solution,
  home,
} from "../assets/asset";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const row1 = [isro, ge, lt, hcl, gail, igcar];
  const row2 = [indus, safaricom, etisalat, roshan, airtel, at];
  const row3 = [mtn, bsnl, ssn, saudi, peax, riyadh];

  const tech = [
    "IoT Gateways",
    "LoRaWAN Gateways",
    "Satellite & LTE Hybrid Gateway",
    "Solar Powered Smart Tank Sensor",
    "Elint Cloud Solutions",
    "Radar Level Sensor",
  ];

  const logos = [
    logo1,
    logo2,
    logo4,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14
  ];

  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <div className="bg-snow-white">
          <section className="bg-tech-blue relative flex flex-col lg:flex-row justify-between items-center px-6 pt-24 md:px-12 lg:px-20 pb-16 lg:py-38 lg:mt-18">
            <div
              className="flex flex-col gap-6 max-w-xl text-center items-start sm:items-center sm:justify-center lg:text-left lg:items-start xl:items-start"
              data-aos="fade-right"
            >
              <h1
                className="text-3xl md:text-5xl font-bold text-snow-white"
                data-aos="fade-right"
              >
                Transforming Industries{" "}
                <span className="text-electric-lime">
                  with IoT, ML and AI Solutions
                </span>
              </h1>
              <p className="text-base md:text-xl text-snow-white">
                Unlock Efficiency, Sustainability and Growth Across Industries
              </p>
              <Link
                to="/"
                className="border-orange-pulse bg-orange-pulse text-snow-white px-6 py-2 rounded-3xl hover:scale-95 hover:shadow-choco transition-transform"
              >
                Schedule a free Consultation schedule
              </Link>
            </div>
          </section>
          <section>
        <div className="py-10 px-[10%]">
          <div className="max-w-full bg-white">
            <div className="p-5 border-gray-100 rounded-lg shadow-lg">
              <div className="flex flex-col lg:flex-row justify-between px-4 gap-8">
                <div
                  className="flex justify-items-center"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <img
                    src={solution}
                    alt="IoT Software Solutions"
                    width={2000}
                    height={1000}
                    className=" rounded-3xl shadow-md object-center"
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay="300">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    IoT Solutions
                  </h1>
                  <p className="py-2 font-normal text-justify">
                    Our IoT gateways integrate an extensive range of network
                    technologies, including 5G/4G Cellular, LoRaWAN, BLE,
                    NB-IoT, CAT-M1, and Satellite communications, to deliver
                    robust industrial IoT solutions. Combined with Elint Cloud
                    Solutions, these gateways provide seamless connectivity,
                    real-time monitoring, efficient site management proactive
                    alarms management, and automated CXo daily reports on site
                    performance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 py-2 gap-4">
                    {tech.map((item, index) => (
                      <h1
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="p-2 border-l-6 border-tech-blue border rounded-br-2xl font-semibold hover:shadow-md hover:scale-105 hover:bg-tech-blue hover:text-white transition-transform duration-500 cursor-pointer "
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="w-full pt-8"
                data-aos="fade-up"
                onMouseEnter={(e) => {
                  const swiperInstance =
                    e.currentTarget.querySelector(".swiper")?.swiper;
                  if (swiperInstance?.autoplay) swiperInstance.autoplay.stop();
                }}
                onMouseLeave={(e) => {
                  const swiperInstance =
                    e.currentTarget.querySelector(".swiper")?.swiper;
                  if (swiperInstance?.autoplay) swiperInstance.autoplay.start();
                }}
              >
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={40}
                  slidesPerView={8}
                  loop={true}
                  autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 4 },
                    1024: { slidesPerView: 8 },
                  }}
                >
                  {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                      <img
                        src={logo}
                        alt={`logo-${index}`}
                        width={40}
                        height={40}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="object-cover hover:scale-110 transition-transform duration-1000"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
};

export default Home;
