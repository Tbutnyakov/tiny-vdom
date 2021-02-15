import vdom from 'tiny-vdom';

import { Counter } from './Counter';

export const App = () => {
  return (
    <div>
      Hello world!
      <Counter count={5} />
    </div>
  );
};
