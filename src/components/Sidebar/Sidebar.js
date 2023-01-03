import { React } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className={styles.sidebar_col}>
        <div className={styles.sidenav_left}>
          <div className={styles.sidebar_header}>
            <img
              src="https://wokelo.ai/statichtml/images/logo.png"
              className="img-fluid mx-auto d-block"
              alt="Wokelo Logo"
            ></img>
          </div>
          <ul className="list-unstyled components">
            <li className={styles.active}>
              <Link to="/dashboard">
                <img
                  src="https://wokelo.ai/statichtml/images/icons/home.svg"
                  alt=""
                />
                <h4>Home</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="https://wokelo.ai/statichtml/images/book-open.svg"
                  alt=""
                />
                <h4>Reports</h4>
              </Link>
            </li>
            <li>
              <Link to="">
                <img
                  src="https://wokelo.ai/statichtml/images/bell-ring.png"
                  alt=""
                />
                <h4>Preferences</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
