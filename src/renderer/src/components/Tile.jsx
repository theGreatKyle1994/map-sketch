import { globalContext } from "../App";
import { useContext } from "react";
import "../assets/tile.css";

const Tile = ({ tileInfo }) => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);
  const zoomAmount = editorInfo.zoom.amount;
  const { selectedTile } = editorInfo;
  const { type, tilePos } = tileInfo;
  const isSelected =
    selectedTile.x === tilePos.x && selectedTile.y === tilePos.y;

  return (
    <div
      className="tile"
      style={{
        height: `${zoomAmount}px`,
        minWidth: `${zoomAmount}px`,
        border: isSelected ? "3px solid red" : "",
      }}
      onClick={() => {
        setEditorInfo((prevInfo) => ({
          ...prevInfo,
          selectedTile: tilePos,
        }));
      }}
    ></div>
  );
};

export default Tile;
