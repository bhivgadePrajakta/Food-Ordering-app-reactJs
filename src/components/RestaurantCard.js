import { RES_LOGO } from "../utils/constants";
import { LOGO_URL, RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    return(
     
        <div className="res-card">
            <img className="res-logo" src={RES_LOGO} ></img>
           <h3>{resData.name}</h3>
           <h4 className="cuisine">{resData.cuisine}</h4>
          <div className="description">
          <h4>{resData.rating}⭐</h4>
           <h4>{resData.delivery_time} mins</h4>
           <h4>{resData.cost_for_two} RS for Two</h4>
          </div>
        </div>
    );
};
export default RestaurantCard;