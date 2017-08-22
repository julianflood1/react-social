import React from "react";

function NavButtons(props){
  var navButtonStyles = {
    height: '100px',
    width: '100px',
    color: 'darkgrey',
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    display: 'inline',
    padding: '20px',
    border: '2px solid grey',
  }
  var navLayout = {
    borderBottom: '2px solid grey',
    paddingBottom: '40px'
  }
  return (
    <div style={navLayout}>
      <p style={navButtonStyles}>Home</p>
      <p style={navButtonStyles}>Notifications</p>
      <p style={navButtonStyles}>Messages</p>
    </div>
  );
}

export default NavButtons;
