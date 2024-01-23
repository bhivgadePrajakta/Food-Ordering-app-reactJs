import React from "react";
import ReactDOM from 'react-dom/client';

const resObj = 
[
  {
    "name": "Tasty Bites",
    "cuisine": "Italian",
    "rating": 4.5,
    "delivery_time": 30,
    "cost_for_two": 40
  },
  {
    "name": "Spice Haven",
    "cuisine": "Indian",
    "rating": 4.2,
    "delivery_time": 45,
    "cost_for_two": 35
  },
  {
    "name": "Sushi Delight",
    "cuisine": "Japanese",
    "rating": 4.8,
    "delivery_time": 25,
    "cost_for_two": 50
  },
  {
    "name": "MexiGrill",
    "cuisine": "Mexican",
    "rating": 4.0,
    "delivery_time": 40,
    "cost_for_two": 30
  },
  {
    "name": "Burger Bliss",
    "cuisine": "American",
    "rating": 4.3,
    "delivery_time": 35,
    "cost_for_two": 25
  },
  {
    "name": "Mediterranean Flavors",
    "cuisine": "Mediterranean",
    "rating": 4.6,
    "delivery_time": 35,
    "cost_for_two": 45
  },
  {
    "name": "Thai Temptations",
    "cuisine": "Thai",
    "rating": 4.4,
    "delivery_time": 40,
    "cost_for_two": 38
  },
  {
    "name": "Veggie Delights",
    "cuisine": "Vegetarian",
    "rating": 4.7,
    "delivery_time": 30,
    "cost_for_two": 35
  },
  {
    "name": "Seafood Paradise",
    "cuisine": "Seafood",
    "rating": 4.9,
    "delivery_time": 20,
    "cost_for_two": 55
  },
  {
    "name": "Grill & Chill",
    "cuisine": "Barbecue",
    "rating": 4.1,
    "delivery_time": 50,
    "cost_for_two": 42
  }
];
    


const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://i.pinimg.com/564x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"/>  
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li> 
                    <li>Contact Us</li> 
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};





const RestaurantCard = (props) =>{
    const {resData} = props;

    return(
     
        <div className="res-card">
            <img className="res-logo" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" ></img>
           <h3>{resData.resName}</h3>
           <h4 className="cuisine">{resData.cuisine}</h4>
          <div className="description">
          <h4>{resData.rating}⭐</h4>
           <h4>{resData.delivery_time} mins</h4>
           <h4>{resData.cost_for_two} RS for Two</h4>
          </div>
        </div>
    );
};

const Body = () => {
return (
    <div className="body">
        <div className="search"> Search</div>
        <div className="res-container"> 
       {
        resObj.map(restaurant => <RestaurantCard resData={restaurant}/>)
       }  
         
        </div>
    </div>
);

};

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);