import { TVDElement, TVDElementRecord } from './types';
import { isString, isArray } from './utils';

const renderRecord = (element: TVDElementRecord) => {
  const { tag, children = [], props } = element;

  const rEl = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) =>
    rEl.setAttribute(key, value)
  );

  const arrToRender = isArray(children) ? children : [children];

  (arrToRender as TVDElement[])
    .filter(Boolean)
    .forEach(ch => rEl.appendChild(render(ch)));

  return rEl;
};

const renderString = (element: string) => document.createTextNode(element);

export const render = (element: TVDElement) => {
  if (isString(element)) return renderString(element as string);

  return renderRecord(element as TVDElementRecord);
};
