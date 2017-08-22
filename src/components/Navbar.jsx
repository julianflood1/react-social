import React from "react";
import NavButtons from "./NavButtons";
import SearchBar from "./SearchBar";

function Navbar(props){
  var navbarStyles = {
    width: '100%'
    }
  return (
    <div style={navbarStyles}>
      <SearchBar search={props.search}/>
      <NavButtons/>
    </div>
  );
}

export default Navbar;
