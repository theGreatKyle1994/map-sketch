import { globalContext } from "../App";
import { useContext } from "react";
import "../assets/tile.css";

const Tile = ({ tileInfo }) => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);
  const zoomAmount = editorInfo.zoom.amount;
  const { type, tilePos } = tileInfo;

  return (
    <div
      className="tile"
      style={{ height: `${zoomAmount}px`, minWidth: `${zoomAmount}px` }}
      onClick={() => {
        console.log(type);
        setEditorInfo((prevInfo) => ({
          ...prevInfo,
          selectedTile: tilePos,
        }));
      }}
    ></div>
  );
};

export default Tile;
