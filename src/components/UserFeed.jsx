import React from "react";
import StatusUpdate from './StatusUpdate';
import FeedItem from './FeedItem';

function UserFeed(props){
  var feedStyle = {
    width: '32%',
    marginTop: '20px',
    height: '600px',
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
        <StatusUpdate />
      <div style={feedItemsStyle}>
        {props.postList.map((post,index) =>
          <FeedItem childPost={post} />
        )}
      </div>
      </div>
  );
}

export default UserFeed;
