import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Category() {
  const [slide, setSlide] =useState(0)
    const [categories, setCategory] = useState([])

    const fetchcategory = async () => {
      const res = await fetch("http://localhost:5000/categories")
      const data = await res.json()
      setCategory(data)
    }

    const nextSlide = () => {
      if(categories.length - 8 == slide) {
        return false
      }
       else{
        setSlide(slide + 3)
       } 
      
    }
    const prevSlide = () => {
      setSlide(slide - 3)
    }

    useEffect(
        () => {
            fetchcategory();

        },[]
    )
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between">
        <div className=" text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={prevSlide}>
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex  overflow-hidden">
        {
          categories.map((cat, index) => {
            return(
              <div style={{transform: `translateX(-${slide * 100}%)`}} key={index} className="w-[150px] shrink-0 duration-500">
                <img src={"http://localhost:5000/images/"+cat.image} alt="" />
              </div>
            )
          }) 
        }
        </div>
        <hr  className="mx-4 "/>
    </div>
  );
}

export default Category;
