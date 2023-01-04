import React,{useContext} from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import styles from './Recent_Strategy_Failed.module.css'
import { HiOutlineLogout } from "react-icons/hi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { FiFilePlus } from "react-icons/fi";
const Recent_Strategy_Failed = () => {
    let {
      username,
      authTokens,
      setRecentStrategyReportID,
      recentStrategyReportID,
    } = useContext(AuthContext);
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
              <h3 style={{ marginBottom: "0" }}> Error Page</h3>
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
           <h1>Internal Server Error</h1>
           <br />
           <br />
           <Link to="/dashboard">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Recent_Strategy_Failed