import React from "react";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";
import UserFeed from "./UserFeed";
import SuggestedUsers from './SuggestedUsers';
import User from '../models/User';
import Post from '../models/Post';
import Navbar from './Navbar';

class AppBody extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      activeUser: new User('Julian Flood', 'blue', 'I love lamp. kdhgkwjdknefkn ,ejgkwjegk egkengkl keng.'),
      otherUser: new User('Jared Eiseman', 'red', 'fklashdfgkdsahfkladshfkladjsklfjadslkjf'),
      posts: [],
      suggestedUsers: [
        new User('Corey Redding', 'brown', 'fkladsjflkjadsflkjdaskljfklasdj'),
        new User('Tyler Allen', 'pink', 'fkladsjflkjadsflkjdaskljfklasdj'),
        new User('Justin Gomez', 'tomato', 'fkladsjflkjadsflkjdaskljfklasdj'),
        new User('Dani Trulls', 'orange', 'fkladsjflkjadsflkjdaskljfklasdj'),
      ]
    }
    this.removeSuggestedUser = this.removeSuggestedUser.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.setState({posts: [
      new Post('Post one', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.activeUser.name, this.state.activeUser.profilePic),
      new Post('Post two', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.otherUser.name, this.state.otherUser.profilePic),
      new Post('Post three', 'asdlkfjsadlkfjasdkljflkafadsfadsfdsafdsafdsafsaddsjflkadsjfkljdsalk', this.state.otherUser.name, this.state.otherUser.profilePic),
      new Post('Post four', 'asdlkfjsadlkfjasdkljflkadsjflkadsjfkljdsalk', this.state.activeUser.name, this.state.activeUser.profilePic)
    ]});
  }

  search(searchTerm) {
    var array = this.state.posts;
    var term = searchTerm.toLowerCase();
    var filteredArray = array.map((post, index) => {
      var testName = post.name.toLowerCase();
      if (testName.includes(term)) {
        post.visible = true;
      } else {
        post.visible = false;
      }
      return post;
    });
    this.setState({posts: filteredArray});
  }

  removeSuggestedUser(name){
    var array = this.state.suggestedUsers;
    for (var i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        array.splice(i, 1);
        this.setState({suggestedUsers: array});
      }
    }
  }

  addNewPost(post){
    var newPostArray = this.state.posts;
    newPostArray.push(post);
    this.setState({posts:newPostArray});
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

    var AppStyle = {
      height: '100%',
      width: '100%',
      marginTop: '40px',
    }

    return (
      <div style={AppStyle}>
        <Navbar search={this.search}/>
        <div style={containerStyle}>
          <div style={leftColumnStyle}>
            <UserHeader user={this.state.activeUser}/>
            <UserInfo bio={this.state.activeUser.bio}/>
          </div>
          <UserFeed activeUser={this.state.activeUser} handleNewStatus={this.addNewPost} postList={this.state.posts}/>
          <SuggestedUsers childSuggestedUsers={this.state.suggestedUsers} handleFriendAdd={this.removeSuggestedUser} />
        </div>
      </div>
    );
  }
}

export default AppBody;
