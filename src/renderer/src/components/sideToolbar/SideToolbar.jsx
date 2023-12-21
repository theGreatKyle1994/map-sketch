import "../../assets/sideToolbar/SideToolbar.css";
import EditorSizeForm from "./EditorSizeForm";
import Tab from "../Tab";
import { useState } from "react";

const SideToolbar = () => {
  const [currentTab, setCurrentTab] = useState("editor");
  const renderTabContents = {
    editor: <EditorSizeForm />,
  };

  return (
    <div id="sideToolbar-container">
      <div id="sideToolbar-tab-container">
        <Tab
          label={"Editor"}
          target={"editor"}
          state={{ setter: setCurrentTab, current: currentTab }}
        />
        <Tab
          label={"Test"}
          target={"test"}
          state={{ setter: setCurrentTab, current: currentTab }}
        />
      </div>
      {renderTabContents[currentTab]}
    </div>
  );
};

export default SideToolbar;
