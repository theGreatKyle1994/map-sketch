import HeaderToolbar from "./components/HeaderToolbar";
import Editor from "./components/Editor";
import SideToolbar from "./components/sideToolbar/SideToolbar";
import { useState } from "react";
import "./assets/app.css";

const App = () => {
  const [editorTiles, setEditorTiles] = useState([
    [0, 0],
    [0, 0],
  ]);

  return (
    <div id="app-container">
      <HeaderToolbar />
      <div id="app-mid-container">
        <Editor tiles={editorTiles} />
        <SideToolbar
          editorOptions={{
            editorTiles: editorTiles,
            setEditorTiles: setEditorTiles,
          }}
        />
      </div>
    </div>
  );
};

export default App;
