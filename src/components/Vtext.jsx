import React from "react";

export default function Vtext() {
  return (
    <div className="relative bg-white bg-gradient-to-r from-[#EA92FD] via-[#EAC5B8] to-[#E6FA72] ">
      <div className="  sm:h-68 lg:absolute lg:left-0 lg:h-full lg:w-1/2 md:absolute md:left-0 md:h-full md:w-1/2  absolute left-0 h-full w-1/2">
        <img
          className="h-3/4 w-ful object-cover  translate-y-1/3  "
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        /> 
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:pb-12 sm:px-6  ">
        <div className="mx-auto  lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10 md:mr-0 md:ml-auto md:w-1/2 md:max-w-none md:pl-10 mr-0 ml-auto w-1/2 max-w-none pl-10">
          <div></div>
          <h2 className="mt-4 lg:ml-5 lg:mr-16 lg:text-4xl md:ml-5 md:mr-8 md:text-3xl md:font-medium lg:font-bold tracking-tight text-gray-900 text-2xl ml-3 mr-4  font-medium">
            Aprende junto a tus compañeros
          </h2>
          <p className="mt-6 ml-3 text-sm lg:ml-5 md:ml-5 md:text-sm lg:text-xl text-black">
            Está demostrado que aprender en grupo es más eficiente y motivador.
            El networking con tus compañeros de clase ayuda a que puedas tener
            nuevas ideas y hacer mejores proyectos.
          </p>

          <ul className="lg:ml-10 lg:mt-8 lg:mb-28 lg:text-xl md:ml-10 md:mt-8 md:mb-20 md:text-sm ml-8 mt-6 mb-8 text-sm list-disc font-medium ">
            <li>Clases en grupo</li>
            <li>Canales de chat</li>
            <li>Foro privado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
