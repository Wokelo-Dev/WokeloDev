import React, { useState, useContext, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./CAIndex.module.css";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from "../../../context/AuthContext";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { ThreeDots } from "react-loader-spinner";
import { GoThreeBars } from "react-icons/go";
import { BiX } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CAIndex = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);
  let { username, logoutUser, setPeerReportID, sector, setSector } =
    useContext(AuthContext);
  let { authTokens } = useContext(AuthContext);
  const [finalComp, setFinalComp] = useState([]);
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [listCompanies, setListCompanies] = useState([]);
  const [loading3, setLoading3] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // console.log("width", width);
  //   console.log(companies)
  // }, [companies]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    if (width <= 991) setToggleDropdown(false);
    else setToggleDropdown(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleDropdown((prevState) => !prevState);
  };

  const onCompanySelect = async (cname, clink) => {
    setLoading2(true);
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
    listCompanies.push(res.data.permalink);
    setFinalComp((finalComp) => {
      return [...finalComp, res.data];
    });
    setLoading2(false);
    console.log(listCompanies);
  };

  const removeComp = (perm) => {
    const deleted = finalComp.filter((res) => res.permalink !== perm);
    const deleted_comp = listCompanies.filter((res) => res.permalink !== perm);
    setListCompanies(deleted_comp);
    setFinalComp(deleted);
    setCompanies(deleted);
  };

  const sectorSelector = async (sector) => {
    setSector(sector);
  };

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

  const processPeerAnalysis = async () => {
    setLoading3(true);
    let response = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/peer_analysis/process/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          list_companies: listCompanies,
          title: sector,
          metaInfo: "",
          attributes: ["overview"],
        }),
      }
    );
    const res = await response.json();
    setPeerReportID(res.report_id);
    console.log("Final", res);
  };

  if (loading3) {
    setTimeout(() => {
      setLoading3(false);
      navigate("/peer_analysis_download");
    }, 5000);
  }

  const enabled = sector && finalComp.length >= 2 && finalComp.length < 12;

  return (
    <div>
      <Modal
        // {...props}
        backdrop="static"
        keyboard={false}
        show={loading3}
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
      <div>
        {toggleDropdown && <Sidebar className={styles.mob_sidebar} />}
        {width < 991 && toggleDropdown && (
          <div className={styles.sidebar_overlay} onClick={handleToggle}></div>
        )}
      </div>
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}>
              {width < 991 && (
                <span style={{ fontSize: "30px" }} onClick={handleToggle}>
                  {" "}
                  <GoThreeBars />{" "}
                </span>
              )}
              &nbsp;
              <Link to="/dashboard" className={styles.back_btn}>
                <i className="far fa-angle-left"></i>
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
                onClick={logoutUser}
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
          <div style={{ display: "flex", justifyContent: "center" }}>
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
          <div style={{ display: "flex" }} className={styles.page_wrapper}>
            <div className={styles.lefty_wrapper} style={{ width: "68%" }}>
              <div>
                <div className={styles.ca_input}>
                  <p className={styles.input_header}>
                    <span className={styles.fact}>
                      {" "}
                      <HiOutlineBuildingOffice />
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span>Enter sector name</span>
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{
                      width: "70%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className={styles.search_inp}
                      type="text"
                      name="sector_name"
                      id="sector_name"
                      onChange={(e) => {
                        if (e.target.value !== "" || e.target.value !== null) {
                          sectorSelector(e.target.value);
                        }
                      }}
                      value={sector}
                      placeholder="Type your sector"
                    />
                    {/* <div style="height:2vh; display: flex; " class="error_msg"></div> */}
                    {/* <font color=red size=3vw>{{error_message}}</font> */}
                  </form>
                </div>
              </div>
              <div>
                <div className={styles.ca_input2}>
                  <p className={styles.input_header2}>
                    <span className={styles.fact}>
                      {" "}
                      <HiOutlineBuildingOffice />
                    </span>
                    &nbsp; &nbsp;
                    <span>Add companies for analysis</span>
                  </p>
                  <form
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: "2vh",
                      paddingBottom: "3vh",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      className={styles.search_inp2}
                      type="text"
                      name="sector_name"
                      id="sector_name"
                      onChange={(e) => {
                        if (e.target.value !== "" || e.target.value !== null) {
                          onChangeHandler(e.target.value);
                        }
                      }}
                      value={text}
                      placeholder="Type your companies"
                    />
                    {/* <div style="height:2vh; display: flex; " class="error_msg"></div> */}
                    {/* <font color=red size=3vw>{{error_message}}</font> */}
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
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <table className={styles.suggestions}>
                          <tr>
                            <td
                              style={{ width: "18vw" }}
                              onClick={() => {
                                if (
                                  companies.indexOf(`${comp.permalink}`) === -1
                                ) {
                                  setCompanies([
                                    ...companies,
                                    `${comp.permalink}`,
                                  ]);
                                  onCompanySelect(
                                    `${comp.name}`,
                                    `${comp.permalink}`
                                  );
                                }
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
                                {comp.short_description.length >= 50 &&
                                  "..."}{" "}
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    ))}
                </div>
                <div style={{ textAlign: "center" }}>
                  {/* <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/peer_analysis_download"
                  > */}
                  <button
                    onClick={processPeerAnalysis}
                    className={`  ${
                      !enabled ? styles.disabled : styles.btn_primary_gradient
                    } `}
                    disabled={!enabled}
                  >
                    {/* <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/market_snapshot_attributes"
                  > */}
                    Generate Report
                    {/* </Link> */}
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>

            <div className={styles.selected_comp}>
              <div className={styles.ca_input3}>
                <strong
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    padding: "10px",
                  }}
                >
                  Selected Companies
                </strong>
                {loading2 && (
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
                {finalComp &&
                  finalComp
                    .slice(0)
                    .reverse()
                    .map((ele, ind) => (
                      <div className={styles.comp_box}>
                        <div className={styles.comp_header}>
                          <img
                            style={{
                              width: "40px",
                              height: "auto",
                              maxHeight: "50px",
                              borderRadius: "5px",
                            }}
                            src={`https://res.cloudinary.com/crunchbase-production/image/upload/${ele.crunchbase.logo}`}
                            alt=""
                          />
                          &nbsp;
                          <strong> {ele.crunchbase.legal_name} </strong>
                          <button
                            onClick={() => removeComp(`${ele.permalink}`)}
                            style={{ border: "none", justifyContent: "right" }}
                          >
                            {" "}
                            <BiX />{" "}
                          </button>
                        </div>
                        <div className={styles.comp_data}>
                          <table>
                            <tr>
                              <th> Website: </th>
                              <td>
                                <a
                                  href={`${ele.crunchbase.website}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {ele.crunchbase.website}
                                </a>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th> Founded: </th>
                              <td>
                                &nbsp;
                                <span>{ele.crunchbase.year_founded}</span>
                              </td>
                            </tr>

                            <tr>
                              <th>HQ:</th>
                              <td>
                                {" "}
                                <span>
                                  {ele.crunchbase.location_identifiers}{" "}
                                </span>{" "}
                              </td>
                            </tr>

                            <tr>
                              <th>Sector: </th>
                              <td>
                                {" "}
                                <span>{ele.overview.industry}</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAIndex;
