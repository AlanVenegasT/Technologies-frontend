import React from "react";
import  HeroD  from "../../components/HeroD";
import  Video  from "../../components/Video";
import Vtext from "../../components/Vtext";
import Faqs from "../../components/Faqs";
import Carru3dL from "../../components/Carru3dL";
import Text from "../../components/Text";
import Testimoniales from "../../components/Testimoniales";
import Linea from "../../components/Linea";


const Home = () => {
  return (
    <>
      <HeroD/>
      <Video/> 
      <Vtext/> 
      <Carru3dL/>
      <Linea/>
      <Text/>
      <Testimoniales/>
      
      <Faqs/>
      
    </>
  );
};

export default Home;
