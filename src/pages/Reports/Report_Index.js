import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Report_Index.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { HiOutlineLogout } from "react-icons/hi";
import {BsFileEarmarkCheck} from "react-icons/bs"
const Report_Index = () => {
  let { username } = useContext(AuthContext);
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
          <table>
            <tr>
              <th>REPORT TITLE</th>
              <th>REPORT TYPE</th>
              <th>STATUS</th>
              <th>METRICS</th>
              <th>DATE</th>
              <th>DOWNLOAD</th>
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
              <td style={{ fontSize: "25px", color: "#583BE8" }}>
                <BsFileEarmarkCheck/>
              </td>
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
                <td style={{ fontSize: "25px", color: "#583BE8" }}>
                  <BsFileEarmarkCheck/>{" "}
                </td>{" "}
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
              <td style={{ fontSize: "25px", color: "#583BE8" }}>
                <BsFileEarmarkCheck/>
              </td>
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
              <td style={{ fontSize: "25px", color: "#583BE8" }}>
                <BsFileEarmarkCheck/>
              </td>
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
              <td style={{ fontSize: "25px", color: "#583BE8" }}>
                <BsFileEarmarkCheck/>
              </td>
            </tr>
            <tr>
              <td>
                <strong>'Secured Access Service Edge'</strong>
              </td>
              <td>Market Snapshot</td>
              <td>
                <span
                  style={{
                    color: "#5CB85C",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  SUCCESSFUL
                </span>
              </td>
              <td
                style={{
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "14px",
                  textAlign: "left",
                  justifyContent: "center",
                }}
              >
                <ul>
                  <li>
                    words synthesized :{" "}
                    <span style={{ color: "#583BE8" }}>1234</span>{" "}
                  </li>
                  <li>
                    words generated :{" "}
                    <span style={{ color: "#583BE8" }}>4567</span>{" "}
                  </li>
                  <li>
                    Time saved : <span style={{ color: "#583BE8" }}>2+HRS</span>
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
                }}
              >
                6/3/22 -12:45PM
              </td>
              <td style={{ fontSize: "25px", color: "#583BE8" }}>
                <BsFileEarmarkCheck/>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report_Index;
