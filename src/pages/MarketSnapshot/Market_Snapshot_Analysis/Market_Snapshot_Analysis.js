import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./Market_Snapshot_Analysis.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { BiLineChart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { AuthContext } from "../../../context/AuthContext";
import Modal from "react-bootstrap/Modal";
const Market_Snapshot_Analysis = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let {
    ProcessMarketSnapshot,
    username,
    reportID,
    checkStatus,
    statusMessage,
    setStatusMessage
  } = useContext(AuthContext);
  const [intervalID, setIntervalID] = useState(null)
  useEffect(() => {
    console.log(reportID)
    const interval = setInterval(() => {
        checkStatus();
      }, 10000);
      setIntervalID(interval)
        return () => {
          clearInterval(interval);
        };
      },[reportID]);
      
     
   useEffect(() => {
    setStatusMessage('')
    if (statusMessage === "processingCompletedInt"){
      clearInterval(intervalID);
      setLoading(false);
      navigate("/market_snapshot_final");
    }
   },[statusMessage, intervalID])


  return (
    <div>
      <Modal
        backdrop="static"
        keyboard={false}
        show={loading}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="justify-content-center">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="text-center">
                <div className="heading text-center pt-4 pb-0">
                  <h2>
                    Please wait while relevant topics are being listed..
                  </h2>
                </div>
                <h5 className="mb-4">Estimated Time: 1-2 mins ... </h5>
              </div>

              <div className={styles.gifs}>
                <div className={styles.gif1}>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <span
                      style={{
                        display: "inline-block",
                        background: "#583BE8",
                        borderRadius: "60px",
                        color: "white",
                        boxShadow: "0 0 2px #888",
                        padding: "0.5em 1em",
                      }}
                    >
                      {" "}
                      1
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span>Pulling data from</span> trusted sources
                  </p>
                  <div
                    style={{
                      background: "#583BE8",
                      width: "100%",
                      height: "1px",
                    }}
                  ></div>
                  <img
                    src="https://wokelo.ai/statichtml/images/microscope.gif"
                    alt=""
                  />
                </div>
                <div class="gif2" style={{ marginLeft: "10px" }}>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <span
                      style={{
                        display: "inline-block",
                        background: "#583BE8",
                        borderRadius: "60px",
                        color: "white",
                        boxShadow: "0 0 2px #888",
                        padding: "0.5em 1em",
                      }}
                    >
                      {" "}
                      2
                    </span>{" "}
                  </p>
                  <p>
                    Synthesizing & summarizing <br />
                    <span style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      findings
                    </span>
                  </p>
                  <div
                    style={{
                      background: "#583BE8",
                      width: "100%",
                      height: "1px",
                    }}
                  ></div>
                  <img
                    style={{ width: "100%" }}
                    src="https://wokelo.ai/statichtml/images/allsites.gif"
                    alt=""
                  />
                </div>
                <div className={styles.gif3} style={{ marginLeft: "10px" }}>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {" "}
                    <span
                      style={{
                        display: "inline-block",
                        background: "#583BE8",
                        borderRadius: "60px",
                        color: "white",
                        boxShadow: "0 0 2px #888",
                        padding: "0.5em 1em",
                      }}
                    >
                      {" "}
                      3
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span>Writing content for</span> draft report
                  </p>
                  <div
                    style={{
                      background: "#583BE8",
                      width: "100%",
                      height: "1px",
                    }}
                  ></div>
                  <img
                    style={{ width: "100%" }}
                    src="https://wokelo.ai/statichtml/images/printer.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modal_bottom_text text-center">
            <p>
              Wokelo scans{" "}
              <strong style={{ color: "#583BE8" }}>50+ web pages</strong>, reads{" "}
              <strong style={{ color: "#583BE8" }}>500k words</strong>,
              co-authors{" "}
              <strong style={{ color: "#583BE8" }}>draft reports</strong> with{" "}
              <strong style={{ color: "#583BE8" }}>10k+ words</strong> in
              minutes.
            </p>
          </div>
        </Modal.Footer>
      </Modal>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              <Link
                style={{ textDecoration: "none" }}
                to="/market_snapshot_attributes"
              >
                <span className={styles.back_btn}>
                  <i class="far fa-angle-left"></i>
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
              >
                {" "}
                <HiOutlineLogout />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right_content_area}>
          <div className={styles.form_progress_heading}>
            <h1>Select sources for analysis</h1>
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
          <div style={{ display: "flex" }}>
            <div className={`${styles.ca_input} ${styles.analysis_selected}`}>
              Wokelo Recommended
            </div>
            <div
              className={`${styles.ca_input} ${styles.analysis_notSelected}`}
            >
              Other Sources from web
            </div>
            <div
              className={`${styles.ca_input} ${styles.analysis_notSelected}`}
            >
              Add your own resources
            </div>
          </div>
         
          <div
            className={styles.btn_primary_gradient}
            onClick={() => {
              ProcessMarketSnapshot();
              setLoading(true);
            }}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market_Snapshot_Analysis;
