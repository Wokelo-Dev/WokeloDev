import React, { useContext } from "react";
import styles from './LandingPage.module.css'
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
const LandingPage = () => {
  // let {user} = useContext(AuthContext)

  return (
    <div>
      <div className={styles.b1_wrapper}>
        <span className={styles.banner_1}>Welcome to </span>
        <span className={styles.banner_2}>Wokelo</span>
      </div>
      <div className={styles.intro_wrapper}>
        <p className={styles.intro_text}>
          Wokelo is your personal AI research assistant. It can scan several
          documents <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          and extract relevant insights in a matter of minutes.
        </p>
      </div>
      <div className={styles.img_wrapper}>
        <button className={styles.land_btn}>
          <Link style={{ textDecoration:"none" }} className={styles.land_btn_a} to="/login">Get started</Link>
        </button>

        <img
          className={styles.land_img1}
          src="https://i.ibb.co/RzZZ234/land-img1.png"
          alt="Black_bg"
        />
      </div>
    </div>
  );
};

export default LandingPage;
