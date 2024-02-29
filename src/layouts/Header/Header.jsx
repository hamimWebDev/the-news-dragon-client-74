import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="mb-8">
      <div className="text-center ">
        <p className="flex justify-center pt-5">
          <img src={logo} alt="" />
        </p>
        <p className="text-xl pt-3">Journalism Without Fear or Favour</p>
        <p className="text-xl pt-2 font-semibold text-black">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>

      <div className=" flex items-center w-[80%] mx-auto bg-slate-200 p-3 mt-10">
        <button className="btn btn-error text-white text-lg">Latest</button>
        <Marquee className="text-2xl text-gray-800 font-semibold" speed={100}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
