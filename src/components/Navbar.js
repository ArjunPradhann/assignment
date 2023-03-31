import React from "react";

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
                <a class="nav-link" href="#">
                  Post A Job <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Inbox
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Invoice
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Customer
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
