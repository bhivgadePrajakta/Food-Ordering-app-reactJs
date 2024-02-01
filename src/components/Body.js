import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
// Normal variable

  //  let listOfRes2 = [];

//state variable- super powerful variable

const [listOfRes, setListOfRes] = useState([]);

const [filterdRes, setFilterdRes] = useState([]);

const [searchText, setSearchText] = useState("");


useEffect(()=>{
   fetchData();
},[]);

const fetchData = async()=>{
  
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 
  const json = await data.json();


  console.log("json data", data);
  
  //optional chaining
  setListOfRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  setFilterdRes(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(listOfRes);
}

//conditional rendering

    return listOfRes.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input
                 type="text"
                 className="search-box" 
                 value ={searchText}
                 onChange={(e) =>{
                  setSearchText(e.target.value);
                 }} /> 
               
                <button className="button" onClick ={()=>{
                  console.log(searchText);

                 const filteredList = listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                 );
                 setFilterdRes(filteredList);
                }} >Search</button>
             
              </div>
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
              {filterdRes.map((restaurant)=>(
                <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
              ))}
            </div>
        </div>
    );
};

export default Body;

