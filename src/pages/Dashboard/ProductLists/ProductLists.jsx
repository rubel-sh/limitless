import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "../../../components/AddButton";
import AdminProductModal from "../../../components/AdminProductModal";
import Container from "../../../components/Container";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProductsTable from "../../../components/ProductsTable";
import useFetchData from "../../../hooks/useFetchData";

const ProductLists = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState({});
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
      <div className="">
        {/* Title */}
        <div className="flex justify-between">
          <h3 className="text-xl">Product Lists</h3>
          <Link to="/dashboard/add_product">
            <AddButton>Add Product</AddButton>
          </Link>
        </div>
        {/* Table goes here */}
        <ProductsTable
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productsArray={productsArray}
          setSelectedModalItem={setSelectedModalItem}
        />
      </div>
      {/* Show Modal */}
      <AdminProductModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedModalItem={selectedModalItem}
      />
    </Container>
  );
};

export default ProductLists;
