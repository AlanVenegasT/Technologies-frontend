import { CheckIcon } from '@heroicons/react/20/solid'

const SchemaCard = ({object}) => {
  return (
    <>
        {object.map((tier) => (
            <div key={tier.name} className="divide-y overflow-hidden bg-[#2B2C32] divide-[#1F2023] rounded-lg  shadow-sm duration-700 hover:scale-105">
                <p className='text-black font-normal lg:py-2 text-xs  text-center bg-gradient-to-r from-[#E990FF] via-[#B79FFD] to-[#83ACFA] rounded-t-md'>Aprobecha la coder beca del 70%</p>
              <div className="p-6 ">
                <h2 className="text-4xl font-medium leading-6 text-white lg:pt-10 lg:px-5 ">{tier.name}</h2>
                <p className="mt-4 text-xs text-[#969698] font-semibold lg:px-5">{tier.description}</p>   
                <ul  className="mt-6 space-y-2 pl-5 ">
                  {tier.table.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                          <CheckIcon className="h-5 w-5 flex-shrink-0 text-[#83ACFA]" aria-hidden="true" />
                      <span className="text-xs font-semibold text-[#969698]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pt-6 pb-8">
              <p className="mt-2 text-xs text-[#969698] font-semibold lg:px-5">{tier.plan}</p>
                  <p className="mt-2 text-xs text-[#969698] font-semibold lg:px-5">{tier.descuento}</p>
                <h3 className="mt-2 text-xs text-white font-semibold lg:px-5">Hasta 12 meses sin intereses</h3>
                <ul role="list" className="mt-6 space-y-4">
                   <p className="mt-8 lg:px-8">
                  <span className="text-4xl  font-semibold tracking-tight text-white">${tier.priceMonthly}</span>{' '}
                  <span className="text-4xl  font-semibold tracking-tight text-white">MXN</span>
                </p>
                  <a
                  href={tier.href}
                  className="mt-8 block  duration-700 hover:scale-95  w-full  rounded-sm   bg-[#393B43] py-4  text-center text-base font-semibold text-[#DDF166] hover:bg-[#DDF166] hover:text-black "
                >
                  Buy {tier.name}
                </a>
                </ul>
              </div>
            </div>
          ))}
    </>
  )
}

export default SchemaCard