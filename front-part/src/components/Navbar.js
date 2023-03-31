import React from "react";
import { FaRegBuilding } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div style={styles.gradient}>
        <nav
          class="navbar navbar-expand-lg  navbar-light align-top"
          style={styles.nav}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end align-top"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="abcd">
                  Post A Job <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="abcd">
                  Inbox
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="abcd">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="abcd">
                  Invoice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="abcd">
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
          <h1 class="text-center">
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
    "min-height": "80px",
    "padding-top": "10px !important",
    "padding-bottom": "0px",
    "margin-right": "80px",
  },
  div: {
    "padding-bottom": "40px",
  },
  gradient: {
    "background-image": "linear-gradient(#d9dadb, #d1e2ef)",
  },
};
