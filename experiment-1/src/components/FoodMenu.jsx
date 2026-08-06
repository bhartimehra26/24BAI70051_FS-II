import React from "react";
import UserInfo from "./UserInfo";
import { useState } from "react";
function FoodMenu(props) {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      
      <UserInfo user={props.user} />
      <h3>Menu</h3>
      <h4>Pizza @ Rs.299/-</h4>
      <button onClick={()=>setCartCount(prev=>prev+1)}>
        Add to your Cart
      </button>
      <h3>Items in your cart: {cartCount}</h3>
    </div>
  );
}

export default FoodMenu;