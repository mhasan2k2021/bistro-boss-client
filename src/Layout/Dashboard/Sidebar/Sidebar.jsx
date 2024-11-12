import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <h2 className="dashboard-sidebar-title">
        <Link to="/dashboard/home">Bistro Boss</Link>
      </h2>
      <ul className="dashboard-sidebar-menu">
        <li>User Home</li>
        <li>Reservation</li>
        <li>Payment History</li>
        <li>My Cart</li>
        <li>Add Review</li>
        <li>My Booking</li>
      </ul>
      <ul className="dashboard-sidebar-footer">
        <li>Home</li>
        <li>Menu</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
