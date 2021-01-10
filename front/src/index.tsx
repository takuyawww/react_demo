import React from "react";
import ReactDOM from "react-dom";
// import components
import CalenderBoard from './components/CalenderBoard'

const App = () => {
  return (
    <>
      <CalenderBoard />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
