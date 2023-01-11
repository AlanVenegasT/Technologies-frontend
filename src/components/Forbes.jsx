import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Coderhouse: la escuela digital impulsada por Silicon Valley que apuesta por México.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Forbes = () => {
  return (
    <div className="bg-[#1F2023] lg:pt-28 md:pt-20 pt-10">
        <p className='text-center text-white text-base pb-5 md:text-lg md:pb-10 lg:text-xl lg:pb-16'>Nuestras apariciones en los medios</p>
    <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6  lg:grid lg:max-w-6xl lg:grid-cols-12 lg:gap-x-8 lg:py-16 lg:px-8 md:grid md:max-w-3xl md:grid-cols-12 md:gap-x-8 md:py-12 md:px-8 grid  grid-cols-12 gap-x-8  bg-[#1F2023] border-[#2E2F36] border-2 rounded-md">
      <div className="col-span-4">
        <h2 className="lg:text-7xl md:text-7xl text-5xl font-bold tracking-tight text-white text-center">Forbes</h2>
      </div>

      <div className=" lg:col-span-7 lg:col-start-6 lg:mt-0 md:col-span-7 md:col-start-6 md:mt-0 col-span-7 col-start-6 mt-0">
        <h3 className="sr-only">Recent reviews</h3>

        <div className="flow-root">
          <div className="-my-12 divide-y text-white divide-gray-200">
            {reviews.featured.map((review) => (
              <div key={review.id} className="py-12">
                <div
                  className="mt-4 space-y-6 lg:pr-10 md:pr-10 px-5 font-bold md:font-semibold  text-white lg:text-4xl  md:text-2xl "
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <h4 className=' md:text-sm lg:text-xl text-[#A6A6A7]md:py-8 py-4 px-5 lg:py-8 md:pt-5 pt-5 '>La escuela digital cuenta con una tasa de terminación de más de 90% y planea refozar su presencia en México tras recibir una ronda de inversión de compañías de Silicon Valley.</h4>
              
                <h5 className='text-xl md:text-base md:pt-5  px-5 text-[#E5FA68]'>Leer artículo</h5>
              </div>
              
            ))}
            
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Forbes