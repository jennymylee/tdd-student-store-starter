import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar() {
  const [currentTab, setCurrentTab] = React.useState("sn-1");
  //   document.getElementById(currentTab).style.borderBottom = "solid 2px #00c385";
  const switchTab = (tabId) => {
    document.getElementById(currentTab).style.borderBottom = "none";
    setCurrentTab(tabId);
    console.log(currentTab);
    document.getElementById(tabId).style.borderBottom = "solid 2px #00c385";
  };
  return (
    <div className="sub-navbar">
      <div className="sn-content">
        <div className="sn-row">
          <div className="search-bar">
            <input
              className="sn-input"
              type="text"
              name="search"
              placeholder="Search"
              value
            ></input>
            <i class="material-icons">search</i>
          </div>
          <div className="row-links">
            <span className="help">
              <i class="material-icons">help</i>
              Help
            </span>
            <div class="cart">
              <a className="cart-a" href="/">
                My Cart<i class="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="sn-row">
          <i class="material-icons">menu</i>
          <div className="sn-headings">
            <button
              className="sn-h"
              id="sn-1"
              onChange={() => switchTab("sn-1")}
            >
              All Categories
            </button>
            <button
              className="sn-h"
              id="sn-2"
              onClick={() => switchTab("sn-2")}
            >
              Clothing
            </button>
            <button
              className="sn-h"
              id="sn-3"
              onClick={() => {
                switchTab("sn-3");
                document.getElementById(currentTab).style.borderBottom = "none";
                setCurrentTab("sn-3");
                document.getElementById(tabId).style.borderBottom =
                  "solid 2px #00c385";
              }}
            >
              Food
            </button>
            <button
              className="sn-h"
              id="sn-4"
              onClick={() => switchTab("sn-4")}
            >
              Accessories
            </button>
            <button
              className="sn-h"
              id="sn-5"
              onClick={() => switchTab("sn-5")}
            >
              Tech
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
