import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./Market_Snapshot_Final.module.css";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { HiOutlineLogout } from "react-icons/hi";
// import { BiLineChart } from "react-icons/bi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BiX } from "react-icons/bi";
import { AuthContext } from "../../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
const Market_Snapshot_Final = () => {
  let {
    getShortlist,
    username,
    listArray,
    resMsg,
    reportID,
    authTokens,
    setFinalReportID,
    finalReportID,
  } = useContext(AuthContext);

  //  const [loading, setLoading] = useState('');
  const checkboxes = useRef(null);
  const [dataList, setDataList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedHeadings, setCheckedHeading] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("in final page", reportID);
    // setDataList(listArray)
    // setFinalReportID(reportID);
    // setTimeout(() =>{
    // console.log(listArray)
    setLoading(true);
    getShortlist();
    setLoading(false)
    // },1000)
  }, []);

  useEffect(() => {
    // setTimeout(() => {
      console.log("Data", dataList);
      generateMarketSnapshot()
    // }, 3000);
  }, [dataList]);

  useEffect(() => {
    console.log(checkedHeadings);
    // setTimeout(() => {
      lateFunction();
    // }, 5000);
  }, [checkedHeadings]);

  // const handleOnChange = (event) => {
  //   // const elementIndex = dataList.indexOf(element);
  //  const element = event.target;
  //  if (element.checked) {
  //    if (dataList.some((e) => e.heading !== element.value)) {
  //     //  setDataList(dataList.filter((i) => i.heading !== element.heading));
  //      setDataList([...dataList, element.data]);
  //    }
  //  }
  //   else {
  //     if (dataList.some((e) => e.heading === element.value)) {
  //      setDataList(dataList.filter((i) => i.heading !== element.value));
  //     }
  //   }
  // }

 const generateMarketSnapshot = async () =>{
  const resp = await fetch(
    "https://wokelo-dev.eastus.cloudapp.azure.com/api/market_snapshot/generate/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        report_id: reportID,
        headings: dataList,
      }),
    }
  );
  const data = await resp.json();
  if(data)
  {
    setLoading2(false)
  }
  if(data.report_id)
  {
    navigate("/market_snapshot_download");
  }
  console.log(data)
 }

  const makeList = () => {
    const checkboxElements = Array.from(
      checkboxes.current.querySelectorAll('input[type="checkbox"]')
    );
    // console.log(checkboxElements);
    setCheckedHeading([]);
    checkboxElements.forEach((checkbox) => {
      if (checkbox.checked === true) {
        // if (checkedHeadings.indexOf(checkbox.value) === -1)
        setCheckedHeading((checkedHeadings) => {
          return [...checkedHeadings, checkbox.value];
        });
        // console.log(checkbox)
      }
    });

    //  let finalList =[];

    // console.log('finallist',finalList)
    // setCheckedHeading(finalList)
  };

  const lateFunction = () => {
    setDataList([]);
    checkedHeadings.forEach((value) => {
      setDataList((dataList) => {
        return [...dataList, listArray.filter((i) => i.heading === value)];
      });
      // finalList.push(listArray.filter((i) => i.heading === value));
    });
  };

  return (
    <div>
      <Modal
        // {...props}
        backdrop="static"
        keyboard={false}
        show={loading2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="justify-content-center">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="text-center">
                <div className="heading text-center pt-4 pb-0">
                  <h2>
                    Please wait while your draft report is being prepared..
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
                to="/market_snapshot_analysis"
              >
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
            <h2>Confirm if these topics are relevant for your research</h2>
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

            {(listArray.length===0) && (
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
          <div className={styles.big_row}>
            <div style={{ display: "flex", flexWrap: "wrap" }} ref={checkboxes}>
              {listArray.map((item, index) => (
                <div
                  style={{ flex: "0 0 50%" }}
                  className={styles.ca_input}
                  key={index}
                >
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    value={item.heading}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>
                    {item.heading}
                  </label>
                 
                </div>
              ))}
            </div>
          </div>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/market_snapshot_final"
          >
            <div
              onClick={() => {
                makeList();
                setLoading2(true)
                // setCheckedHeading([]);
              }}
              className={styles.btn_primary_gradient}
            >
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Market_Snapshot_Final;
