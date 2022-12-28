import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Cómo es la modalidad de cursado en línea y en vivo?",
    answer:
      "Todos los cursos y carreras de Coderhouse son en línea y en vivo. Esto quiere decir que tanto los profesores y tutores como los estudiantes deben conectarse en días y horarios puntuales. El mayor beneficio es que durante las clases podrás interactuar con ellos. También contarás con asistencia de tutores que te ayudarán con tus consultas teóricas, desafíos y proyectos.",
  },
  {
    question: "¿Qué validez tienen los cursos y carreras de Coderhouse?",
    answer:
      "Los programas de cada uno de los cursos y carreras de Coderhouse son cocreados con empresas líderes en innovación de Latinoamérica como Mercado Libre, Bitso, Ualá, Rappi, Despegar, entre otras. Esto nos permite tener nuestros contenidos actualizados y avalados por referentes de la industria.",
  },
  {
    question: "¿Tienen oficinas en México?",
    answer:
      " contamos con un espacio de trabajo en We Work en Ciudad de México.",
  },
  {
    question: "¿Otorgan factura de compra?",
    answer:
      "Sí, una vez que realizas el pago de tu curso o carrera, te enviaremos la factura correspondiente.",
  },
  {
    question: "¿Cuáles son los medios de pago?",
    answer:
      "Puedes pagar con tarjeta de débito o crédito a través Mercado Pago en 12 meses sin intereses, a través de PayPal, o en efectivo dirigiéndote a tu sucursal de OXXO más cercana. El pago se realizará en pesos mexicanos.",
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
