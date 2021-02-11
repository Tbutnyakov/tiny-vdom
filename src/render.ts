import { TVDElement, TVDElementRecord } from './types';
import { isString, isArray } from './utils';

const renderRecord = (element: TVDElementRecord) => {
  const rEl = document.createElement(element.tag);
  const { children, ...restProps } = element.props;

  Object.entries(restProps).forEach(([key, value]) =>
    rEl.setAttribute(key, value)
  );
  if (!children) return rEl;
  const arrToRender = isArray(children) ? children : [children];
  (arrToRender as TVDElement[]).forEach(ch => rEl.appendChild(render(ch)));

  return rEl;
};

const renderString = (element: string) => document.createTextNode(element);

export const render = (element: TVDElement) => {
  if (isString(element)) return renderString(element as string);

  return renderRecord(element as TVDElementRecord);
};
