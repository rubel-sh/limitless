import React from "react";
import Container from "../../../components/Container";
import category1 from "../../../assets/logo/mens_collection.png";
import category2 from "../../../assets/logo/womans_collection.png";
import category3 from "../../../assets/logo/kids_collection.png";

const Categories = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-5">
        <div className="overflow-hidden">
          <img
            src={category1}
            alt=""
            className="cursor-pointer hover:scale-105 transition-all duration-300 hover:grayscale"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={category2}
            alt=""
            className="cursor-pointer hover:scale-105 transition-all duration-300 hover:grayscale"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={category3}
            alt=""
            className="cursor-pointer hover:scale-105 transition-all duration-300 hover:grayscale"
          />
        </div>
      </div>
    </Container>
  );
};

export default Categories;
