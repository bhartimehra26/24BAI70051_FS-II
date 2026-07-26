import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div
        style={{
            width: "200px",
            minHeight: "100vh",
            backgroundColor: "#abc7e4", 
            padding: "20px"
        }}
        >
            <p>
                <Link to="/dashboard">Dashboard</Link>
            </p>

            <p>
                <Link to="/tasks">Tasks</Link>
            </p>

            <p>
                <Link to="/resources">Resources</Link>
            </p>

            <p>
                <Link to="/profile">Profile</Link>
            </p>
        </div>
    );
}

export default Sidebar;