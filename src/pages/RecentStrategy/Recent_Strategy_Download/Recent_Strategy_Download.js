import React,{useContext} from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import styles from './Recent_Strategy_Download.module.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { HiOutlineLogout } from "react-icons/hi";
const Recent_Strategy_Download = () => {
    let { username, marketSnapshotResearch, globalEmailID } =
      useContext(AuthContext);
  return (
    <div>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              <Link
                style={{ textDecoration: "none" }}
                to="/recent_strategy_index"
              >
                <span className={styles.back_btn}>
                  <i className="far fa-angle-left"></i>
                </span>
              </Link>
              &nbsp; &nbsp;
              <h3 style={{ marginBottom: "0" }}> Recent Strategy Analysis</h3>
            </div>
            <div className={styles.accounts}>
              <a href="http://" className={styles.account_btn}>
                {username}
              </a>
              &nbsp; &nbsp;
              <button
                className={styles.account_btn}
                style={{ fontSize: "25px" }}
                // onClick={logoutUser}
              >
                {" "}
                <HiOutlineLogout />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right_content_area}>
          <div className="heading text-center pt-2 pb-0">
            <h1>Your draft report is being processed..</h1>
          </div>
          <h3 className="mb-4">Recent Strategy - {} </h3>
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
              <img
                src="https://wokelo.ai/statichtml/images/icons/press.svg"
                alt="..."
                className="img-fluid d-block ms-lg-auto mx-auto"
              />
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="py-md-5 pt-4 text-center text-md-start">
                <h4 className="pb-3 pb-xl-5">
                  <strong>
                    Dear {username}, The report will be e-mailed to you at{" "}
                    {globalEmailID}
                    <span className="txt_primary"></span>
                  </strong>
                </h4>
                <h4>
                  <em>Estimated time: 15 min</em>
                </h4>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        </div>
        <div className="modal_bottom_text text-center">
          <p>
            ^Wokelo scans{" "}
            <strong style={{ color: "#583BE8" }}>50+ web pages</strong>, reads{" "}
            <strong style={{ color: "#583BE8" }}>500k words</strong>, co-authors{" "}
            <strong>draft reports</strong> with{" "}
            <strong style={{ color: "#583BE8" }}>10k+ words</strong>{" "}
          </p>
          <p className="system_font">
            <em>
              *Please check for email from <strong>no-reply@wokelo.ai</strong>;
              once ready you can also find it under <strong>Reports</strong> tab
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recent_Strategy_Download