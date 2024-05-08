import { Component } from 'react';
interface Props {}
interface State {
  status: boolean;
  nameCompany: string;
}
export default class BT03 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      status: false,
      nameCompany: "RikkeiAcademy"
    };
  }
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.status !== this.state.status) {
      this.updateNameCompany(); 
    }
  }
  updateNameCompany = () => {
    const newNameCompany = this.state.status ? "Rikkei Soft" : "RikkeiAcademy";
    this.setState({ nameCompany: newNameCompany });
  };
  changeCompany = () => {
    this.setState({ status: !this.state.status });
  };
  render() {
    return (
      <div>
        <h3>Bài 3</h3>
        <h3>Company: {this.state.nameCompany}</h3>
        <button onClick={this.changeCompany}>Change Company</button>
      </div>
    );
  }
}

