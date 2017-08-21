import React from "react";

function SearchBar(props){
  var SearchBarStyle = {
    padding: '10',
    border: '2px solid lightblue',
    width: '150',
    borderRadius: '50',
    float: 'right',
    color: 'grey',
    fontFamily: 'sans-serif',
    marginTop: '-10'
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
