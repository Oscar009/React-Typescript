import React from "react";
import "./App.css";
import CounterManagement from "./components/CounterManagement";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>My App</h1>
       <CounterManagement ownerName="Oscar" />
      </>
    );
  }
}

export default App;
