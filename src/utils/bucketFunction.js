import makeCopy from './makeCopy';
import getCoordinates from './getCoordinates';

export default function bucketFunction(frame, color, pixelSize, e) {
  const clone = makeCopy(frame);
  const sCoords = getCoordinates(e, pixelSize);
  const canvasSize = clone.length;
  const startColor = clone[sCoords.x][sCoords.y] ? clone[sCoords.x][sCoords.y].join() : undefined;

  if (startColor !== color.join()) {
    const stack = [[sCoords.x, sCoords.y]];

    while (stack.length) {
      const position = stack.pop();
      const x = position[0];
      const y = position[1];

      if ((x >= 0 && x < canvasSize) && (y >= 0 && y < canvasSize)) {
        const correntColor = clone[x][y] ? clone[x][y].join() : undefined;

        if (startColor === correntColor) {
          clone[x][y] = color;
          stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
        }
      }
    }
  }

  return clone;
}
