import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";
import ScrollTop from "../../componets/ScrollTop/ScrollTop";

const Main = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
