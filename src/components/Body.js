import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

let listOfRes = [{
    "info": {
      "id": "188458",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.2,
        "deliveryTime": 23,
          }
  },

  {
    "info": {
      "id": "188459",
      "name": "MAC D",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
        "deliveryTime": 23,
          }
  },
  {
    "info": {
      "id": "188457",
      "name": "MAC D",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3,
        "deliveryTime": 23,
          }
  },];

const Body = () => {



    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={()=>{
                       listOfRes =  listOfRes.filter(
                        (res) => res.info.avgRating >4
                       );
                       console.log(listOfRes);
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

