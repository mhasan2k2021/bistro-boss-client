import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const { userSignOut, user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("User Sign Out");
      })
      .catch((error) => console.error(error));
  };
  const navMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/contact-us"}
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/dashboard"}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/our-menu"}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/our-shop"}
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );

  const handleMenuOpen = () => {
    if (!isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <nav>
      <div className="nav_container">
        <img
          className="logo"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715608913/bistro-boss/Add_a_heading_oyx6wy.png"
          alt=""
        />
        <div className="menu-list">
          <ul>{navMenu}</ul>
          <div className="btn_container">
            <div className="add_cart">
              <img
                src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715257568/bistro-boss/shopping_e3y15o.png"
                alt=""
              />
              <span>10</span>
            </div>
            <>
              {!user ? (
                <>
                  <button>
                    <Link to={"/sign-in"}>Sign In</Link>
                  </button>
                  <button>
                    <Link to={"/sign-up"}>Sign Up</Link>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleSignOut}>
                    <Link>Sign Out</Link>
                  </button>
                  <div className="user_img">
                    {user?.photoURL ? (
                      <>
                        <img src={user?.photoURL} alt="" />
                      </>
                    ) : (
                      <>
                        <FaUser />
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      </div>

      {/* this is responsive section. here we add responsive list */}
      <div className={`res_nav_container ${isOpen ? "fixed" : ""}`}>
        <img
          className="logo"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715608913/bistro-boss/Add_a_heading_oyx6wy.png"
          alt=""
        />
        <div onClick={handleMenuOpen} className="open_close">
          {!isOpen ? <FaBars /> : <FaX />}
        </div>
        <ul className={`res_nav_list_container ${isOpen ? "open" : ""}`}>
          {navMenu}
          <div className="responsive_sign">
            {!user ? (
              <>
                <button>
                  <Link to={"/sign-in"}>Sign In</Link>
                </button>
                <button>
                  <Link to={"/sign-up"}>Sign Up</Link>
                </button>
              </>
            ) : (
              <>
                <button onClick={handleSignOut}>
                  <Link>Sign Out</Link>
                </button>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
