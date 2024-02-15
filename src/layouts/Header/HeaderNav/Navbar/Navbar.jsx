import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar grid grid-cols-4 place-items-center bg-white w-[80%] mx-auto mt-8 mb-10">
      <div className="col-span-1">
        <Link to="/" className="btn btn-ghost text-xl text-gray-500 font-medium">The Dragon News</Link>
      </div>

      <div className="col-span-2 text-gray-500 font-medium">
        
        <Link className="mr-5 text-xl">About</Link>
        <Link className="mr-5 text-xl">Career</Link>
      </div>
      <div className="flex-none gap-2 col-span-1">
        <div >
          <img className="w-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        <Link to="/login"><button className=" bg-slate-700 font-semibold text-xl text-white p-2 w-28 ml-2">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
