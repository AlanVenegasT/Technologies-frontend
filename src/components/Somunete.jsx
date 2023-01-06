import React from "react";
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const Somunete = () => {
  return (
    <div className="relative bg-white bg-gradient-to-r from-[#EA92FD] via-[#EAC5B8] to-[#E6FA72] ">
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:pb-12 sm:px-6  ">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-full lg:max-w-none lg:pl-10 md:mr-0 md:ml-auto md:w-1/2 md:max-w-none md:pl-10">
          
          <h2 className="mt-10 lg:ml-5 lg:mr-16 lg:text-7xl md:ml-5 md:mr-8 md:text-3xl md:font-medium lg:font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¡Únete al equipo!
          </h2>
          <p className="mt-6 lg:ml-5 md:ml-5 md:text-sm lg:text-4xl text-black">
            El futuro de la educación también puede estar en tus manos: ¡únete y
            crece profesionalmente en Coderhouse!
          </p>

          <div className="bg-gradient-to-r from-[#EEACF7] via-[#EED1C5] to-[#EEF98F] ">
            <h3 className="mt-6 py-5 px-5 lg:ml-5 md:ml-5 md:text-sm lg:text-3xl font-normal text-black">Conoce los beneficios de formar parte de Coderhouse:</h3>
            <div className="flex py-5 px-5   ">
              <div className="my-6 lg:ml-5 lg:mr-5 md:ml-5 md:text-sm lg:text-3xl font-normal text-black">
                <p>Trabajo 100% remoto</p>
              </div>
              <div className="mt-6 lg:ml-5 px-10 md:ml-5 md:text-sm lg:text-3xl font-normal text-black">
                <p>Horario flexible</p>
              </div>
              <div className="mt-6 lg:ml-5 md:ml-5 md:text-sm lg:text-3xl text-center font-normal  text-black">
                <p>Cursos gratuitos </p>
                <p>y descuentos</p>
              </div>
              
            </div>
            
          </div>
          <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-[#2B2C32] px-6 ml-5 py-3 md:px-3 md:ml-5 md:py-3 lg:ml-0 lg:my-6 md:text-sm text-base font-medium text-[#EAFF6A] shadow-sm hover:bg-[#EAFF6A] hover:text-[#2B2C32] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Ver todas las busquedas abiertas
      </button>
        </div>
        
      </div>
    </div>
  );
};

export default Somunete;
