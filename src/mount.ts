export const mount = (
  newElement: HTMLElement | Text,
  node: HTMLElement | null
) => (node ? node.replaceWith(newElement) : node);
