import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./Peer_Analysis_Download.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ColorRing } from "react-loader-spinner";
const Peer_Analysis_Download = () => {
  const { username } = useContext(AuthContext);
  const [emailID, setEmailID] = useState("");
  const [dateGenerated, setDateGenerated] = useState("");
  const [companiesTotal, setCompaniesTotal] = useState("");
  const [wordProcessed, setWordProcessed] = useState("");
  const [sourcesReffered, setSourcesReferred] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let { authTokens, peerReportID, sector } = useContext(AuthContext);
  console.log("on download page", peerReportID);

  useEffect(() => {
    const downloadDetail = async () => {
      let response = await fetch(
        "https://wokelo-dev.eastus.cloudapp.azure.com/api/peer_analysis/download_info/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            report_id: peerReportID,
          }),
        }
      );
      const res = await response.json();
      setCompaniesTotal(res.info.companies_total);
      setWordProcessed(res.info.words_processed);
      setSourcesReferred(res.info.sources_referred);
      setEmailID(res.info.username);
      setDateGenerated(res.info.date_generated);
      console.log(companiesTotal);
    };
    downloadDetail();
  });

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://wokelo-dev.eastus.cloudapp.azure.com/api/peer_analysis/download_doc/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            report_id: peerReportID,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log(response.headers);
      //  const [, filename] =
      //    response.headers["Content-Disposition"].split("filename=");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `Peer_Analysis_${sector}_${dateGenerated}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              <Link
                style={{ textDecoration: "none" }}
                to="/peer_analysis_index"
              >
                <span className={styles.back_btn}>
                  <i className="far fa-angle-left"></i>
                </span>
              </Link>
              &nbsp; &nbsp;
              <h3 style={{ marginBottom: "0" }}> Peer Analysis</h3>
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
          <div className={styles.page_wrapper}>
            <div className={styles.heading}>Your draft report is ready</div>
            <p className={styles.small_heading}>
              Your peer analysis draft on sector <strong>'{sector}'</strong> is
              ready!
            </p>
            <p className={styles.small_heading}>
              Report will be emailed at <strong>{emailID}</strong>{" "}
            </p>
            <img src="https://wokelo.ai/statichtml/images/success.png" alt="" />
          </div>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3vh",
              fontWeight: "600",
            }}
          >
            Quick Snapshot{" "}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              marginTop: "2vh",
              lineHeight: "112.9%",

              color: "#000000",
            }}
          >
            - Total companies scanned: {companiesTotal}
            <br />- Total words processed: {wordProcessed}
            <br />- Sources Referred: {sourcesReffered}
            <br />
          </p>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2vh",
            }}
          >
            {" "}
            Download Your Document
          </span>
          <br />
          <div className={styles.icons}>
            {!loading && (
              <button onClick={handleDownload}>
                <img
                  src="https://i.ibb.co/fMRF2jM/icons8-microsoft-word-2019-70.png"
                  alt=""
                />
              </button>
            )}
            {loading && (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#684EEA", "#684EEA", "#684EEA", "#684EEA", "#684EEA"]}
              />
            )}
          </div>
          <p style={{ marginTop: "1vh", fontWeight: "600" }}>
            You can also access this draft document under{" "}
            <span style={{ color: "#583BE8" }}>Reports</span> tab
          </p>
          <p
            style={{
              width: "707.5px",
              height: "0px",
              marginTop: "1vh",
              border: "0.25px solid #000000",
            }}
          ></p>
          <p style={{ marginTop: "1vh" }}>
            Wokelo scans{" "}
            <strong style={{ color: "#583BE8" }}>50+ web pages</strong> ,{" "}
            <strong style={{ color: "#583BE8" }}>reads 100k words</strong> , and
            co-authors{" "}
            <strong style={{ color: "#583BE8" }}>
              draft reports (10k+ words)
            </strong>{" "}
            in minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Peer_Analysis_Download;
