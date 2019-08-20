
// 转换虚拟dom为dom
export function initVNode(vNode) {
    const { vType } = vNode;
    if (vType === 1) { // 原生节点
        return createElement(vNode);
    } else if (vType === 2) { // class组件
        return createClassComp(vNode);
    } else if (vType === 3) { // function组件
        return createFuncComp(vNode);
    } else { // 当不存在则是 TextNode
        return document.createTextNode(vNode);
    }
}

// 创建原生标签
function createElement(vNode) {
    const { type, props } = vNode;
    const node = document.createElement(type);
    // 处理属性
    const { key, children, ...rest } = props; // 过滤属性
    Object.keys(rest).forEach(attr => {
        if (attr === 'className') {
            node.setAttribute('class', rest[attr]);
        } else if (attr === 'htmlFor') {
            node.setAttribute('for', rest[attr]);
        } else {
            node.setAttribute(attr, rest[attr]);
        }

    });
    // 是否还有子元素
    if (children && children.length > 0) {
        children.forEach(child => {
            // 处理数组
            if (Array.isArray(child)) {
                child.forEach(c => node.appendChild(initVNode(c)));
            } else {
                node.appendChild(initVNode(child));
            }
        })
    }
    return node;
}

// 创建class组件
function createClassComp(vNode) {
    const { type, props } = vNode;
    const comp = new type(props);
    // 执行render
    const v = comp.render();
    return initVNode(v);
}

// 创建function组件
function createFuncComp(vNode) {
    const { type, props } = vNode;
    // 执行函数组件
    const v = type(props);
    return initVNode(v);
}

// 创建虚拟dom
export function createVNode(vType, type, props) {
    // vType类型：1-原生标签，2-函数组件，3-class组件
    const vNode = { vType, type, props };
    return vNode;
}
