import "./BT08.css"
import { Component } from 'react';
interface Props {
    value: string;
}
export default class Child1 extends Component<Props> {
    render() {
        return (
            <div>
                <div id='divitem'>
                    {this.props.value}
                </div>
            </div>
        );
    }
}
