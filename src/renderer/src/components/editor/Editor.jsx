import EditorBottomToolbar from "./EditorBottomToolbar";
import Tile from "../Tile";
import { globalContext } from "../../App";
import { useContext, useEffect } from "react";
import "../../assets/editor/editor.css";

const Editor = () => {
  const { editorInfo, setEditorInfo, keys } = useContext(globalContext);
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

  const handleScroll = (e) => {
    if (keys.Shift) {
      setEditorInfo((prevInfo) => {
        let zoomAmount = e.deltaY < 0 ? 30 : -30;
        zoomAmount += prevInfo.zoom.amount;
        if (zoomAmount >= 500) zoomAmount = 500;
        else if (zoomAmount <= 0) zoomAmount = 10;
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
