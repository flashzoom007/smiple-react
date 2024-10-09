import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import { Button, Footer, Header, Navbar, Sidebar } from "./components";
import { About, Contact } from "./pages";
import { Area, Line, Bar, Pie } from "./charts";
import {
  AiOutlineMenuUnfold,
  AiFillCloseCircle,
  AiFillAliwangwang
} from "react-icons/ai";

const Menu = () => {
  const activeMenu = true;
  const [isActive, setActive] = useState(true);

  return (
    <>
      <div
        className={
          isActive
            ? "p-3 bg-white mb-3 transition_duration_ms mobile_res col-12"
            : "mb-3 transition_duration_ms p-3 bg-white mobile_res col-12"
        }
      >
        <div className="d-flex justify-content-between mx-3">
          <div className="d-flex">
            <div className="site_name d-flex">
              <span>
                <a href="/">
                  <AiFillAliwangwang className="fontSize_icon" />
                </a>
              </span>
              <span>
                <a
                  href="/"
                  className="text-dark text-decoration-none align-middle ps-2"
                >
                  Shoppy
                </a>
              </span>
            </div>
          </div>
          <div>
            {isActive ? (
              <AiOutlineMenuUnfold
                className="fontSize_icon"
                onClick={() => {
                  isActive ? setActive(false) : setActive(true);
                }}
              />
            ) : (
              <AiFillCloseCircle
                className="fontSize_icon"
                onClick={() => {
                  isActive ? setActive(false) : setActive(true);
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="d-flex row main_section">
        {/** Navbar/ Sidebar **/}

        <div
          className={
            isActive
              ? "d-none transition_duration_ms"
              : "col-md-3 inner_section transition_duration_ms"
          }
        >
          <Sidebar />
        </div>
        <div
          className={
            isActive
              ? "col-md-12 bg-white transition_duration_ms mobile_device"
              : "col-md-9 bg-white"
          }
        >
          <Routes>
            {/* Dashboard */}
            <Route path="/" Component={Home} />
            <Route path="/home" element={<Home />} />

            {/* Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" Component={Error} />

            {/*Charts*/}
            <Route path="/area" Component={Area} />
            <Route path="/line" Component={Line} />
            <Route path="/pie" Component={Pie} />
            <Route path="/bar" Component={Bar} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Menu;
