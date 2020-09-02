import React from "react";
import Background from "../../assets/image-one.jpg";
import Styles from "./image.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Image = () => {
  return (
    <div>
      <div>
        <div className={Styles.nav}>
          <h1>me.</h1>
          <p className={Styles.sub}>Diet box with 10 different meal</p>
        </div>
      </div>
      <img src={Background} alt="/" className={Styles.image} />
      <div className={Styles.control}>
        <div>
          <ArrowUpwardIcon style={{ color: "white" }} />
        </div>
      </div>
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
          <ArrowDownwardIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Image;
