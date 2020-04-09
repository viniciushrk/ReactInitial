import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
//import Counter from "./counter";
import ColoredSquare from "./ColoredSquare";
import ColorizerButton from "./ColorizerButton";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <ColoredSquare color={color} />
      <ColorizerButton
        title="Vermelho"
        clicked={() => {
          setColor("red");
        }}
      />
      <ColorizerButton
        title="Verde"
        clicked={() => {
          setColor("green");
        }}
      />
      <ColorizerButton
        title="Azul"
        clicked={() => {
          setColor("blue");
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
