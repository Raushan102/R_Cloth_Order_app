import logo from "../assets/logo.png";
import{ React,useContext }from "react";
import { ctxContext } from "./cardContex";
import { handleModel } from "./CardHandleContext";






function Header() {

let cardData = useContext(ctxContext);
let handleCardData=useContext(handleModel)

function handleModelFun(){
  handleCardData.OpenCard()

}

  return (
    <header>
      <p>
        <img src={logo} alt="header_logo" />
        <h1>elegant context</h1>
      </p>

     
      <i className="fa-solid fa-cart-plus" onClick={handleModelFun}>
        <sup>{cardData.item.length}</sup>
      </i>
    </header>
  );
}

export default Header;
