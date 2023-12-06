import HeaderToolbar from "./components/HeaderToolbar";
import Editor from "./components/Editor";
import SideToolbar from "./components/sideToolbar/SideToolbar";
import { useState, createContext } from "react";
import "./assets/app.css";
export const globalContext = createContext({});

const App = () => {
  const [editorInfo, setEditorInfo] = useState({
    tiles: [
      [0, 0],
      [0, 0],
    ],
    zoom: 100,
  });

  return (
    <globalContext.Provider
      value={{
        editorInfo: editorInfo,
        setEditorInfo: setEditorInfo,
      }}
    >
      <div id="app-container">
        <HeaderToolbar />
        <div id="app-mid-container">
          <Editor />
          <SideToolbar />
        </div>
      </div>
    </globalContext.Provider>
  );
};

export default App;
