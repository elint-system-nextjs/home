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
          
        </div>
      </div>
    </>
  );
};

export default Home;
