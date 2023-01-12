import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card';
const tab = [
    { name: 'My Account', href: '#', current: true },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
 

export default function Pricing  ()  {
    const [tabs, setTabs]= useState(tab);
    useEffect(()=>{
    },[tabs])
    const mostrarCard =(e,estado)=>{
        e.preventDefault();
            if(tabs[0].name === estado.name){
                setTabs( [
                    { name: 'My Account', href: '#', current: true },
                    { name: 'Company', href: '#', current: false },
                    { name: 'Team Members', href: '#', current: false },
                    { name: 'Billing', href: '#', current: false },
                  ]);}
                  if(tabs[1].name === estado.name){
                    setTabs( [
                        { name: 'My Account', href: '#', current: false },
                        { name: 'Company', href: '#', current: true },
                        { name: 'Team Members', href: '#', current: false },
                        { name: 'Billing', href: '#', current: false },
                      ])
                }
                if(tabs[2].name === estado.name){
                    setTabs( [
                        { name: 'My Account', href: '#', current: false },
                        { name: 'Company', href: '#', current: false },
                        { name: 'Team Members', href: '#', current: true },
                        { name: 'Billing', href: '#', current: false },
                      ])
                }
                if(tabs[3].name === estado.name){
                    setTabs( [
                        { name: 'My Account', href: '#', current: false },
                        { name: 'Company', href: '#', current: false },
                        { name: 'Team Members', href: '#', current: false },
                        { name: 'Billing', href: '#', current: true },
                      ])
                }
    }

  return (
    <div className='bg-[#1F2023] lg:pt-32 '> 
    <div className='mx-auto max-w-6xl  '>
        <h2 className='lg:text-5xl md:text-3xl text-2xl pl-4 font-bold text-white ' id='Desweb' >Elige tu curso o carrera</h2>
        <h3 className='lg:text-3xl md:text-3xl  text-2xl pl-4 font-normal text-white lg:my-10 md:my-5 my-3 '>CARRERAS</h3>
        <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>




        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-2/3  mx-5 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base bg-[#2B2C32]  focus:border-white text-white focus:outline-none focus:ring-white sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current)} >
          {tabs.map((tab) => (
            <option key={tab.name} >{tab.name}</option>
            
          ))}
        </select>



      </div>
      <div className="hidden sm:block md:px-5 ">
        <div className="border-b border-[#BEBEBE] ">
          <nav className="-mb-px flex space-x-8  " aria-label="Tabs">
            {tabs[0] && tabs.map((tab) => (
              <a
                key={tab.name}
                onClick = {e=>mostrarCard(e,tab)}
                className={classNames(
                  tab.current
                    ? 'border-white text-white border-b-[3px] '
                    : 'border-transparent text-white  hover:text-white hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1  border-b-2 font-medium text-lg'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

  </div>
    {tabs[0].current=== true ? <Card pricing={tabs[0]}/>:  <div/>}
    {tabs[1].current=== true ? <Card pricing={tabs[1]}/>:  <div/>}
    {tabs[2].current=== true ? <Card pricing={tabs[2]}/>:  <div/>}
    {tabs[3].current=== true ? <Card pricing={tabs[3]}/>:  <div/>}

  </div>
  )
}
