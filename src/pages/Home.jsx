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
  ultralevelmax,
  hotbg1,
  ultralevelpro,
  hotbg2,
  hotbg3,
  ultraleveldisplay,
  happy,
  experience,
  countries,
  industry,
  live,
  hardware,
  administrativetools,
  support,
  mobileWeb,
  iot,
  map,
} from "../assets/asset";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

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
    logo14,
  ];

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
      <div className="overflow-x-hidden">
        <Nav />
        <div className="bg-snow-white">
          <section
            id="banner section"
            className="bg-tech-blue relative flex flex-col lg:flex-row justify-between items-center px-6 pt-24 md:px-12 lg:px-20 pb-16 lg:py-38 lg:mt-18"
          >
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
          <section id="IOT Solutions">
            <div className="py-10 px-[10%]">
              <div className="max-w-full bg-white">
                <div className="p-5 border-gray-100 rounded-3xl shadow-lg">
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
                        robust industrial IoT solutions. Combined with Elint
                        Cloud Solutions, these gateways provide seamless
                        connectivity, real-time monitoring, efficient site
                        management proactive alarms management, and automated
                        CXo daily reports on site performance.
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
                      if (swiperInstance?.autoplay)
                        swiperInstance.autoplay.stop();
                    }}
                    onMouseLeave={(e) => {
                      const swiperInstance =
                        e.currentTarget.querySelector(".swiper")?.swiper;
                      if (swiperInstance?.autoplay)
                        swiperInstance.autoplay.start();
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
                        <SwiperSlide
                          key={index}
                          className="flex justify-center"
                        >
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
          <section id="What's HOT">
            <div className="relative overflow-hidden py-20 bg-linear-to-br from-[#0f172a] via-tech-blue to-[#0f172a] backdrop-blur-lg">
              <div className="absolute inset-0 bg-linear-to-b from-blue-800 via-blue-700 to-blue-500 opacity-70 blur-3xl"></div>

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
          <section
            id="Why Choose Us"
            className="w-full bg-snow-white py-20 px-4 md:px-12 overflow-hidden"
          >
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
          <section
            id="Trusted By"
            className="bg-gradient-to-br from-cyan to-tech-blue px-6 pt-20 md:px-12 lg:px-20 pb-16 text-center overflow-hidden"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-snow-white mb-10"
              data-aos="fade-up"
            >
              Trusted By
            </h1>

            <p
              className="text-snow-white text-lg mb-12 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We’re proud to collaborate with global brands, startups, and
              forward-thinking companies that trust our IoT, AI, and ML
              expertise to drive innovation and efficiency.
            </p>

            {/* Common settings */}
            {(() => {
              const swiperSettings = {
                modules: [Autoplay],
                spaceBetween: 30,
                slidesPerView: 6,
                loop: true,
                speed: 4000, // smooth scroll speed
                freeMode: true,
                freeModeMomentum: false,
                autoplay: {
                  delay: 0, // continuous motion
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                },
                allowTouchMove: false,
                grabCursor: false,
                breakpoints: {
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  640: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 6, spaceBetween: 30 },
                },
              };

              return (
                <>
                  {/* Row 1 - Right to Left */}
                  <Swiper {...swiperSettings} className="py-6">
                    {[...row1, ...row1].map((logo, i) => (
                      <SwiperSlide
                        key={`r1-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Row 2 - Left to Right */}
                  <Swiper
                    {...{
                      ...swiperSettings,
                      autoplay: {
                        ...swiperSettings.autoplay,
                        reverseDirection: true,
                      },
                    }}
                    className="py-6"
                  >
                    {[...row2, ...row2].map((logo, i) => (
                      <SwiperSlide
                        key={`r2-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Row 3 - Right to Left */}
                  <Swiper {...swiperSettings} className="py-6">
                    {[...row3, ...row3].map((logo, i) => (
                      <SwiperSlide
                        key={`r3-${i}`}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Partner ${i}`}
                          className="w-32 md:w-40 transition duration-300 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              );
            })()}
          </section>
          <section id="Our Core Values"></section>
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
        </div>
      </div>
    </>
  );
};

export default Home;
