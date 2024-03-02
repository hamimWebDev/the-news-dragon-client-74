import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import moment from "moment";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const NewsCard = ({ news }) => {
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
      <div className="overflow-hidden shadow-lg mb-5 w-[90%] text-black rounded-xl">
        <div className="bg-gray-200 px-6 py-4 flex  justify-between items-center">
          <div>
            <div className="flex items-center">
              <img className="w-12 rounded-full mr-3" src={author.img} alt="" />
              <div>
                <h1 className="text-lg font-semibold">{author.name}</h1>
                <h4 className="text-sm">
                  {moment(author?.published_date).format("yyyy-MM-D")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex text-2xl text-gray-500">
            <FaRegBookmark className="mr-5" />
            <GrShareOption />
          </div>
        </div>
        <div className="border-2 border-gray-200">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-5 ">{title}</div>
            <img className="w-[100%]" src={image_url} alt="" />
            <p className="text-base mt-5">
              {details.length < 250 ? (
                <>{details}</>
              ) : (
                <>
                  {details.slice(0, 250)}...
                  <br />{" "}
                  <Link
                    className="text-orange-400 text-lg font-medium"
                    to={`/news/${_id}`}
                  >
                    Read More
                  </Link>
                </>
              )}
            </p>
          </div>
          <div className="px-6 py-4 border-gray-300 border-t-2 flex justify-between items-center">
            <div className="flex items-center">
            <Rating className="mr-2" style={{ maxWidth: 130 }} value={rating?.number} readOnly/>
              <h1 className="text-gray-500">{rating?.number}</h1>
            </div>
            <div className="flex items-center text-gray-500 text-xl">
              <FaEye className="mr-2"></FaEye>
              {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
