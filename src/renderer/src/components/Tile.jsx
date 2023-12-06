import { globalContext } from "../App";
import { useContext } from "react";
import "../assets/tile.css";

const Tile = () => {
  const { editorInfo } = useContext(globalContext);
  const { zoom } = editorInfo;

  return (
    <div
      className="tile"
      style={{ height: `${zoom}px`, minWidth: `${zoom}px` }}
    ></div>
  );
};

export default Tile;
