import React from "react";

export default function Footer() {
  return (
    <footer className="bg-lime-200 text-black-300 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
       
        <div>
          <h2 className="text-2xl font-bold font-sans mb-4"> Hotel Country Villa</h2>
          <p className="mb-2 font-bold font-sans">Kathmandu, Nepal</p>
          <p className="mb-2 font-bold font-sans">Phone: +977 01 123456</p>
          <p className="font-bold font-sans">Email: info@hotelcountryvilla.com</p>
        </div>

        
        <div>
          <h3 className="text-xl font-sans font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-amber-900 font-sans font-bold">Home</a></li>
            <li><a href="/rooms" className="hover:text-amber-900 font-sans font-bold">Rooms</a></li>
            <li><a href="/about" className="hover:text-amber-900 font-sans font-bold">About Us</a></li>
            <li><a href="/contact" className="hover:text-amber-900 font-sans font-bold">Contact</a></li>
            <li><a href="/booking" className="hover:text-amber-900 font-sans font-bold">Booking</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-bold font-sans mb-4">Our Commitment</h3>
          <p className="mb-4 font-bold font-sans">
            We offer the finest luxury accommodations with breathtaking views and exceptional hospitality.
          </p>
          <p className="text-sm font-bold font-sans">&copy; {new Date().getFullYear()}Hotel Country Villa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}