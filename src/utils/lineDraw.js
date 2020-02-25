import makeCopy from './makeCopy';

export default function lineDraw(frame, color, startX, startY, x, y, isMirror = false) {
  const clone = makeCopy(frame);
  const deltaX = Math.abs(startX - x);
  const deltaY = Math.abs(startY - y);
  const signX = x < startX ? 1 : -1;
  const signY = y < startY ? 1 : -1;
  let currX = x;
  let currY = y;
  let error = deltaX - deltaY;
  const center = frame.length / 2;

  do {
    const error2 = error * 2;

    clone[startX][startY] = color;
    clone[currX][currY] = color;

    if (isMirror) {
      const delta = -(currX - center + 1);
      clone[center + delta][currY] = color;
    }

    if (error * 2 > -deltaY) {
      error -= deltaY;
      currX += signX;
    }

    if (error2 < deltaX) {
      error += deltaX;
      currY += signY;
    }
  } while (currX !== startX || currY !== startY);

  return clone;
}
