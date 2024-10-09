import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { Button, Footer, Header, Navbar, Sidebar } from "./components";
import { About, contact } from "./pages";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      {/* Setting Icon */}
      <div className="icon_position bg-primary ">
        <AiFillSetting className="fontSize_icon" />
      </div>

      <div className="row menu_component">
        <Menu />
      </div>
    </>
  );
};

export default App;
