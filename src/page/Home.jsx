import React from 'react'
import Banner from '../component/Banner'
import BookingBar from '../component/Bookingbar'
import Welcome from '../component/Welcome'
import Hotelcard from '../component/HotleCard'

export default function Home() {
  return (
    <div>
      <Banner/>
        <BookingBar/>
      <Welcome/>
      <Hotelcard/>
    </div>
  )
}
