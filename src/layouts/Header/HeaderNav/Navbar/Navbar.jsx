import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut(() => {}).catch((error) => {
      console.error(error);
    });
  };
  return (
    <div className=" bg-slate-200 rounded-lg navbar grid grid-cols-4 place-items-center  w-[80%] mx-auto mt-5 mb-10">
      <div className="col-span-1">
        <Link
          to="/category/0"
          className="btn btn-ghost text-xl text-gray-500 font-medium"
        >
          The Dragon News
        </Link>
      </div>

      <div className="col-span-2 text-gray-500 font-medium">
        <Link to="about" className="mr-5 text-xl">
          About
        </Link>
        <Link to="career" className="mr-5 text-xl">
          Career
        </Link>
      </div>
      <div className="flex-none gap-2 col-span-1">
        <div>
          {user && (
            <img
              className="w-10 rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          )}
        </div>
        {user ? (
          <Link>
            <button
              onClick={handleLogout}
              className=" bg-slate-700 font-semibold text-xl text-white p-2 w-28 ml-2"
            >
              Logout
            </button>
          </Link>
        ) : (
          <div>
            <Link to="/login">
              <button className=" bg-slate-700 font-semibold text-xl text-white p-2 w-28 ml-2">
                Login
              </button>
            </Link>
            <Link to="/signUp">
              <button className=" bg-blue-700 font-semibold text-xl text-white p-2 w-28 ml-2">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
