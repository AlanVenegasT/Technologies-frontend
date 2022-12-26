import React from "react";
import Hero from "../../components/Principal/Hero";
import Footer from "../../components/Footer";
import Faqs from "../../components/Faqs";

const Home = () => {
  return (
    <>
      <div className="py-3 bg">
        <Faqs />
      </div>

      <Footer />
    </>
  );
};

export default Home;