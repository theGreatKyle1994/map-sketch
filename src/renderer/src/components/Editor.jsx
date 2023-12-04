import Tile from "./Tile";
import "../assets/editor.css";

const Editor = ({ tiles, tileSize }) => {
  const mapTiles = () => {
    const outline = [];
    for (let i = 0; i < tiles.length; i++) {
      const row = (
        <div className="tile-row-container">
          {tiles[i].map((_) => (
            <Tile key={Math.random()} size={tileSize} />
          ))}
        </div>
      );
      outline.push(row);
    }
    return outline;
  };

  return (
    <div id="editor-container">
      <div id="editor-tile-container">{...mapTiles(tiles, tileSize)}</div>
    </div>
  );
};

export default Editor;
