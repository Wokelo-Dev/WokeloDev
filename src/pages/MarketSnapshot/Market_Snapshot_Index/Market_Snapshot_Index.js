import React, { useContext} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./Market_Snapshot_Index.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import {BiLineChart } from "react-icons/bi"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
const Market_Snapshot_Index = () => {

  const { marketSnapshotResearch, handleMSResearch, ClassifyQuery, username } =
    useContext(AuthContext);

  return (
    <div>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              <Link style={{ textDecoration: "none" }} to="/dashboard">
                <span className={styles.back_btn}>
                  <i className="far fa-angle-left"></i>
                </span>
              </Link>
              &nbsp; &nbsp;
              <h3 style={{ marginBottom: "0" }}> Market Snapshot</h3>
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
          <div className={styles.form_progress_heading}>
            <h1>Add sector & companies</h1>
          </div>
          {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
          <ProgressBar
            className={styles.progress}
            style={{
              background: "#494949",
              height: "1.3vh",
              width: "50%",
              textAlign: "center",
            }}
            now={10}
          />
          {/* </div> */}
          <div className={styles.ca_input}>
            <p className={styles.input_header}>
              <span className={styles.fact}>
                {" "}
                <BiLineChart />
              </span>
              &nbsp; &nbsp; &nbsp;
              <span>Type your research topic</span>
            </p>
            <form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3vh",
                paddingBottom: "2vh",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.search_inp}
                type="text"
                name="sector_name"
                id="sector_name"
                value={marketSnapshotResearch}
                onChange={handleMSResearch}
                placeholder="Type your research topic"
              />
              {/* <div style="height:2vh; display: flex; " class="error_msg"></div> */}
              {/* <font color=red size=3vw>{{error_message}}</font> */}
            </form>
          </div>
          <div className={styles.ca_input}>
            <p className={styles.input_header}>
              <span className={styles.fact}>
                {" "}
                <BiLineChart />
              </span>
              &nbsp; &nbsp; &nbsp;
              <span>
                Please describe your research needs in 2-3 sentences (optional)
              </span>
            </p>
            <form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3vh",
                paddingBottom: "2vh",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.search_inp}
                type="text"
                name="sector_name"
                id="sector_name"
                placeholder="Type and press next"
              />
              {/* <div style="height:2vh; display: flex; " class="error_msg"></div> */}
              {/* <font color=red size=3vw>{{error_message}}</font> */}
            </form>
          </div>

          <div className={styles.btn_primary_gradient} onClick={ClassifyQuery}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/market_snapshot_attributes"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market_Snapshot_Index;
