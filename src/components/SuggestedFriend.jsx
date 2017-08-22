import React from "react";



class SuggestedFriend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hovered: false};
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    switch (this.state.hovered) {
      case true: this.setState({hovered: false}); break;
      case false: this.setState({hovered: true}); break;
    }
  }

  render() {

    var suggestedFriendStyle = {
      height: '100px'
    }

    var profileImageStyle = {
      float: 'left',
      backgroundColor: 'lightblue',
      width: '100px',
      height: '100px',
      marginRight: '15px'
    }

    var buttonStyle = {
      width: '150px',
      height: '50px',
      backgroundColor: 'darkblue',
      color: '#fff',
      transition: 'all 0.3s',
      cursor: 'pointer'
    }

    if (this.state.hovered) {
      buttonStyle.backgroundColor = 'green';
    }

    var nameButtonStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    };

    return (
      <div style={suggestedFriendStyle}>
        <div style={profileImageStyle}></div>
        <div style={nameButtonStyle}>
          <span>Donec eu orci et</span>
          <button style={buttonStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>Button</button>
        </div>
      </div>
    );
  }

}

export default SuggestedFriend;
