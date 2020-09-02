import React from "react";
import TopNav from "../layout/TopNav";
import Styles from "./hero.module.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Hero = () => {
  return (
    <div>
      <TopNav />
      <div className={Styles.container}>
        <h1 className={Styles.hero}>Diet Week</h1>
        <p className={Styles.subtext}>
          With 10 different meal plan options, including gluten-free, vegan, and
          Mediterranean kits, there's something for everyone with Sun Basket
        </p>
        <button className={Styles.button}>See more</button>
      </div>
      <div className={Styles.control}>
        <div>
          <ArrowDownwardIcon style={{ color: 'white' }}  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
