import { mount, render } from 'tiny-vdom';

import { App } from './TestComponents/App';

mount(render(App()), document.getElementById('root'));
