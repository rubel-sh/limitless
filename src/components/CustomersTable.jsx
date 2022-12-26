import React from "react";
import { PhotoView } from "react-photo-view";

const CustomersTable = ({ customersArray }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Customer Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email Address
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {customersArray.map((customer, index) => {
            const { email, phone, profileImage, name } = customer;
            return (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {name}
                </th>
                <td className="py-4 px-6">{email}</td>
                <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                  {phone}
                </td>
                <td className="py-4 px-6">
                  <PhotoView src={profileImage}>
                    <img
                      src={profileImage}
                      alt=""
                      className="w-[40px] cursor-pointer rounded-md"
                    />
                  </PhotoView>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CustomersTable;
