import { TVDProps, TVDElement, TVDTag } from './types';

export const createElement = (
  tag: TVDTag,
  props: TVDProps = {}
): TVDElement => {
  const el = Object.create(null);
  Object.assign(el, { tag, props });
  return el;
};
