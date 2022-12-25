import React, { useState } from "react";
import AddButton from "../../../components/AddButton";
import AdminProductModal from "../../../components/AdminProductModal";
import Container from "../../../components/Container";
import ProductsTable from "../../../components/ProductsTable";

const ProductLists = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          // products={products}
        />
      </div>
      {/* Show Modal */}
      <AdminProductModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // contents={contents}
      />
    </Container>
  );
};

export default ProductLists;
