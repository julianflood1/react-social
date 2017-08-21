import React from "react";
import Navbar from "./Navbar";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";
import UserFeed from "./UserFeed";

function App(props){
  var AppStyle = {
    height: '100%',
    width: '100%',
    marginTop: '40'
  }
  return (
    <div style={AppStyle}>
      <Navbar/>
      <UserHeader/>
      <UserInfo/>
      <UserFeed/>
    </div>
  );
}

export default App;
