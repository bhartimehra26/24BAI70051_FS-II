import React from "react";
import Restaurant from "./Restaurant";

function Home(props) {
  return (
    <div>
      <h1>Welcome to this App</h1>
      
      <Restaurant user={props.user} />
    </div>
  );
}

export default Home;