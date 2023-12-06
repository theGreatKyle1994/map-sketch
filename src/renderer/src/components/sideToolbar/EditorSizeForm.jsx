import { useState, useContext } from "react";
import { globalContext } from "../../App";
import "../../assets/sideToolbar/editorSizeForm.css";

const EditorSizeForm = () => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);

  const [formData, setFormData] = useState({
    x: editorInfo.tiles[0].length,
    y: editorInfo.tiles.length,
    zoom: 100,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setEditorInfo(() => {
      let outline = [];
      for (let i = 0; i < formData.y; i++) {
        let row = [];
        for (let j = 0; j < formData.x; j++) {
          row.push(0);
        }
        outline.push(row);
      }
      return { tiles: outline, zoom: formData.zoom };
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
      <div className="sideToolbar-editor-div">
        <label htmlFor="editor-size">Size (px): </label>
        <input
          id="editor-size"
          type="number"
          min={10}
          name="zoom"
          value={formData.zoom}
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default EditorSizeForm;
