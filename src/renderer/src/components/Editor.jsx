import Tile from "./Tile";
import { globalContext } from "../App";
import { useContext } from "react";
import "../assets/editor.css";

const Editor = () => {
  const { editorInfo } = useContext(globalContext);
  const { tiles } = editorInfo;
  
  const mapTiles = () => {
    const outline = [];
    for (let i = 0; i < tiles.length; i++) {
      const row = (
        <div className="tile-row-container">
          {tiles[i].map((_) => (
            <Tile key={Math.random()} />
          ))}
        </div>
      );
      outline.push(row);
    }
    return outline;
  };

  return (
    <div id="editor-container">
      <div id="editor-tile-container">{...mapTiles()}</div>
    </div>
  );
};

export default Editor;
