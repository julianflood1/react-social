import React from "react";
import SuggestedFriend from "./SuggestedFriend";

function SuggestedUsers(props){
  var suggestedUsersStyle = {
    width: '32%',
    height: '600px',
    background: 'white',
    marginTop: '20px',
    padding: '20px',
    boxSizing: 'border-box',
    border: '2px solid grey'
  }


  return (
    <div style={suggestedUsersStyle}>
    {props.childSuggestedUsers.map((childUser, index) =>
      <SuggestedFriend individualUser={childUser}
      key={index}
      handleFriendAdd={props.handleFriendAdd}/>
    )}
    </div>
  );
}

export default SuggestedUsers;
