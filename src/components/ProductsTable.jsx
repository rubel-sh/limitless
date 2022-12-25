import React from "react";

const ProductsTable = ({
  isOpen,
  setIsOpen,
  productsArray,
  setSelectedModalItem,
}) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {productsArray.map((product, index) => {
            const {
              category,
              color,
              product_discount_price,
              product_image,
              product_price,
              product_title,
            } = product;
            return (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {product_title}
                </th>
                <td className="py-4 px-6">{color}</td>
                <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                  {category}
                </td>
                <td className="py-4 px-6">${product_discount_price}</td>
                <td className="py-4 px-6">
                  {/* <!-- Modal toggle --> */}
                  <button
                    className="block text-sky-700 hover:text-black "
                    type="button"
                    data-modal-toggle="productDetailsModal"
                    onClick={() => {
                      setIsOpen(!isOpen);
                      setSelectedModalItem(product);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsTable;
