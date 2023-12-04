import HeaderToolbar from "./components/HeaderToolbar";
import Editor from "./components/Editor";
import SideToolbar from "./components/sideToolbar/SideToolbar";
import { useState } from "react";
import "./assets/app.css";

const App = () => {
  const [editorTiles, setEditorTiles] = useState({
    tiles: [
      [0, 0],
      [0, 0],
    ],
    size: 100,
  });

  return (
    <div id="app-container">
      <HeaderToolbar />
      <div id="app-mid-container">
        <Editor tiles={editorTiles.tiles} tileSize={editorTiles.size} />
        <SideToolbar
          editorOptions={{
            editorTiles: editorTiles.tiles,
            setEditorTiles: setEditorTiles,
          }}
        />
      </div>
    </div>
  );
};

export default App;
