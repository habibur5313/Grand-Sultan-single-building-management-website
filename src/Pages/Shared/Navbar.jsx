import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useRole from "../../Hooks/useRole";
import { FaCircleArrowUp } from "react-icons/fa6";

const Navbar = ({ toggleDarkMode }) => {
  const { user, handleSignOut } = useContext(AuthContext);
  const { role } = useRole();
  const styles = { fixedIcon: { position: 'fixed', bottom: '20px', right: '20px', width: '50px', height: '50px', cursor: 'pointer' }}

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' });}
  return (
    <div className=" navbar  px-2 md:px-6 xl:px-10  flex items-center border fixed container mx-auto text-white bg-black bg-opacity-20 z-50 rounded-xl  ">
      <div className="navbar-start mb-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100  rounded-box z-50 mt-3 w-52 p-2 shadow text-black"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/apartment"}>Apartment</NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-xl"
            src="https://i.ibb.co.com/ZBCgXsd/One-Build-Care-logo.jpg"
            alt=""
          />
          <h1 className="text-2xl font-medium sm:text-3xl md:text-4xl sm:font-semibold text-purple-500">
            Grand<span className="ml-1">Sultan</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex -mt-6">
        <ul className="menu menu-horizontal flex items-center px-1 gap-2 xl:gap-4 text-xl font-medium ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/apartment"}>Apartment</NavLink>
        </ul>
      </div>
      <div className="navbar-end sm:hidden">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" m-1">
            {user && (
              <img
                className="w-10 rounded-full my-anchor-element cursor-pointer"
                src={user?.photoURL}
                alt="userImg"
              />
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black rounded-box z-20 -ml-24 lg:w-60 p-2 shadow"
          >
            <li>
              <p className="text-white text-xl font-medium">
                {user?.displayName}
              </p>
            </li>
            <li>
              <NavLink to={`/dashboard/${role ? role : "user"}Profile`}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                className="btn bg-purple-700 text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
        {user ? '' : (
          <Link className="btn mr-5 bg-purple-700 text-white" to={"/login"}>
            Sign In
          </Link>
        )}
      </div>
      <div className=" navbar-end hidden sm:block -mt-5">
        <div className="flex items-center ml-10 md:ml-20 xl:ml-52 -mt-2 justify-end">
          <button
            onClick={toggleDarkMode}
            className="p-2 lg:m-4 border rounded"
          >
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          </button>
          {user ? (
            <div className="flex items-center gap-4 relative">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-10 rounded-full my-anchor-element cursor-pointer"
                    src={user?.photoURL}
                    alt="userImg"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-black rounded-box z-20 -ml-24 lg:w-60 p-2 shadow"
                >
                  <li>
                    <p className="text-white text-xl font-medium">
                      {user?.displayName}
                    </p>
                  </li>
                  <li className="text-xl font-medium">
                    <NavLink to={`/dashboard/${role ? role : "user"}Profile`}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="btn bg-purple-700 text-white"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : 
            <Link
              className="btn mr-5 bg-purple-700 text-white"
              to={"/login"}
            >
              Sign In
            </Link>
          }
        </div>
        <div style={styles.fixedIcon} onClick={scrollToTop}> <FaCircleArrowUp className="text-4xl font-semibold text-purple-600" /></div>
      </div>
    </div>
  );
};

export default Navbar;
