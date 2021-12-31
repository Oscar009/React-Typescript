import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  constructor(props: CounterManagementProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleAddClick = () => {
    //this.setState({ counter: this.state.counter + 1 });
    this.setState(function (prevState) {
      return {
        counter: prevState.counter + 1,
      };
    }, function(){
        console.log('callback function')
    });
  };

  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { ownerName } = this.props;
    const { counter } = this.state;
    return (
      <>
        <h1>Counter Management</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
      </>
    );
  }
}

export default CounterManagement;
