import { NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (user) {
      setLoggedIn(user);
    } else {
      setLoggedIn(null);
    }
  }, [user]);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  console.log(handleSignOut);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#061e22]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/post"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#061e22]" : ""
          }
        >
          Task Post
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#061e22]" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-300">
        <div className="navbar-start">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-400  w-52"
            >
              {links}
            </ul>
          </div>
          <img
            src="https://micronet.work/demo/wp-content/uploads/2023/04/demo_logo.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className=" dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {loggedIn ? (
                <div className="">
                  <img
                    className="w-10 rounded-full"
                    referrerPolicy="no-referrer"
                    src={loggedIn?.photoURL}
                    alt="User"
                  />
                  {/*  */}
                </div>
              ) : (
                <div className="">
                  <img
                    className="w-10 rounded-full"
                    referrerPolicy="no-referrer"
                    src="https://i.ibb.co/N30gbs2/placeholder.jpg"
                    alt="profile"
                  />
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <>
                  <li>
                    <NavLink className="justify-between">
                      DashBoard
                      <span className="badge">New</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink onClick={handleSignOut}>Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
