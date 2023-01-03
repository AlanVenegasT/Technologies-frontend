import React from "react";

export default function Text() {
  return (
    
    <div className="bg-[#1F2023] ">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-16 lg:pb-20 ">
        <div className="overflow-hidden rounded-md bg-gradient-to-r from-[#E990FF] via-[#B29DF9] to-[#83AEFB] shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 ">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center lg:ml-5">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                <span className="block text-[#1F2023] lg:text-7xl  font-bold">
                  ¿Qué es la{" "}
                </span>
                <span className="block text-[#1F2023] lg:text-7xl  font-bold">
                  CoderBeca?
                </span>
              </h2>
              <p className="mt-4 text-xl leading-8 text-[#504160]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita repellat ratione minima iure maiores fuga sit quam
                similique iusto et, earum adipisci, asperiores, aspernatur
                maxime veritatis officia minus sunt odit?
              </p>
            </div>
          </div>
          <div className="absolute ">
            <div className="w-[420px] h-[500px] bg-[#1F2023] border-[#E990FF] border-2 translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-14 lg:translate-x-[700px]  shadow-[#1F2023] shadow-xl ">
            <h3 className="text-white text-5xl text-center lg:pt-10 lg:pb-8 font-semibold ">¿Cómo accedo?</h3>
            <h4 className="text-[#9B9B9C] lg:pb-5 lg:pl-10 lg:pr-10 text-lg ">El acceso a la CoderBeca es <b>automático y para todos</b>, solo debes cumplir con 2 requisitos una vez dentro del curso:</h4>
            <ul className="list-disc list-outside text-[#9B9B9C] lg:pb-12 lg:pl-16 lg:pr-10 text-lg leading-8">
              <li className="lg:pb-5">Entregar tus proyectos prácticos en tiempo y forma</li>
              <li>Cumplir con el 85% de asistencia a las clases en vivo</li>
            </ul>
            <span className="text-[#EAFF6A] lg:pl-16 lg:pr-10 text-xl">Ver cursos y carreras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
