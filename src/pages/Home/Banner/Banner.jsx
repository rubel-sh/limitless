import React from "react";
import Container from "../../../components/Container";
import bannerShoeImage from "../../../assets/shoes_shadow.png";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 ">
        <div className="self-center">
          <h2 className="text-4xl font-bold">Exclusive Collection</h2>
          <h1 className="text-7xl font-bold my-10">HIKING SHOES</h1>
          <button className="border-4 border-slate-500 px-4 py-x -skew-x-6 text-2xl font-medium hover:bg-white hover:text-slate-800 hover:border-white transition-all">
            Show Now
          </button>
        </div>

        <img
          src={bannerShoeImage}
          alt="shoes"
          className={styles.animate_banner}
        />
      </div>
    </Container>
  );
};

export default Banner;
