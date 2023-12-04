import Tile from "./Tile";
import "../assets/editor.css";

function mapTiles(tiles) {
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
}

const Editor = ({ tiles }) => {
  return (
    <div id="editor-container">
      <div id="editor-tile-container">{...mapTiles(tiles)}</div>
    </div>
  );
};

export default Editor;
