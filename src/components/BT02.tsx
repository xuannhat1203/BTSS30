import { Component } from 'react'
interface Notice{
  text:string,
}
export default class BT02 extends Component<any,Notice> {
  constructor(props:Notice){
    super(props);
    this.state = {
      text: "",
    }
  }
  componentWillMount(): void {
    this.setState({text:"Component đã được mount!"})
  }
  render() {
    return (
      <div>
        <h3>Bài 2</h3>
        <h4>{this.state.text}</h4>
      </div>
    )
  }
}


