import React from 'react'

const NavLinks=[
    {
        title:"About",
        url:"/about"
    },
    {
        title:"Room & Suites",
        url:"/room"
    },
    {
        title:"Amenities",
        url:"/amenities"
    },
    {
        title:"Dining",
        url:"/dining"
    },
    {
        title:"Contact Us",
        url:"/contact"
    },
]

export default function Header() {
  return (
    <div className = "container mx-auto font-bold font-serif h-15 border-2 flex justify-center items-center gap-8 bg-lime-200 rounded-3xl w-200" >
      <div className='flex flex-col'>
        <img src="./Logo.jpg" alt="" className='h-7 w-7'/>
        <p>Hotel Country Villa</p>
      </div>
      {NavLinks.map((el,indx)=>(
        <a href={el.url} key={indx} className='text-2x1'>{el.title}</a>
      ))}
    </div>
  )
}
