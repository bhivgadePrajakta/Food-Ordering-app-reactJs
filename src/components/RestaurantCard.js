
import { CDN_URL, LOGO_URL, RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) =>{
const {resData}=props;
const{cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,

} = resData?.info;
    return(
     
        <div className="res-card">
            <img className="res-logo" src=
            {CDN_URL + 
            cloudinaryImageId }
        />
           <h3>{name}</h3>
           <h4 className="cuisine">{cuisines.join(", ")}</h4>
          <div className="description">
          <h4>{avgRating}⭐</h4>
           <h4>{deliveryTime} mins</h4>
           <h4>{costForTwo}</h4>
          </div>
        </div>
    );
};
export default RestaurantCard;