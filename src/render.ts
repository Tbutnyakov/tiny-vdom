import { TVDElement, TVDElementRecord, TVDElementString } from './types';
import { isString, isArray } from './utils';

const renderRecord = (element: TVDElementRecord) => {
  const rEl = document.createElement(element.tag);
  const { children, props } = element;

  Object.entries(props).forEach(([key, value]) => rEl.setAttribute(key, value));
  if (!children) return rEl;
  if (isArray(children ? children : [children]))
    (children as TVDElement[]).forEach(ch => rEl.appendChild(render(ch)));

  return rEl;
};

const renderString = (element: TVDElementString) =>
  document.createTextNode(element);

export const render = (element: TVDElement) => {
  if (isString(element)) return renderString(element as TVDElementString);

  return renderRecord(element as TVDElementRecord);
};
