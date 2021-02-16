import { TVDElement, TVDTag, TVDPropRecord } from './types';
import { isFunction } from './utils';

export const makeElement = (
  tag: TVDTag | any,
  props: TVDPropRecord = {},
  ...children: TVDElement[]
): TVDElement => {
  if (isFunction(tag)) {
    return tag(props, children);
  }
  const el = Object.create(null);
  Object.assign(el, { tag, props, children: children.flat() });
  return el;
};
