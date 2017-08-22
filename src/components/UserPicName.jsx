import React from "react";

function UserPicName(props){
  var photoStyles= {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    backgroundColor: 'darkblue',
    border: 'white 2px solid',
    position: 'absolute',
    top: '210px',
    left: '30px'
  }
  var name = {
    fontFamily: 'sans-serif',
    marginLeft: '160px',
    fontSize: '20px',
    marginTop: '0px'
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
