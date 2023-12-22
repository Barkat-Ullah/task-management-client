import { FaAd, FaHome, FaPodcast } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="flex max-w-6xl mx-auto my-1">
        <div className="w-64 min-h-screen  bg-gradient-to-r from-teal-200 via-teal-300 to-teal-500 rounded">
          <ul className="menu p-8 text-gray-800 font-normal">
            <li>
              <NavLink to="/dashboard/post">
                <FaPodcast></FaPodcast>
                My Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addPost">
                <FaAd></FaAd>
                Add a post
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 my-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
