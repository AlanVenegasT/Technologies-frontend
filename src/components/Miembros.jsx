import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const Miembros = () => {
  return (
    <div className="bg-[#1F2023] pb-10">
      <h2 className="text-4xl font-medium py-20  px-16 text-white">
        Nuestros Miembros
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 "
      >
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

{people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col   rounded-lg bg-[#2B2C32] border-2 border-[#3B3D44] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-medium text-white">
                {person.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-[#BEBEBE]">{person.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-[#EAFF6A] px-2 py-1 text-xs font-medium text-black">
                    {person.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div></div>
          </li>
        ))}

              </ul>
    </div>
  );
};

export default Miembros;
