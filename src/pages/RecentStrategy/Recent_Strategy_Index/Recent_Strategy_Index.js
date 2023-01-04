import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { HiOutlineLogout } from "react-icons/hi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Recent_Strategy_Index.module.css";
import { FiFilePlus } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Recent_Strategy_Index = () => {
  const navigate = useNavigate();
  const strategic_moves = [
    { key: "Acquisitions", value: "acquisition" },
    { key: "Investments", value: "investment" },
    { key: "Partnerships", value: "partnership" },
  ];
  const other_news = [
    "Hiring Strategy",
    "Others- ESG, DEI, etc.",
    "Call Transcripts",
  ];

  const disabled_tags = ["Product Launches", "Leadership Changes"];

  let {
    username,
    authTokens,
    setRecentStrategyReportID,
    recentStrategyReportID,
  } = useContext(AuthContext);
  const [options, setOptions] = useState([]);
  const [text, setText] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [yearFounded, setYearFounded] = useState("");
  const [hq, setHq] = useState("");
  const [ownership, setOwnership] = useState("");
  const [logo, setLogo] = useState("");
  const [permalink, setPermalink] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading3, setLoading3] = useState("");
  const [intervalID, setIntervalID] = useState(null);
  const enabled = text && selectedKeywords.length >= 1;
  useEffect(() => {
    const interval = setInterval(() => {
      checkStatus();
    }, 10000);
    setIntervalID(interval);
    return () => {
      clearInterval(interval);
    };
  }, [recentStrategyReportID]);

  useEffect(() => {
    setStatusMessage("");
    if (statusMessage === "processingCompleted") {
      clearInterval(intervalID);
      setLoading2(false);
      navigate("/recent_strategy_download");
    } else if (statusMessage === "processingFailed") {
      clearInterval(intervalID);
      setLoading2(false);
      navigate("/recent_strategy_failed");
    }
  }, [statusMessage, intervalID]);

  function handleElementClick(element) {
    const elementIndex = selectedKeywords.indexOf(element);
    if (elementIndex === -1) {
      // element is not in the array, so add it
      setSelectedKeywords([...selectedKeywords, element]);
    } else {
      // element is in the array, so remove it
      setSelectedKeywords([
        ...selectedKeywords.slice(0, elementIndex),
        ...selectedKeywords.slice(elementIndex + 1),
      ]);
    }
  }

  useEffect(() => {
    console.log(selectedKeywords);
  }, [selectedKeywords]);

  useEffect(() => {
    console.log(recentStrategyReportID);
  }, [recentStrategyReportID]);

  const onChangeHandler = async (text) => {
    setText(text);
    setLoading(true);
    let resp = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/assets/get_company_list/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          name: text,
        }),
      }
    );
    const data = await resp.json();

    setOptions(data.data);
    setLoading(false);
  };

  const checkStatus = async () => {
    setStatusMessage("");
    const resp = await fetch(
      `https://wokelo-dev.eastus.cloudapp.azure.com/api/assets/get_report_status/?report_id=${recentStrategyReportID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    const res = await resp.json();
    setStatusMessage(res.status);
    console.log(res.status);
  };

  const processRecentStrategy = async () => {
    console.log(" am callled");
    console.log("permalink", permalink);
    setRecentStrategyReportID("");
    let resp = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/recent_strategy/process/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          name: companyName,
          permalink: permalink,
          selected_keywords: selectedKeywords,
        }),
      }
    );
    const data = await resp.json();
    setRecentStrategyReportID(data.report_id);
    console.log(recentStrategyReportID);
  };

  const onCompanySelect = async (cname, clink) => {
    setLoading2(true);
    setOptions([]);
    let companyData = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/assets/get_company_info/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          name: cname,
          permalink: clink,
          attributes: ["overview"],
        }),
      }
    );
    const res = await companyData.json();
    console.log("link", res.data.permalink);
    setCompanyName(res.data.crunchbase.legal_name);
    setCompanyWebsite(res.data.crunchbase.website);
    setPermalink(res.data.permalink);
    setOwnership(res.data.crunchbase.ipo_status);
    setYearFounded(res.data.crunchbase.year_founded);
    setHq(res.data.crunchbase.location_identifiers);
    setLogo(res.data.crunchbase.logo);
    setLoading2(false);
  };
  return (
    <div>
      <Modal
        backdrop="static"
        keyboard={false}
        show={loading3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="justify-content-center">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="text-center">
                <div className="heading text-center pt-4 pb-0">
                  <h2>Please wait while relevant topics are being listed..</h2>
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
                  onChange={(e) => {
                    if (e.target.value !== "" || e.target.value !== null) {
                      onChangeHandler(e.target.value);
                      setLoading(true);
                    }
                  }}
                  value={text}
                />
              </form>
              {loading && (
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
              {!loading &&
                options &&
                options.map((comp, i) => (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <table className={styles.suggestions}>
                      <tr>
                        <td
                          style={{ width: "18vw" }}
                          onClick={() => {
                            onCompanySelect(
                              `${comp.name}`,
                              `${comp.permalink}`
                            );
                          }}
                        >
                          <img
                            style={{
                              width: "40px",
                              height: "auto",
                              maxHeight: "50px",
                              borderRadius: "5px",
                            }}
                            src={`https://res.cloudinary.com/crunchbase-production/image/upload/${comp.logo}`}
                            alt=""
                          />
                          &nbsp; &nbsp;
                          <strong className={styles.comp_name}>
                            {comp.name}
                          </strong>
                          &nbsp; &nbsp;
                        </td>
                        <td>
                          <span className={styles.comp_desc}>
                            {comp.short_description.substring(0, 80)}
                            {comp.short_description.length >= 50 && "..."}{" "}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
            </div>

            {!loading && companyName && (
              <div className={styles.ca_input3}>
                {loading && (
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
                {companyName && (
                  <div className={styles.company_box}>
                    <div className={styles.company_logo}>
                      <div className={styles.logo_container}>
                        <img
                          src={`https://res.cloudinary.com/crunchbase-production/image/upload/${logo}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.company_details}>
                      <span>
                        {" "}
                        <strong> Name:</strong> <span> {companyName} </span>{" "}
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
                          <span>{companyWebsite}</span>{" "}
                        </a>
                      </span>
                      <span>
                        {" "}
                        <strong>Founded:</strong>&nbsp;&nbsp;{" "}
                        <span>{yearFounded}</span>
                      </span>
                      <span>
                        {" "}
                        <strong>HQ:</strong> <span>{hq}</span>{" "}
                      </span>
                      <span>
                        {" "}
                        <strong>Ownership:</strong> <span>{ownership}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
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

                  {strategic_moves.map((str, i) => (
                    <div
                      className={` ${
                        selectedKeywords.includes(`${str.value}`)
                          ? styles.selected_attr
                          : ""
                      } ${styles.table_items}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleElementClick(`${str.value}`)}
                    >
                      {str.key}
                    </div>
                  ))}
                  {disabled_tags.map((str, i) => (
                    <div
                      style={{
                        background: "#EEEEEE",
                        color: "#888",
                        pointerEvents: "none",
                        cursor: "default",
                      }}
                      className={styles.table_items}
                    >
                      {str}
                    </div>
                  ))}
                </div>
                <div className={styles.right_table}>
                  <p className={styles.table_header}>Other News & Signals</p>
                  {other_news.map((str, i) => (
                    <div
                      style={{
                        background: "#EEEEEE",
                        color: "#888",
                        pointerEvents: "none",
                        cursor: "default",
                      }}
                      className={styles.table_items}
                    >
                      {str}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className={`  ${
              !enabled ? styles.disabled : styles.btn_primary_gradient
            } `}
            disabled={!enabled}
            onClick={() => {
              processRecentStrategy();
              setLoading3(true);
            }}
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recent_Strategy_Index;
