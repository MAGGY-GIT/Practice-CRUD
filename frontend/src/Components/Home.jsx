import React from 'react'
import { Carousel } from "flowbite-react";
import studentimage1 from "../static/images/studentimage1.jpg"
import studentimage2 from "../static/images/studentimage2.jpg"
import studentimage3 from "../static/images/studentimage3.jpg"


function Home() {
  return (
    <div>
        
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src={studentimage1} alt="..." />
          <img src={studentimage2} alt="..." />
          <img src={studentimage3} alt="..." />
        </Carousel>
      </div>

    </div>
  )
}

export default Home