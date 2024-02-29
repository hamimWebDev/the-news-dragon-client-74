import React from "react";
import { MdDateRange } from "react-icons/md";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const CardNews = () => {
  return (
    <div className="grid grid-cols-3 gap-3 w-[80%] mx-auto">
      <div className="flex justify-center mt-5">
        <div className="w-[100%] rounded shadow-lg mb-5 ">
          <img className="w-full" src={first} alt="Card" />
          <div className="text-black">
            <div className="font-bold text-xl mb-2 p-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </div>
          </div>
          <div>
            <div className="bg-gray-200 px-4 py-2 flex justify-between items-center">
              <p className="text-gray-700 text-base">Sports</p>
              <div className="flex items-center">
                <MdDateRange className="text-2xl mr-2" />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-[100%] rounded shadow-lg mb-5">
          <img className="w-full" src={second} alt="Card" />
          <div className="text-black">
            <div className="font-bold text-xl mb-2 p-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </div>
          </div>
          <div>
            <div className="bg-gray-200 px-4 py-2 flex justify-between items-center">
              <p className="text-gray-700 text-base">Sports</p>
              <div className="flex items-center">
                <MdDateRange className="text-2xl mr-2" />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-[100%] rounded shadow-lg mb-5">
          <img className="w-full" src={third} alt="Card" />
          <div className="text-black">
            <div className="font-bold text-xl mb-2 p-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </div>
          </div>
          <div>
            <div className="bg-gray-200 px-4 py-2 flex justify-between items-center">
              <p className="text-gray-700 text-base">Sports</p>
              <div className="flex items-center">
                <MdDateRange className="text-2xl mr-2" />
                <p>Jan 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
