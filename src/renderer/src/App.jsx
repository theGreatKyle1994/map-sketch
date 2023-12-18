import HeaderToolbar from "./components/HeaderToolbar";
import Editor from "./components/editor/Editor";
import SideToolbar from "./components/sideToolbar/SideToolbar";
import { useState, createContext } from "react";
import useKeyBinds from "./hooks/useKeyBinds";
import "./assets/app.css";
export const globalContext = createContext({});

const App = () => {
  const keys = useKeyBinds();
  const [editorInfo, setEditorInfo] = useState({
    tiles: [
      [{ type: undefined }, { type: undefined }, { type: undefined }],
      [{ type: undefined }, { type: undefined }, { type: undefined }],
      [{ type: undefined }, { type: undefined }, { type: undefined }],
    ],
    zoom: {
      min: 10,
      max: 500,
      step: 10,
      amount: 100,
      speed: 30,
    },
    selectedTile: { x: null, y: null },
  });

  return (
    <globalContext.Provider
      value={{
        keys: keys,
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
