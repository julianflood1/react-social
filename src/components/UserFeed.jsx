import React from "react";

function UserFeed(props){
  var feedStyle = {
    width: '350',
    height: '600',
    display: 'flex',
    backgroundColor: 'blue'
  }

  var flexStyle = {
    display: 'flex',
    justifyContent:'center'
  }

  return (
    <div style={flexStyle}>
      <div style={feedStyle}>

      </div>
    </div>
  );
}

export default UserFeed;
