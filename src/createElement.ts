import { TVDProps, TVDElement, TVDTag } from './types';

export const createElement = (
  tag: TVDTag,
  props: TVDProps = {},
  children?: TVDElement | TVDElement[]
): TVDElement => {
  const el = Object.create(null);
  Object.assign(el, { tag, props, children });
  return el;
};
