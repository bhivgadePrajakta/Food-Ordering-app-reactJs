import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                    <li>
                    <Link to = "/" className="nav-link">Home</Link>
                    </li>
                    <li>
                      <Link to = "/about" className="nav-link">About Us</Link>
                      </li> 
                    <li>
                    <Link to = "/contact" className="nav-link">Contact Us</Link>
                      </li> 
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