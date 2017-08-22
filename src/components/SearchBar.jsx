import React from "react";

function SearchBar(props){
  var SearchBarStyle = {
    padding: '10px',
    border: '2px solid lightblue',
    width: '150px',
    borderRadius: '50px',
    float: 'right',
    color: 'grey',
    fontFamily: 'sans-serif',
    marginTop: '-10px'
  }
  return (
    <div>
      <div>
        <p style={SearchBarStyle}>Search</p>
      </div>
    </div>

  );
}

export default SearchBar;
