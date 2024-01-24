import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //local state variable
    const [listOfRes,setListOfRes] = useState(resObj);
return (
    <div className="body">
        <div className="filter"> 
        <button className="filter-btn"
         onClick={()=>{
        const filterList = listOfRes.filter(
            (res) => res.rating >4
        );
        setListOfRes(filterList);
        }}
        >Top Rated Restaurants</button>
        </div>
        <div className="res-container"> 
       {
        listOfRes.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
       }  
         
        </div>
    </div>
);
};
export default Body;