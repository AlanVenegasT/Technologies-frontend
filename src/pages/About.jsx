import React from "react";

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
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-36">
          <div className="space-y-20">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl xl:max-w-none">
              <h2 className="text-6xl font-bold text-center text-white ">
                Conoce a nuestro equipo
              </h2>
              <p className="text-xl text-center text-white p-7">
                Creamos experiencias de aprendizaje y desarrollo profesional
                increíbles para entusiastas digitales.
              </p>
            </div>
            <div className="pb-14">
              <img
                src="https://res.cloudinary.com/hdsqazxtw/image/upload/f_webp,q_auto/v1642798986/WWW/imgs/nosotros/hero.png"
                className="w-full mr-3"
                alt="quienes somos"
              />
            </div>
            <div className="w-full grid grid-cols-3 bg-[#1F2023] h-96 gap-x-10">
              <div className="col-span-1 bg-[#27282D] p-4">
                <h1 className="text-[#FEFEFE] text-6xl font-bold mt-20 ml-6">Misión</h1>
                <p className="text-[#B8B8B8] text-xl mt-7 ml-6">Brindar educación efectiva de la manera más rápida y accesible posible.</p>
              </div>
              <div className="col-span-1 bg-amber-200">
              <img
                src="manos.jpg"
                className="w-full h-full"
                alt="mision"
              />
              </div>
              <div className="col-span-1 bg-[#27282D]">Vision</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
