import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

const LeftSNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div>
          <h4 className="text-2xl text-gray-700 font-semibold">All Category</h4>
          <div className=" ps-5 mt-5 text-gray-500 text-2xl">
            {categories.map((category) => (
              <div key={category.id}>
                <div className="mt-8 pt-5 font-semibold">
                  <Link
                    to={`/category/${category.id}`}
                    className="p-4 hover:bg-slate-200 rounded-lg hover:text-black"
                  >
                    {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card></Card>
    </div>
  );
};

export default LeftSNav;
