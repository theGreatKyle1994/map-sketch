import { useState, useContext } from "react";
import { globalContext } from "../../App";
import "../../assets/sideToolbar/editorSizeForm.css";

const EditorSizeForm = () => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);
  const [formData, setFormData] = useState({
    x: editorInfo.tiles[0].length,
    y: editorInfo.tiles.length,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setEditorInfo((prevInfo) => {
      let newLayout = [];
      for (let i = 0; i < formData.y; i++) {
        let row = [];
        for (let j = 0; j < formData.x; j++) {
          // Checks if tiles exist before pushing prev tiles on resize
          if (i < prevInfo.tiles.length) row.push(prevInfo.tiles[i][j]);
          else row.push({ type: undefined });
        }
        newLayout.push(row);
      }
      return { ...prevInfo, tiles: newLayout };
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: Number(value) }));
  };

  return (
    <form id="sideToolbar-editor-container" onSubmit={(e) => submitHandler(e)}>
      <h3>Editor Size</h3>
      <div className="sideToolbar-editor-div">
        <label htmlFor="editor-size-x">X: </label>
        <input
          id="editor-size-x"
          type="number"
          min={1}
          name="x"
          value={formData.x}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="sideToolbar-editor-div">
        <label htmlFor="editor-size-y">Y: </label>
        <input
          id="editor-size-y"
          type="number"
          min={1}
          name="y"
          value={formData.y}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default EditorSizeForm;
