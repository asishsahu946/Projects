import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

function TopRest() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const res = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await res.json();
    setData(apiData);
  };

  const leftSlide = () => {
    if (slide == 0) {
      return false;
    } else if(slide == 0) {
      setSlide(slide - 214);
    }else if(slide == 214){
      setSlide(slide - 214)
    }else if(slide == 428){
      setSlide(slide - 214)
    }
  };

  const rightSlide = () => {
    if (slide) {
      return false;
    } else if(slide == 0) {
      setSlide(slide + 214);
    }else if(slide == 214){
      setSlide(slide + 214)
    }else if(slide == 428){
      setSlide(slide + 214)
    }
    console.log(slide)
  };

  useEffect(() => {
    fetchTopRestaurant();
  });
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between p-5">
        <div className=" text-[25px] font-bold">
          Top restaurant chains in Phulbani
        </div>
        <div className="flex">
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={leftSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={rightSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div
       
        className="flex gap-5  border-2 border-red-700"
      >
        {data.map((d, index) => {
          return <div  style={{
            transform: `translateX(-${slide}%)`,
          }}  className="w-[288px] shrink-0 duration-500">
            <Card  {...d} key={index} />
          </div>
        })}
      </div>
    </div>
  );
}

export default TopRest;

//1st click 100%
//2nd click 150%
