import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CAIndex from "./pages/CompetitorAnalysis/CAIndex/CAIndex";
import Market_Snapshot_Index from "./pages/MarketSnapshot/Market_Snapshot_Index/Market_Snapshot_Index";
import Market_Snapshot_Attributes from "./pages/MarketSnapshot/Market_Snapshot_Attributes/Market_Snapshot_Attributes";
import Market_Snapshot_Analysis from "./pages/MarketSnapshot/Market_Snapshot_Analysis/Market_Snapshot_Analysis";
import Market_Snapshot_Final from "./pages/MarketSnapshot/Market_Snapshot_Final/Market_Snapshot_Final";
import Peer_Analysis_Download from "./pages/CompetitorAnalysis/Peer_Analysis_Download/Peer_Analysis_Download";
import Market_Snapshot_Download from "./pages/MarketSnapshot/Market_Snapshot_Download/Market_Snapshot_Download";
import Recent_Strategy_Index from "./pages/RecentStrategy/Recent_Strategy_Index/Recent_Strategy_Index";



function App() {
  return (
    <div className="App">
      <Routes>
        {/* <AuthProvider> */}
        <Route
          exact
          path="/"
          element={
            // <PrivateRoute>
            <LandingPage />
            // </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/peer_analysis_index"
          element={
            <PrivateRoute>
              <CAIndex />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/peer_analysis_download"
          element={
            <PrivateRoute>
              <Peer_Analysis_Download />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/market_snapshot_index"
          element={
            <PrivateRoute>
              <Market_Snapshot_Index />
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/market_snapshot_attributes"
          element={
            <PrivateRoute>
              <Market_Snapshot_Attributes/>
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/market_snapshot_analysis"
          element={
            <PrivateRoute>
              <Market_Snapshot_Analysis/>
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/market_snapshot_final"
          element={
            <PrivateRoute>
              <Market_Snapshot_Final/>
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/market_snapshot_download"
          element={
            <PrivateRoute>
              <Market_Snapshot_Download/>
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/recent_strategy_index"
          element={
            <PrivateRoute>
              <Recent_Strategy_Index/>
             </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        {/* <Route path="/competitor_analysis_sector" element={<CompAnalysis1 />} />
        <Route path="/competitor_analysis_company" element={<CompAnalysis2 />} />
        <Route
        path="/competitor_analysis_select_company"
        element={<CompAnanlysis3 />}
        />
        <Route
        path="/competitor_analysis_select_attributes"
        element={<CompAnalysis4 />}
      /> */}
        {/* </AuthProvider> */}
      </Routes>

      {/* <CompAnanlysis3 /> */}
      {/* <CompAnalysis4 />  */}
      {/* <MarketSnapshot1 /> */}
      {/* <MarketSnapshot2 /> */}
      {/* <Dashboard1 /> */}
    </div>
  );
}

export default App;
