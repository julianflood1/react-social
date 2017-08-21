import React from "react";

function UserPicName(props){
  var photoStyles= {
    width: '100',
    height: '100',
    borderRadius: '10px',
    backgroundColor: 'darkblue',
    border: 'white 2px solid',
    position: 'absolute',
    top: '210',
    left: '30'
  }
  var name = {
    fontFamily: 'sans-serif',
    marginLeft: '160',
    fontSize: '20',
    marginTop: '0'
  }

  return (
    <div>
      <div style={photoStyles}>
      </div>
      <h2 style={name}>Kellie A. Corrigan</h2>
    </div>
  );
}

export default UserPicName;
