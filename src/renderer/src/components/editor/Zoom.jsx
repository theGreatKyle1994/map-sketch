import { useContext } from "react";
import { globalContext } from "../../App";
import "../../assets/editor/zoom.css";

const Zoom = () => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);

  const zoomChangeHandler = (e) => {
    const { value } = e.target;
    setEditorInfo((prevEditorInfo) => ({
      ...prevEditorInfo,
      zoom: value,
    }));
  };

  return (
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
      <span>{(editorInfo.zoom / 100).toFixed(1)}x</span>
    </form>
  );
};

export default Zoom;
