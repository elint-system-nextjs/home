import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import {
  agriculture,
  atm,
  cloudchain,
  datacenter,
  dlock,
  hydrostatic,
  industries,
  logo,
  metrology,
  mobility,
  oil,
  remon,
  renewable,
  smarttank,
  telecom,
  ultraleveldisplay,
  ultralevelmax,
  ultralevelpro,
  ultrasensepro,
  utilities,
  voygar4g,
  voygarlora,
  water,
  wireless,
} from "../src/assets/asset";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-snow-white shadow-2xl fixed top-0 right-0 left-0 z-50">
        <div className="px-6 md:px-14 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-10 w-auto" alt="logo" />
          </Link>

          {/* === Desktop Nav === */}
          <nav className="hidden lg:flex gap-10 items-center text-[18px]">
            <Link
              to="/"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-tech-blue transition flex items-center gap-1">
                Solutions ▾
              </span>

              <div className="absolute -left-250 mt-10 hidden group-hover:block bg-white shadow-lg rounded-2xl p-6 w-[1280px] transition-all duration-300 border border-gray-100">
                <div className="grid grid-cols-3 gap-6 text-left">
                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={smarttank}
                            alt="Smart Tank"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Smart Tank
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Smart Tank Monitoring Solutions for Real-Time
                              Storage Visibility.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={renewable}
                            alt="Renewable"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Renewables
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Renewable Energy Monitoring for Optimized Sustainability.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={atm}
                            alt="ATM"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              ATM
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              ATM Monitoring Solutions for Enhanced Security and Uptime.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={utilities}
                            alt="Utilities"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Utilities
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Utility Monitoring Solutions for Smarter Energy Management.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={industries}
                            alt="Industry 4.0"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Industry 4.0
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Industry 4.0 IoT Solutions for Smart Manufacturing and Automation.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={telecom}
                            alt="Telecom"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Telecom
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Advanced Telecom Site Monitoring for Reliable Connectivity.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={mobility}
                            alt="Mobility"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Mobility
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              IoT Mobility Solutions for Smarter Fleet and Transportation Management.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={datacenter}
                            alt="Data Center"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Data Center
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Real-Time Data Center Monitoring for Optimized Uptime and Security.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={oil}
                            alt="Oil"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Oil
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Oil Industry IoT Solutions for Enhanced Efficiency and Monitoring.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={water}
                            alt="Water"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Water
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Smart Water Management for Real-Time Flow Monitoring and Control.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={metrology}
                            alt="Metrology"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Metrology
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Precision Metrology Monitoring Solutions for Data-Driven Decisions.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={cloudchain}
                            alt="Cloud Chain"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Cold Chain
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Cold Chain IoT Solutions for Real- Time Temperature and Logistics Monitoring.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={agriculture}
                            alt="Agriculture"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Agriculture
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Smart Agriculture IoT Solutions for Precision Farming and Monitoring.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-tech-blue transition flex items-center gap-1">
                Products ▾
              </span>

              <div className="absolute -left-283.5 mt-10 hidden group-hover:block bg-white shadow-lg rounded-2xl p-6 w-[1280px] transition-all duration-300 border border-gray-100">
                 <div className="grid grid-cols-3 gap-6 text-left">
                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={ultralevelpro}
                            alt="Ultralevel Pro"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Ultralevel Pro
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              High-Precision Radar Level Sensor for Industrial Monitoring.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={dlock}
                            alt="D Lock"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              D Lock
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              IoT-Enabled Smart Security Lock for Asset Protection.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={ultrasensepro}
                            alt="Ultrasense Pro"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Ultrasense Pro
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Battery-Powered Ultrasonic Sensor with NBIoT Communication for Reliable Monitoring.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={remon}
                            alt="Remon 4G"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Remon 4G
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Advanced Telematics for Real-Time Fleet and Asset Management.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={ultralevelmax}
                            alt="Ultralevel Max"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Ultralevel Max
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Solar-Powered Radar Level Sensor with CATMI and NBIoT Communication.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={wireless}
                            alt="Wireless Pressure level sensor"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Wireless Pressure level sensor
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Accurate, Wireless Fluid Level Monitoring.
                            </p>
                          </div>
                        </div>
                      <li>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={hydrostatic}
                            alt="Hydrostatic Level Sensor"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Hydrostatic Level Sensor
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Precise Monitoring for Water and Liquid Applications.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={ultraleveldisplay}
                            alt="Ultralevel Display"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Ultralevel Display
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Real-Time Data Display for Smarter Level Management.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={voygarlora}
                            alt="Voyager Lora"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Voyager Lora
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Long-Range IoT Gateway for Smart Connectivity.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-6 text-gray-700">
                      <li>
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <img
                            src={voygar4g}
                            alt="Voyager 4G"
                            className="w-12 h-12 object-contain"
                          />

                          {/* Text Section */}
                          <div>
                            <h1 className="text-[20px] font-bold text-black">
                              Voyager 4G
                            </h1>
                            <p className="text-[16px] text-gray-600">
                              Industrial-Grade 4G IoT Gateway for Seamless Connectivity.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="cursor-pointer hover:text-tech-blue transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* === Hamburger Button (Mobile) === */}
          <button
            className="lg:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* === Mobile Menu === */}
        <div
  className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ${
    menuOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <nav className="flex flex-col items-start gap-6 py-6 px-6 text-[18px] font-medium overflow-y-auto max-h-[90vh]">
    <Link to="/" onClick={() => setMenuOpen(false)} className="w-full">
      Home
    </Link>

    {/* === Mobile Solutions Dropdown === */}
    <details className="w-full group">
      <summary className="flex justify-between items-center cursor-pointer hover:text-tech-blue">
        Solutions
      </summary>
      <div className="pl-3 pt-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div className="flex items-start gap-3">
            <img src={smarttank} className="w-10 h-10" alt="Smart Tank" />
            <div>
              <h1 className="font-semibold text-[17px]">Smart Tank</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Smart Tank Monitoring Solutions for Real-Time Storage Visibility.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={renewable} className="w-10 h-10" alt="Renewables" />
            <div>
              <h1 className="font-semibold text-[17px]">Renewables</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Renewable Energy Monitoring for Optimized Sustainability.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={atm} className="w-10 h-10" alt="ATM" />
            <div>
              <h1 className="font-semibold text-[17px]">ATM</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                ATM Monitoring for Enhanced Security and Uptime.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={utilities} className="w-10 h-10" alt="Utilities" />
            <div>
              <h1 className="font-semibold text-[17px]">Utilities</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Smart Utility Monitoring for Smarter Energy Management.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={industries} className="w-10 h-10" alt="Industry 4.0" />
            <div>
              <h1 className="font-semibold text-[17px]">Industry 4.0</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                IoT Solutions for Smart Manufacturing and Automation.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={telecom} className="w-10 h-10" alt="Telecom" />
            <div>
              <h1 className="font-semibold text-[17px]">Telecom</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Reliable Telecom Site Monitoring for Connectivity.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={mobility} className="w-10 h-10" alt="Mobility" />
            <div>
              <h1 className="font-semibold text-[17px]">Mobility</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Fleet and Transport IoT Solutions for Smart Mobility.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={datacenter} className="w-10 h-10" alt="Data Center" />
            <div>
              <h1 className="font-semibold text-[17px]">Data Center</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Real-Time Data Center Monitoring for Reliability.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={oil} className="w-10 h-10" alt="Oil" />
            <div>
              <h1 className="font-semibold text-[17px]">Oil</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                IoT Solutions for Efficient Oil Industry Monitoring.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={water} className="w-10 h-10" alt="Water" />
            <div>
              <h1 className="font-semibold text-[17px]">Water</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Real-Time Flow Monitoring and Smart Water Control.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={metrology} className="w-10 h-10" alt="Metrology" />
            <div>
              <h1 className="font-semibold text-[17px]">Metrology</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Precision Measurement Monitoring Solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={cloudchain} className="w-10 h-10" alt="Cold Chain" />
            <div>
              <h1 className="font-semibold text-[17px]">Cold Chain</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                IoT for Temperature and Logistics Tracking.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={agriculture} className="w-10 h-10" alt="Agriculture" />
            <div>
              <h1 className="font-semibold text-[17px]">Agriculture</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Smart IoT for Precision Farming and Monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </details>

    {/* === Mobile Products Dropdown === */}
    <details className="w-full group">
      <summary className="flex justify-between items-center cursor-pointer hover:text-tech-blue">
        Products
      </summary>
      <div className="pl-3 pt-4 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <img src={ultralevelpro} className="w-10 h-10" alt="Ultralevel Pro" />
            <div>
              <h1 className="font-semibold text-[17px]">Ultralevel Pro</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                High-Precision Radar Level Sensor for Industrial Monitoring.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={dlock} className="w-10 h-10" alt="D Lock" />
            <div>
              <h1 className="font-semibold text-[17px]">D Lock</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                IoT Smart Lock for Advanced Security and Access.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={ultrasensepro} className="w-10 h-10" alt="Ultrasense Pro" />
            <div>
              <h1 className="font-semibold text-[17px]">Ultrasense Pro</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Battery Ultrasonic Sensor with NBIoT Communication.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={remon} className="w-10 h-10" alt="Remon 4G" />
            <div>
              <h1 className="font-semibold text-[17px]">Remon 4G</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Telematics for Real-Time Fleet and Asset Management.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={ultralevelmax} className="w-10 h-10" alt="Ultralevel Max" />
            <div>
              <h1 className="font-semibold text-[17px]">Ultralevel Max</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Solar-Powered Radar Sensor with CATM1 and NBIoT.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={wireless} className="w-10 h-10" alt="Wireless Sensor" />
            <div>
              <h1 className="font-semibold text-[17px]">Wireless Level Sensor</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Accurate, Wireless Fluid Level Monitoring.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={hydrostatic} className="w-10 h-10" alt="Hydrostatic Sensor" />
            <div>
              <h1 className="font-semibold text-[17px]">Hydrostatic Sensor</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Precise Monitoring for Water and Liquids.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={ultraleveldisplay} className="w-10 h-10" alt="Ultralevel Display" />
            <div>
              <h1 className="font-semibold text-[17px]">Ultralevel Display</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Real-Time Level Display for Smarter Control.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={voygarlora} className="w-10 h-10" alt="Voyager LoRa" />
            <div>
              <h1 className="font-semibold text-[17px]">Voyager Lora</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Long-Range IoT Gateway for Reliable Connectivity.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src={voygar4g} className="w-10 h-10" alt="Voyager 4G" />
            <div>
              <h1 className="font-semibold text-[17px]">Voyager 4G</h1>
              <p className="text-gray-600 text-[15px] leading-tight">
                Industrial 4G IoT Gateway for Seamless Communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </details>

    <Link to="/contact" onClick={() => setMenuOpen(false)} className="w-full">
      Contact Us
    </Link>
  </nav>
</div>
      </header>
    </>
  );
};

export default Nav;