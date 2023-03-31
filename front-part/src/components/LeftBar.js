import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import { RiMailSettingsFill } from "react-icons/ri";
import { BsFillInboxFill, BsFillPersonFill } from "react-icons/bs";
import { TbFileInvoice, TbSettingsFilled } from "react-icons/tb";

export default function LeftBar() {
  return (
    <>
      <div className="container-fluid h-100 d-inline-block">
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
                      <span>
                        <IoIosSpeedometer
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                            align: "center",
                          }}
                        />
                        &nbsp;Dashboard
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <FaSuitcase
                          style={{ color: "grey", fontSize: "0.78em" }}
                        />
                        &nbsp;Post A Job
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <RiMailSettingsFill
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                          }}
                        />
                        &nbsp;Manage Posts
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <BsFillInboxFill
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                          }}
                        />
                        &nbsp;Inbox
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <BsFillPersonFill
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                          }}
                        />
                        &nbsp;My Profile
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <TbFileInvoice
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                          }}
                        />
                        &nbsp;Invoices
                      </span>
                    </a>
                    <a
                      href="#"
                      className="list-group-item list-group-item-action py-2 ripple"
                    >
                      <span>
                        <TbSettingsFilled
                          style={{
                            color: "grey",
                            fontSize: "0.85em",
                          }}
                        />
                        &nbsp;Settings
                      </span>
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

const styles = {
  main: {
    boxShadow: "1px 1px 1px 1px grey",
    // border: "1solid",
    borderRadius: "5px",
  },
};
