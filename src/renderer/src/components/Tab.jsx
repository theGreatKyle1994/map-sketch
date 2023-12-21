import "../assets/tab.css";

const Tab = ({ state, target, label }) => {
  return (
    <div
      className={`tab ${state.current === target ? "selected" : ""}`}
      onClick={() => state.setter(target)}
    >
      {label}
    </div>
  );
};

export default Tab;
