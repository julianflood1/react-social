import React from "react";

function NavButtons(props){
  var navButtonStyles = {
    height: '100',
    width: '100',
    color: 'darkgrey',
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    display: 'inline',
    padding: '20',
    border: '2px solid grey',
  }
  var navLayout = {
    borderBottom: '2px solid grey',
    paddingBottom: '40'
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
