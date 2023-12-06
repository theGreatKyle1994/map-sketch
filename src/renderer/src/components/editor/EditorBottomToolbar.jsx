import { useContext } from "react";
import { globalContext } from "../../App";
import "../../assets/editor/editorBottomToolbar.css";

const EditorBottomToolbar = () => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);

  const zoomChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditorInfo((prevEditorInfo) => ({
      ...prevEditorInfo,
      [name]: value,
    }));
  };

  return (
    <div id="editor-bottom-toolbar-container">
      <form id="zoom-form">
        <label htmlFor="editor-toolbar-size">Zoom: </label>
        <input
          id="editor-toolbar-size"
          type="range"
          step={10}
          min={10}
          max={500}
          name="zoom"
          value={editorInfo.zoom}
          onChange={(e) => zoomChangeHandler(e)}
        />
        <span>{(editorInfo.zoom / 100).toFixed(1)}</span>
      </form>
    </div>
  );
};

export default EditorBottomToolbar;
