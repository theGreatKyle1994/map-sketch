import EditorBottomToolbar from "./EditorBottomToolbar";
import Tile from "../Tile";
import { globalContext } from "../../App";
import { useContext } from "react";
import "../../assets/editor/editor.css";

const Editor = () => {
  const { editorInfo, setEditorInfo, keys } = useContext(globalContext);
  const { tiles } = editorInfo;

  // Maps the general outline for the editor
  const mapTiles = () => {
    const outline = [];
    for (let i = 0; i < tiles.length; i++) {
      const row = (
        <div className="tile-row-container">
          {tiles[i].map((tile, j) => (
            <Tile
              key={Math.random()}
              // Gives each tile its info and coords
              tileInfo={{ ...tile, tilePos: { x: j, y: i } }}
            />
          ))}
        </div>
      );
      outline.push(row);
    }
    return outline;
  };

  // Scroll handler for the editor based on keybinds
  const handleScroll = (e) => {
    if (keys.Shift) {
      setEditorInfo((prevInfo) => {
        const { speed, amount, min, max } = prevInfo.zoom;
        let zoomAmount = (e.deltaY < 0 ? speed : -speed) + amount;
        if (zoomAmount >= 500) zoomAmount = max;
        else if (zoomAmount <= 0) zoomAmount = min;
        return {
          ...prevInfo,
          zoom: {
            ...prevInfo.zoom,
            amount: zoomAmount,
          },
        };
      });
    }
  };

  return (
    <div id="editor-container" onWheel={handleScroll}>
      <div id="editor-tile-container">{...mapTiles()}</div>
      <EditorBottomToolbar />
    </div>
  );
};

export default Editor;
