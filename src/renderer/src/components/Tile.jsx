import { globalContext } from "../App";
import { useContext, useEffect } from "react";
import "../assets/tile.css";

const Tile = () => {
  const { editorInfo } = useContext(globalContext);
  const zoomAmount = editorInfo.zoom.amount;

  return (
    <div
      className="tile"
      style={{ height: `${zoomAmount}px`, minWidth: `${zoomAmount}px` }}
    ></div>
  );
};

export default Tile;
