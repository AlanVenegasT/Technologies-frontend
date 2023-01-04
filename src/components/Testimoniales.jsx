import React from "react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const actions = [
  {
    title:
      "Después de mucho esfuerzo y trabajo, he logrado recibir la certificación de desarrollo web en Coderhouse, habiendo aprobado mi proyecto final con un 10...",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title:
      "Quise tomar este curso para tener una visión más completa sobre el diseño de un producto, pues yo me quedaba siempre hasta la etapa de enviarlo a desarrollo...",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title:
      "Uma das coisas que acho mais incrível no desenvolvimento de produtos é a capacidade de resolver um problema real para um usuário. Nos últimos dois meses, pude vivenciar isso com o curso de Product Management da Coderhouse...",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title:
      "A melhor coisa que existe é ser usuário do produto/serviço da empresa em que trabalhamos. Nos últimos meses fui estudante do curso de Product Management da Coderhouse Brasil...",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title:
      "Coisa boa é começar o dia do meu aniversário recebendo um diploma da Coderhouse Brasil! Um agradecimento especial aos feras que me acompanharam nesse processo...",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title:
      "Hoje recebi o retorno da entrega do meu projeto final e estou muito feliz por ter sido aprovado, o sentimento não só de dever cumprido, mas de ter aprendido muito sobre as técnicas..",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimoniales() {
  return (
    <>
      <h2 className="lg:text-6xl lg:px-40 lg:pb-12 lg:pt-28 md:text-4xl md:px-6 md:pb-12 md:pt-20 bg-[#1F2023] text-white font-semibold">
        Más de 180,000 estudiantes nos recomiendan en todo Latinoamérica
      </h2>
      <div className="bg-[#1F2023]    ">
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-[#1F2023] shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mx-auto md:max-w-3xl lg:max-w-6xl">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0 ? " rounded-lg sm:rounded-lg" : "",
                actionIdx === 1 ? "sm:rounded-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-lg  sm:rounded-lg"
                  : "",
                "relative group md:my-3 md:mx-3 lg:my-3 lg:mx-3 bg-[#2B2C32] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div></div>
              <div className="mt-8 ">
                <h3 className="lg:text-base md:text-sm  font-medium lg:pl-12 md:pl-2">
                  <a
                    href={action.href}
                    className="focus:outline-none  text-[#ACACAD]"
                  >
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0 " aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                
                <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
                  {people.map((person) => (
                    <div
                      key={person.email}
                      className="relative flex items-center space-x-3 rounded-lg   bg-[#2B2C32] px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 "
                    >
                      <div className="flex-shrink-0 ">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 ">
                        
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="lg:text-lg md:text-base font-medium text-[#FAFAFA]">
                            {person.name}
                          </p>
                          <p className="truncate lg:text-sm md:text-xs  text-[#A2A2A3]">
                            {person.role}
                          </p>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-[#DDF166] flex justify-end ">Ver LinkedIn</h3>
            </div>
            
          ))}
        
        </div>
        
      </div>
    </>
  );
}
