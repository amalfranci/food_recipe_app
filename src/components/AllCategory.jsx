import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productlice.jsx";
import Loader from "./Loader.jsx";
import { useNavigate } from "react-router-dom";

function AllCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const { data, isLoading, error } = useSelector((state) => state.product);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading categories</div>;

  return (
    <section>
      <div className="container px-5 py-24 mx-auto shadow-md">
        <h2 className="text-center text-3xl mb-5  ">All Category</h2>
        <div className="flex flex-wrap -m-4">
          {data?.categories?.map((category) => {
            return (
              <div
                className="p-4 lg:w-1/4 md:w-1/2 w-full  cursor-pointer card-hover"
                key={category?.idCategory}
                onClick={() => navigate(`/categories/${category?.strCategory}`)}
              >
                <div className="h-full flex flex-col items-center text-center shadow-md p-2 rounded-md">
                  <img
                    alt={category?.strCategory}
                    className="flex-shrink-0 items rounded-lg w-full h-56 object-contain object-center mb-2"
                    src={category?.strCategoryThumb}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {category?.strCategory}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllCategory;
