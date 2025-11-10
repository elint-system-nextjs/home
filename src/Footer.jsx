import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { logo } from "./assets/asset";

const Footer = () => {
  return (
    <>
      <footer data-aos="fade-up" data-aos-delay="100">
        <div className="bg-gradient-to-r from-[#0a0c25] via-[#0f1b5a] to-[#181b81] text-gray-200 py-10 px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:flex justify-between gap-8 border-b border-gray-600 pb-10">
            <div data-aos="fade-up" data-aos-delay="100">
              <img
                src={logo}
                alt="Elint Systems"
                width={100}
                height={40}
                className="mb-4"
              />
              <p className="text-sm lg:w-80 w-auto text-justify">
                Elint Systems is a Top-Tier provider of IoT, ML, and AI
                solutions that can help you monitor, process, and control assets
                across a variety of industries. Our team specializes in offering
                customized solutions for Smart Cities, Water Process
                Automations, Telecom Infra, Banking Infra, Power Plants,
                Industrial IoT 4.0, and Digital Manufacturing.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl" /> News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl" />
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl" />
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                  >
                    <MdKeyboardDoubleArrowRight className="text-xl" />
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-semibold mb-3">Solutions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-16 gap-2">
                <ul className="text-sm space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Smart
                      Tank
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Oil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      Industry 4.0
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Telecom
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Cold
                      Chain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      Metrology
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> ATM
                    </a>
                  </li>
                </ul>
                <ul className="text-sm space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      Mobility
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Water
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Data
                      Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />
                      Agriculture
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />
                      Renewables
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />
                      Utilities
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold mb-3">Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <ul className="space-y-2 text-sm mb-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      UltraLevel Max
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      UltraLevel Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      Ultralevel Display
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" />{" "}
                      Ultrasense Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Voyager
                      4G
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Voyager
                      Lora
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm mb-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Hybrid
                      Satellite & LTE Gateway
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> D lock
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> We
                      Gauge Sensor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Gauge
                      Sensor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-orange-pulse hover:scale-105 transition-transform duratiom-300 flex items-center"
                    >
                      <MdKeyboardDoubleArrowRight className="text-xl" /> Remon
                      4G Track
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex space-x-3 mt-4 flex-wrap">
                <FaFacebookF
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="p-2 rounded-full bg-orange-pulse text-snow-white text-3xl hover:text-orange-pulse hover:scale-110 hover:bg-white transition-transform duration-300 cursor-pointer"
                />
                <FaTwitter
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="p-2 rounded-full bg-orange-pulse text-snow-white text-3xl hover:text-orange-pulse hover:scale-110 hover:bg-white transition-transform duration-300 cursor-pointer"
                />
                <FaInstagram
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="p-2 rounded-full bg-orange-pulse text-snow-white text-3xl hover:text-orange-pulse hover:scale-110 hover:bg-white transition-transform duration-300 cursor-pointer"
                />
                <FaYoutube
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="p-2 rounded-full bg-orange-pulse text-snow-white text-3xl hover:text-orange-pulse hover:scale-110 hover:bg-white transition-transform duration-300 cursor-pointer"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-4 space-y-2 text-sm"
              >
                <p className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 98407 15716
                </p>
                <p className="flex items-center gap-2">
                  <GiRotaryPhone className="text-xl" /> +91 4442801123
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope /> info@elintsystem.com
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6 text-sm">
            <div className="flex items-start space-x-2" data-aos="fade-up">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ee-1f1f3.svg"
                alt="India Flag"
                className="w-6 h-6"
              />
              <p className="flex items-center gap-2">
                1st Floor, 116/21, Arvinth Building,
                <br />
                Vadapalani, Chennai, India.
                <br />
                Pincode: 600026.
              </p>
            </div>
            <div className="flex items-start space-x-2" data-aos="fade-up">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ee-1f1f3.svg"
                alt="India Flag"
                className="w-6 h-6"
              />
              <p className="flex items-center gap-2">
                813, 6th Floor Nizara Bonanza,
                <br />
                Opp LIC Building, Anna Salai, Chennai, India
                <br />
                Pincode: 600002.
              </p>
            </div>
            <div className="flex items-start space-x-2" data-aos="fade-up">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg"
                alt="United States Flag"
                className="w-6 h-6"
              />
              <p className="flex items-center gap-2">
                Elint Systems Inc
                <br />
                331 2nd Avenue South Ste 431
                <br />
                Minneapolis MN 55401 5540 USA
              </p>
            </div>
            <div className="flex items-start space-x-2" data-aos="fade-up">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1f3-1f1ec.svg"
                alt="Nigeria Flag"
                className="w-6 h-6"
              />
              <p className="flex items-center gap-2">
                IoTRooT Gatwys Elint Ltd
                <br />
                No 2 Osinbajo Close Obanikoro Lagos,
                <br />
                Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="text-center border-b border-slate-gray pb-4 mt-4 text-sm">
          Copyright © {new Date().getFullYear()} - Elint Systems - All Rights
          Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
