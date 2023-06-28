import React from "react";
import styles from "./navbar.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_main}>
        <Link to="/">
          <p className={styles.para}>HOME</p>
        </Link>
        <Link to="/work">
          {" "}
          <p className={styles.para}>WORK</p>
        </Link>
        <Link to="/tools">
          {" "}
          <p className={styles.para}>TOOLS & SKILLS</p>
        </Link>
        <Link to="contact">
          {" "}
          <p className={styles.para}>CONTACT</p>
        </Link>
        <button className={styles.btn}>
          DOWNLOAD RESUME{" "}
          <a className={styles.dwnldIcon}>
            <ArrowDownwardIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
