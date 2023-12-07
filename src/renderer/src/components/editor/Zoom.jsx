import { useContext } from "react";
import { globalContext } from "../../App";
import "../../assets/editor/zoom.css";

const Zoom = () => {
  const { editorInfo, setEditorInfo } = useContext(globalContext);
  const { zoom } = editorInfo;

  const zoomChangeHandler = (e) => {
    const { value } = e.target;
    setEditorInfo((prevEditorInfo) => ({
      ...prevEditorInfo,
      zoom: { ...prevEditorInfo.zoom, amount: Number(value) },
    }));
  };

  return (
    <form id="zoom-form">
      <label htmlFor="editor-toolbar-size">Zoom: </label>
      <input
        id="editor-toolbar-size"
        type="range"
        step={zoom.step}
        min={zoom.min}
        max={zoom.max}
        name="zoom"
        value={zoom.amount}
        onChange={(e) => zoomChangeHandler(e)}
      />
      <span>{(zoom.amount / 100).toFixed(1)}x</span>
    </form>
  );
};

export default Zoom;
