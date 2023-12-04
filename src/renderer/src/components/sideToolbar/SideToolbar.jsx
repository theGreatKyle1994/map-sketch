import "../../assets/sideToolbar/SideToolbar.css";
import EditorSizeForm from "./EditorSizeForm";

const SideToolbar = ({ editorOptions }) => {
  return (
    <div id="sideToolbar-container">
      <EditorSizeForm editorOptions={editorOptions} />
    </div>
  );
};

export default SideToolbar;
