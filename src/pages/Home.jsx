import React, { useEffect } from "react"
import Nav from "../Nav";
import { Link } from "react-router";
import Footer from "../Footer";
import Banner from "../components/Banner";
import Iot_solutions from "../components/Iot_solutions";
import Whats_hot from "../components/Whats_hot";
import Why_choose_us from "../components/Why_choose_us";
import Trusted_by from "../components/Trusted_by";
import What_we_do from "../components/What_we_do";
import Our_expertise from "../components/Our_expertise";
import Our_solutions from "../components/Our_solutions";
import Events from "../components/Events";
import Consultation from "../components/Consultation";
import Our_core_values from "../components/Our_core_values";


const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="overflow-hidden no-scrollbar">
        <Nav />
        <div className="bg-snow-white">
          <Banner/>
          <Iot_solutions/>
          <Whats_hot/>
          <Why_choose_us/>
          <Trusted_by/>
          <Our_core_values/>
          <What_we_do/>
          <Our_expertise/>
          <Our_solutions/>
          <Events/>
          <Consultation/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
