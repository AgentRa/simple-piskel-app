export default function CreateBaseFrame(canvasSize) {
  return Array.from(Array(canvasSize), () => new Array(canvasSize));
}
