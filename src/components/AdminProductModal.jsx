import React from "react";

const AdminProductModal = ({ isOpen, setIsOpen, selectedModalItem }) => {
  const {
    category,
    color,
    product_discount_price,
    product_image,
    product_price,
    product_title,
  } = selectedModalItem;
  return (
    // <!-- Main modal -->
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        isOpen ? "" : "hidden"
      } fixed  left-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal  md:h-full`}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white  rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Product Details
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-3">
              {/* Image */}
              <div className="">
                <img src={product_image} alt={product_title} className="" />
              </div>
              {/* Descriptions */}
              <div className="col-span-2 flex flex-col justify-around ml-5">
                <h3 className="text-2xl">{product_title}</h3>
                <p>Category: {category}</p>
                <p>Variant: {color}</p>
                <p>Product Price: ${product_price}</p>
                <p>Discounted Price: ${product_discount_price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductModal;
