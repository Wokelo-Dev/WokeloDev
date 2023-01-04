import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Report_Index.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
const Report_Index = () => {
  let { username, authTokens } = useContext(AuthContext);
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    setReportData(null);
    fetchReport();
    console.log(reportData);
  }, []);

  const fetchReport = async () => {
    let response = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/accounts/reports/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();
    if (data) setReportData({ data });
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
                to="/recent_strategy_index"
              >
                <span className={styles.back_btn}>
                  <i className="far fa-angle-left"></i>
                </span>
              </Link>
              &nbsp; &nbsp;
              <h3 style={{ marginBottom: "0" }}> Reports</h3>
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
          {!reportData && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ThreeDots
                height="70"
                width="70"
                radius="9"
                color="#684EEA"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          )}
          {reportData && (
            <table
              style={{
                padding: "5px",
                width: "100%",
              }}
            >
              <tr style={{ background: "rgba(217, 217, 217, 0.2)" }}>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  {" "}
                  REPORT TITLE
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  REPORT TYPE
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  STATUS
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  METRICS
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  DATE
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontWeight: "600",
                    paddingBottom: "2vh",
                    paddingTop: "2vh",
                  }}
                >
                  DOWNLOAD
                </th>
              </tr>

              {reportData &&
                Object.entries(reportData.data).map(([id, report]) => (
                  <tr>
                    <td style={{ textAlign: "center", padding: "8px" }}>
                      <strong>'{report.title}'</strong>
                    </td>
                    <td style={{ textAlign: "center", padding: "8px" }}>
                      {report.type}
                    </td>
                    <td style={{ textAlign: "center", padding: "8px" }}>
                      {report.status !== "Failed" && (
                        <span
                          style={{
                            color: "#5CB85C",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          {report.status}
                        </span>
                      )}
                      {report.status === "Failed" && (
                        <span
                          style={{
                            color: "red",
                            fontWeight: "700",
                            fontSize: "14px",
                          }}
                        >
                          {report.status}
                        </span>
                      )}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        fontWeight: "500",
                        fontSize: "14px",

                        justifyContent: "center",
                        textAlign: "center",
                        padding: "8px",
                      }}
                    >
                      <ul>
                        <li>
                          words synthesized :{" "}
                          <span style={{ color: "#583BE8" }}>
                            {report.metrics.words_processed}
                          </span>{" "}
                        </li>
                        <li>
                          words generated :{" "}
                          <span style={{ color: "#583BE8" }}>
                            {report.metrics.words_generated}
                          </span>{" "}
                        </li>
                        <li>
                          Time saved :{" "}
                          <span style={{ color: "#583BE8" }}>
                            {report.metrics.time_saved}
                          </span>
                        </li>
                      </ul>
                    </td>
                    <td
                      style={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "16px",
                        textAlign: "center",
                        padding: "8px",
                      }}
                    >
                      {report.date.substr(2, 8)}&nbsp; / &nbsp;
                      {report.date.substr(11, 8)}
                    </td>
                    <td
                      style={{
                        fontSize: "25px",
                        color: "#583BE8",
                        textAlign: "center",
                        padding: "8px",
                      }}
                    >
                      <BsFileEarmarkCheck />
                    </td>
                  </tr>
                ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report_Index;
