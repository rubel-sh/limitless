import React from "react";
import Container from "../../../components/Container";
import SingleProductCard from "./SingleProductCard/SingleProductCard";

const ExclusiveProducts = () => {
  /***
    https://i.ibb.co/fdQ3sRX/shoe1.png
    https://i.ibb.co/6RCNKHh/shoe2.png
    https://i.ibb.co/7KnvWqR/shoe3.png
    https://i.ibb.co/gmchMNL/shoe4.png
    https://i.ibb.co/0Drxd90/shoe5.png
    https://i.ibb.co/5TbQ1hD/shoe6.png
    https://i.ibb.co/zfNsy25/shoe7.png
    https://i.ibb.co/19d6cMD/shoe8.png
   *  */
  const productsArray = [
    {
      product_image: "https://i.ibb.co/fdQ3sRX/shoe1.png",
      product_title: `NORTH STAR
        North Star FLORA Pink Sneaker For Women`,
      product_price: 2512,
      product_discount_price: 1560,
    },
    {
      product_image: "https://i.ibb.co/6RCNKHh/shoe2.png",
      product_title: `ADIDAS
      Adidas RUNFALCON 2.0 TR Sneaker`,
      product_price: 3500,
      product_discount_price: 2150,
    },
    {
      product_image: "https://i.ibb.co/7KnvWqR/shoe3.png",
      product_title: `Toe-Post Noel Sandal For Women`,
      product_price: 4000,
      product_discount_price: 3000,
    },
    {
      product_image: "https://i.ibb.co/gmchMNL/shoe4.png",
      product_title: `Adidas COURT TEAM BOUNCE Sneaker`,
      product_price: 1800,
      product_discount_price: 1500,
    },
    {
      product_image: "https://i.ibb.co/0Drxd90/shoe5.png",
      product_title: `Beehive Casual Shoe For Men`,
      product_price: 6000,
      product_discount_price: 5600,
    },
    {
      product_image: "https://i.ibb.co/5TbQ1hD/shoe6.png",
      product_title: `RUN FALCON 2.0 TR SHOES`,
      product_price: 4600,
      product_discount_price: 3800,
    },
    {
      product_image: "https://i.ibb.co/fdQ3sRX/shoe1.png",
      product_title: `NORTH STAR
        North Star FLORA Pink Sneaker For Women`,
      product_price: 3600,
      product_discount_price: 2800,
    },
    {
      product_image: "https://i.ibb.co/19d6cMD/shoe8.png",
      product_title: `HOOPS 3.0 MID CLASSIC VINTAGE SHOES`,
      product_price: 7500,
      product_discount_price: 7000,
    },
  ];
  return (
    <Container>
      <h2 className="md:text-2xl font-medium" id="collections">
        Exclusive Collections
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {/* Shows lists of products from api call */}
        {productsArray.map((productDetails) => (
          <SingleProductCard productDetails={productDetails} />
        ))}
      </div>
    </Container>
  );
};

export default ExclusiveProducts;
