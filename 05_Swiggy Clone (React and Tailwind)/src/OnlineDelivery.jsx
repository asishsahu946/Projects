import React, { useEffect, useState } from "react";
import Card from "./Card";

function OnlineDelivery() {
    const [data, setData] = useState([])

    const fetchTopRestaurant = async () => {
        const res = await fetch("http://localhost:5000/top-restaurant-chains")
        const apiData  = await res.json()
        setData(apiData)
    }

    useEffect(
        () => {
            fetchTopRestaurant()
        }
    )
  return (
    <div className="max-w-[1200px] mx-auto ">
    <div className="flex items-center justify-between p-5">
      <div className=" text-[25px] font-bold">Restaurant with online food delivery in Phulbani</div>
    </div>
    <div className="grid grid-cols-4 gap-3">
    {
        data.map((d, i) => {
            return <Card {...d} key={i} />
        })
    }
    </div>
  </div>
  )
}

export default OnlineDelivery;
