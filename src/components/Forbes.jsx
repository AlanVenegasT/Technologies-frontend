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
    <div className="bg-[#1F2023] lg:pt-32 md:pt-20">
        <p className='text-center text-white md:text-lg md:pb-10 lg:text-xl lg:pb-16'>Nuestras apariciones en los medios</p>
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6  lg:grid lg:max-w-6xl lg:grid-cols-12 lg:gap-x-8 lg:py-16 lg:px-8 bg-[#1F2023] border-[#2E2F36] border-2 rounded-md">
      <div className="lg:col-span-4">
        <h2 className="text-7xl font-bold tracking-tight text-white text-center">Forbes</h2>
      </div>

      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <h3 className="sr-only">Recent reviews</h3>

        <div className="flow-root">
          <div className="-my-12 divide-y text-white divide-gray-200">
            {reviews.featured.map((review) => (
              <div key={review.id} className="py-12">
                <div
                  className="mt-4 space-y-6 lg:pr-10  font-bold  text-white text-4xl "
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <h4 className='text-xl text-[#A6A6A7] lg:py-8'>La escuela digital cuenta con una tasa de terminación de más de 90% y planea refozar su presencia en México tras recibir una ronda de inversión de compañías de Silicon Valley.</h4>
              
                <h5 className='text-xl text-[#E5FA68]'>Leer artículo</h5>
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