import React from "react";
import Container from "../../../components/Container";
import useGetProducts from "../../../hooks/useGetProduct";
import SingleProductCard from "./SingleProductCard/SingleProductCard";

const ExclusiveProducts = () => {
  const productsArray = useGetProducts();
  return (
    <Container>
      <h2 className="md:text-2xl font-medium" id="collections">
        Exclusive Collections
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {/* Shows lists of products from api call */}
        {productsArray.map((productDetails, index) => (
          <SingleProductCard key={index} productDetails={productDetails} />
        ))}
      </div>
    </Container>
  );
};

export default ExclusiveProducts;
