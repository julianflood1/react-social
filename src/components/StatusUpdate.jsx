import React from "react";
import Post from "../models/Post";

class StatusUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.onNewStatus = this.onNewStatus.bind(this);
  }

  onNewStatus(event){
    event.preventDefault();
    var title = 'New Post';
    var body = this.refs._content.value;
    var name = this.props.activeUser.name;
    var profilePic = this.props.activeUser.profilePic;
    var newPost = new Post(title, body, name, profilePic);
    this.props.handleNewStatus(newPost)
  }

  render(){
    var statusUpdateStyle = {
      width: '100%',
      backgroundColor: 'lightblue',
      height:'90px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    var imageStyle = {
      width: '50px',
      height: '50px',
      backgroundColor: 'darkred'
    }

    var inputStyle = {
      height:'50px',
      width:'60%',
      marginLeft: '10px',
      paddingLeft: '5px'
    }

    return (
      <div style={statusUpdateStyle}>
      <div style={imageStyle}></div>
      <form onSubmit={this.onNewStatus}>
        <input style={inputStyle} ref="_content" placeholder="What's Happening?" type="text"/>
      </form>
      </div>
    );
  }

}



export default StatusUpdate;
