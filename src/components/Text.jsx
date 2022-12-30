import React from "react";

export default function Text() {
  return (
    <div className="bg-[#1F2023] ">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-16 lg:pb-20 ">
        <div className="overflow-hidden rounded-md bg-gradient-to-r from-[#E990FF] via-[#B29DF9] to-[#83AEFB] shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 ">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center lg:ml-5">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                <span className="block text-[#1F2023] text-7xl ">
                  ¿Qué es la{" "}
                </span>
                <span className="block text-[#1F2023] text-7xl">
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
            <div className="w-[420px] h-[500px] bg-black translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-14 lg:translate-x-[675px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
