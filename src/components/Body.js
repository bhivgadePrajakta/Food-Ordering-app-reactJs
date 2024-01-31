import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
// Normal variable

  //  let listOfRes2 = [];

//state variable- super powerful variable

const [listOfRes, setListOfRes] = useState([]);

useEffect(()=>{
   fetchData();
},[]);

const fetchData = async()=>{
  
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 
  const json = await data.json();


  console.log("json data", data);
  
  //optional chaining
  setListOfRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(listOfRes);
}

//conditional rendering

    return listOfRes.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn, button"
                    onClick={()=>{
                      const filteredList =  listOfRes.filter(
                        (res) => res.info.avgRating >4.2
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

