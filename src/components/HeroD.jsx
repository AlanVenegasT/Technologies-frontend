import React from "react";
import "./Carrusel/HeroD.css";

export default function HeroD() {
  return (
    <div className="bg-[#1F2023]">
      <div className="mx-auto max-w-5xl py-16 px-4 text-center sm:py-16 sm:px-6 lg:px-4 ">
        <div className="">
          <h3 className=" inline-flex w-full items-center justify-center rounded-md border border-white shadow-yellow-500 shadow-lg  bg-[#1F2023] px-5 py-3 text-base font-medium text-[#DDDEDE] hover:bg-[#08121B] sm:w-auto">
            Accede a nuestra Charla informativa y conoce todo sobre Coderhouse
          </h3>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl lg:mt-14 ">
          <span className="block lg:mt-3 ">Únete a la comunidad de</span>
          <span className="block lg:mt-3">
            aprendizaje en línea y en vivo más
          </span>
          <span className="block lg:mt-3">
            grande de México y Latinoamérica
          </span>
        </h2>
        <p className="mt-4 text-2xl leading-8 text-indigo-200 lg:mt-12 lg:mr-10 lg:ml-10 ">
          A Clases en línea y en vivo dictadas por referentes de la industria,
          enfoque 100% práctico, mentorías personalizadas y acceso a una
          comunidad de +180,000 estudiantes.
        </p>
        <a
          href="#"
          className="mt-12 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >
          Ver todos los cursos
        </a>
        <span className="block mt-4 text-lg leading-6 text-indigo-200">
          Conoce más...
        </span>

        <span className="block mt-28 text-lg leading-6 text-indigo-200">
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
      <div className=" py-16 px-4 text-center sm:py-16 sm:px-6 lg:px-4">
        <h3 className="lg:ml-16 inline-flex w-full items-center justify-center border-b-2 border-[#0C4D8F] bg-[#1F2023] px-96  py-3 text-base font-medium text-[#DDDEDE] hover:bg-[#1F2023] sm:w-auto">
          Accede a nuestra Charla informativa y conoce todo sobre Coderhouse
        </h3>
      </div>
    </div>
  );
}
