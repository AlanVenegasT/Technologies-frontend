import React from "react";
import  HeroD  from "../../components/HeroD";
import  Video  from "../../components/Video";
import Vtext from "../../components/Vtext";
import Faqs from "../../components/Faqs";

import Text from "../../components/Text";
import Testimoniales from "../../components/Testimoniales";
import Linea from "../../components/Linea";
import Pricing from "../../components/Pricing";


const Home = () => {
  return (
    <>
      <HeroD/>
      <Video/> 
      <Vtext/> 
      
      <Linea/>
      <Text/>
      <Pricing/>  
      <Testimoniales/>
      
      <Faqs/>
      
    </>
  );
};

export default Home;
