import React from "react";
import Container from "../../../components/Container";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFetchData from "../../../hooks/useFetchData";
import SingleProductCard from "./SingleProductCard/SingleProductCard";

const ExclusiveProducts = () => {
  const [productsArray, isFetching] = useFetchData("products");

  // Show Loader while fetching data
  if (isFetching) {
    return (
      <div className="mx-auto my-5 ">
        <LoadingSpinner className="border-2 mx-auto" />
      </div>
    );
  }
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
