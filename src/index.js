import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This produces html
const App = function(){
  return <div>Hi!</div>;
}

//Take the generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
