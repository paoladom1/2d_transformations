import * as math from "mathjs";

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 600;

const ROTATION_STEP = (10 * Math.PI) / 180;
const STEP = 30;
const POINTS = {
  p1: { x: 75, y: 25 },
  p2: { x: 75, y: 50 },
  p3: { x: 100, y: 50 },
  p4: { x: 100, y: 25 },
};

const CONNECTIONS = [
  [POINTS.p1, POINTS.p2],
  [POINTS.p2, POINTS.p3],
  [POINTS.p3, POINTS.p4],
  [POINTS.p4, POINTS.p1],
];

const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const drawLine = (p1, p2, ctx) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = "4";
  ctx.stroke();
};

const applyTransformationsToPoint = (
  [x, y],
  { traslation, scale, rotation }
) => {
  // initial coords vector/matrix
  const coords_matrix = math.matrix([x, y, 1]);

  // transformations
  const traslate_matrix = math.matrix([
    [1, 0, STEP * traslation],
    [0, 1, STEP * traslation],
    [0, 0, 1],
  ]);
  const scale_matrix = math.matrix([
    [scale, 0, 0],
    [0, scale, 0],
    [0, 0, 1],
  ]);
  const rotation_matrix = math.matrix([
    [
      Math.cos(ROTATION_STEP * rotation),
      Math.sin(ROTATION_STEP * rotation) * -1,
      0,
    ],
    [Math.sin(ROTATION_STEP * rotation), Math.cos(ROTATION_STEP * rotation), 0],
    [0, 0, 1],
  ]);

  // traslation x rotation = inter_res
  const {
    _data: [new_x, new_y],
  } = math.multiply(
    traslate_matrix,
    rotation_matrix,
    scale_matrix,
    coords_matrix
  );

  return [new_x, new_y];
};

export {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  ROTATION_STEP,
  STEP,
  CONNECTIONS,
  clearCanvas,
  drawLine,
  applyTransformationsToPoint,
};
