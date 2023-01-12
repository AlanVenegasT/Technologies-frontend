import React from "react";
import Timeline from "../components/Timeline";
import Valores from "../components/Valores";
import Linea from "../components/Linea";
import Somtext from "../components/Somtext";
import Somunete from "../components/Somunete";
import Miembros from "../components/Miembros";


const About = () => {
  const people = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    // More people...
  ];

  return (
    <>
      <div className="bg-[#1F2023]">
        <div className="mx-auto max-w-7xl py-6 px-4 md:px-8 md lg:px-8 lg:pt-28 lg:pb-16 xl:py-36">
          <div className="space-y-20">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl xl:max-w-none lg:max-w-none ">
              <h2 className="text-6xl  font-bold text-center text-white   lx:pt-0 xl:pl-50 lg:pt-0 lg:pl-20 md:pt-20 md:pl-28   pt-20">
                Conoce a nuestro equipo
              </h2>
              <p className="text-xl text-center text-white p-7  md:pl-28">
                Creamos experiencias de aprendizaje y desarrollo profesional
                increíbles para entusiastas digitales.
              </p>
            </div>
            <div className="pb-0 lg:pb-14 md:pb-6">
              <img
                src="https://res.cloudinary.com/hdsqazxtw/image/upload/f_webp,q_auto/v1642798986/WWW/imgs/nosotros/hero.png"
                className="w-full mr-3"
                alt="quienes somos"
              />
            </div>
            <div className=" w-full lg:grid lg:grid-cols-3 md:grid md:grid-cols-3  bg-[#1F2023] lg:h-96 md:h-64 h-40 grid grid-cols-1 gap-x-8 lg:pb-0 md:pb-0 pb-[900px]">
              <div className=" col-span-1 bg-[#27282D] p-4">
                
                <h1 id="mv" className="text-[#FEFEFE]   font-bold lg:text-6xl lg:mt-20 lg:ml-6 md:text-5xl md:mt-6 md:ml-3 text-4xl mt-6 ml-3 ">Misión</h1>
                <p className="text-[#B8B8B8] lg:text-xl lg:mt-7 lg:ml-6 lg:mb-20 md:text-lg md:mt-5 md:ml-3 md:mb-20 text-xl mt-7 ml-6 mb-16 ">Brindar educación efectiva de la manera más rápida y accesible posible.</p>
              </div>
              <div className="  col-span-1 bg-amber-200 lg:my-0 md:my-0 my-10">
              <img
                src="manos.jpg"
                className="w-full h-full"
                alt="mision"
              />
              </div>
              <div className=" col-span-1 bg-[#27282D] p-4 ">
                <h2 className="text-[#FEFEFE]  font-bold lg:text-6xl lg:mt-20 lg:ml-6 md:text-5xl md:mt-6 md:ml-3 text-4xl mt-6 ml-3 ">Visión</h2>
                <p className="text-[#B8B8B8] lg:text-xl lg:mt-7 lg:ml-6 lg:mb-20 md:text-lg md:mt-5 md:ml-3 md:mb-20 text-xl mt-7 ml-6 mb-16"> Ser la principal plataforma de educación digital de Latinoamérica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Valores/>    
      <Timeline/>
      <Linea/>  
      <Somtext/>
      <Somunete/>  
      <Miembros/>
    </>
  );
};

export default About;
