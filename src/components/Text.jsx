import React from "react";

export default function Text() {
  return (
    
    <div className="bg-[#1F2023] ">
      <div className="mx-auto max-w-full   sm:px-6 lg:px-16 lg:pb-20 px-4 pb-32  ">
        <div className="overflow-hidden rounded-md bg-gradient-to-r from-[#E990FF] via-[#B29DF9] to-[#83AEFB] shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 grid grid-cols-2 gap-4 ">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 md:py-16 md:pr-0 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center lg:ml-5 self-center ml-5">
              <h2 className="text-3xl md:text-2xl font-bold tracking-tight text-white sm:text-4xl ">
                <span className="block text-[#1F2023] lg:text-7xl md:text-4xl text-xl  font-bold">
                  ¿Qué es la{" "}
                </span>
                <span className="block text-[#1F2023] lg:text-7xl md:text-4xl text-xl font-bold">
                  CoderBeca?
                </span>
              </h2>
              <p className="lg:mt-4 lg:text-xl lg:leading-8 lg:pr-0 md:mt-4  md:text-sm  md:leading-8 md:pr-0 mt-2 text-xs leading-4 pr-0 text-[#504160]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita repellat ratione minima iure maiores fuga sit quam
                similique iusto et, earum adipisci
              </p>
            </div>
          </div>
          <div className="absolute  ">
            <div className=" w-[200px] h-[300px] md:w-[270px] md:h-[400px] lg:w-[430px] lg:h-[500px] bg-[#1F2023] border-[#E990FF] border-2 translate-x-40 translate-y-12 transform rounded-md object-cover object-left-top  lg:translate-y-14 lg:translate-x-[490px] xl:translate-x-[700px] md:translate-y-14 md:translate-x-[420px]  shadow-[#1F2023] shadow-xl ">
            <h3 className="text-white  text-center lg:text-5xl lg:pt-10 lg:pb-8 md:text-3xl md:pt-5 md:pb-4 text-xl pt-3 pb-2 font-semibold ">¿Cómo accedo?</h3>
            <h4 className="text-[#9B9B9C] lg:pb-5 lg:pl-10 lg:pr-10 lg:text-lg md:pb-2 md:pl-10 md:pr-6 md:text-sm pb-2 pl-10 pr-6 text-xs ">El acceso a la CoderBeca es <b>automático y para todos</b>, solo debes cumplir con 2 requisitos una vez dentro del curso:</h4>
            <ul className="list-disc list-outside text-[#9B9B9C] lg:pb-12 lg:pl-16 lg:pr-10 lg:text-lg md:pb-12 md:pl-16 md:pr-10 md:text-sm pb-2 pl-14 pr-5 text-xs  lg:leading-8 md:leading-8 leading-4">
              <li className="lg:pb-5 md:pb-5 pb-2">Entregar tus proyectos prácticos en tiempo y forma</li>
              <li>Cumplir con el 85% de asistencia a las clases en vivo</li>
            </ul>
            <span className="text-[#EAFF6A] lg:pl-16 lg:pr-10 lg:text-xl md:pl-16 md:pr-10 md:text-base pl-12 pr-5 text-sm">Ver cursos y carreras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
