import React from "react";
import FoodMenu from "./FoodMenu";

function Restaurant(props) {
  return (
    <div>
      <h2>This is our restaurant
      </h2>
      <FoodMenu user={props.user} />
    </div>
  );
}

export default Restaurant;