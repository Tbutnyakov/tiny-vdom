export const mount = (
  newElement: HTMLElement | Text,
  node: HTMLElement | null
) => {
  (node as HTMLElement).replaceWith(newElement);
  return newElement;
};
