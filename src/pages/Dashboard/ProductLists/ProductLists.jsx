import React from "react";
import AddButton from "../../../components/AddButton";
import Container from "../../../components/Container";

const ProductLists = () => {
  return (
    <Container>
      <div className="">
        {/* Title */}
        <div className="flex justify-between">
          <h3 className="text-xl">Product Lists</h3>
          <AddButton>Add Product</AddButton>
        </div>
        {/* Lists goes here */}
        <div></div>
      </div>
    </Container>
  );
};

export default ProductLists;
