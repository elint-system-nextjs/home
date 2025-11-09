import React, { useEffect, useState } from "react";
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
  img1msme,
  img2msme,
  img3msme,
  img4msme,
  img5msme,
  img6msme,
  logo1msme,
  img1rei,
  img3rei,
  img2rei,
  img4rei,
  logo2rei,
  img1solar,
  img2solar,
  logo3solar,
  consultation,
  aiglobe,
} from "../assets/asset";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Calendar } from "lucide-react";
import Footer from "../Footer";

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
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
        rotateY: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "easeInOut",
        },
        z: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "easeInOut",
        },
      },
    });
  }, [index, controls]);

  const current = events[index];

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
          <section id="What We Do"></section>
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
          <section
            id="Events"
            className="relative py-16 sm:py-24 flex flex-col items-center justify-center bg-linear-to-r from-[#0a0a0f] via-[#1a0b24] to-[#0f0515] text-white overflow-hidden"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-12 sm:mb-16 px-4"
            >
              <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-pink-400 to-purple-300 drop-shadow-lg tracking-wide">
                Events & Highlights
              </h2>
              <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-lg">
                Showcasing our global impact and participation
              </p>
            </motion.div>

            {/* Event Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-[95%] max-w-[1100px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_50px_rgba(255,100,200,0.15)] overflow-hidden flex flex-col md:flex-row-reverse transition-all duration-700 hover:scale-[1.01]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Right: Logos Auto-Slide */}
              <div className="w-full md:w-1/2 p-4 md:p-6 flex justify-center md:justify-start overflow-x-auto md:overflow-hidden perspective-distant">
                <motion.div
                  animate={controls}
                  className="flex gap-4 md:gap-6 whitespace-nowrap"
                >
                  {[...current.images, ...current.images].map((img, i) => (
                    <motion.div
                      key={i}
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-linear-to-r from-gray-800/50 to-black/40 border border-white/10 shadow-lg shrink-0"
                      whileHover={{ scale: 1.05, rotateY: 20, z: 30 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={img}
                        alt="event"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Left: Event Info */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8">
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
                      className="mb-4 sm:mb-6 w-24 sm:w-28 h-auto drop-shadow-[0_0_15px_rgba(255,180,255,0.5)]"
                    />
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-linear-to-r from-pink-400 to-purple-300">
                      {current.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-md line-clamp-4">
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
                      ? "bg-linear-to-r from-pink-400 to-purple-400 shadow-[0_0_8px_rgba(255,150,255,0.7)]"
                      : "bg-gray-600"
                  }`}
                ></motion.div>
              ))}
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500/20 blur-[120px] sm:blur-[180px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-600/20 blur-[120px] sm:blur-[180px] rounded-full"></div>
          </section>
          <section
            id="Consultation"
            className="w-full py-16 px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative"
          >
            {/* Background Gradient Layers */}
            <div className="absolute inset-0  bg-linear-to-r from-[#0a0a0f] via-[#1a0b24] to-[#0f0515] -z-10 overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-pink-500/10 rounded-full filter blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl"
              />
            </div>

            {/* Left Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-pink-400 to-purple-300 drop-shadow-lg">
                Speak with an IoT Expert Today!
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Our specialists are ready to discuss your specific needs and
                demonstrate how our IoT Solutions can revolutionize your
                operations, improving business performance and operational
                efficiency.
              </p>

              {/* Pop Button */}
              <motion.a
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow:
                    "0 0 30px rgba(255,192,203,0.7), 0 0 60px rgba(255,105,180,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="inline-flex items-center gap-3 text-white text-lg sm:text-xl font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-2xl border-2 border-pink-400 shadow-[0_0_15px_rgba(255,192,203,0.3)] hover:shadow-[0_0_30px_rgba(255,192,203,0.5)] transition-all duration-300  bg-linear-to-r from-pink-400/30 to-purple-500/20 backdrop-blur-sm"
              >
                Schedule a free consultation <Calendar size={22} />
              </motion.a>
            </div>

            {/* Right Section - Image Card */}
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
                  <div className="absolute -inset-1  bg-linear-to-r from-pink-400 to-purple-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>

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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
