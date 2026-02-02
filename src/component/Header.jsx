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
    <div className = "flex justify-center gap-10 items-center bg-sky-200 font-bold font-serif">
      {NavLinks.map((el,indx)=>(
        <a href={el.url} key={indx}>{el.title}</a>
      ))}
    </div>
  )
}
