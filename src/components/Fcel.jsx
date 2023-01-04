
import { EnvelopeIcon } from '@heroicons/react/20/solid'

export default function Fcel ()  {
  return (
    <>
    <div className="bg-[#1F2023] lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-6xl lg:grid-cols-12 lg:gap-x-8 lg:py-16 lg:px-8 bg-gradient-to-r from-[#FBF5F9] via-[#F0D6E0] to-[#C0A0CF] rounded-md">
        <div className="lg:col-span-5">
          <h2 className="text-6xl font-bold tracking-tight text-[#1F2023] text-center">
            Descarga nuestra app
          </h2>
          <h4 className="text-xl text-[#5A585B] lg:py-8 lg:pl-5">
            Descarga la app para seguir aprendiendo: podrás ver las clases,
            conocer los desafíos y las correcciones.
          </h4>
          <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-[#2B2C32] px-6 ml-10 py-3 text-base font-medium text-[#EAFF6A] shadow-sm hover:bg-[#EAFF6A] focus:outline-none focus:ring-2 hover:text-[#2B2C32] focus:ring-indigo-500 focus:ring-offset-2"
      >
        <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-[#2B2C32] px-6 ml-5 py-3 text-base font-medium text-[#EAFF6A] shadow-sm hover:bg-[#EAFF6A] hover:text-[#2B2C32] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <EnvelopeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Button text
      </button>
          </div>
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>
          <div className="flow-root">
            <div className="-my-12 divide-y text-white divide-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


