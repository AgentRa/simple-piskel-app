export default function renderCanvas(canvas, frame, pixelSize, clearCanvas = true) {
  const context = canvas.getContext('2d');

  if (clearCanvas) context.clearRect(0, 0, canvas.width, canvas.height);

  frame.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell) return;
      context.fillStyle = `rgb(${cell.join()})`;
      context.fillRect(pixelSize * i, pixelSize * j, pixelSize, pixelSize);
    });
  });
}
