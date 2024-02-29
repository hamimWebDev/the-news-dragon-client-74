import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../News/NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <div>
      <h1 className="text-2xl font-bold text-black ml-2 mb-2 mt-10">Dragon News</h1>
        {categoryNews.map((news) => (
          <div key={news._id}>
            <NewsCard 
             news={news}>
            </NewsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
