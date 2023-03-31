import React from "react";

export default function LeftBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12">
          <div>
            <div className="mt-3">
              <nav id="sidebarMenu" className=" d-lg-block sidebar bg-white">
                <div className="position-sticky">
                  <div classNameName="list-group list-group-flush mt-4">
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 "
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
        </div>
      </div>
    </>
  );
}
