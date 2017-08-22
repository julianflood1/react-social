import React from "react";

function FeedItem(props){
  var suggestedFriendStyle = {
    height: '100px',
    paddingBottom: '10px',
    borderBottom: '1px solid grey'
  }
  var profileImageStyle = {
    float: 'left',
    backgroundColor: 'coral',
    width: '100px',
    height: '100px',
    marginRight: '15px'
  }
  var contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }

  console.log(props);
  return (
    <div style={suggestedFriendStyle}>
      <div style={profileImageStyle}></div>
      <div style={contentStyle}>
        <span>{props.childPost.title}</span>
        <span>fadsfasdfs</span>
        <p>{props.childPost.body}</p>
      </div>
    </div>
  );
}

export default FeedItem;
