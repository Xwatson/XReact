import { initVNode } from './xvdom';

function render(vNode, container) {
    container.appendChild(initVNode(vNode));
}

export default {
    render
}