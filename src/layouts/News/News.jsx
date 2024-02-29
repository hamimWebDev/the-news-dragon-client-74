import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import CardNews from "./CardNews/CardNews";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    category_id,
    rating,
    total_view,
    title,
    thumbnail_url,
    image_url,
    details,
    author,
  } = news;
  return (
    <div>
      <h1 className=" ml-28 mt-10 text-2xl font-bold text-black">Dragon News</h1>
      <div className=" mx-auto mt-2 w-[80%] rounded overflow-hidden shadow-lg p-8 border-2 border-gray-200">
        <img className="w-full" src={image_url} alt="Placeholder" />
        <div className="mt-5">
          <div className="font-bold text-xl mb-2 text-black">{title}</div>
          <p className="text-gray-700 text-base">{details}</p>
        </div>
        <div className="mt-5">
          <Link to={`/category/${category_id}`}>
            <button className="bg-pink-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <FaArrowLeft className="mr-3"></FaArrowLeft>
              All news in this category
            </button>
          </Link>
        </div>
      </div>
      <CardNews></CardNews>
    </div>
  );
};

export default News;
