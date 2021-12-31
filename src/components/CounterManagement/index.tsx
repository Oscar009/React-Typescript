import React from "react";
import { CounterManagementProps, CounterManagementState } from "./interface";
import axios from "axios";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  constructor(props: CounterManagementProps) {
    super(props);
    this.state = {
      counter: 0,
      users: [],
    };
    console.log("constructor");
  }

  handleAddClick = () => {
    //this.setState({ counter: this.state.counter + 1 });
    this.setState(
      function (prevState) {
        return {
          counter: prevState.counter + 1,
        };
      },
      function () {
        console.log("callback function");
      }
    );
  };

  handleMinusClick = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(
    props: CounterManagementProps,
    state: CounterManagementState
  ) {
    console.log("getDerivedStateFromProps");

    return null;
  }

  clickWindow = () => {
    console.log("Click window event");
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        const data = response.data;

        const users = data.data.map((userData: any) => userData.first_name);

        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });

    window.addEventListener("click", this.clickWindow);
    console.log("componentDidMount");
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.clickWindow);
  }

  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter, users } = this.state;
    return (
      <>
        <h1>Counter Management</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3>Counter: {counter}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
        <ul>
          {users.map((user: any) => (
            <li>{user}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default CounterManagement;
