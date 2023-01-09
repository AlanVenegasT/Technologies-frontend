import React from "react";

export default function Formu() {
  return (
    <>
      <div className="flex min-h-full pt-16 ">
        <div className="flex flex-1 flex-col justify-center pt-12 pb-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-[#1F2023] ">
          <div className="mx-auto w-full max-w-lg lg:w-[700px]">
            <div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                ¡Conéctate con nosotros y da el primer paso hacia un futuro
                mejor!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {" "}
                <a
                  href="#"
                  className="font-medium text-[#EAFF6A] hover:text-indigo-500"
                >
                  ¡No lo dudes!
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div>
                
                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-light text-white"
                    >
                      Nombre Completo
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="text"
                        required
                        className="block w-full appearance-none rounded-md border border-[#2E2F36] px-3 py-2  bg-[#2E2F36] shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-light text-white"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-[#2E2F36] px-3 py-2 placeholder-gray-400 shadow-sm bg-[#2E2F36] focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-sm font-light text-white"
                    >
                      Comentario
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="block w-full rounded-md border-[#2E2F36] shadow-sm focus:border-indigo-500 bg-[#2E2F36] focus:ring-indigo-500 sm:text-sm"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-[#EAFF6A]"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-4 block text-base text-white"
                      >
                        Al seleccionar esto, usted acepta las{" "}
                        <span className="font-semibold text-[#EAFF6A] underline">
                          {" "}
                          Politicas de Privacidad{" "}
                        </span>{" "}
                        y{" "}
                        <span className="font-semibold text-[#EAFF6A] underline">
                          {" "}
                          Cookie Policy.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent duration-700 hover:scale-105 bg-[#BACB5A] py-3 px-4 text-base font-light text-black shadow-sm hover:bg-[#EAFF6A]  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          
          
          <div className="absolute inset-0  bg-center bg-cover bg-[url('https://www.sccenlared.es/wp-content/uploads/2021/09/por-que-interesa-optar-por-los-servicios-gestionados-y-la-internalizacion-de-ti.jpg')] ">
           <div className="w-full h-full  bg-gradient-to-r from-[#1F2023] ">
              
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
