import { createElement } from '../src/createElement';
import { render } from '../src/render';
import { mount } from '../src/mount';

const roots = [
  createElement('div', { class: 'test' }, [
    'hello',
    'world',
    createElement('img', {
      alt: 'cuteCat',
      src:
        'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg',
    }),
  ]),
  createElement('div', { class: 'test' }, [
    createElement('p', {}, 'one'),
    createElement('p', {}, 'two'),
    createElement('p', {}, 'three'),
  ]),
];

const wrapper = createElement('div', { class: 'test', id: 'testId' }, roots);

const app = mount(render(wrapper), document.getElementById('root'));
