import React from "react";

class FeedItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.likeButtonClicked = this.likeButtonClicked.bind(this);
  }

  likeButtonClicked() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    var suggestedFriendStyle = {
      height: '100px',
      paddingBottom: '10px',
      paddingTop: '10px',
      borderBottom: '1px solid grey'
    }

    if (!this.props.childPost.visible) {
      suggestedFriendStyle.display = 'none';
    }

    var profileImageStyle = {
      float: 'left',
      backgroundColor: this.props.childPost.profilePic,
      width: '100px',
      height: '100px',
      marginRight: '15px'
    }
    var contentStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    }

    var linewrapStyle = {
      wordWrap: 'break-word'
    }

    var likeButtonStyle = {
      padding: '0px 5px',
      background: 'lightblue',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer'
    }

    if (this.state.clicked) {
      likeButtonStyle.background = 'green';
      likeButtonStyle.color = 'white';
    }

    return (
      <div style={suggestedFriendStyle}>
        <div style={profileImageStyle}></div>
        <div style={contentStyle}>
          <span>{this.props.childPost.timestamp} - {this.props.childPost.name}</span>
            <p style={linewrapStyle}>{this.props.childPost.body}</p>
            <button style={likeButtonStyle} onClick={this.likeButtonClicked}>Like</button>
          </div>
      </div>
    );
  }
}

export default FeedItem;
