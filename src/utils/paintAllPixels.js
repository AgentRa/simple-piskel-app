import makeCopy from './makeCopy';

export default function paintAllPixels(frame, color) {
  const clone = makeCopy(frame);

  clone.forEach((row, x) => {
    row.forEach((cell, y) => {
      clone[x][y] = color;
    });
  });

  return clone;
}
