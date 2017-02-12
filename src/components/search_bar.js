import React, { Component } from 'react'; //Need to import react, because this component has jsx

class SearchBar extends Component {
  constructor(props){ //Define our own constructor
    super(props);   //Call the parent constructor. 'props' is the property parameter that can be passed in to Components.

    this.state = {term : ''}; //Only ever set state this way in the constructor. Every other time use setState, because we want to trigger a rerender of this and all child components.
  }
  render(){ //HTML elements emit a change event (vanilla html). Make event={reference to event handler}. Wrap javascript references inside curly braces. The thigns in the curly braces are a prop, or property.
    return(
      <div>
       <input value = {this.state.term}
        onChange={(event)=>this.setState({term: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
