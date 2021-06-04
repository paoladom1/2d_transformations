import React from "react";

function Canvas({ target, ...rest }) {
  return (
    <canvas className="Canvas" id="myCanvas" ref={target} {...rest}></canvas>
  );
}

export default Canvas;
