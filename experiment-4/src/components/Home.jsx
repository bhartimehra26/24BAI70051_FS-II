import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <h3><Link to="/about">About</Link></h3>
    <h3><Link to="/contact">Contact</Link></h3>
    <h3><Link to="/dashboard">Dashboard</Link></h3>
    </>
  ); 
}
export default Home;
