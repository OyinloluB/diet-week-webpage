import React from "react";
import Hero from "../hero-flex/Hero";
import Image from "../image-flex/Image";
import Styles from "./container.module.css";

const Container = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.imageFlex}>
          <Image />
        </div>
        <div className={Styles.heroFlex}>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Container;
