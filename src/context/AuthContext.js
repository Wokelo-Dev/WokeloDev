import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [sector, setSector] = useState("");
  const [marketSnapshotResearch, setMarketSnapshotResearch] = useState("");
  const [recommendedAttributes, setRecommnededAttributes] = useState([]);
  const [otherAttributes, setOtherAttributes] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [listArray, setListArray] = useState([]);
  const [resMsg, setResMsg] = useState(true);
  const [reportID, setReportID] = useState("");
  const [peerReportID, setPeerReportID] = useState("");
  const [finalReportID, setFinalReportID] = useState("");
  const [statusMessage, setStatusMessage] = useState('');
  const [globalEmailID, setGlobalEmailID] = useState('');
  const [loadingAttributes, setLoadingAttributes] = useState(false);
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("form code");
    setGlobalEmailID(e.target.username.value);
    const response = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/dashboard");
    } else {
      alert("Something Went wrong");
    }
  };

  const updateToken = async () => {
    console.log("Update func called");
    const response = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: authTokens?.refresh,
        }),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    }

    if (loading) {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 2000000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const handleMSResearch = (e) => {
    setMarketSnapshotResearch(e.target.value);
    // setSelectedAttributes([]);
    
    // console.log(marketSnapshotResearch)
  };

  const ClassifyQuery = async () => {
    setLoadingAttributes(true);
    setRecommnededAttributes([]);
    setOtherAttributes([]);
    setSelectedAttributes([]);
    
    const resp = await fetch(
      `https://wokelo-dev.eastus.cloudapp.azure.com/api/market_snapshot/classify/?query=${marketSnapshotResearch}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    const res = await resp.json();
    setRecommnededAttributes(res.recommended_attributes);
    setOtherAttributes(res.other_attributes);
    setLoadingAttributes(false);
  };

  const ProcessMarketSnapshot = async () => {
    setReportID('')
    const resp = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/market_snapshot/process_market_snapshot/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          search_query: marketSnapshotResearch,
          attributes: selectedAttributes,
          sources: ["wokelo"],
        }),
      }
    );

    const res = await resp.json();
    console.log(res.report_id);

    // if(res.report_id)
    // setReportID(res)
    // setInterval
    
    setReportID(res.report_id);
    // setTaskID(res.task_id)
    // console.log(reportID);
    

    // console.log(taskID)
  };

 const checkStatus = async () =>{
  setStatusMessage('')
  const resp = await fetch(
    `https://wokelo-dev.eastus.cloudapp.azure.com/api/assets/get_report_status/?report_id=${reportID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    }
  );
  const res = await resp.json();
  setStatusMessage(res.status)
  console.log(res.status)
 }

  const getShortlist = async () => {
    setListArray([])
    const resp = await fetch(
      `https://wokelo-dev.eastus.cloudapp.azure.com/api/market_snapshot/get_shortlist/?report_id=${reportID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    const res = await resp.json();
    if (res.message) setResMsg(true);
    else setResMsg(false);
    setListArray(res.data);
    console.log("Shorlist", res);
  };

  const getName = async () => {
    let response = await fetch(
      "https://wokelo-dev.eastus.cloudapp.azure.com/api/accounts/user_detail",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      setUsername(data.user);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  getName();

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    marketSnapshotResearch: marketSnapshotResearch,
    handleMSResearch: handleMSResearch,
    ClassifyQuery: ClassifyQuery,
    recommendedAttributes: recommendedAttributes,
    setRecommnededAttributes:setRecommnededAttributes,
    otherAttributes: otherAttributes,
    setOtherAttributes:setOtherAttributes,
    selectedAttributes: selectedAttributes,
    setSelectedAttributes: setSelectedAttributes,
    ProcessMarketSnapshot: ProcessMarketSnapshot,
    getShortlist: getShortlist,
    username: username,
    reportID: reportID,
    listArray: listArray,
    resMsg: resMsg,
    setReportID: setReportID,
    finalReportID: finalReportID,
    setFinalReportID: setFinalReportID,
    peerReportID: peerReportID,
    setPeerReportID: setPeerReportID,
    sector: sector,
    setSector: setSector,
    checkStatus:checkStatus,
    statusMessage:statusMessage,
    setStatusMessage: setStatusMessage,
    globalEmailID:globalEmailID,
    loadingAttributes:loadingAttributes
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
