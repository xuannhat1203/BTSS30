import { Component, ChangeEvent, KeyboardEvent } from 'react';
interface Props {
    onChange: (value: string) => void;
    onEnter: () => void;
}
export default class Child2 extends Component<Props> {
    getValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }
    handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.props.onEnter();
        }
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleEnter}type="text"placeholder='Nhập text'onChange={this.getValue}/>
            </div>
        );
    }
}
