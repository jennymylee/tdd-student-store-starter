import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar() {
  const [currentTab, setCurrentTab] = React.useState("sn-1");
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    setSearchValue("");
  }, [currentTab]);
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
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
                setCurrentTab("");
              }}
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
              style={
                currentTab == "all"
                  ? { borderBottom: "solid 2px #00c385" }
                  : null
              }
              id="all"
              onClick={() => setCurrentTab("all")}
            >
              All Categories
            </button>
            <button
              className="sn-h"
              id="clothing"
              style={
                currentTab == "clothing"
                  ? { borderBottom: "solid 2px #00c385" }
                  : null
              }
              onClick={() => setCurrentTab("clothing")}
            >
              Clothing
            </button>
            <button
              className="sn-h"
              id="food"
              style={
                currentTab == "food"
                  ? { borderBottom: "solid 2px #00c385" }
                  : null
              }
              onClick={() => {
                setCurrentTab("food");
              }}
            >
              Food
            </button>
            <button
              className="sn-h"
              id="accessories"
              style={
                currentTab == "accessories"
                  ? { borderBottom: "solid 2px #00c385" }
                  : null
              }
              onClick={() => setCurrentTab("accessories")}
            >
              Accessories
            </button>
            <button
              className="sn-h"
              id="tech"
              style={
                currentTab == "tech"
                  ? { borderBottom: "solid 2px #00c385" }
                  : null
              }
              onClick={() => setCurrentTab("tech")}
            >
              Tech
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
