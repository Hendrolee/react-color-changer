import "./App.css";
import ColorPickerColorChanger from "./ColorPickerColorChanger";
import TwoClicksColorChanger from "./TwoClicksColorChanger";
import { ThemeProvider } from "@zendeskgarden/react-theming";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TwoClicksColorChanger />
        <ColorPickerColorChanger />
      </div>
    </ThemeProvider>
  );
}

export default App;
