import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <h2 className="dashboard-sidebar-title">
        <Link to="/user-home">Bistro Boss</Link>
      </h2>
      <ul className="dashboard-sidebar-menu">
        <li>
          <NavLink to={"/dashboard/user-home"}>User Home</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
        </li>
        <li>Payment History</li>
        <li>
          <NavLink to={"/dashboard/my-cart"}>My Cart</NavLink>
        </li>
        <li>Add Review</li>
        <li>My Booking</li>
      </ul>
      <ul className="dashboard-sidebar-footer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Menu</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
