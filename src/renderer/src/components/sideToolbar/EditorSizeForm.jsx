import { useState } from "react";
import "../../assets/sideToolbar/editorSizeForm.css";

const EditorSizeForm = ({ editorOptions }) => {
  const [formData, setFormData] = useState({
    x: editorOptions.editorTiles[0].length,
    y: editorOptions.editorTiles.length,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    editorOptions.setEditorTiles(() => {
      let outline = [];
      for (let i = 0; i < formData.y; i++) {
        let row = [];
        for (let j = 0; j < formData.x; j++) {
          row.push(0);
        }
        outline.push(row);
      }
      return outline;
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
