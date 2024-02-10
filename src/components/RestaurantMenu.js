import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
 
   const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
    fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            ); 
            const json = await data.json();
            console.log(json);
            if (json && json.data) {
                setResInfo(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[4]?.info);
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
    
   
 //const {name,cuisines} = (resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info);
 

  return resInfo === null 
  ? (<Shimmer/>) 
  :(
    <div className='menu'>
<h1>{resInfo.name}</h1>
<h2>Menu</h2>
<ul>
    <li>
        Biryani
    </li>
    <li>
        Burger
        </li>
        <li>
        Diet Coke
        </li>
</ul>

    </div>
  )
}

export default RestaurantMenu;