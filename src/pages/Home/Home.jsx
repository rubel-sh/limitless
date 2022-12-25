import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import ExclusiveProducts from "./ExclusiveProducts/ExclusiveProducts";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <section className=" bg-[#39424B] py-10 text-slate-100 overflow-hidden">
        <Banner />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <ExclusiveProducts />
      </section>
    </div>
  );
};

export default Home;
