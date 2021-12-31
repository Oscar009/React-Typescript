import React from "react";
import "./App.css";
import  { Button }  from "./components/Button";

function App() {
  return (
    <>
      <h1>My App</h1>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
    </>
  );
}

export default App;
