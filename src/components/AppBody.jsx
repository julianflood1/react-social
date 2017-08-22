import React from "react";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";
import UserFeed from "./UserFeed";
import SuggestedUsers from './SuggestedUsers';
import User from '../models/User';
import Post from '../models/Post';

class AppBody extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      activeUser: new User('Julian Flood', 'blue', 'I love lamp. kdhgkwjdknefkn ,ejgkwjegk egkengkl keng.'),
      otherUser: new User('Jared Eiseman', 'red', 'fklashdfgkdsahfkladshfkladjsklfjadslkjf'),
      posts: []
    }
  }

  componentDidMount() {
    this.setState({posts: [
      new Post('Post one', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.activeUser.name, this.state.activeUser.profilePic),
      new Post('Post two', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.otherUser.name, this.state.otherUser.profilePic),
      new Post('Post three', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.otherUser.name, this.state.otherUser.profilePic),
      new Post('Post four', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.activeUser.name, this.state.activeUser.profilePic)
    ]});
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
          <UserHeader user={this.state.activeUser}/>
          <UserInfo bio={this.state.activeUser.bio}/>
        </div>
        <UserFeed postList={this.state.posts}/>
        <SuggestedUsers />
      </div>
    );
  }
}

export default AppBody;
