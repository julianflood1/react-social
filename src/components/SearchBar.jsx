import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.userInteraction = this.userInteraction.bind(this);
  }

  userInteraction() {
    this.props.search(this.refs._searchTerm.value);
  }

  render() {
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
          <input ref="_searchTerm" style={SearchBarStyle} type="text" placeholder="Search" onKeyUp={this.userInteraction}/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
