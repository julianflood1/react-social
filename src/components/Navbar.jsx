import React from "react";
import NavButtons from "./NavButtons";
import SearchBar from "./SearchBar";

function Navbar(props){
  var navbarStyles = {
    width: '100%'
    }
  return (
    <div style={navbarStyles}>
      <SearchBar/>
      <NavButtons/>
    </div>
  );
}

export default Navbar;
