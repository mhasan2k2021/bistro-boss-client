import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <div className="dashboard-dashboard">
      <h2 className="dashboard-welcome">Hi, Welcome Back!</h2>
      <div className="dashboard-card-container">
        <div className="dashboard-card dashboard-menu-card">
          <span>205 </span>
          Menu
        </div>
        <div className="dashboard-card dashboard-shop-card">
          <span>103</span> Shop
        </div>
        <div className="dashboard-card dashboard-contact-card">
          <span>03</span> Contact
        </div>
      </div>
      <div className="dashboard-profile-section">
        <div className="dashboard-profile-card">
          <div className="dashboard-profile-pic"></div>
          <h4>Awlad Hossain</h4>
        </div>
        <div className="dashboard-activity-card">
          <h4>Your Activities</h4>
          <p>Orders: 6</p>
          <p>Reviews: 2</p>
          <p>Bookings: 1</p>
          <p>Payment: 3</p>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
