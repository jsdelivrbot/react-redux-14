import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBxJW5dxz_Nnv_TwhP83X3ZK9Pw6Is7TJw'

YTSearch({key :API_KEY, term: 'surfboards'}, function(data) {console.log(data)});

//Create a new component. This produces html
const App = () =>{
  return ( //SearchBar is jsx for a React functional component, wrapped in tags to instantiate it.
    <div>
      <SearchBar />
    </div> //Now that we have imported SearchBar, we can display it here
  )
};


//Take the generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
