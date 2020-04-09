import React from "react";

function ColoredSquare({ color }) {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: color
  };
  return <div style={style} />;
}

export default ColoredSquare;
