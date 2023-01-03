import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Dashboard.module.css";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Dashboard = () => {
  let {
    logoutUser,
    username,
    setSelectedAttributes,
    setRecommnededAttributes,
    setOtherAttributes,
  } = useContext(AuthContext);
  // useEffect(() => {
  //   setRecommnededAttributes([]);
  //   setOtherAttributes([]);
  //   setSelectedAttributes([])
  // })

  return (
    <div>
      <Sidebar />
      <div className={styles.right_area}>
        <div className={styles.right_header}>
          <div className={styles.header_title}>
            <div className={styles.header_left_area}></div>
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
          <div className={styles.heading}>
            <h1>Get started with instant qualitative analysis</h1>
          </div>
          <Row className="g-0">
            <Col
              className={`col-xxl-10 `}
              style={{ width: "74.333333%", flex: "0 0 auto" }}
            >
              <div
                classname={styles.center_content_area}
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                <div
                  classname={styles.slider_section}
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
                    paddingBottom: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={styles.box_title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span className={styles.box_span}>
                      <img
                        src="https://wokelo.ai/statichtml/images/icons/factory.svg"
                        alt="..."
                      />
                    </span>
                    <h3 className={styles.box_h3}>Sector analysis</h3>
                  </div>
                  <div classname={styles.cards_slider}>
                    <Row
                    // loop
                    // margin={4}
                    >
                      <Col className="col-xxl-4">
                        <Link
                          // classname={styles.card_item}
                          to="/market_snapshot_index"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            backgroundColor: "rgba(240, 236, 255, 0.7)",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5
                            className={styles.item_h5}
                            style={{ backgroundColor: "#FCFBFF" }}
                          >
                            <span
                              className={styles.item_span}
                              style={{ backgroundColor: "#000000" }}
                            >
                              <img
                                style={{ height: "18px", width: "18px" }}
                                src="https://wokelo.ai/statichtml/images/icons/line-chart.svg"
                                alt=""
                              />
                            </span>
                            Market snapshot
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Market size, segments,
                            value chain, top players and competitive landscape,
                            start-ups, innovation and more
                          </p>
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          classname={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                src="https://wokelo.ai/statichtml/images/icons/lightbulb.svg"
                                alt=""
                              />
                            </span>
                            Start-ups & Innovation
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Startup's value
                            proposition, business model, tech and IP,
                            applications, user feedback and more
                          </p>
                          <h6 className={styles.comingsoon}>Coming Soon</h6>
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          classname={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                src="https://wokelo.ai/statichtml/images/icons/activity.svg"
                                alt=""
                              />
                            </span>
                            M&A activity
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Mergers, Acquisitions, VC
                            / PE investments
                          </p>
                          <h6 className={styles.comingsoon}>Coming Soon</h6>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div
                  classname={styles.slider_section}
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
                    paddingBottom: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={styles.box_title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span className={styles.box_span}>
                      <img
                        src="https://wokelo.ai/statichtml/images/icons/building-2.svg"
                        alt="..."
                      />
                    </span>
                    <h3 className={styles.box_h3}>Company analysis</h3>
                  </div>
                  <div classname={styles.cards_slider}>
                    <Row
                    // loop
                    // margin={4}
                    >
                      <Col className="col-xxl-4">
                        <Link
                          // classname={styles.card_item}
                          to="/peer_analysis_index"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            backgroundColor: "rgba(240, 236, 255, 0.7)",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5
                            className={styles.item_h5}
                            style={{ backgroundColor: "#FCFBFF" }}
                          >
                            <span
                              className={styles.item_span}
                              style={{ backgroundColor: "#000000" }}
                            >
                              <img
                                style={{ height: "18px", width: "18px" }}
                                src="https://wokelo.ai/statichtml/images/icons/lightbulb.svg"
                                alt=""
                              />
                            </span>
                            Peer analysis (multi-company)
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Comparison of
                            products/services, market moves, capabilities,
                            customer analysis, financials and more
                          </p>
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          classname={styles.card_item}
                          to="/recent_strategy_index"
                          style={{
                            textDecoration: "none",
                            color: "black",
                            backgroundColor: "rgba(240, 236, 255, 0.7)",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5
                            className={styles.item_h5}
                            style={{ backgroundColor: "#FCFBFF" }}
                          >
                            <span
                              className={styles.item_span}
                              style={{ backgroundColor: "#000000" }}
                            >
                              <img
                                src="https://wokelo.ai/statichtml/images/icons/activity.svg"
                                alt=""
                              />
                            </span>
                            Recent strategy analysis
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Company deep-dive, M&A,
                            investments, product launches, partnerships,
                            leadership changes, market outlook​
                          </p>
                          {/* <h6 className={styles.comingsoon}>Coming Soon</h6> */}
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          classname={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                style={{ width: "18px", height: "18px" }}
                                src="https://wokelo.ai/statichtml/images/icons/factory.svg"
                                alt=""
                              />
                            </span>
                            Product/Service insights
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Product analysis
                            including top features, product gaps, pricing, and
                            value proposition
                          </p>
                          <h6 className={styles.comingsoon}>Coming Soon</h6>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div
                  classname={styles.slider_section}
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
                    paddingBottom: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    className={styles.box_title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span className={styles.box_span}>
                      <img
                        src="https://wokelo.ai/statichtml/images/icons/users.svg"
                        alt="..."
                      />
                    </span>
                    <h3 className={styles.box_h3}>Consumer research</h3>
                  </div>
                  <div classname={styles.cards_slider}>
                    <Row
                    // loop
                    // margin={4}
                    >
                      <Col className="col-xxl-4">
                        <Link
                          // classname={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                style={{ height: "18px", width: "18px" }}
                                src="https://wokelo.ai/statichtml/images/icons/line-chart.svg"
                                alt=""
                              />
                            </span>
                            Product reviews analysis (Tech)
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> User feedback analysis
                            including top features, product gaps,
                            differentiators, and areas for improvement​
                          </p>
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          classname={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                src="https://wokelo.ai/statichtml/images/icons/lightbulb.svg"
                                alt=""
                              />
                            </span>
                            Product reviews analysis (Others)
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Company deep-dive, M&A,
                            investments, product launches, partnerships,
                            leadership changes, market outlook​
                          </p>
                          {/* <h6 className={styles.comingsoon}>Coming Soon</h6> */}
                        </Link>
                      </Col>
                      <Col className="col-xxl-4">
                        <Link
                          className={styles.card_item}
                          to=""
                          style={{
                            textDecoration: "none",
                            color: "black",
                            background: "#f9f8f8",
                            border: "0.25px solid #e9e9e9;",
                            boxShadow: "0px 4px 4px rgba(154, 154, 154, 0.25)",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            padding: "10px 9px",
                            margin: "13px",
                            width: "17vw",
                            minHeight: "225px",
                          }}
                        >
                          <h5 className={styles.item_h5}>
                            <span className={styles.item_span}>
                              <img
                                style={{ width: "18px", height: "18px" }}
                                src="https://wokelo.ai/statichtml/images/icons/activity.svg"
                                alt=""
                              />
                            </span>
                            Market trends & signals
                          </h5>
                          <p className={styles.item_p}>
                            <strong>Includes:</strong> Market trends, news,
                            strategic moves, consumer behavior, influencers,
                            analyst commentary, funding
                          </p>
                          <h6 className={styles.comingsoon}>Coming Soon</h6>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-xxl-3 col-xl-4 col-3">
              <div className={styles.right_box_area}>
                <div className={styles.right_box}>
                  <div className={styles.box_title}>
                    <span className={styles.box_span}>
                      <img
                        src="https://wokelo.ai/statichtml/images/icons/microscope.svg"
                        alt="..."
                      />
                    </span>
                    <h3 className={styles.box_h3}>Open-ended research</h3>
                  </div>
                  <div className={styles.cards_list}>
                    <Link
                      className={styles.card_item}
                      href="http://"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h5 className={styles.item_h5}>
                        <span className={styles.item_span}>
                          <img
                            src="https://wokelo.ai/statichtml/images/icons/hash.svg"
                            alt=""
                          />
                        </span>
                        Quick digest on any topic
                      </h5>
                      <p className={styles.item_p}>
                        <strong>Includes:</strong> Quick report and synthesis
                        across any topic and sub-topics, choose our curated set
                        of sources mapped based on topic
                      </p>
                      <h6 className={styles.comingsoon}>Coming Soon</h6>
                    </Link>
                    <Link
                      className={styles.card_item}
                      href="http://"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h5 className={styles.item_h5}>
                        <span className={styles.item_span}>
                          <img
                            src="https://wokelo.ai/statichtml/images/icons/file-text.svg"
                            alt=""
                          />
                        </span>
                        Create data tables
                      </h5>
                      <p className={styles.item_p}>
                        <strong>Includes:</strong> Populated grid across a list
                        of target subjects and corresponding parameters or
                        attributes
                      </p>
                      <h6 className={styles.comingsoon}>Coming Soon</h6>
                    </Link>
                    <Link
                      className={styles.card_item}
                      href="http://"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <h5 className={styles.item_h5}>
                        <span className={styles.item_span}>
                          <img
                            src="https://wokelo.ai/statichtml/images/icons/files.svg"
                            alt=""
                          />
                        </span>
                        Document synthesis
                      </h5>
                      <p className={styles.item_p}>
                        <strong>Includes:</strong> Synthesize documents in own
                        or company system across a set of parameters​
                      </p>
                      <h6 className={styles.comingsoon}>Coming Soon</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
