import React from "react";
import Navbar from "./Navbar";
import AppBody from "./AppBody";

function App(props){
  var AppStyle = {
    height: '100%',
    width: '100%',
    marginTop: '40px',
  }

  return (
    <div style={AppStyle}>
      <Navbar/>
      <AppBody />
    </div>
  );
}

export default App;
