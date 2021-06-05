import React from "react";

function Canvas({ target, ...rest }) {
  return (
    <div className="canvas-div">
      <canvas className="canvas" id="myCanvas" ref={target} {...rest}></canvas>
    </div>
  );
}

export default Canvas;
