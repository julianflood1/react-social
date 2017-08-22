import React from "react";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";
import UserFeed from "./UserFeed";
import SuggestedUsers from './SuggestedUsers';

class AppBody extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    var containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
    var leftColumnStyle = {
      width: '32%',
    }

    return (
      <div style={containerStyle}>
        <div style={leftColumnStyle}>
          <UserHeader/>
          <UserInfo/>
        </div>
        <UserFeed/>
        <SuggestedUsers />
      </div>
    );
  }
}

export default AppBody;
