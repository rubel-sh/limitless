import React, { useState } from "react";
import AddButton from "../../../components/AddButton";
import AdminProductModal from "../../../components/AdminProductModal";
import Container from "../../../components/Container";
import ProductsTable from "../../../components/ProductsTable";
import useFetchData from "../../../hooks/useFetchData";

const ProductLists = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState({});
  const productsArray = useFetchData("products");

  return (
    <Container>
      <div className="">
        {/* Title */}
        <div className="flex justify-between">
          <h3 className="text-xl">Product Lists</h3>
          <AddButton>Add Product</AddButton>
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
