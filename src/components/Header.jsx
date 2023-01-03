import React from "react";

const Header = () => {
  return (
    <nav class="bg-gradient-to-r fixed w-full z-50 from-[#E990FF] via-[#B29DF9] to-[#83AEFB] border-b-2 border-[#2E2F36] px-2 lg:px-28  py-3 md:px-14  dark:bg-[#1F2023]">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="Logo IKTANTec.png" class="h-12 mr-3 sm:h-15" alt="IKTAN Logo" />
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-[#1F2023]   focus:ring-4 focus:outline-none  font-bold rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 lg:mr-8 ">Iniciar Sesion</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gradient-to-r from-[#E990FF] via-[#B29DF9] to-[#83AEFB] md:flex-row md:space-x-16  md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#1F2023] dark:bg-[#1F2023] md:dark:bg-[#1F2023] dark:border-[#1F2023]">
      <li>
        <a href="#" class="text-[17px] font-bold block py-2 pl-3 pr-4 text-[#FCFCFC] rounded hover:bg-[#FCFCFC] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#FCFCFC] dark:text-[#1F2023] dark:hover:bg-[#FCFCFC] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#" class="text-[17px] font-bold block py-2 pl-3 pr-4 text-[#FCFCFC] rounded hover:bg-[#FCFCFC] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#FCFCFC] dark:text-[#1F2023] dark:hover:bg-[#FCFCFC] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
      </li>
      <li>
        <a href="#" class="text-[17px] font-bold block py-2 pl-3 pr-4 text-[#FCFCFC] rounded hover:bg-[#FCFCFC] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#FCFCFC] dark:text-[#1F2023] dark:hover:bg-[#FCFCFC] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quienes somos</a>
      </li>
      <li>
        <a href="#" class="text-[17px] font-bold  block py-2 pl-3 pr-4 text-[#FCFCFC] rounded hover:bg-[#FCFCFC] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#FCFCFC] dark:text-[#1F2023] dark:hover:bg-[#FCFCFC] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
export default Header;
