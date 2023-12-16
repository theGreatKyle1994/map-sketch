import { globalContext } from "../App";
import { useContext } from "react";
import "../assets/tile.css";

const Tile = ({ tilePos }) => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);
  const zoomAmount = editorInfo.zoom.amount;

  return (
    <div
      className="tile"
      style={{ height: `${zoomAmount}px`, minWidth: `${zoomAmount}px` }}
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
