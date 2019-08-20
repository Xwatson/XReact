import { createVNode } from './xvdom';

function createElement(type, props, ...children) {

    props.children = children;
    delete props.__source;
    delete props.__self;
    console.log('createElement--', type, children)

    // 判断组件类型
    let vType;
    if (typeof type === 'string') { // 原生标签，div,span
        vType = 1;
    } else if (typeof type === 'function') {
        if (type.isClassComponent) { // class组件
            vType = 2;
        } else { // function组件
            vType = 3;
        }
    }
    return createVNode(vType, type, props);
}

class Component {
    // 标记当前是class组件
    static isClassComponent = true;
    constructor(props){
        this.props = props;
        this.state = {};
    }
}

export default {
    createElement,
    Component
}