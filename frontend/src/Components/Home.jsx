// import React from 'react'
// import '../App.css'
// import { useState } from 'react'
// import studentimage1 from "../static/images/studentimage1.jpg"
// import studentimage2 from "../static/images/studentimage2.jpg"
// import studentimage3 from "../static/images/studentimage3.jpg"

// function Home({slides}) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   // this line creates a variable currentSlide that keeps track of the current/first slide
//   // setCurrentSlide is used to update the currentSlide to the next slide

//   // the functions below help navigate through the slides
//   const hanldePrev = () => {
//     setCurrentSlide(currentSlide - 1);
//   }

//   const handleNext = () => {
//     setCurrentSlide(currentSlide + 1);
//   }

//   return (
//     <div className='carousel w-full h-full overflow-hidden relative'>

//       <div className='carousel-inner relative w-full h-full'>

//         {slides.map((slide, index) => (
//           <div key={index} className="carousel-item w-full h-full flex justify-center items-center">
//             <img src={slide.studentimage1} alt="slide" className="w-full h-full object-cover"/>
//           </div>
//         ))}
        
//       </div>

      
//     </div>
//   )
// }

// export default Home




