import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProductCard = ({ productDetails }) => {
  const {
    product_image,
    product_title,
    product_price,
    product_discount_price,
  } = productDetails;
  return (
    <div className="p-4 ">
      <img
        src={product_image}
        alt={product_title}
        className=" hover:scale-105 transition-all mb-5 mx-auto"
      />
      {/* product title, price, ratings .. */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-medium">{product_title}</h3>
        <div className="flex items-center  text-xl md:text-2xl text-orange-800 my-4">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <div className="flex mb-4">
          <del className="font-bold text-slate-400 mr-5">
            Tk {product_price}
          </del>
          <p className="font-bold text-orange-500">
            Tk {product_discount_price}
          </p>
        </div>
        <button className="border w-full py-2  font-medium hover:bg-slate-400 hover:text-white transition-all active:ring-slate-500 active:ring">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProductCard;
