import HeaderToolbar from "./components/HeaderToolbar";
import Editor from "./components/Editor";
import SideToolbar from "./components/SideToolbar";
import "./assets/app.css";

const App = () => {
  return (
    <div id="app-container">
      <HeaderToolbar />
      <div id="app-mid-container">
        <Editor />
        <SideToolbar />
      </div>
    </div>
  );
};

export default App;
