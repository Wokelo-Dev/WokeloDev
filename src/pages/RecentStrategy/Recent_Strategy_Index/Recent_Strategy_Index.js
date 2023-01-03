import React, { useContext, useState, useEffect, useRef } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { HiOutlineLogout } from "react-icons/hi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import styles from "./Recent_Strategy_Index.module.css";
import { FiFilePlus } from "react-icons/fi";
const Recent_Strategy_Index = () => {

    const strategic_moves = ["Acquisitions","Investments",];
    const other_news = [
      "Hiring Strategy",
      "Others- ESG, DEI, etc.",
      "Call Transcripts",
    ];

    const disabled_tags = ["Partnerships","Product Launches","Leadership Changes"];

  let { username } = useContext(AuthContext);
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
          <div className={styles.form_progress_heading}>
            <h2>Company & areas for analysis</h2>
          </div>
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
        </div>
        <div className={styles.landr}>
          <div className={styles.left_container}>
            <div className={styles.ca_input}>
              <p className={styles.input_header}>
                <span className={styles.fact}>
                  <FiFilePlus />
                </span>
                &nbsp; Add company
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className={styles.search_inp}
                  type="text"
                  placeholder="Type your company"
                />
              </form>
            </div>

            <div className={styles.ca_input3}>
              <div className={styles.company_box}>
                <div className={styles.company_logo}>
                  <div className={styles.logo_container}>
                    <img src="https://" alt="Logo Not Found" />
                  </div>
                </div>
                <div className={styles.company_details}>
                  <span>
                    {" "}
                    <strong> Name:</strong> <span></span>{" "}
                  </span>
                  <span style={{ wordWrap: "break-word" }}>
                    {" "}
                    <strong>Website:</strong> &nbsp;
                    <a
                      style={{ textDecoration: "underline" }}
                      href="https://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span></span>{" "}
                    </a>
                  </span>
                  <span>
                    {" "}
                    <strong>Founded:</strong>&nbsp;&nbsp; <span></span>
                  </span>
                  <span>
                    {" "}
                    <strong>HQ:</strong> <span></span>{" "}
                  </span>
                  <span>
                    {" "}
                    <strong>Ownership:</strong>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            <div className={styles.ca_input2}>
              <p className={styles.input_header}>
                <span className={styles.fact}>
                  <FiFilePlus />
                </span>{" "}
                &nbsp; Choose areas for analysis
              </p>
              <div className={styles.table_wrapper}>
                <div className={styles.left_table}>
                  <p className={styles.table_header}>Strategic Moves</p>

                {/* {strategic_moves.map(str, i) => (

                )} */}
                  <div
                    style={{
                      background: "#EEEEEE",
                      color: "#888",
                      pointerEvents: "none",
                      cursor: "default",
                    }}
                    className={styles.table_items}
                  ></div>

                  <div
                    style={{ background: "#EEEEEE", color: "#888" }}
                    className={styles.table_items}
                  >
                    Product Launches
                  </div>
                  <div
                    style={{ background: "#EEEEEE", color: "#888" }}
                    className={styles.table_items}
                  >
                    Leadership Changes
                  </div>
                </div>
                <div className={styles.right_table}>
                  <p className={styles.table_header}>Other News & Signals</p>
                  <div
                    style={{ background: "#EEEEEE", color: "#888" }}
                    className={styles.table_items}
                  >
                    Hiring Strategy
                  </div>
                  <div
                    style={{ background: "#EEEEEE", color: "#888" }}
                    className={styles.table_items}
                  >
                    Others- ESG, DEI, etc.
                  </div>
                  <div
                    style={{ background: "#EEEEEE", color: "#888" }}
                    className={styles.table_items}
                  >
                    Call Transcripts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent_Strategy_Index;
