import { Component } from 'react';
interface Inter {
    myProp: string;
    check: boolean;
}
export default class BT06 extends Component<any, Inter> {
    constructor(props: any) {
        super(props);
        this.state = {
            myProp: "interface",
            check: true,
        };
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps.myProp !== this.props.myProp) {
            if (this.props.myProp !== "interface") {
                this.setState({ myProp: "interface" });
            }
        }
    }
    handleClick = () => {
        this.setState((prevState) => ({
            check: !prevState.check
        }));
    }
    render() {
        return (
            <div>
                <h3>Message: "{this.state.myProp}"</h3>
                <button onClick={this.handleClick}>Change Props</button>
            </div>
        );
    }
}
