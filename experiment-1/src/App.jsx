import React from "react";
import Home from "./components/Home";

function App() {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    location: "Chandigarh",
  };

  return (
    <div>
      <Home user={user} />
    </div>
  );
}

export default App;