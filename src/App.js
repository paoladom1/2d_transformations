import React, { useState, useRef, useEffect } from "react";

import ControlButton from "./components/ControlButton";
import Canvas from "./components/Canvas";

import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CONNECTIONS,
  clearCanvas,
  drawLine,
  applyTransformationsToPoint,
} from "./utils";

import "./App.css";

function App() {
  const canvasRef = useRef(null);

  // values to handle the levels of mutations
  const [traslation, setTraslation] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // redraw rect
    const redrawSquare = (connections, ctx) => {
      clearCanvas(ctx);
      const colors = ["red", "blue", "green", "black"];

      connections.forEach(([p1, p2], i) => {
        ctx.strokeStyle = colors[i];
        drawLine(p1, p2, ctx);
      });
    };

    const ctx = canvasRef.current.getContext("2d");
    const connections = CONNECTIONS.map(([p1, p2]) => {
      const transformations = { traslation, scale, rotation };
      const new_p1 = applyTransformationsToPoint([p1.x, p1.y], transformations);
      const new_p2 = applyTransformationsToPoint([p2.x, p2.y], transformations);

      return [new_p1, new_p2];
    });
    redrawSquare(connections, ctx);
  }, [traslation, rotation, scale]);

  const increaseTraslation = () => {
    setTraslation(traslation + 1);
  };

  const decreaseTraslation = () => {
    setTraslation(traslation - 1);
  };

  const increaseRotation = () => {
    setRotation(rotation + 1);
  };

  const decreaseRotation = () => {
    setRotation(rotation - 1);
  };

  const increasescale = () => {
    setScale(scale + 1);
  };

  const decreasescale = () => {
    setScale(scale - 1);
  };

  const resetValues = () => {
    setRotation(0);
    setTraslation(0);
    setScale(1);
  }

  return (
    <div className="container">
      <div className="canvas-container">
        <Canvas
          target={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        />
        <div className="lines">
          <span>Line 1:</span>
          <div className="red"></div>
          <span>Line 2:</span>
          <div className="blue"></div>
          <span>Line 3:</span>
          <div className="green"></div>
          <span>Line 4:</span>
          <div className="black"></div>
        </div>
      </div>
      <div className="controls-container">
        <div className="control-container">
          <span>Traslation Control</span>
          <ControlButton
            min={0}
            label={traslation}
            onIncrease={increaseTraslation}
            onDecrease={decreaseTraslation}
          />
        </div>
        <div className="control-container">
          <span>Scalation Control</span>
          <ControlButton
            label={scale}
            onIncrease={increasescale}
            onDecrease={decreasescale}
          />
        </div>
        <div className="control-container">
          <span>Rotation Control</span>
          <ControlButton
            min={0}
            label={rotation}
            onIncrease={increaseRotation}
            onDecrease={decreaseRotation}
          />
        </div>
        <div className="reset-btn">
          <button onClick={resetValues}>Reset default values</button>
        </div>
      </div>
    </div>
  );
}

export default App;
