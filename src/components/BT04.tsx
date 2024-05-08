import React, { Component } from 'react'
interface Props{
    message:string,
}
export default class BT04 extends Component<any,Props>{
    constructor(props:Props) {
        super(props);
        this.state = {
          message: "Học code để đi làm"
        };
      }
      handleClick = () => {
        this.setState({ message: "Học code sẽ thành công. Cố lên!!!" });
      };
      shouldComponentUpdate(nextProps:any, nextState:any) {
        return nextState.message !== this.state.message;
      }
      render() {
        return (
          <div>
            <h3>Slogan: {this.state.message}</h3>
            <button onClick={this.handleClick}>Click để thay đổi</button>
          </div>
        );
      }
}

