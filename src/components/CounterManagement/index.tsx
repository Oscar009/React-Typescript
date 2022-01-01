import axios from "axios";
import React from "react";
import {
  CounterManagementProps,
  CounterManagementState,
  UserDataAPI,
} from "./interface";

class CounterManagement extends React.Component<
  CounterManagementProps,
  CounterManagementState
> {
  constructor(props: CounterManagementProps) {
    super(props);
    this.state = {
      counter: 1,
      userData: {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
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

  shouldComponentUpdate(
    nextProps: CounterManagementProps,
    nextState: CounterManagementState
  ) {
    console.log("shouldComponentUpdate");

    //return this.state.counter < 5;
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: CounterManagementProps,
    prevState: CounterManagementState
  ) {
    console.log("getSnapshotBeforeUpdate");

    return prevState;
  }

  fetchUserData(){
    axios
      .get(`https://reqres.in/api/users/${this.state.counter}`)
      .then((response) => {
        const userDataAPI = response.data as UserDataAPI;

        this.setState({userData: userDataAPI.data})
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(
    prevProps: CounterManagementProps,
    prevState: CounterManagementState,
    snapshot: any
  ) {
    /* console.log("componentDidUpdate");
    console.log("snapshot", snapshot); */
    if(prevState.counter !== this.state.counter){
      this.fetchUserData();
    }
  }

  render() {
    console.log("render");
    const { ownerName } = this.props;
    const { counter, userData } = this.state;
    const { first_name } = userData;
    return (
      <>
        <h1>Counter Management</h1>
        <h2>Owner Name: {ownerName}</h2>
        <h3>Counter: {counter}</h3>
        <h3>First name: {first_name}</h3>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
      </>
    );
  }
}

export default CounterManagement;
