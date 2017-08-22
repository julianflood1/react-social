import React from "react";
import UserPicName from "./UserPicName";

function UserHeader(props){
  var userHeaderStyles = {
    width: '100%',
    height: '270px',
    backgroundColor: 'white',
    marginTop: '20px',
    border: '2px solid grey'
  }
  var darkbox = {
    width: '100%',
    height: '55%',
    backgroundColor: 'darkblue'
  }
  var listStyle = {
    listStyleType: 'none',
    display: 'inline',
    marginLeft: '20px',
    fontFamily: 'sans-serif'
  }
  var text = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  }

  return (
    <div style={userHeaderStyles}>
      <div style={darkbox}></div>
      <UserPicName/>
      <div style={text}>
        <li style={listStyle}>Tweets</li>
        <li style={listStyle}>Following</li>
        <li style={listStyle}>Followers</li>
      </div>
    </div>
  );
}

export default UserHeader;
