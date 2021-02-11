import { createElement } from '../src/createElement';
import { render } from '../src/render';
import { mount } from '../src/mount';
import { diff } from '../src/diff';

const makeCounter = newCount =>
  createElement('div', { children: ['the count is:', String(newCount)] });

let count = 0;

let oldApp = makeCounter(count);
let rootEl = mount(render(oldApp), document.getElementById('root'));

setInterval(() => {
  count++;

  const newApp = makeCounter(count);
  const patch = diff(oldApp, newApp);

  rootEl = patch(rootEl);

  oldApp = newApp;
}, 1000);
