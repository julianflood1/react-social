import React from "react";
import SuggestedFriend from "./SuggestedFriend";

function SuggestedUsers(props){
  var suggestedUsersStyle = {
    width: '32%',
    height: '600px',
    background: 'tomato',
    marginTop: '20px',
    padding: '20px',
    boxSizing: 'border-box'
  }

  return (
    <div style={suggestedUsersStyle}>
      <SuggestedFriend />
    </div>
  );
}

export default SuggestedUsers;
