import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./Market_Snapshot_Attributes.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { BiLineChart } from "react-icons/bi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { AuthContext } from "../../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
const Market_Snapshot_Attributes = () => {
  const {
    recommendedAttributes,
    otherAttributes,
    selectedAttributes,
    setSelectedAttributes,
    username,
    loadingAttributes,
  } = useContext(AuthContext);


    function handleElementClick(element) {
      const elementIndex = selectedAttributes.indexOf(element);
      if (elementIndex === -1) {
        // element is not in the array, so add it
        setSelectedAttributes([...selectedAttributes, element]);
      } else {
        // element is in the array, so remove it
        setSelectedAttributes([
          ...selectedAttributes.slice(0, elementIndex),
          ...selectedAttributes.slice(elementIndex + 1),
        ]);
      }
    }

   useEffect(() => {
    console.log(selectedAttributes)
   }, [selectedAttributes]);

  
  return (
    <div>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              <Link
                style={{ textDecoration: "none" }}
                to="/market_snapshot_index"
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
              <span>Recommended attributes for your research topic</span>
            </p>
            {loadingAttributes && (
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingBottom: "2vh",
              }}
            >
              {recommendedAttributes.map((item, index) => (
                <div
                  style={{
                    flex: "0 0 28.3333%",
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                  onClick={() => handleElementClick(`${item}`)}
                  className={` ${
                    selectedAttributes.includes(`${item}`)
                      ? styles.selected_attr
                      : ""
                  } ${styles.attr_box}`}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.ca_input}>
            <p className={styles.input_header}>
              <span className={styles.fact}>
                {" "}
                <BiLineChart />
              </span>
              &nbsp; &nbsp; &nbsp;
              <span>Other attributes</span>
            </p>
            {loadingAttributes && (
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                paddingBottom: "2vh",
              }}
            >
              {otherAttributes.map((item, index) => (
                <div
                  style={{
                    flex: "0 0 28.3333%",
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                  className={` ${
                    selectedAttributes.includes(`${item}`)
                      ? styles.selected_attr
                      : ""
                  } ${styles.attr_box}`}
                  onClick={() => handleElementClick(`${item}`)}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.btn_primary_gradient}>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/market_snapshot_analysis"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market_Snapshot_Attributes;
