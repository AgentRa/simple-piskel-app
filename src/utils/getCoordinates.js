export default function getCoordinates(e, pixelSize) {
  const event = e.nativeEvent ? e.nativeEvent : e;
  const x = Math.floor(event.offsetX / pixelSize);
  const y = Math.floor(event.offsetY / pixelSize);

  return { x, y };
}
