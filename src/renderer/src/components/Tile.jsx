import "../assets/tile.css";

const Tile = ({ size }) => {
  return (
    <div
      className="tile"
      style={{ height: `${size}px`, minWidth: `${size}px` }}
    ></div>
  );
};

export default Tile;
