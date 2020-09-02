import React from "react";
import Background from "../../assets/image-one.jpg";
import Styles from "./image.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

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
    </div>
  );
};

export default Image;
