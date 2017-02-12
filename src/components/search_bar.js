import React, { Component } from 'react'; //Need to import react, because this component has jsx

class SearchBar extends Component {
  render(){
    return <input onChange={(event)=>console.log(event.target.value)}/>; //HTML elements emit a change event (vanilla html). Make event={reference to event handler}. Wrap javascript references inside curly braces. The thigns in the curly braces are a prop, or property.
  }
}

export default SearchBar;
