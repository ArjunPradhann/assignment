import React from "react";
import { FaRegBuilding } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div style={styles.gradient}>
        <nav
          className="navbar navbar-expand-lg navbar-light align-top"
          style={styles.nav}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-top"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="abcd">
                  Post A Job <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abcd">
                  Inbox
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abcd">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abcd">
                  Invoice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abcd">
                  <FaRegBuilding
                    style={{
                      color: "grey",
                      fontSize: "0.85em",
                      align: "center",
                    }}
                  />
                  &nbsp;Customer
                </a>
              </li>
            </ul>
          </div>
          <br />
        </nav>
        <div style={styles.div}>
          <h1 className="text-center">
            TECHNOLOGY <span style={{ color: "red" }}>&</span> STAFFING
            SOLUTIONS
          </h1>
        </div>
      </div>
    </>
  );
}

const styles = {
  nav: {
    minHeight: "80px",
    paddingTop: "10px !important",
    paddingBottom: "0px",
    marginRight: "80px",
  },
  div: {
    paddingBotton: "40px",
  },
  gradient: {
    backgroundImage: "linear-gradient(#d9dadb, #d1e2ef)",
  },
};
