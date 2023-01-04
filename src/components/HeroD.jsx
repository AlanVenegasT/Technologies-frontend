import React from "react";
import "./Carrusel/HeroD.css";

export default function HeroD() {
  return (
    <div className="bg-[#1F2023] pt-10">
      <div className="mx-auto max-w-5xl py-16 px-4 text-center sm:py-16 sm:px-6 lg:px-4 ">
        <div className="">
          <h3 className=" inline-flex w-full items-center justify-center rounded-md shadow-yellow-500 shadow-lg   bg-[#1F2023] lg:px-8 lg:py-4 md:px-8 md:py-3 md:mt-10 lg:text-base md:text-xs font-medium text-[#DDDEDE] hover:bg-[#1F2023] sm:w-auto ">
            Accede a nuestra Charla informativa y conoce todo sobre Coderhouse <span className=" lg:ml-5 lg:pl-5 md:ml-5 md:pl-5 border-l-2 border-[#2E2F36]"  > Ver ahora</span>
          </h3>
        </div>
        <h2 className="lg:text-6xl md:text-4xl  font-bold  tracking-tight text-white sm:text-3xl  lg:mt-14 md:mt-7 ">
          <span className="block lg:mt-3 md:mt-1 ">Únete a la comunidad de</span>
          <span className="block lg:mt-3 md:mt-1">
            aprendizaje en línea y en vivo más
          </span>
          <span className="block lg:mt-3 md:mt-1">
            grande de México y Latinoamérica
          </span>
        </h2>
        <p className="mt-4 lg:text-2xl md:text-base  leading-8 text-indigo-200 lg:mt-12 lg:mr-10 lg:ml-10 md:mt-8 md:mr-20 md:ml-20 ">
          A Clases en línea y en vivo dictadas por referentes de la industria,
          enfoque 100% práctico, mentorías personalizadas y acceso a una
          comunidad de +180,000 estudiantes.
        </p>
        <a
          href="#"
          className="lg:mt-12 md:mt-8 inline-flex w-full items-center justify-center rounded-sm border border-transparent bg-[#EAFF6A] lg:px-6 lg:py-4 md:px-4 md:py-3 text-base font-light text-black  hover:bg-indigo-50 sm:w-auto"
        >
          Ver todos los cursos
        </a>
        <span className="block mt-4 lg:text-lg md:text-base leading-6 text-[#EAFF6A]">
          Conoce más...
        </span>

        <span className="block lg:mt-28 md:mt-20 lg:text-xl ms:text-lg leading-6 text-indigo-200">
          Nuestros programas están cocreados con expertos de
        </span>
      </div>
      <div className="carrusel">
        <div className="carru-video">
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan2" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan3" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan4" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan5" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan6" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan7" />
          </div>

          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan8" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan9" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan10" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan11" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan12" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan13" />
          </div>
          <div className="carru">
            <img src="Logo IKTANTec.png" alt="alan14" />
          </div>
        </div>
      </div>
      <div className="   text-center sm:py-16 sm:px-6 md:px-0 md:py-8 lg:px-4 lg:py-16">
        <h3 className="lg:ml-16 inline-flex w-full items-center justify-center border-b-2 border-[#2E2F36] bg-[#1F2023] lg:px-96  lg:py-3 md:px-40  md:my-12  lg:text-lg md:text-base font-medium text-[#EAFF6A] hover:bg-[#1F2023] sm:w-auto">
          Accede a nuestra Charla informativa y conoce 
        </h3>
      </div>
    </div>
  );
}
