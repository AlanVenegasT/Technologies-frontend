import React from 'react'

export default function Vtext  ()  {
  return (

    <div className="relative bg-white bg-gradient-to-r from-[#EA92FD] via-[#EAC5B8] to-[#E6FA72] ">
      <div className="h-32  sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="h-3/4 w-ful object-cover  translate-y-1/3  "
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6  ">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            
          </div>
          <h2 className="mt-20 lg:ml-5 lg:mr-16 lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Aprende junto a tus compañeros
          </h2>
          <p className="mt-6 lg:ml-5 text-xl text-black">
          Está demostrado que aprender en grupo es más eficiente y motivador. El networking con tus compañeros de clase ayuda a que puedas tener nuevas ideas y hacer mejores proyectos.
          </p>

          <ul className='lg:ml-10 lg:mt-8 lg:mb-32  text-xl list-disc font-medium '>
                <li>Clases en grupo</li>
                <li>Canales de chat</li>
                <li>Foro privado</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}
