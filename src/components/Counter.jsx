import { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (this.state.count > 0) {
        return { count: prevState.count - 1 };
      }
    });
  };
  render() {
    return (
      <>
        <h1>Simple counting</h1>
        <p>Counting: {this.state.count}</p>
        <button onClick={this.increment}>Add to One</button>
        <button onClick={this.decrement}>Subtract to One</button>
      </>
    );
  }
}

export default Counter;
