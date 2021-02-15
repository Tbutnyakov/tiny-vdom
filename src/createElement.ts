import { TVDElement, TVDTag, TVDPropRecord } from './types';
import { isFunction } from './utils';

export const createElement = (
  tag: TVDTag | any,
  props: TVDPropRecord = {},
  ...children: TVDElement[]
): TVDElement => {
  console.log('hui');
  if (isFunction(tag)) {
    console.log(tag(props, children));
    return tag(props, children);
  }
  const el = Object.create(null);
  Object.assign(el, { tag, props, children: children.flat() });
  return el;
};
