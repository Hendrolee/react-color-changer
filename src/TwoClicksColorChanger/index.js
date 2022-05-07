import { useState } from "react";
import "./index.css";

const TwoClicksColorChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="Container" style={{ backgroundColor: color }}>
      <h1>Change colors</h1>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
};

export default TwoClicksColorChanger;
