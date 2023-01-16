import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Quién de IKTAN estará asignado a mi proyecto?",
    answer:
      "Una persona será asignada a cargo del servicio que se le brinde así mismo se le otorgará seguimiento.",
  },
  {
    question: "¿Cómo contratar un servicio?",
    answer:
      "Ingrese la información en nuestra sección de contacto, e inmediato nos pondremos en contacto.",
  },
  {
    question: "Formas de Pago",
    answer:
      "Contamos con diferentes formas de pago",
  },
  {
    question: "¿Qué profesionales lo conforman?",
    answer:
      "Nuestro equipo es totalmente nuevo y esta conformado por especialistas en diversas áreas.",
  },
  {
    question: "¿A que sector del mercado están enfocados nuestros servicios?",
    answer:
      "Nuestros profesionales están 100% comprometidos en abastecer las necesidades, en cuanto a los sectores atenderemos tanto al sector público como privado.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Faqs = () => {
  return (
    <>
      <div className="bg-[#1F2023]">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Preguntas Frecuentes
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-[#DDF165]">
                          <span className="font-medium text-white">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-white">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
