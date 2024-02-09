import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () =>{

    let btnName = "Login";

    const [btnNameReact,setBtnNameReact] = useState("Login");

 // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);


    return (
        <div className="header">
            <div className="logo-container">
              <img className="logo" src= {LOGO_URL}/>  
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li> 
                    <li>Contact Us</li> 
                    <li>Cart</li>
                    <button className="login-btn, button"
                     onClick={()=>{
                       btnNameReact==="Login"
                       ? setBtnNameReact("Logout")
                       :setBtnNameReact("Login");
                    
                     }}
                     > 
                     {btnNameReact}
                     </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;