import vdom from 'tiny-vdom';

export const Button = ({ children, onClick, ...restProps }) => (
  <button {...restProps} onClick={onClick}>
    {children}
  </button>
);
