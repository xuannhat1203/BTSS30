import { Component } from 'react';
interface Props {

}
interface State {
  name: string;
}
export default class BT01 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "Nguyễn Xuân Nhất"
    };
  }
  componentWillMount(): void {
    this.setState({ name: "Xuân Nhất" });
  }
  render() {
    return (
      <div>
        <h3>Bài 1</h3>
        <h5>Tôi là {this.state.name}</h5>
      </div>
    );
  }
}
