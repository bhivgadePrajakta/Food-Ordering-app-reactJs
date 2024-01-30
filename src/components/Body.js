import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
// Normal variable

  //  let listOfRes2 = [];

//state variable- super powerful variable

const [listOfRes, setListOfRes] = useState(resList);

useEffect(()=>{
   fetchData();
},[]);

const fetchData = async()=>{


   
  const data =await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=21.1458004&lng=79.0881546");
  const json = await data.json();

  console.log("json data", data);
  setListOfRes(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  console.log(listOfRes);
}


    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={()=>{
                      const filteredList =  listOfRes.filter(
                        (res) => res.info.avgRating >4
                       );
                       setListOfRes(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
              {listOfRes.map((restaurant)=>(
                <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
              ))}
            </div>
        </div>
    );
};

export default Body;

