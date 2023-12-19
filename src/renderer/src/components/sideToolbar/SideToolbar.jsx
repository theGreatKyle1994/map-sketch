import "../../assets/sideToolbar/SideToolbar.css";
import EditorSizeForm from "./EditorSizeForm";
import { useState } from "react";

const SideToolbar = () => {
  const [currentTab, setCurrentTab] = useState("editor");

  const tabHandler = (tab) => setCurrentTab(tab);

  return (
    <div id="sideToolbar-container">
      <div id="sideToolbar-tab-container">
        <div className="sideToolbar-tab" onClick={() => tabHandler("editor")}>
          Editor
        </div>
        <div className="sideToolbar-tab" onClick={() => tabHandler("test")}>
          Test
        </div>
      </div>
      {currentTab === "editor" && <EditorSizeForm />}
    </div>
  );
};

export default SideToolbar;
