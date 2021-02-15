import { mount, render } from 'tiny-vdom';
import { App } from './TestComponents/App';

console.log(render(App));
mount(render(App), document.getElementById('root'));
