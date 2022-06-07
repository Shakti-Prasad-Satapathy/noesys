import React, { useState } from "react";
import DragMove from "./DragMove";
import Chart from "./Chart";
import "./style.css";

const Container = () => {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  // this function update the state with the co-ordinate points
  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  return (
    // this block holds the chart. the block is resizable
    <div
      className="main-Container"
      style={{
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
      }}
    >
      {/* this component helpes to move the  container on the document (screen) */}
      <DragMove onDragMove={handleDragMove}>
        <p className="header">Click Here And Move To Relocate The Container</p>
      </DragMove>
      {/* billow component compose the custom chart by using 3rd party library */}
      <Chart />
    </div>
  );
};

export default Container;
