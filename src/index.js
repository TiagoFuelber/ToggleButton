import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { ToggleButton } from "./components/ToggleButton";

function App() {
  const [on, setOn] = useState(false);
  return (
    <div
      style={{
        padding: "15px",
        margin: "auto",
        maxWidth: "700px",
      }}
    >
      <h1>Toggle Button</h1>
      <ToggleButton on={on} onToggle={() => setOn(!on)} />
      <h2>Status: {on ? "on" : "off"}</h2>
      <h4>
        Pro tip: change the theme of your OS to see the button in dark mode
      </h4>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
