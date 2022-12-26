import React from "react";
import { Link } from "react-router-dom";
import AddButton from "../../../components/AddButton";
import Container from "../../../components/Container";
import CustomersTable from "../../../components/CustomersTable";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useFetchData from "../../../hooks/useFetchData";

const CustomerLists = () => {
  // States
  const [customersArray, isFetching] = useFetchData("customers");

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
      <div className="flex justify-between">
        <h3 className="text-xl">Customer Lists</h3>
        <Link to="/dashboard/add_customer">
          <AddButton>Add Customer</AddButton>
        </Link>
      </div>
      {/* Table goes here */}
      <CustomersTable customersArray={customersArray} />
    </Container>
  );
};

export default CustomerLists;
