import React from 'react'
import TORQ from '../images/torq.png'
import WWSA from '../images/wwsa.png'
import NODEBOILER from '../images/nodeboilericon.png'
import { Link } from 'react-router-dom'

function Card({company, hyperlink, description, logo}) {
    return (
        <div className="flex flex-col gap-2 border border-white bg-light-black text-white rounded-lg p-4 w-full">
            <div className='flex flex-col lg:flex-row gap-2'>
                <img src={logo} alt={company} className="w-24 h-24"/>
                <div>
                    <h3 className="text-2xl font-semibold">{company}</h3>
                    <Link to={hyperlink} className="text-blue-500 underline italic">{company}</Link>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    )
}

function Clients() {
  return (
    <div className='flex flex-col items-start justify-center space-y-4'>
        <h2 className="text-4xl font-semibold text-start w-full border-b pb-2">CLIENTS</h2>
        <p className='text-white'>
            With a strong foundation in web development, I offer a range of services designed to meet client website needs. My experience spans varies from basic brochures webpages to scalabale web applications.
        </p>

        <div className="grid grid-cols-2 col-span-12 gap-4">
            <Card company="TORQ Sports" hyperlink="https://torqsports.com" description="A sports recruting platform that offers valuable Saas products that help high school athletes with getting recruited" logo={TORQ}/>
            <Card company="World Wide Strategic Alliances" hyperlink="https://wws-alliances.org" description="A company specializing in both domestic and international logistics, offering streamlined cargo solutions." logo={WWSA}/>
            <Card company="Nodeboiler" hyperlink="https://nodeboiler.com" description="A boilerplate for Node.js applications that includes a variety of features and tools to help developers get started quickly." logo={NODEBOILER}/>
        </div>
        
    </div>
  )
}

export default Clients