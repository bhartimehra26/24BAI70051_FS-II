import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
    <h3><Link to="profile">Profile</Link></h3>
    <h3><Link to="settings">Settings</Link></h3>
    <Outlet/>
    </>
  ); 
}
export default Dashboard;
