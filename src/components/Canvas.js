import React from "react";

function Canvas({ target, ...rest }) {
  return (
    <canvas className="canvas" id="myCanvas" ref={target} {...rest}></canvas>
  );
}

export default Canvas;
