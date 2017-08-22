import React from "react";
import StatusUpdate from './StatusUpdate';
import FeedItem from './FeedItem';

function UserFeed(props){
  var feedStyle = {
    width: '32%',
    marginTop: '20px',
    minHeight: '600px',
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    border: '2px solid grey'
  }

  var feedItemsStyle = {
    padding: '10px'
  }

  return (
      <div style={feedStyle}>
        <StatusUpdate activeUser={props.activeUser} handleNewStatus={props.handleNewStatus} />
      <div style={feedItemsStyle}>
        {props.postList.map((post,index) =>
          <FeedItem childPost={post} key={index} />
        )}
      </div>
      </div>
  );
}

export default UserFeed;
