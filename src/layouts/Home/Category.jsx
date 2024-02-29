import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../News/NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold text-black ml-2 mb-2 mt-10">Dragon News Home</h1>
      <div>
        {categoryNews.map((news) => (
          <div>
            <NewsCard
             key={news._id} 
             news={news}>
            </NewsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
