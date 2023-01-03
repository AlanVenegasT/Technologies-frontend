import React, { useRef, useEffect } from "react";
import "./Carrusel/Carru3dL.css";

export default function Carru3dL() {
  const slider = useRef();
  const images = [...Array(30).keys()];

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current.scrollLeft += 200;
    }, 3000); // se moverá cada 2 segundos

    return () => clearInterval(interval);
  }, []); // se ejecutará solo una vez

  return (
    <div className="relative bg-[#1F2023]  lg:pt-20 lg:pb-32 ">
      {" "}
      {/*General */}
      <div className="h-32  sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-7/8 lg:pt-20 lg:pb-52">
        {" "}
        {/*1 */}
        <div className="">
         
        <h2 className="text-3xl text-[#ED94FF] font-medium lg:ml-44 lg:mb-10  ">¡Certificate!</h2>
     
          <div className="flex items-center justify-center w-1/2 h-full ">
            
            <button
              className="bg-[#1F2023] mx-2"
              onClick={() => (slider.current.scrollLeft -= 200)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </button>
            <div
              ref={slider}
              class="snap-x overflow-hidden  scroll-smooth h-[300px] flex items-center justify-start"
            >
              {images.map((e, i) => (
                <div
                  key={i}
                  className="snap-center flex flex-shrink-0 w-auto mx-5"
                >
                  <img
                    src={`https://picsum.photos/id/${i}/300/300`}
                    alt={`images${i}`}
                    className="object-cover object-center w-400px h-400px rounded-lg shadow-slate-600 shadow-lg"
                  />
                </div>
              ))}
            </div>
            <button
              className="bg-[#1F2023] mx-20"
              onClick={() => (slider.current.scrollLeft += 200)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 ">
        {" "}
        {/*2 */}
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div class="space-y-4">
            <details class="group   p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center justify-start cursor-pointer">
                <span class="ml-1.5 flex-shrink-0 rounded-full  bg-clip-content p-6 bg-[#83AEFB] border-2 border-[#83AEFB]  text-gray-900 sm:p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-4 h-4 transition duration-300 group-open:-rotate-45 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </span>

                <h2 class="text-2xl font-medium lg:ml-16  text-[#83AEFB] ">
                  Contenido avalado por empresas
                </h2>
              </summary>

              <p class="mt-4 lg:ml-24 leading-relaxed text-[#949597] text-xl font-medium">
                El contenido de nuestros cursos y carreras está avalado por las
                empresas de tecnología más innovadoras a nivel global.
              </p>
            </details>
            <details class="group   p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center justify-start cursor-pointer">
                <span class="ml-1.5 flex-shrink-0 rounded-full  bg-clip-content p-6 bg-[#83AEFB] border-2 border-[#83AEFB]  text-gray-900 sm:p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-4 h-4 transition duration-300 group-open:-rotate-45 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </span>

                <h2 class="text-2xl font-medium lg:ml-16 text-[#FCFCFC]">
                  Desafíos
                </h2>
              </summary>

              <p class="mt-4 lg:ml-24 leading-relaxed text-[#949597] text-xl font-medium">
                El contenido de nuestros cursos y carreras está avalado por las
                empresas de tecnología más innovadoras a nivel global.
              </p>
            </details>
            <details class="group   p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex items-center justify-start cursor-pointer">
                <span class="ml-1.5 flex-shrink-0 rounded-full  bg-clip-content p-6 bg-[#83AEFB] border-2 border-[#83AEFB]  text-gray-900 sm:p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-4 h-4 transition duration-300 group-open:-rotate-45 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </span>

                <h2 class="text-2xl font-medium lg:ml-16 text-[#FCFCFC]">
                  Certificación
                </h2>
              </summary>

              <p class="mt-4 lg:ml-24 leading-relaxed text-[#949597] text-xl font-medium">
                El contenido de nuestros cursos y carreras está avalado por las
                empresas de tecnología más innovadoras a nivel global.
              </p>
            </details>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
