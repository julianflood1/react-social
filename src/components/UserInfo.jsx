import React from "react";


function UserInfo(props){
  var InfoStyle = {
    width: 'calc(100% - 40px)',
    border: '2px solid grey',
    height: '500px',
    marginTop: '20px',
    padding: '20px',
    fontFamily: 'sans-serif'
  }
  return (
    <div style={InfoStyle}>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserInfo;
