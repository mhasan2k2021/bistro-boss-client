import "./dashboardLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard_layout">
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
