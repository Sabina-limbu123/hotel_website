import React from "react";
import welcome from "../assets/welcome.jpg"; 

export default function Welcome() {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
    
      <p className="text-fuchsia-400 text-2xl font-bold font-serif mb-2">Welcome To</p>

 
      <h1 className="text-2xl md:text-3xl font-bold font-serif mb-6">
       Hotel Country Villa
      </h1>

 
      <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-10">
        Hotel Country Villa is a scenic hilltop hotel located in Nagarkot, Nepal, known for its peaceful environment and breathtaking views of the Himalayan mountains. Situated about 28 km from Kathmandu, the hotel offers comfortable rooms with modern facilities, many featuring balconies that overlook the mountains and valleys. Guests can enjoy beautiful sunrise and sunset views, along with amenities such as a restaurant, bar, swimming pool, spa, and conference halls, making it an ideal destination for relaxation, tourism, and small events.


      </p>

      
      <div className="max-w-5xl mx-auto">
        <img
          src={welcome}
          alt="Himalayan View"
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}