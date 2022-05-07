import { useState } from "react";
import "./index.css";
import { Colorpicker } from "@zendeskgarden/react-colorpickers";

const ColorPickerColorChanger = () => {
  const [color, setColor] = useState("aliceblue");

  return (
    <div className="Container" style={{ backgroundColor: color }}>
      <h1>Change colors</h1>
      <Colorpicker
        onChange={(selectedColor) => {
          setColor(selectedColor.hex);
        }}
        defaultColor={"#f0f8ff"}
      />
    </div>
  );
};

export default ColorPickerColorChanger;
