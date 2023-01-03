import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className={styles.wrapper}>
      <p className={styles.name_head}>
        Wokelo <span style={{ color: "#583BE8" }}>.ai</span>{" "}
      </p>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.form_container}>
            <div className={styles.form_wrapper}>
              <span className={styles.hello}>Hello,</span>
              <br />
              <span className={styles.welcome}>Welcome</span>
              <p className={styles.p_login}>Login to get started </p>
              <img
                className={styles.under_img}
                src="https://i.ibb.co/8M9wYy2/under-img.png"
                alt=""
              />
              <form onSubmit={loginUser} >
                <p className={styles.username}>Username</p>
                <input
                  className={styles.inp_1}
                  style={{ padding: "5px" }}
                  type="text"
                  id="user_name"
                  name="username"
                  placeholder="Enter Username"
                />
                <p className={styles.password}>Password</p>
                <input
                  className={styles.inp_2}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
                {/* <font color='red'>{{error_message}}</font> */}
                <br />
                <div className={styles.inp_p}>
                  <input
                    style={{ cursor: "pointer" }}
                    className={styles.submit}
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <div
                className={styles.form_footer}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ width: "90%" }}>
                  Don't have credentials? <br />{" "}
                  <a
                    href="http://forms.gle/bRaidaCh3NEo2Zx3A/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Access
                  </a>
                </p>
                <p style={{ marginLeft: "5px" }}>
                  Having Trouble? Contact us at{" "}
                  <a href="mailto:support@wokelo.ai">support@wokelo.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="https://i.ibb.co/WnL7gry/login.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
