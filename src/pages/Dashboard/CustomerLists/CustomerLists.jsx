import React, { useState } from "react";
import AddButton from "../../../components/AddButton";
import AdminProductModal from "../../../components/AdminProductModal";
import Container from "../../../components/Container";
import CustomersTable from "../../../components/CustomersTable";
import useFetchData from "../../../hooks/useFetchData";

const CustomerLists = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState({});
  const customersArray = useFetchData("customers");
  return (
    <Container>
      <div className="flex justify-between">
        <h3 className="text-xl">Customer Lists</h3>
        <AddButton>Add Customer</AddButton>
      </div>
      {/* Table goes here */}
      <CustomersTable customersArray={customersArray} />
    </Container>
  );
};

export default CustomerLists;
