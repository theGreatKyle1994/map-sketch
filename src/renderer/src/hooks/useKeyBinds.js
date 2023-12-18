import { useState, useEffect } from "react";

const useKeyBinds = () => {
  const allowedKeys = Object.freeze({ Shift: false });
  const [keys, setKeys] = useState(allowedKeys);

  const updateKeys = (key, val) => {
    if (key in allowedKeys)
      setKeys((prevKeys) => ({ ...prevKeys, [key]: val }));
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => updateKeys(e.key, true));
    document.addEventListener("keyup", (e) => updateKeys(e.key, false));

    return () => {
      document.removeEventListener("keydown");
      document.removeEventListener("keyup");
    };
  }, []);

  return keys;
};

export default useKeyBinds;
