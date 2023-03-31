import React from "react";
import MainCompo from "./Main/MainCompo";

export default function LeftBar() {
  return (
      <div className="row justify-align-content-lg-start">
        <div className="w-50 col-lg-5">
          <div className="w-25 mt-3 mx-5">
            <nav
              id="sidebarMenu"
              className="collapse d-lg-block sidebar collapse bg-white"
            >
              <div className="position-sticky">
                <div classNameName="list-group list-group-flush mx-3 mt-4">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Post A Job</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Manage Posts</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Inbox</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>My Profile</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Invoices</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action py-2 ripple"
                  >
                    <span>Settings</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <MainCompo />
      </div>
  );
}
