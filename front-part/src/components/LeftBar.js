import React from "react";

export default function LeftBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="mx-auto">
          <div className="">
            <div className="mt-3">
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
