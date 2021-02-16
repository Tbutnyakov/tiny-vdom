import { makeElement } from 'tiny-vdom';

export const Button = ({ onClick, ...restProps }, children) => (
  <button {...restProps} onClick={onClick}>
    {children}
  </button>
);
