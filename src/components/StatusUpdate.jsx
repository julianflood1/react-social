import React from "react";

function StatusUpdate(props){
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
      <input style={inputStyle} placeholder="What's Happening?" type="text"/>
    </div>
  );
}

export default StatusUpdate;
