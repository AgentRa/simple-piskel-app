export default function createLink(data, name, format) {
  const link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', `${name}.${format}`);

  return link;
}
