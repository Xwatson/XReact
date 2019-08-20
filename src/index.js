import React from './xreact';
import ReactDOM from './xreact-dom';

function FuncComp(props) {
    return <p>hello, {props.name}</p>
}

class ClassComp extends React.Component{
    render() {
        return <p>hello, {this.props.name}</p>
    }
}
const jsx = (
    <div>
        x-react
        <FuncComp name='func comp'/>
        <ClassComp name='class comp' />
        <ul>
            {
                [1,2,3].map(m => <li>数组-{m}</li>)
            }
        </ul>
    </div>
)

ReactDOM.render(jsx, document.getElementById('root'));

